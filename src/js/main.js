const cssVersionInputElement = document.querySelector('#css-version');
const jsVersionInputElement = document.querySelector('#js-version');
const refreshPageButtonElement = document.querySelector('#refresh-page');
const cssFileElement = document.querySelector('#css-file');
const jsFileElement = document.querySelector('#js-file');
const loadFilesButtonElement = document.querySelector('#load-files');

const originalCssVersion = cssVersionInputElement.value;
const originalJsVersion = jsVersionInputElement.value;

cssVersionInputElement.value = cssVersionInputElement.value.split('-v-')[1].replace('.min.css', '');
jsVersionInputElement.value = jsVersionInputElement.value.split('-v-')[1].replace('.min.js', '');

refreshPageButtonElement.addEventListener('click', event => {
  window.location.reload();
});

loadFilesButtonElement.addEventListener('click', event => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open('GET', originalCssVersion, false);
  xmlhttp.send();

  cssFileElement.textContent = xmlhttp.responseText;

  xmlhttp.open('GET', originalJsVersion, false);
  xmlhttp.send();

  jsFileElement.textContent = xmlhttp.responseText;
});