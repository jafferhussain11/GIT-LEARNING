//console.log(window);

//console.log(document.getElementById('my-form'));
//const items = document.querySelectorAll('.item');
//items.forEach((i) => console.log(i));

//changing things in DOM or user interface

/*
const form = document.querySelector('#my-form');
const inputName = document.querySelector('#name');
const emailName = document.querySelector('#email');
const message = document.querySelector('.msg');

form.addEventListener('submit' , (e) => {


    e.preventDefault();
    if(inputName.value == '' || emailName.value ==''){

        message.innerHTML = "Please Enter Values In All Fields !";

    }else{

        console.log(inputName.value);
        console.log(emailName.value);

    }
    

*/





//console.dir(document);

//examine DOM

/*console.log(document.domain);
console.log(document.all);
console.log(document.forms);
console.log(documents.images);

//console.log(document.getElementById('main'));
//itemsHead.style.font-weight =bold;
//console.log(itemsHeaddiv.children);

*/

//getelements

console.log(document.getElementById('header-title'));

const headerT = document.getElementById('header-title');

headerT.innerHTML = "DOM DOM";

headerT.style.borderBottom = "solid 3px #000";

const itemsHeaddiv=document.getElementById('main');

itemsHeaddiv.children[0].style.fontWeight = 'bold';
itemsHeaddiv.children[0].style.color ='green';



