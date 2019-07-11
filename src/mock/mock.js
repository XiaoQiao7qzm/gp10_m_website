const list = require('./listmore.json');
module.exports = function () {
  return {
    list
  }
}

/* 
"mock": "json-server ./src/mock/mock.js -r ./src/mock/router.json -p 9000 -w"  配置路由  只能get请求
*/
/* 
    "mock": "json-server ./src/mock/listmore.json -p 9000 -w"
get post都可以请求  还可以post添加数据
*/

/* 
  软件 insomnia
*/