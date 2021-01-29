document.querySelector("#grandparent")
.addEventListener("click",()=> {
    console.log('grandparent');
},true);
document.querySelector("#parent")
.addEventListener("click",(e)=> {
    console.log('parent');
    e.stopPropagation();
},false);
document.querySelector("#child")
.addEventListener("click",()=> {
    console.log('child');
},true);