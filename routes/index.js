const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log(2222)
  await ctx.render('index', {
    title: 'Hello Koa 2!heheheheheheh'
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

module.exports = router
