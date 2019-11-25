'use strict';

let primerNumero = document.querySelector('#primer-numero');
let segundoNumero = document.querySelector('#segundo-numero');
let sumButton = document.querySelector('#sum-button');
let restButton = document.querySelector('#rest-button');
let divButton = document.querySelector('#div-button');
let mulButton = document.querySelector('#mul-button');
let titulo = document.querySelector('h1');
let resultNode = document.querySelector('#resultado');

sumButton.addEventListener('click', function() {
  let result = parseInt(primerNumero.value) + parseInt(segundoNumero.value);

  let spanElement = document.createElement('span');
  let textNode = document.createTextNode(result);
  if (resultNode.childNodes.length > 3) {
    ///revisa si los el arrglo de los nodos es mayor a 3
    resultNode.removeChild(resultNode.childNodes[3]);
  }
  spanElement.appendChild(textNode);
  resultNode.appendChild(spanElement); //agrega el nuevo node

  console.log(result);
  return result;
});
restButton.addEventListener('click', function() {
  let result = parseInt(primerNumero.value) - parseInt(segundoNumero.value);

  let spanElement = document.createElement('span');
  let textNode = document.createTextNode(result);
  if (resultNode.childNodes.length > 3) {
    ///revisa si los el arrglo de los nodos es mayor a 3
    resultNode.removeChild(resultNode.childNodes[3]);
  }
  spanElement.appendChild(textNode);
  resultNode.appendChild(spanElement); //agrega el nuevo node

  console.log(result);
  return result;
});
divButton.addEventListener('click', function() {
  let result = parseInt(primerNumero.value) / parseInt(segundoNumero.value);
  if (parseInt(segundoNumero.value) == 0) {
    alert('El segundo numero no puede ser 0');
    return;
  }
  let spanElement = document.createElement('span');
  let textNode = document.createTextNode(result);
  if (resultNode.childNodes.length > 3) {
    ///revisa si los el arrglo de los nodos es mayor a 3
    resultNode.removeChild(resultNode.childNodes[3]);
  }
  spanElement.appendChild(textNode);
  resultNode.appendChild(spanElement); //agrega el nuevo node

  console.log(result);
  return result;
});
mulButton.addEventListener('click', function() {
  let result = parseInt(primerNumero.value) * parseInt(segundoNumero.value);

  let spanElement = document.createElement('span');
  let textNode = document.createTextNode(result);
  if (resultNode.childNodes.length > 3) {
    ///revisa si los el arrglo de los nodos es mayor a 3
    resultNode.removeChild(resultNode.childNodes[3]);
  }
  spanElement.appendChild(textNode);
  resultNode.appendChild(spanElement); //agrega el nuevo node

  console.log(result);
  return result;
});

titulo.addEventListener('click', function() {
  console.log('clic en titulo');
});

titulo.addEventListener('mouseover', function() {
  console.log('mouseover sobre el titulo');
});
