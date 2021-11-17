Page({
  buttonTapHandle:function(e){
    console.log(123)
    //console.dir()将一个对象以树状形式打印到控制台
    console.dir(e)

  },
  innerHandle:function(){
    console.log('inner')
  },
  outterHandle:function(){
    console.log('outter')
  },
  tap2Handle:function(e){
    console.log(e.target.dataset)
  }
});
