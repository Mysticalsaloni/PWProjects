const decrementbutton = document.getElementById("decrementbutton");
const incrementbutton = document.getElementById("incrementbutton");
const resetbutton = document.getElementById("resetbutton");
const displayvalue = document.getElementById("displayvalue");

// for decrement button click
decrementbutton.addEventListener("click",() => {
const value =Number(displayvalue.innerText)
if (value > 0){
    displayvalue.innerText = value - 2;
}
else{
    alert("negative value not allowed")
}
});

// for increment button click
incrementbutton.addEventListener("click", () =>{
    const value = Number(displayvalue.innerText);
    if(value >= 10){
        alert("10+ value are not allowed");
    }
    else{
        displayvalue.innerText = value + 1;
    }

});

// for reset button click
resetbutton.addEventListener("click",()=>{
    displayvalue.innerText = 0;
})