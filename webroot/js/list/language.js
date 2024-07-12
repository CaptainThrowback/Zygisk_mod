import { 
  avaliableLanguages, 
  getTranslations, 
  setNewLanguage
} from '../language.js'
const lang_list = document.getElementById('lang_modal_list')
const target = document.getElementById('lang_modal')

let index = 0

function setAvaliableLanguage() {
  const langKey = avaliableLanguages[index]
  index += 1
  getTranslations(langKey).then(data => {
    lang_list.innerHTML += `
    <div lang-data="${langKey}" class="${index === avaliableLanguages.length ? '' : 'spliter'}" style="padding-top: 25px; padding-bottom: 25px; font-size: 1.3em;">
      <div lang-data="${langKey}" class="element_animation">${data.langName}</div>
    </div>`
  })
  .finally(() => { 
    if (index !== avaliableLanguages.length) setAvaliableLanguage() 
  })
}
setAvaliableLanguage()

document.addEventListener('click', async (event) => {
  const getLangLocate = event.target.getAttribute('lang-data')
  if (!getLangLocate || typeof getLangLocate !== "string") return;

  await setNewLanguage(getLangLocate)

  target.style.top = '100%'
  localStorage.setItem('/cache/modal/language/state', 'closed')
  localStorage.setItem('/system/language', getLangLocate)
}, false)