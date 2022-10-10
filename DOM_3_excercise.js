//by using getelements by class name
const li = document.getElementsByClassName('list-group-item');

for(let i = 0; i<li.length; i++){

    li[i].style.backgroundColor = 'grey';
}

//using getelements by tag

const list = document.getElementsByTagName('li');
console.log(list);

for(let i = 0; i<list.length; i++){

    list[i].style.color = 'blue';
}