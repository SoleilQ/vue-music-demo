import Router from 'koa-router'
import discList from './discList'

const router = Router()

router.use(discList.routes(), discList.allowedMethods())
export default router
