// export const name = 'qiaozhiming';

module.exports = {
  name: 'qiaozhiming',
  getName: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('sunyanhua');
      }, 1000);
    })
  }
}