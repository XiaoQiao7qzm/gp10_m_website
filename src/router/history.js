export default {
  init: function () {
    let self = this;
    $('nav a').on('click', function (e) {
      e.preventDefault();
      let path = $(this).attr('href');
      history.pushState({ path }, null, path);
      self.historyRouter();
    })
    window.addEventListener('popstate', this.historyRouter);
    window.addEventListener('load', this.historyRouter);
  },
  historyRouter: function () {
    console.log(123);
    let state = history.state || {path: '/position'}
    switch (state.path) {
      case '/position':
        $('main').html('position');
        break;
      case '/search':
        $('main').html('search');
        break;
      case '/profile':
        $('main').html('profile');
        break;
    }
    $(`nav a[href='${state.path}']`).closest('li').addClass('active').siblings().removeClass('active');
  }
}