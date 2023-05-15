
var form1 = document.getElementById('formName');

form1.addEventListener('submit', addInfo);

function addInfo(e){
    e.preventDefault();

var Name = document.getElementById('name').value;
var Email = document.getElementById('email').value;

if(localStorage.getItem(Name,Email))
{
    alert('Already exist');
}
else
{
localStorage.setItem(Name,Email);
}
}