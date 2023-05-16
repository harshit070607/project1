
var form1 = document.getElementById('formName');

var showItems = document.getElementById('detail');



form1.addEventListener('submit', addInfo);

function addInfo(e){
    e.preventDefault();
    
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;

   
    var li2 = document.createElement('li');
    li2.className="items";
    li2.appendChild(document.createTextNode(Email));
    li2.append(" is the email id of "+Name);

    showItems.appendChild(li2);
    
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
   

//add data to local storage
let obj_serialized = JSON.stringify(obj);
localStorage.setItem(obj.email,obj_serialized);
}
 
}