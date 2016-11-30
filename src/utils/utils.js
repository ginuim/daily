// 生成字母 + 数字的随机串
function randomString (len) {
  len = len || 32
  var $chars = 'ABCDEFHIJKMNPRSTWXYZabcdefhijkmnprstwxyz0123456789'
  var maxPos = $chars.length
  var pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

// 获取滚动条当前的位置
function getScrollTop ($elem) {
  if (typeof $elem === 'object') {
    return $elem.scrollTop
  } else {
    var scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  }
}

// 获取滚动条当前的位置
function setScrollTop ($elem, pos) {
  if (typeof $elem === 'object') {
    $elem.scrollTop = pos
  } else {
    if (document.documentElement && document.documentElement.scrollTop) {
      document.documentElement.scrollTop = pos
    } else if (document.body) {
      document.body.scrollTop = pos
    }
  }
}

// 获取当前可视范围的高度
function getClientHeight ($elem) {
  if (typeof $elem === 'object') {
    return $elem.clientHeight
  } else {
    var clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }
}

// 获取元素或文档完整的高度
function getScrollHeight ($elem) {
  if (typeof $elem === 'object') {
    return $elem.scrollHeight
  } else {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }
}

function scrollToBottom ($elem) {
  setTimeout(function () {
    if (getClientHeight($elem) < getScrollHeight($elem)) {
      $elem.scrollTop = getScrollHeight($elem) - getClientHeight($elem)
    }
  }, 500)
}

export default {
  randomString,
  getScrollTop,
  setScrollTop,
  getClientHeight,
  getScrollHeight,
  scrollToBottom
}
