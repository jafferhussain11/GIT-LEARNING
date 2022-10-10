const item = document.querySelectorAll('.list-group-item'); //node list
console.log(item);
item[1].style.backgroundColor = 'coral';
item[2].style.color = 'white';
//item.style.color = 'blue';

item[1].style.color ='green';

for(let i=0; i<item.length; i++){

    if(i%2==0){

        item[i].style.backgroundColor = 'green';

    }
}