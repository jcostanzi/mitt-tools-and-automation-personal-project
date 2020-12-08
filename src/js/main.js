const cssVersionInputElement = document.querySelector('#css-version');
const jsVersionInputElement = document.querySelector('#js-version');
const refreshPageButtonElement = document.querySelector('#refresh-page');

cssVersionInputElement.value = cssVersionInputElement.value.split('-v-')[1].replace('.min.css', '');
jsVersionInputElement.value = jsVersionInputElement.value.split('-v-')[1].replace('.min.js', '');

refreshPageButtonElement.addEventListener('click', event => {
  window.location.reload();
});