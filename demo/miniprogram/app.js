console.log("*******************************************************")
// app.js
// 小程序的js有一些额外的成员
// App 方法，用于定义应用程序实例对象
// Page 方法，用于定义页面对象
// getApp 方法，用来获取全局应用程序对象
// getCurrentPages 方法，用来获取当前页面的调用栈(数组，最后一个就是当前页面)
// wx 对象，用来提供核心API的

//3.小程序的js是支持CommonJS规范的
const foo = require('./utils/foo')
foo.say("world")
console.log("*******************************************************")
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    this.globalData = {};
  }
});
