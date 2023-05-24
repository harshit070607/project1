
var form1 = document.getElementById('formName');

var showItems = document.getElementById('detail');



form1.addEventListener('submit', addInfo);

var dlt = document.getElementById('detail');

dlt.addEventListener('click',deleteitem);



function addInfo(e){
    e.preventDefault();
    
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;

    var obj = {

        name : Name ,
        email : Email

    }


if(localStorage.getItem(obj.email))
{
    alert('Aready exist');
}
else
{

    var li2 = document.createElement('li');
    li2.className="items";
    li2.appendChild(document.createTextNode(Email));
    li2.append(" - "+Name);
    showItems.appendChild(li2);

    var dltbtn = document.createElement('button');
    dltbtn.className='btn btn-danger btn-sm mx-2 my-2';
    var texbtn = document.createTextNode("Delete");
    dltbtn.appendChild(texbtn);
    li2.appendChild(dltbtn);

    var editbtn = document.createElement('button');
    editbtn.className='btn btn-primary btn-sm mx-2 my-2';
    var textonbtn = document.createTextNode("Edit");
    editbtn.appendChild(textonbtn);
    li2.appendChild(editbtn);

    
    dltbtn.onclick=()=>
    {
        localStorage.removeItem(obj.email);
        var rem = e.target.parentElement;
        detail.removeChild(rem);
        
    }

    editbtn.onclick=(e)=>
    {
        e.preventDefault();
        localStorage.removeItem(obj.email);
        var rem = e.target.parentElement;
        detail.removeChild(rem);
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;

    }


   
//add data to local storage
let obj_serialized = JSON.stringify(obj);
localStorage.setItem(obj.email,obj_serialized);
}
 
}

function deleteitem(e){

    

   // delete from UI
    var rem = e.target.parentElement;
    detail.removeChild(rem);
}