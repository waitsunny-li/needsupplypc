/*
 * @Author: liweilong
 * @Date: 2020-11-13 09:30:48
 */
class Common {
  constructor() {
    this.mySwiper = null
    this.currentActiveIndex = 0
    this.proUl = $('.profileulli')
    this.proLi = $('.profileulli').find('li')

    if (window.Swiper) {
      this.BuyClick()
      this.UsedClick()
      this.listanBaner()
    }
    if (this.proUl.length) {
      this.listenProfileUlLi()
    }
    this.listenBackTop()
    this.topConfig()
  }

  // 登录注册
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

  // 顶部进度的配置
  topConfig() {
    if (window.topbar) {
      //  顶部加载进度条
      topbar.config({
        barThickness: 5,
        barColors: {
          '0': '#4cd964',
          '.2': '#5ac8fa',
          '.4': '#007aff',
          '.6': '#34aadc',
          '.8': '#5856d6',
          '1.0': '#ff2d55'
        },
      })
    }
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

  // 回到顶部
  createBackTop() {
    let divElement = document.createElement('div')
    let svgContent = `<svg t="1605274279099" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="2853" width="40" height="40">
    <path
      d="M752.736 431.063C757.159 140.575 520.41 8.97 504.518 0.41V0l-0.45 0.205-0.41-0.205v0.41c-15.934 8.56-252.723 140.165-248.259 430.653-48.21 31.457-98.713 87.368-90.685 184.074 8.028 96.666 101.007 160.768 136.601 157.287 35.595-3.482 25.232-30.31 25.232-30.31l12.206-50.095s52.47 80.569 69.304 80.528c15.114-1.23 87-0.123 95.6 0h0.82c8.602-0.123 80.486-1.23 95.6 0 16.794 0 69.305-80.528 69.305-80.528l12.165 50.094s-10.322 26.83 25.272 30.31c35.595 3.482 128.574-60.62 136.602-157.286 8.028-96.665-42.475-152.617-90.685-184.074z m-248.669-4.26c-6.758-0.123-94.781-3.359-102.891-107.192 2.95-98.714 95.97-107.438 102.891-107.93 6.964 0.492 99.943 9.216 102.892 107.93-8.11 103.833-96.174 107.07-102.892 107.192z m-52.019 500.531c0 11.838-9.42 21.382-21.012 21.382a21.217 21.217 0 0 1-21.054-21.34V821.74c0-11.797 9.421-21.382 21.054-21.382 11.591 0 21.012 9.585 21.012 21.382v105.635z m77.333 57.222a21.504 21.504 0 0 1-21.34 21.626 21.504 21.504 0 0 1-21.34-21.626V827.474c0-11.96 9.543-21.668 21.299-21.668 11.796 0 21.38 9.708 21.38 21.668v157.082z m71.147-82.043c0 11.796-9.42 21.34-21.053 21.34a21.217 21.217 0 0 1-21.013-21.34v-75.367c0-11.755 9.421-21.299 21.013-21.299 11.632 0 21.053 9.544 21.053 21.3v75.366z"
      fill="#319595" p-id="2854"></path>
  </svg>`
    divElement.setAttribute('class', 'back_top')
    divElement.style.cssText = `position: fixed;
    right: 40px;
    bottom: -60px;
    cursor: pointer;
    transition: all 1s;
  `
    divElement.innerHTML = svgContent
    document.body.appendChild(divElement)
  }

  // 监听显示点击顶部按钮
  listenBackTop() {
    let self = this
    let wh = $(window).height()
    self.createBackTop()
    $(document).scroll(function () {
      let scroH = $(document).scrollTop(); //滚动高度
      if (scroH > 160) {
        $('.display_none_nav').css({
          'top': '0'
        })
      } else {
        $('.display_none_nav').css({
          'top': '-100px'
        })
      }

      if (scroH >= 700) {
        $('.back_top').css({
          'bottom': '170px'
        })

      } else {
        $('.back_top').css({
          'bottom': `-60px`
        })
      }
    });

    // 点击回到顶部
    $('.back_top').click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 500)
    })
  }

  // 个人主页等界面左边选择导航
  listenProfileUlLi() {
    let self = this
    self.currentActiveIndex = self.returnLiIndex()
    console.log(self.currentActiveIndex);

    // 
    self.proLi.hover(function () {
      self.proLi.removeClass('active')
      $(this).addClass('active')
    }, function () {
      self.proLi.removeClass('active')
      self.proLi.eq(self.currentActiveIndex).addClass('active')
    })
  }

  // 查看初始化的包含active类的li标签(返回index)
  returnLiIndex() {
    let liLen = this.proLi.length
    for (let i = 0; i < liLen; i++) {
      console.log();
      if (this.proLi.eq(i).attr('class').indexOf('active') != '-1') {
        return i
      }
    }
  }
}

new Common()