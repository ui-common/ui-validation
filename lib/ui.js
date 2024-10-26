"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
function trim(ctrl) {
  if (!ctrl) {
    return
  }
  var str = ctrl.value
  var str2 = trimText(ctrl.value)
  if (str !== str2) {
    ctrl.value = str2
  }
}
exports.trim = trim
function element(form, childName) {
  var len = form.length
  for (var i = 0; i < len; i++) {
    var f = form[i]
    if (f.name === childName) {
      return f
    }
  }
  return null
}
exports.element = element
function getParentByNodeNameOrDataField(ctrl, nodeName) {
  if (!ctrl) {
    return null
  }
  var tmp = ctrl
  while (true) {
    var parent_1 = tmp.parentElement
    if (!parent_1) {
      return null
    }
    if (parent_1.nodeName === nodeName || parent_1.getAttribute("data-field") != null) {
      return parent_1
    } else {
      tmp = parent_1
    }
    if (tmp.nodeName === "BODY") {
      return null
    }
  }
}
exports.getParentByNodeNameOrDataField = getParentByNodeNameOrDataField
function trimText(s) {
  if (!s) {
    return s
  }
  s = s.trim()
  var i = s.length - 1
  while (i >= 0 && (s.charAt(i) === " " || s.charAt(i) === "\t" || s.charAt(i) === "\r" || s.charAt(i) === "\n")) {
    i--
  }
  s = s.substring(0, i + 1)
  i = 0
  while (i < s.length && (s.charAt(i) === " " || s.charAt(i) === "\t" || s.charAt(i) === "\r" || s.charAt(i) === "\n")) {
    i++
  }
  return s.substring(i)
}
