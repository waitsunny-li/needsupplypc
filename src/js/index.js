/*
 * @Author: liweilong
 * @Date: 2020-11-12 16:38:35
 */
class Index {
  constructor() {
    this.init()
  }

  init() {
    this.listenSwiperIndex()
    this.listenSwiperPublic()
  }

  // 监听轮播图
  listenSwiperIndex() {
    let mySwiper = new Swiper('.swiper_index', {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }

  // 监听网站公告
  listenSwiperPublic() {
    let mySwiper = new Swiper('.publick_swiper', {
      autoplay: true, //可选选项，自动滑动
      loop : true,
      direction : 'vertical',
    })
  }
}

new Index()