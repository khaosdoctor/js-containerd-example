const Koa = require('koa')
const Router = require('@koa/router')
const Containerd = require('./containerdClient.js')

const app = new Koa()
const router = new Router()
const ctr = new Containerd()

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


app.listen(3000, () => console.log('listening'))
