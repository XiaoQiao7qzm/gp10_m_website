import positionListTpl from '../views/position_list.html';
import positionTpl from '../views/position.html';
import Router from '../router/index';

import ajax from '../models/fetch';

let currentPage = 1;
let positionList = [];

const gotoPage = (id) => {
  let router = new Router({ mode: 'hash' });
  router.push('/index/details?id=' + id);
}

const render = async () => {  //module.exports模块中 不要使用async 定义方法

  let result = await ajax.get('/api/listmore.json?pageNo=1&pageSize=15');
  let data = positionList = result.content.data.page.result;
  $('#main_scroll').html(positionTpl);
  let renderedPositionListTpl = template.render(positionListTpl, { data });
  $('#position-list').html(renderedPositionListTpl);

  // better-saroll 实例化
  let bScroll = new BScroll('#main_scroll', {
    // probeType: 2 //屏幕滑动时实时派发scroll事件
    probeType: 1, // 节流2
    click: true
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
  bScroll.on('scrollEnd', async function () {
    // 下拉刷新
    if (this.y >= -40 && this.y < 0) {
      this.scrollTo(0, -40);
      head.removeClass('up');
    } else if (this.y >= 0) {
      head.attr('src', '/images/ajax-loader.gif');

      //异步加载数据
      let result = await ajax.get('/api/listmore.json?pageNo=2&pageSize=2');
      let data = positionList = [...result.content.data.page.result, ...positionList];
      let renderedPositionListTpl = template.render(positionListTpl, { data });
      $('#position-list').html(renderedPositionListTpl);
      this.refresh(); //刷新bScroll高度
      this.scrollTo(0, -40); 
      head.attr('src', '/images/arrow.png');
      head.removeClass('up');
    }
    // 上拉加载处理
    let maxY = this.maxScrollY - this.y;
    if (maxY > -40 && maxY < 0) {
      this.scrollTo(0, this.maxScrollY + 40);
      foot.removeClass('down');
    } else if (maxY >= 0) {
      foot.attr('src', '/images/ajax-loader.gif');

      //异步加载数据
      let result = await ajax.get(`/api/listmore.json?pageNo=${++currentPage}&pageSize=2`);
      let data = positionList = [...positionList, ...result.content.data.page.result];
      let renderedPositionListTpl = template.render(positionListTpl, { data });
      $('#position-list').html(renderedPositionListTpl);
      this.refresh(); //刷新bScroll高度
      this.scrollTo(0, this.maxScrollY + 40); 
      foot.attr('src', '/images/arrow.png');
      foot.removeClass('down');
    }
  });

  $('#position-list').on('click', 'li', (e) => {
    gotoPage($(e.currentTarget).attr('data-positionid'));
  })
}

export default {
  render
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
