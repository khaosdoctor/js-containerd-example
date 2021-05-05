const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const Containerd = require('./Containerd.js')

const app = new Koa()
const router = new Router()
const ctr = new Containerd()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

router.get('/:namespace/images', async (ctx) => {
  const {namespace} = ctx.params
  const images = await ctr.listImages(namespace)
  ctx.body = images
})

router.get('/:namespace/containers', async (ctx) => {
  const {namespace} = ctx.params
  const containers = await ctr.listContainers(namespace)
  ctx.body = containers
})

router.get('/namespaces', async (ctx) => {
  ctx.body = await ctr.listNamespaces()
})

router.get('/:namespace/tasks', async (ctx) => {
  ctx.body = await ctr.listTasks(ctx.params.namespace)
})

router.post('/:namespace/images/:registry/:repository/:name', async (ctx) => {
  const {namespace, ...imageName} = ctx.params
  const result = await ctr.pull(`${imageName.registry}/${imageName.repository}/${imageName.name}`, namespace)
  ctx.status = 204
  if (!result) ctx.status = 500
})

router.post('/:namespace/containers/:name', async (ctx) => {
  const { namespace, name } = ctx.params
  const { image } = ctx.request.body
  const result = await ctr.createContainer(name, image, ctx.query, namespace)
  ctx.body = {
    image,
    status: 'created',
    name: result
  }
})

router.delete('/:namespace/containers/:name', async (ctx) => {
  const { namespace, name } = ctx.params
  await ctr.removeContainer(name, namespace)
  ctx.status = 204
})

router.post('/:namespace/tasks/:name', async (ctx) => {
  const { namespace, name } = ctx.params
  console.log(!!ctx.query.detach)
  await ctr.startTask(name, { detach: !!ctx.query.detach }, namespace)
})

router.delete('/:namespace/tasks/:name', async (ctx) => {
  const { namespace, name } = ctx.params
  await ctr.removeTask(name, namespace)
})

router.put('/:namespace/tasks/:name', async (ctx) => {
  const { namespace, name } = ctx.params
  await ctr.pauseTask(name, namespace)
})

app.listen(51052, () => console.log('listening'))
