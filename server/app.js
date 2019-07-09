import Koa from 'koa'
import routes from './routes'
import cors from 'koa-cors'

const app = new Koa()

// x-response-time
// 解决koa跨域
app.use(cors())

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.on('error', err => {
  console.warn('server error', err)
})

// routes
app.use(routes.routes(), routes.allowedMethods())

app.listen(8089, () => {
  console.log('🐘server已启动')
})
