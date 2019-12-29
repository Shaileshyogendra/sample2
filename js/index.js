const but3=document.querySelector('#but3');
const divf=document.querySelector('.divf');

function clicked() {
    but3.disabled = false;
}
function clicked2() {
    divf.classList.add('divfr');
    setTimeout(()=> divf.remove(),3000);
}
