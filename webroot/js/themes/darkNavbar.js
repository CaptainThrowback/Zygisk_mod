export function setDarkNav() {
  document.getElementById('nid_home').innerHTML 
    = '<img class="dimc" style="width: 24px; height: 24px" src="assets/home.svg">'
  document.getElementById('ni_home').innerHTML 
    = '<img style="width: 24px; height: 24px; background-color: var(--small-card);" src="assets/home.svg">'

  document.getElementById('nid_modules').innerHTML
    = '<img class="dimc" style="width: 24px; height: 24px" src="assets/module.svg">'
  document.getElementById('ni_modules').innerHTML
    = '<img style="width: 24px; height: 24px; background-color: var(--small-card);" src="assets/module.svg">'

  document.getElementById('nid_actions').innerHTML
    = '<img class="dimc" style="width: 24px; height: 24px" src="assets/action.svg">'
  document.getElementById('ni_actions').innerHTML
    = '<img style="width: 24px; height: 24px; background-color: var(--small-card);" src="assets/action.svg">'

  document.getElementById('nid_settings').innerHTML
    = '<img class="dimc" style="width: 24px; height: 24px" src="assets/settings.svg">'
  document.getElementById('ni_settings').innerHTML
    = '<img style="width: 24px; height: 24px; background-color: var(--small-card);" src="assets/settings.svg">'
  return
}