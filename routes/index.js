const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log(2222)
  await ctx.render('index', {
    title: '卧槽周周牛B啊'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/koa', async (ctx, next) => {
  ctx.body = {
    title: 'ddn'
  }
})
router.get('/koa/heheda', async (ctx, next) => {
  ctx.body = {
    title: 'heheda'
  }
})

module.exports = router
