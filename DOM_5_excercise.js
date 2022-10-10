const item = document.querySelector('#items');
//console.log(item);
item.parentElement.style.backgroundColor = '#f4f4f4';

//console.log(item.children[0]);

console.log(item.firstChild) //gives text and not the first list item !
console.log(item.firstElementChild);//gives the first list item

item.lastElementChild.textContent = 'Ferrari';

console.log(item.nextSibling);//gives the next sibling as TEXT

//console.log(item.nextElementSibling);//gives the next sibling as Element

const head = document.querySelector('h2');

console.log(head.nextElementSibling);//gives the next sibling as Element
console.log(item.previousElementSibling);//gives the previous sibling as Element

item.previousElementSibling.style.color = 'green';

//create Elements

const newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');
console.log(newDiv);

//create text node
const newDivText = document.createTextNode('CARSSS');

//append to new div
newDiv.appendChild(newDivText);

//ADD TO DOM putting a div in a div

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);














