const indexTpl = require('../views/index.html');

module.exports = {
  renderList: () => {
    $.ajax({
      url: '/api/listmore.json?pageNo=1&pageSize=15',  //后端有接口的场景
      type: 'GET', // 请求json-server  get为获取  post为添加
      success: (result) => {
        let data = result.content.data.page.result;
        const renderedIndexTpl = template.render(indexTpl, {data});
        $('#app').html(renderedIndexTpl);

        // better-saroll 实例化
        new BScroll('main', {
          
        })
      }
    });
  }
}

/* 
  $.camelCase
  $.contains
  $.each
  $.extend
  $.grep
  $.noop
  $.os.phone
*/