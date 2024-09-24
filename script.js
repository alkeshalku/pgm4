var head=document.getElementById("head1")
console.log(head);
head.style.color="darkgreen";
head.textcontent="hehehe";
head.innerHTML="<h6>changed in to h6<h6>";
var list=document.getElementsByClassName("list")
for(let i=0;i<list.length;i++)
{
    list[i].style.backgroundColor="yellow";
}

var t=document.getElementsByTagName("li")
t[1].style.color="red";

//usinh query selector
let val=document.querySelector("input");
val.value="name"

//query selector using id
var save=document.querySelector("#save");
save.style.backgroundColor="beige"
