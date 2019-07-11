const path = require('path');
const { src, dest, series, parallel, watch } = require('gulp');

const webpackStream = require('webpack-stream');
const gulpSass = require('gulp-sass');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const cleanCSS = require('gulp-clean-css');

 //4.0.0以上版本  任务的回调一定要有返回值 返回值全部都是异步操作  return  或者 cb()
 
// 拷贝 index 文件到 dev 文件
function copyhtml() {
  return src('./*.html')
     .pipe( dest('./dist/') );
}
function copylibs() {
  return src('./src/libs/**/*')
     .pipe( dest('./dist/libs') );
}
function copyimages() {
  return src('./src/images/**/*')
     .pipe( dest('./dist/images') );
}
function copyicons() {
  return src('./src/icons/**/*')
     .pipe( dest('./dist/icons') );
}

//编译js模块
function packjs() { // webpack 将 浏览器直接解析的require  commenjs规范语法  解析为浏览器可以解析的 commonjs语法 
                    //也能解析es6 模块化   （也能解析 async await Promise  但暂时不是所有浏览器可以解析的，只是表象，需要babel编译）
  return src('./src/**/*')
    .pipe(webpackStream({
      mode: 'production', // 模式  --开发环境下配webpack  也就就是这个模块编译完以后是不压缩的
      entry: {   //入口
        app: './src/app.js'
      },
      output: { // 出口
        filename: '[name].js', //[name] = app
        path: path.resolve(__dirname, './dist') // 绝对的物理路径
      },
      // ES6 -ES8 转换为ES5代码
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(rev()) //生成hash版本号
    .pipe(dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(dest('./rev/scripts'))
}
//编辑scss
function packCss() {
  return src('./src/styles/app.scss')
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rev())
  .pipe(dest('./dist/styles'))
  .pipe(rev.manifest())
  .pipe(dest('./rev/styles'))
}

function revColl() {
  return src(['./rev/**/*.json', './dist/*.html'])
    .pipe(revCollector())
    .pipe(dest('./dist'))
}

exports.default = series(parallel(packCss, packjs, copylibs, copyimages, copyicons), copyhtml, revColl);