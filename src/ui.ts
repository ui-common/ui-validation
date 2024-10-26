export function trim(ctrl: HTMLInputElement): void {
  if (!ctrl) {
    return
  }
  const str = ctrl.value
  const str2 = trimText(ctrl.value)
  if (str !== str2) {
    ctrl.value = str2
  }
}

export function element(form: HTMLFormElement, childName: string): HTMLInputElement | null {
  const len = form.length
  for (let i = 0; i < len; i++) {
    const f = form[i] as HTMLInputElement
    if (f.name === childName) {
      return f
    }
  }
  return null
}

export function getParentByNodeNameOrDataField(ctrl: HTMLElement, nodeName: string): HTMLElement | null {
  if (!ctrl) {
    return null
  }
  let tmp = ctrl
  while (true) {
    const parent = tmp.parentElement
    if (!parent) {
      return null
    }
    if (parent.nodeName === nodeName || parent.getAttribute("data-field") != null) {
      return parent
    } else {
      tmp = parent
    }
    if (tmp.nodeName === "BODY") {
      return null
    }
  }
}

function trimText(s: string): string {
  if (!s) {
    return s
  }
  s = s.trim()
  let i = s.length - 1
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
