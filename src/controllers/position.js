const indexTpl = require('../views/index.html');

module.exports = {
  loadData: () => {
    return $.ajax({
      url: '/api/listmore.json?pageNo=1&pageSize=15',  //后端有接口的场景
      type: 'GET', // 请求json-server  get为获取  post为添加
      success: (result) => {
        return result;
      }
    });
  },
  renderList: async () => {
    console.log(this);
    let result = await this.loadData();
    let data = result.content.data.page.result;
    const renderedIndexTpl = template.render(indexTpl, { data });
    $('#app').html(renderedIndexTpl);

    // better-saroll 实例化
    let bScroll = new BScroll('#main_scroll', {
      // probeType: 2 //屏幕滑动时实时派发scroll事件
      probeType: 1 // 节流2
    });
    // 初始化位置
    bScroll.scrollTo(0, -40);

    let head = $('.head img');
    let topImgHasClass = head.hasClass('up');
    let foot = $('.foot img');
    let bottomImgHasClass = foot.hasClass('down');

    // 绑定滑动事件
    bScroll.on('scroll', function () {

      let y = this.y;
      let maxY = this.maxScrollY - y;

      //下拉， 
      if (y >= 0) {
        !topImgHasClass && head.addClass('up');
        return;
      }
      //上拉
      if (maxY >= 0) {
        !bottomImgHasClass && foot.addClass('down');
        return;
      }
    });

    //绑定手指松开触发的事件
    bScroll.on('scrollEnd', function () {
      // 下拉刷新
      if (this.y >= -40 && this.y < 0) {
        this.scrollTo(0, -40);
        head.removeClass('up');
      } else if (this.y >= 0) {
        head.attr('src', '/images/ajax-loader.gif');

        //异步加载数据
      }
      // 下拉加载处理
      let maxY = this.maxScrollY - this.y;
      if (maxY > -40 && maxY < 0) {
        this.scrollTo(0, this.maxScrollY + 40);
        foot.removeClass('down');
      } else if (maxY >= 0) {
        foot.attr('src', '/images/ajax-loader.gif');
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