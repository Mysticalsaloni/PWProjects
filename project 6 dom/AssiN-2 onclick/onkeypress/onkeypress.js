let inputBOx = document.getElementById('input-box')
let display = document.getElementById('display')
inputBOx.addEventListener('keypress',function(e){
    display.innerText = "you have pressed " +e.key
})