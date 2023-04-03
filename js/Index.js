let toggle=document.getElementById('toggle');
let lable_toggle=document.getElementById('lable_toggle');
toggle.addEventListener('change', (event)=>{
let checked=event.target.checked;
document.body.classList.toggle('dark');
if(checked==true){
    lable_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
    lable_toggle.style.color="yellow";
}else{
    lable_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
    lable_toggle.style.color="blueviolet";
}
})