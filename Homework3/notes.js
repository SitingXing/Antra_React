// DOM Tree
// Document Object Model -- use it to manipulate content, style and structure
// one of the most unique and useful tools of js
// (element)<html> - <head> / <body> - <title> / <p> (className - class attribute) | <h1> - Text
// parent child relationship

// DOM Manipulation
// const title = document.getElementById('main-heading');
// console.log(title);

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// const container = document.querySelector('div');
// console.log(container);
// const title2 = document.querySelector('#main-heading');
// title2.style.color = 'red';

// const container2 = document.querySelectorAll('div');
// console.log(container2);

// Event Listeners
const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I also love js');
}

buttonTwo.addEventListener('click', alertBtn);


const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);


// Reveal event
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);
// add styles for class hidden-content with display: block


// Event Probagation
// event capturing: from document - html - body - div - button
// event bubbling: button - div - body - html - document
// addEventListener(type, listener / function, useCapture (bool))