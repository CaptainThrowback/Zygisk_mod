import { setDark } from "./themes/dark.js"
import { setLight } from "./themes/light.js"

const button = document.getElementById('theme_switcher')

let sys_theme = localStorage.getItem('/system/theme')
if (!sys_theme) sys_theme = setData('dark')

if (sys_theme === 'light') {
  button.setAttribute('checked', '')
  setLight()
}

button.addEventListener('click', () => {
  button.checked 
    ? setLight()
    : setDark()
})

function setData(mode) {
  localStorage.setItem('/system/theme', mode)
  return mode
}