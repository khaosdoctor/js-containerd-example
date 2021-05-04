const util = require('util')
const { exec, spawn } = require('child_process')
const { acceptsEncodings } = require('koa/lib/request')
const execAsync = util.promisify(exec)

class Containerd {

  #ACTIONS = {
    PAUSE: 'pause',
    RESUME: 'resume',
    STOP: 'kill'
  }

  constructor () {
    this.#ACTIONS = Object.freeze(this.#ACTIONS)
  }

  async listNamespaces () {
    const { stdout, stderr } = await execAsync('ctr ns ls -q')
    if (stderr) throw new Error(stderr)
    return stdout.split('\n').slice(0, -1)
  }

  async listImages (namespace="default") {
    const { stdout, stderr } = await execAsync(`ctr -n ${namespace} i ls -q`)
    if (stderr) throw new Error(stderr)

    return stdout.split('\n').slice(0, -1).map((image) => {
      const [registry, repository, nameTag] = image.split('/')
      const [name, tag] = nameTag.split(':')
      return {
        registry,
        repository,
        name,
        tag,
        fullName: image
      }
    })
  }

  async pull (imageName, namespace='default') {
    const { stderr } = await execAsync(`ctr -n ${namespace} i pull ${imageName}`)
    if (stderr) throw new Error(stderr)
    return true
  }

  async createContainer (id, imageName, opts={}, namespace='default') {
    const commandOptions = Object.keys(opts).map((optName) => {
      if (!opts[optName]) return
      if (typeof opts[optName] === 'boolean') return `--${optName}`
      return `--${optName}="${opts[optName]}"`
    })

    const {stderr} = await execAsync(`sudo ctr -n ${namespace} c create ${commandOptions.join(' ')} ${imageName} ${id}`)
    if (stderr) throw new Error(stderr)
    return
  }

  async listContainers (namespace='default') {
    const {stdout, stderr} = execAsync(`ctr -n ${namespace} c ls -q`)
    if (stderr) throw new Error(stderr)
    return stdout.split('\n').slice(0,-1)
  }

  async listTasks (namespace='default') {
    const {stdout, stderr} = execAsync(`ctr -n ${namespace} task ls -q`)
    if (stderr) throw new Error(stderr)
    return stdout.split('\n').slice(0,-1)

  }

  async startTask (id, opt={detach: true}, namespace='default') {
    if (opt.detach) {
      const {stderr} = execAsync(`sudo ctr -n ${namespace} task start -d ${id}`)
      if (stderr) throw new Error(stderr)
      return id
    }

    const task = spawn('sudo', ['ctr', '-n', namespace, 'task', 'start', id])

    task.stdout.on('data', (data) => {
      process.stdout.write(`Task ${id}@${new Date().toISOString()} => ${data}`)
    })

    task.stderr.on('data', (data) => {
      process.stderr.write(`Task ${id} errored => ${data}`)
      task.kill()
    })

    task.on('close', (code) => {
      process.stdout.write(`Task ${id} exited with code ${code}`)
    })
  }

  async stopTask (id, namespace='default') {
    return this.#taskAction(id, namespace, this.#ACTIONS.STOP)
  }

  async pauseTask (id, namespace='default') {
    return this.#taskAction(id, namespace, this.#ACTIONS.PAUSE)
  }

  async resumeTask (id, namespace='default') {
    return this.#taskAction(id, namespace, this.#ACTIONS.RESUME)
  }

  async #taskAction (id, namespace, action) {
    if (!action in this.#ACTIONS) throw new Error('Action not defined')
    const {stderr} = await execAsync(`sudo ctr -n ${namespace} task ${this.#ACTIONS[action]} ${id}`)
    if (stderr) throw new Error(stderr)
    return id
  }
}

module.exports = Containerd
