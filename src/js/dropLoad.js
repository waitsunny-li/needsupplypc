/*
 * @Author: liweilong
 * @Date: 2020-11-13 18:34:03
 */
/** 
 * 1、获取窗口高度
 * 2、获取container高度
 * 3、获取滚动距离scrollTop + 窗口距离 > container高度时触发加载更多
 */
class Dropload {
  constructor(options) {
    // 初始化位置
    // this._initDistance = 0
    // 窗口高度
    this._windowHeight = 0
    // container高度
    this._containerHeight = 0
    // 是否触底
    this._isScrollB = false

    // 距离底部多少距离触发
    this._distanceEnd = options.distanceEnd ? options.distanceEnd : 100
    // 触底时 触发
    this.callback = options.success ? options.success : () => {
      throw new Error('请添加触底时回调函数！')
    }

    // 初始化流程
    this.init()

    // 监听滚动
    this.listenWindowScroll()
    // 监听窗口改变
    this.listenResize()
  }

  init() {
    this._windowHeight = this.initWindoHeight()
    this._containerHeight = this.initContainerHeight()
  }

  // 初始化窗口高度
  initWindoHeight() {
    let wHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      wHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
      wHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    // console.log('浏览器窗口高度', wHeight)
    return wHeight;
  }

  // 初始化container高度
  initContainerHeight() {
    let container_el = document.querySelector('.container')
    let offsetH = 0
    try {
      offsetH = container_el.offsetHeight
    } catch (err) {
      throw new Error("请添加添加类为container的容器！")
    }
    // console.log('container高度', offsetH)
    return offsetH
  }

  // 重新计算window窗口宽度和高度
  refresh() {
    this.init()
    this._isScrollB = false
  }

  // 监听滚动条滚动
  listenWindowScroll() {
    let self = this;
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)

      if (scrollTop + self._windowHeight >= self._containerHeight - self._distanceEnd) {
        if (!self._isScrollB) {
          // 触底时 触发
          self.callback()
        }
        self._isScrollB = true
      }
    })
  }

  // 监听窗口大小改变时重新计算
  listenResize() {
    window.addEventListener('resize', () => {
      this.init()
    }) 
  }
}

