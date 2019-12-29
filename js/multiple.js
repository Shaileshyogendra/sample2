const myform=document.querySelector('#myform');
const category=document.querySelector('#category');
const desciption=document.querySelector('#desciption');
const price=document.querySelector('#price');
const cost=document.querySelector('#cost');
const ul=document.querySelector('.list');
const al=document.querySelector('.al');
const alc=document.querySelector('.alc');

var x=0;
var q='';

function booked() {
  alc.style.visibility='visible';
  setTimeout(()=> alc.remove(),3000);
}



myform.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(price.value>0){
  ul.children[x].textContent=x+1 +"."  +"  " + category.value +":   " +"₹"+ price.value;
  x=x+1;

  q=+q + +price.value;

  cost.textContent=q;

  category.value='';
  desciption.value='';
  price.value='';
}
else{
  al.style.visibility='visible';
  setTimeout(()=> al.remove(),3000);
  price.value='';
}

})
