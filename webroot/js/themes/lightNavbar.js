import { light_action_icon, light_home_icon, light_module_icon, light_settings_icon } from "./icon.js"

export function setLightNav() {
  document.getElementById('nid_home').innerHTML = light_home_icon()
  document.getElementById('ni_home').innerHTML = light_home_icon(true)

  document.getElementById('nid_modules').innerHTML = light_module_icon()
  document.getElementById('ni_modules').innerHTML = light_module_icon(true)

  document.getElementById('nid_actions').innerHTML = light_action_icon()
  document.getElementById('ni_actions').innerHTML = light_action_icon(true)

  document.getElementById('nid_settings').innerHTML = light_settings_icon()
  document.getElementById('ni_settings').innerHTML = light_settings_icon(true)
  return
}