const cssVersionInputElement = document.querySelector('#css-version');
const jsVersionInputElement = document.querySelector('#js-version');
const getFileVersionsButtonElement = document.querySelector('#get-file-versions');

cssVersionInputElement.value = cssVersionInputElement.value.split('-')[1].replace('.min.css', '');
jsVersionInputElement.value = jsVersionInputElement.value.split('-')[1].replace('.min.js', '');