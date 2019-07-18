export default {
  init: function () {
    window.addEventListener('load', this.hashRouter);
    window.addEventListener('hashchange', this.hashRouter);
  },
  hashRouter: function () {
    let hash = location.hash || '#/position';
    switch (hash) {
      case '#/position':
        $('main').html('position');
        break;
      case '#/search':
          $('main').html('search');
        break;
      case '#/profile':
          $('main').html('profile');
        break;
    }
    $(`nav a[href='${hash}']`).closest('li').addClass('active').siblings().removeClass('active');
  }
}
/* 
  hash路由原理 格式 # + /? + 字符串
    当路由切换后 页面不会跳转 而是通过一个hashchange事件 去获取当前的location.hash值 最后跟据不同hash值 做相应的dom渲染操作  这也就是SPA（单页面应用）
  history路由
    方法 pushState({id: 2}, 'search', '/search.html') 添加路由 并改变地址栏地址  但是页面不跳转
    替换路由方法 replaceState({id: 5}, 'position', '/position.html') 替换当前地址栏的路由 为此/position.html
    popState事件 仅仅调用 pushState 和 replaceState 并不会触发该事件 只有用户点击浏览器前进或者后退按钮 或使用 
    History.back() .forward() .go(-1) 才会触发

*/