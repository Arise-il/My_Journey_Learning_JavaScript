function toggelGaming() {
  let classElement = document.querySelector('.js-button-Gaming');
  if (classElement.classList.contains('is-toggled'))
    classElement.classList.remove('is-toggled');
  else
    classElement.classList.add('is-toggled');
}
function toggelMusic() {
  let classElement = document.querySelector('.js-button-Music');
  if (classElement.classList.contains('is-toggled'))
    classElement.classList.remove('is-toggled');
  else
    classElement.classList.add('is-toggled');
}
function toggelTech() {
  let classElement = document.querySelector('.js-button-Tech');
  if (classElement.classList.contains('is-toggled'))
    classElement.classList.remove('is-toggled');
  else
    classElement.classList.add('is-toggled');
}