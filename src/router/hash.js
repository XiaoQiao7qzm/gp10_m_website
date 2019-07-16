export default {
  init: function () {
    window.addEventListener('load', this.hashRouter);
    window.addEventListener('hashchange', this.hashRouter);
  },
  hashRouter: function () {
    let hash = location.hash;
    switch (hash) {
      case '#/position':
        break;
      case '#/search':
        break;
      case '#/profile':
        break;
    }
  }
}