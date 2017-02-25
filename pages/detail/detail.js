// pages/detail/detail.js
Page({
  data:{
    list: [
      {
        user:{name:"阳光下的阴霾",pic:'../../pic/1.jpg'},
        date:"1月2日",
        ctn:"静静的顿河，伏尔加河的纤夫，乌克兰的工厂,西伯利亚的白桦林，俄罗斯广袤与荒凉的大地下生长着刚强与浪漫。",
        image:[],
        like:280,
        cmtCount:30,
      },
      {
        user:{name:"花开了吗",pic:"../../pic/3.jpg"},
        date:"12月11日",
        ctn:"一只柔韧的胖子",
        image:["../../pic/2.jpg",
        "../../pic/2.jpg"],
        like:284,
        cmtCount:28,
      }
    ]
  },
  toInvitation:function(){
    wx.navigateTo({
      url: '../invitation/invitation'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})