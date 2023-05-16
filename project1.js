
var form1 = document.getElementById('formName');
var ke = 0;

form1.addEventListener('submit', addInfo);

function addInfo(e){
    e.preventDefault();
    ke=ke+1;

    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    
    var obj = {

        name : Name ,
        email : Email

    }


    let obj_serialized = JSON.stringify(obj);

localStorage.setItem(ke,obj_serialized);
 
}