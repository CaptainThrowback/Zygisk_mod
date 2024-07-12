export function translateActionPage(new_translations) {
  /* INFO: action card */
  document.getElementById('panel_actions_header').innerHTML 
    = new_translations.page.action.header

  /* INFO: daemon32 small card */
  if (document.getElementById('daemon32_stop_button')) { /* INFO: Not all devices have 32-bit support */
    document.getElementById('daemon32_stop_button').innerHTML 
      = new_translations.page.action.daemonButton.stop
    document.getElementById('daemon32_start_button').innerHTML
      = new_translations.page.action.daemonButton.start
    document.getElementById('daemon32_exit_button').innerHTML 
      = new_translations.page.action.daemonButton.exit
  }

  /* INFO: daemon64 small card */
  if (document.getElementById('daemon64_stop_button')) { /* INFO: Not all devices have 64-bit support */
    document.getElementById('daemon64_stop_button').innerHTML 
      = new_translations.page.action.daemonButton.stop
    document.getElementById('daemon64_start_button').innerHTML 
      = new_translations.page.action.daemonButton.start
    document.getElementById('daemon64_exit_button').innerHTML 
      = new_translations.page.action.daemonButton.exit
  }
}