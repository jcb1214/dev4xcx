// components/imageUpload/imageUpload.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tempFilePaths:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addImage:function(){
      var that = this;
      wx.chooseImage({
        success:res=>{
          that.setData({
            tempFilePaths: that.data.tempFilePaths.concat(res.tempFilePaths)
          })
        }
      })
    },
    showImage:function(e){
      var src = e.currentTarget.dataset.src;
      wx.previewImage({
        urls:[src]
      })
    },
    deleteImage:function(e){
      var index = e.currentTarget.dataset.index;
      var tempFilePaths = this.data.tempFilePaths;
      tempFilePaths.splice(index,1);
      this.setData({
        tempFilePaths: tempFilePaths
      })
    },
    getUrls:function(){
      return this.data.tempFilePaths
    }
  }
})
