export default {
  get: (url) => {
    return $.ajax({
      url: url,  //后端有接口的场景
      type: 'GET', // 请求json-server时  get为获取  post为添加
      success: (result) => {
        return result;
      }
    });
  }
}