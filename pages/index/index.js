//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   list: [{
      pic: '../../pic/1.jpg',
      name:"阳光下的阴霾",
      date:"1月2日",
      title:"一起走吧，去旅行",
      ctn:"静静的顿河，伏尔加河的纤夫，乌克兰的工厂,西伯利亚的白桦林，俄罗斯广袤与荒凉的大地下生长着刚强与浪漫。",
      like:280,
      cmt:30
    },
    {
      pic: '../../pic/1.jpg',
      name:"阳光下的阴霾",
      date:"1月2日",
      title:"一起走吧，去旅行",
      ctn:"静静的顿河，伏尔加河的纤夫，乌克兰的工厂,西伯利亚的白桦林，俄罗斯广袤与荒凉的大地下生长着刚强与浪漫。",
      like:280,
      cmt:30
    }
    ]
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
