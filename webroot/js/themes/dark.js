import { setDarkNav } from "./darkNavbar.js"

const rootCss = document.querySelector(':root')

/* INFO: Changes the icons to match the theme */
const close_icons = document.getElementsByClassName('close_icon')
const expand_icons = document.getElementsByClassName('expander')
const copy_button = document.getElementById('errorh_copy')


export function setDark() {
  rootCss.style.setProperty('--background', '#181c20')
  rootCss.style.setProperty('--font', '#ffffff')
  rootCss.style.setProperty('--desc', '#c9c9c9')
  rootCss.style.setProperty('--spliter', '#283136')
  rootCss.style.setProperty('--dim', '#1d2327')
  rootCss.style.setProperty('--icon', '#48565e')
  rootCss.style.setProperty('--icon-bc', '#313a3f')
  rootCss.style.setProperty('--button', 'var(--background)')

  setData('dark')

  for (const close_icon of close_icons) {
    close_icon.innerHTML = '<img src="assets/close.svg">'
  }

  for (const expand_icon of expand_icons) {
    expand_icon.innerHTML = '<img class="dimc" src="assets/expand.svg">'
  }

  copy_button.innerHTML = '<img src="assets/content.svg">'
  setDarkNav()
}

function setData(mode) {
  localStorage.setItem('/system/theme', mode)
  return mode
}