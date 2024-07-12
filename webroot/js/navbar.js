setData('home')
document.getElementById(`ni_home`).style.display = 'flex'
document.getElementById(`nid_home`).style.display = 'none'
document.getElementById(`panel_home`).style.display = 'block'

document.querySelectorAll("[name=navbutton]").forEach((element) => {
  element.addEventListener('click', (e) => {
    const value = e.target.value
    let previous = 
      !localStorage.getItem('/cache/navbar/previous')
        ? setData('home')
        : localStorage.getItem('/cache/navbar/previous')
    if (previous === value) return

    /* INFO: Disable icon on old state */
    const pre_input = document.getElementById(`n_${previous}`)
    const pre_icon = document.getElementById(`ni_${previous}`)
    const pre_icon_disabled = document.getElementById(`nid_${previous}`)

    document.getElementById(`panel_${previous}`).style.display = 'none'
    pre_input.removeAttribute('checked')
    pre_icon.style.display = 'none'
    pre_icon_disabled.style.display = 'flex'

    /* INFO: Enable icon on new state */
    const curr_input = document.getElementById(`n_${value}`)
    const icon = document.getElementById(`ni_${value}`)
    const icon_disabled = document.getElementById(`nid_${value}`)

    document.getElementById(`panel_${value}`).style.display = 'block'
    curr_input.setAttribute('checked', '')
    icon.style.display = 'flex'
    icon_disabled.style.display = 'none'
    setData(value)
  })
})

function setData(data) {
  localStorage.setItem('/cache/navbar/previous', data)
  return data
}