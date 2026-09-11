function toggelGaming() {
  let classElementGaming = document.querySelector('.js-button-Gaming');
  let classElementMusic = document.querySelector('.js-button-Music');
  let classElementTech = document.querySelector('.js-button-Tech');

  if (!classElementMusic.classList.contains('is-toggled') && !classElementTech.classList.contains('is-toggled')){
    if (!classElementGaming.classList.contains('is-toggled') && !(classElementMusic.classList.contains('is-toggled') && classElementTech.classList.contains('is-toggled')))
      classElementGaming.classList.add('is-toggled');
    else
      classElementGaming.classList.remove('is-toggled');
  }
}
function toggelMusic() {
  let classElementGaming = document.querySelector('.js-button-Gaming');
  let classElementMusic = document.querySelector('.js-button-Music');
  let classElementTech = document.querySelector('.js-button-Tech');
  if (!classElementTech.classList.contains('is-toggled') && !classElementGaming.classList.contains('is-toggled')){
    if (!classElementMusic.classList.contains('is-toggled') && !(classElementTech.classList.contains('is-toggled') && classElementGaming.classList.contains('is-toggled')))
      classElementMusic.classList.add('is-toggled');
    else
      classElementMusic.classList.remove('is-toggled');
  }
}
function toggelTech() {
  let classElementGaming = document.querySelector('.js-button-Gaming');
  let classElementMusic = document.querySelector('.js-button-Music');
  let classElementTech = document.querySelector('.js-button-Tech');
  if (!classElementMusic.classList.contains('is-toggled') && !classElementGaming.classList.contains('is-toggled')){
    if (!classElementTech.classList.contains('is-toggled'))
      classElementTech.classList.add('is-toggled');
    else
      classElementTech.classList.remove('is-toggled');

  }
}