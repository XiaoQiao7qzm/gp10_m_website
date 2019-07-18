const path = require('path');
const { src, dest, series, parallel, watch } = require('gulp');

const webserver = require('gulp-webserver');
const webpackStream = require('webpack-stream');
const gulpSass = require('gulp-sass');
const proxy = require('http-proxy-middleware'); // webserver 代理数据
const del = require('del');

 //4.0.0以上版本  任务的回调一定要有返回值 返回值全部都是异步操作  return  或者 cb()
 
// 拷贝 index 文件到 dev 文件
function copyhtml() {
  return src('./*.html')
     .pipe( dest('./dev/') );
}
function copylibs() {
  return src('./src/libs/**/*')
     .pipe( dest('./dev/libs') );
}
function copyimages() {
  return src('./src/images/**/*')
     .pipe( dest('./dev/images') );
}
function copyicons() {
  return src('./src/icons/**/*')
     .pipe( dest('./dev/icons') );
}
// webserver服务
function web_server() {
  return src('./dev')
    .pipe(webserver({
      path: '/',
      livereload: true,
      middleware: [
        proxy('/api', {
          target: 'https://m.lagou.com',
          changeOrigin: true,  //不同的域名  需要配置成true
          pathRewrite: { //重定向  去掉/api
            '^/api': ''
          }
        }),
        proxy('/json', {
          target: 'http://localhost:9000',
          pathRewrite: {
            '^/json': ''
          }
        })
      ]
    }));
}
//编译js模块
function packjs() { // webpack 将 浏览器直接解析的require  commenjs规范语法  解析为浏览器可以解析的 commonjs语法 
                    //也能解析es6 模块化   （也能解析 async await Promise  但暂时不是所有浏览器可以解析的，只是表象，需要babel编译）
  return src('./src/**/*')
    .pipe(webpackStream({
      mode: 'development', // 模式  --开发环境下配webpack  也就就是这个模块编译完以后是不压缩的
      entry: {   //入口
        app: './src/app.js'
      },
      output: { // 出口
        filename: '[name].js', //[name] = app
        path: path.resolve(__dirname, './dev') // 绝对的物理路径
      },
      // ES6 -ES8 转换为ES5代码
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              // options: {
              //   presets: ['@babel/preset-env'],
              //   plugins: [['@babel/plugin-transform-runtime', {
              //     "helpers": false
              //   }]]
              // }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(dest('./dev/scripts'));
}
//编辑scss
function packCss() {
  return src('./src/styles/app.scss')
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(dest('./dev/styles'));
}

function clear(target) {
  return function () {
    return del(target);
  }
}

function watcher() {
  watch('./src/libs/**/*', series(clear('./dev/libs'), copylibs));
  watch('./src/images/**/*', series(clear('./dev/images'), copyimages));
  watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons));
  watch('./*.html', series(clear('./dev/*.html'), copyhtml));
  watch('./src/styles/**/*', series(packCss));
  watch(['./src/**/*', '!src/libs/**/*', '!src/styles/**/*', '!src/images/**/*', '!src/icons/**/*'], series(packjs));
}


exports.default = series(parallel(packCss, packjs, copylibs, copyimages, copyicons), copyhtml, web_server, watcher);