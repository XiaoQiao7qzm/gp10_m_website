import index from '../controllers/index';
import position from '../controllers/position';
import search from '../controllers/search';
import profile from '../controllers/profile';

export default class Router {
  constructor(obj) {
    this.mode = obj.mode;
    //this.mode = 'history'
    //路由配置
    this.routes = {
      '/position': position,
      '/search': search,
      '/profile': profile
    };
    this.init();
  }
  init() {
    index.render();
    if(this.mode === 'hash') {
      window.addEventListener('load', this.hashRefresh.bind(this), false);
      window.addEventListener('hashchange', this.hashRefresh.bind(this), false);      
    } else {
      this.bindLink();
      window.addEventListener('load', this.loadView.bind(this, location.pathname), false);
      window.addEventListener('popstate', this.historyRefresh.bind(this), false);
    }
  }
  /* 
    history模式拦截 a链接
  */
  bindLink() {
    $('nav a').on('click', this.handleLink.bind(this));
  }
  /* 
    history 处理a链接 @param e 当前Event
  */
  handleLink(e) {
    e.preventDefault();
    //获取点击a的 href值
    let href = $(e.target).attr('href');
    if(href.slice(0, 1) !== '#') {
      window.location.href = href;
    } else {
      let path = href.slice(1);
      history.pushState({ path }, null, path);
      this.loadView(path.split('?')[0]);
    }
  }
  /* 
    hash路由刷新执行 @param {object} e
  */
  hashRefresh(e) {
    if(e.newURL) {
      let newURL = e.newURL.split('#')[1];
      let oldURL = e.oldURL.split('#')[1];
      /* console.dir({
        oldURL, newURL
      }); */
    }
    let currentURL = location.hash.slice(1).split('?')[0] || '/position';
    this.loadView(currentURL);
  }
  /* 
    history模式刷新页面 @param e 当前对象Event
  */
  historyRefresh(e) {
    let state = e.state || {};
    if(state.path) {
      this.loadView(state.path.split('?')[0]);
    }
  }
  /* 
    加载页面 @param {string} currentURL
  */
  loadView(currentURL) {
    if(this.mode === 'history' && currentURL === '/') {
      history.replaceState({ path: '/' }, null, '/');
      currentURL = '/position';
    }
    //多级链接拆分为数组， 遍历依次加载
    this.currentURLlist = currentURL.slice(1).split('/');
    this.url = "";
    this.currentURLlist.forEach((item, index) => {
      this.url = '/' + item;
      this.controllerName = this.routes[this.url];
      //404页面处理
      if(!this.controllerName) {
        this.errorPage();
        return false;
      }
      //对于嵌套路由的处理
      if(this.oldURL && this.oldURL[index] === this.currentURLlist[index]) {
        this.handleSubRouter(item, index);
      } else {
        this.controller(this.controllerName);
      }
    })
  }
  /* 
    处理嵌套路由 
    @param {string} item 链接list中当前项
    @param {number} index 链接list中当前索引
  */
  handleSubRouter(item, index) {

  }
  /* 
    404页面处理
  */
  errorPage() {
    if(this.mode === 'hash') {
      location.href = '#/error';
    } else {
      history.replaceState({ path: '/error' }, null, '/error');
      this.loadView('/error');
    }
  }
  /* 
    组件控制器 @param {string} name
  */
  controller(controllerName) {
    controllerName.render();
    this.navActive(this.url);
  }
  /* 
    手动跳转路由 @param {string} path
  */
  push(path) {

  }
  /* 
    绑定组件对象中events 事件
    @desc 将组件对象中this通过call绑定
    ！ 仅支持绑定当前组件下的DOM事件
  */
  bindEvents() {

  }
  /* 
    导航激活显示
    @param item 当前router对象
  */
  navActive(item) {
    $(`nav a[href='#${item}']`).closest('li').addClass('active').siblings().removeClass('active');
  }
}