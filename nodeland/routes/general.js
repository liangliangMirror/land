const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../myConfig/reverseConfig')
const getUserTNMenuData = require('../mock/getUserTNMenu.json')
router.prefix('/general')

router.get('/getUserTNMenu', function (ctx, next) {
  ctx.body =  new SuccessModel({
    data: getUserTNMenuData
})
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
