// pages/infoShare/infoShare.js
var top10 = [
    {text: '班车时间表', id: 0, goodNo: 1198},
    {text: '食堂菜单', id: 1, goodNo: 1156},
    {text: '通讯录', id: 2, goodNo: 1124},
    {text: '测试环境IP', id: 3, goodNo: 998},
    {text: '班车时间表', id: 4, goodNo: 798},
    {text: '食堂菜单', id: 5, goodNo: 656},
    {text: '通讯录', id: 6, goodNo: 624},
    {text: '测试环境IP', id: 7, goodNo: 598},
    {text: '班车时间表', id: 8, goodNo: 455},
    {text: '食堂菜单', id: 9, goodNo: 156},
]
var dataList = [
    {text: '班车时间表', id: 0, goodNo: 1198},
    {text: '食堂菜单', id: 1, goodNo: 1156},
    {text: '通讯录', id: 2, goodNo: 1124},
    {text: '测试环境IP', id: 3, goodNo: 998},
    {text: '班车时间表', id: 4, goodNo: 798},
]
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchInput: '',
        dataList: [],
        showTop10: true
    },

    complete: function (e) {
        this.setData({
            searchInput: e.detail.value
        })
    },

    completeAndSearch: function (e) {
        this.setData({
            searchInput: e.detail.value,
        }, this.search)
    },

    search: function () {
        this.setData({
            dataList: dataList,
            showTop10: false
        })
    },
    showDetail: function (e) {
        var index = e.currentTarget.dataset.index;
        var info = this.data.dataList[index];
        wx.navigateTo({
            url: '/pages/infoDetail/infoDetail?text=' + info.text
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({
            dataList: top10,
            showTop10: true
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})