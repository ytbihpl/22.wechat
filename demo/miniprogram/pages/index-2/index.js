Page({
  data:{
    message:'initial'
  },
  inputHandle:function(e){
    this.setData({
      message:e.detail.value
    })
  }
});
