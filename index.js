window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#burger').addEventListener('click',function(){
        document.querySelector('#menu').classList.toggle('menu-active');
        document.querySelector('#screen').classList.toggle('menu-active')
        document.querySelector('#screen').classList.toggle('screen-active')
 })
 document.querySelector('#screen').addEventListener('click',function(){
     document.querySelector('#menu').classList.toggle('menu-active');
     document.querySelector('#screen').classList.toggle('menu-active');
     document.querySelector('#screen').classList.toggle('screen-active')
 })
// document.querySelector('#body').addEventListener('click',function(){
//     document.querySelector('#menu').classList.remove('menu-active')
// })
})
