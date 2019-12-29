const but3=document.querySelector('#but3');
const but1=document.querySelector('#but1');
const but2=document.querySelector('#but2');
const but4=document.querySelector('#but4');
const divf=document.querySelector('.divf');

var f=0;
function clicked() {
    but3.disabled = false;
    f=1;
}
function clicked2() {
    but3.disabled = false;
    f=2;
}
function clicked3() {
    if(f==1)
    but4.href="single.html";
    if(f==2)
    but4.href="multiple.html";
}
