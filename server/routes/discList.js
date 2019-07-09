import Router from 'koa-router'
import axios from 'axios'
import { getDiscList } from './baseUrl'

const router = Router()

router.get('/getDiscList', async (ctx, next) => {
  const params = ctx.query
  let response = await axios.get(getDiscList, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: params
  })
  ctx.body = response.data
})

export default router
