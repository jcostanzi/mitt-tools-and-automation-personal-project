const cssVersionInputElement = document.querySelector('#css-version');
const jsVersionInputElement = document.querySelector('#js-version');
const getFileVersionsButtonElement = document.querySelector('#get-file-versions');

cssVersionInputElement.value = cssVersionInputElement.value.split('-v-')[1].replace('.min.css', '');
jsVersionInputElement.value = jsVersionInputElement.value.split('-v-')[1].replace('.min.js', '');