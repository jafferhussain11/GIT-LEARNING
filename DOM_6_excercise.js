
const form = document.getElementById('addForm');
const itemlist = document.getElementById('items'); //contains all list items.

form.addEventListener('submit',additem);

itemlist.addEventListener('click', removelistitem);
function additem(e){

    e.preventDefault();

    const valuetoappend = document.getElementById('item').value;

    //create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    //add text node with input value as text from form

    li.appendChild(document.createTextNode(valuetoappend));
    //itemlist.appendChild(li);

    //ADDDING BUTTON delete

    //create button 
    const delbut = document.createElement('button');
    delbut.className = 'btn btn-danger btn-sm float-right delete';
    delbut.appendChild(document.createTextNode('X'));
    
    //adding button to li(new list item)
    li.appendChild(delbut);
    itemlist.appendChild(li);

}

function removelistitem(e){

    if(e.target.classList.contains('delete')){

        if(confirm('do you really want to delete ?')){

            const li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}


//li list items in a new variable list
const list = document.querySelectorAll('.list-group-item');

for(let i=0 ; i<list.length; i++){

    //create EDIT button 
    const editbut = document.createElement('button');
    editbut.className = 'btn btn-danger btn-sm float-right delete';
    editbut.appendChild(document.createTextNode('Edit'));
    list[i].appendChild(editbut);
   

}