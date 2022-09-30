form = document.getElementById("form");
errortext = document.getElementById("error");

form.addEventListener("submit", function(event){
event.preventDefault();
let formData = new FormData(form);
let email = formData.get("email");

if(email.includes("@")){
let emailName = email.split("@")[0];

if(emailName.length > 3){
email = email.split("@")[1];
if(email.includes(".")){

let domenPath = email.split(".");
let haveText = true;
domenPath.forEach(function(item, i, arr) {

if(item.length < 2){
haveText = false;
}
});

if(haveText){
errortext.style.display = "none";
alert("Вы успешно зарегистрировались!");
}
else
{
errortext.innerHTML = "Enter the correct email";
errortext.style.display = "block";
}
}
else
{
errortext.innerHTML = "Enter the correct email '.'";
errortext.style.display = "block";
}
}
else
{
errortext.innerHTML = "Incorrect email format";
errortext.style.display = "block";
}
}
else
{
errortext.innerHTML = "Incorrect email format";
errortext.style.display = "block";
}
}
);