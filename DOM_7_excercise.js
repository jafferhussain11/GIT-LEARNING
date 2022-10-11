


const form = document.getElementById('addForm');
const itemlist = document.getElementById('items'); //contains all list items.
const filter = document.getElementById('filter');
//adding events
form.addEventListener('submit',additem);
filter.addEventListener('keyup',searchMatch);
itemlist.addEventListener('click', removelistitem);

//functions
function additem(e){

    e.preventDefault();

    const valuetoappend = document.getElementById('item').value;
    const valuetoappend2 = document.getElementById('desc').value;


    //create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    //add text node with input value as text from form

    li.appendChild(document.createTextNode(valuetoappend));
    li.appendChild(document.createTextNode(valuetoappend2));

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

function searchMatch(e){

    const filtext = e.target.value.toLowerCase(); //grabbin the input from seach box

    const list = itemlist.getElementsByTagName('li');
    //console.log(list);
    
    Array.from(list).forEach(function(item){

        const itemName = item.firstChild.textContent;
        const itemName2 =item.firstChild.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(filtext) != -1 || itemName2.toLowerCase().indexOf(filtext) != -1){

            item.style.display = 'block';

        }else{

            item.style.display = 'none';
        }
   }
)

}

