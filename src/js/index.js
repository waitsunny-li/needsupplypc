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
    this.listenFwdBtn()
  }

  // 监听点击忘记密码
  listenFwdBtn() {
    // 显示
    $('.fwd_btn').click(function() {
      $('.find_passwd').fadeIn()
    })

    // 隐藏
    $('.back_wrap').click(function() {
      $('.find_passwd').fadeOut()
    })
  }

  // 监听轮播图
  listenSwiperIndex() {
    let mySwiper = new Swiper('.swiper_index', {
      autoplay: true, //可选选项，自动滑动
      loop : true,
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