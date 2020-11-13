/*
 * @Author: liweilong
 * @Date: 2020-11-13 09:30:48
 */
class Common {
  constructor() {
    this.mySwiper = null

    this.BuyClick()
    this.UsedClick()
    this.listanBaner()
  }

  listanBaner() {
    this.mySwiper = new Swiper('.sign_login_swiper', {
      autoHeight: true, //高度随内容变化
      initialSlide: 1,
      on: {
        slideChange: function () {
          if (this.activeIndex == 0) {
            // 消除账号登录效果
            $('.used_wrap').removeClass("text_active bg_active2")
            // 激活效果
            $('.buy_wrap').addClass("text_active bg_active1")
          } else {
            // 消除账号登录效果
            $('.buy_wrap').removeClass("text_active bg_active1")
            // 激活效果
            $('.used_wrap').addClass("text_active bg_active2")
          }
        }
      }
    })
  }

  // 定义点击注册账号函数
  BuyClick() {
    let self = this
    $('.buy_wrap').click(function () {
      // 消除账号登录效果
      $('.used_wrap').removeClass("text_active bg_active2")
      // 激活效果
      $(this).addClass("text_active bg_active1")
      // 转化为注册账号表
      self.mySwiper.slidePrev()
    })
  }

  // 定义账号登录
  UsedClick() {
    let self = this
    $('.used_wrap').click(function () {
      // 消除账号登录效果
      $('.buy_wrap').removeClass("text_active bg_active1")
      $(this).addClass("text_active bg_active2")
      self.mySwiper.slideNext()
    })
  }

}

new Common()