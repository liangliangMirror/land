const router = require('koa-router')()
const mysql = require('mysql')
const config = require('../myConfig/linkMysql')
var pool = mysql.createPool({
  host: config.HOST,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE
});
const { SuccessModel, ErrorModel } = require('../myConfig/reverseConfig')
router.prefix('/policy')
let query = function(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function (error, results, fields) {
          if (error) {
              throw error
          };
          resolve(results)
      });
    })
  }
router.post('/addPolicy',async function (ctx, next) {
    let {title,establishName,department,page,size='',} = ctx.request.body
    // let sql = `INSERT INTO policy(title,establish_name,department,active) VALUES("${title}","${establishName}","${department}",1);`
    // let data = await query(sql)
    console.log(size)
    ctx.body =  new SuccessModel({
        data: ctx.request.body
    })
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
