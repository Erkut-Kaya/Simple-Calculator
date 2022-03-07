// Getting elements
let btnPlus = document.querySelector("#btnPlus");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");
let btnClr = document.querySelector("#btnClr");
let btnAbs = document.querySelector("#btnAbs");
let btnComma = document.querySelector("#btnComma");
let textbox = document.querySelector("#textbox");
let btnEqual = document.querySelector("#btnEqual");

let tempNumber;
let process = "default";

let btnNumbers = [];
for(let i = 0; i<10; i++) {
    btnNumbers[i] = "btn" + i;
}

for(let i = 0; i<10; i++) {
    document.getElementById(btnNumbers[i]).addEventListener("click", function(e) {
        // textbox.innerText += e.target.innerText;
        // console.log(e.target.value);
    })
}
btnClr.addEventListener("click",function() {
    // textbox.value = "";
    // console.log(textbox.value);

})

btnAbs.addEventListener("click", function() {
    // textbox.value *= -1;
    // console.log(textbox.value);

})
btnComma.addEventListener("click", function() {
    // textbox.value /= 10;
    // console.log(textbox.value);
})

btnPlus.addEventListener("click", function() {
})

btnEqual.addEventListener("click", function() {

})
let buttons = Array.from(document.getElementsByClassName("btn"));
buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "C":
                textbox.innerText = "";
                break;
            case "=":
                try {
                    textbox.innerText = eval(textbox.innerText);
                } catch {
                    textbox.innerText = "Invalid process!";
                }
                break;
            default:
                textbox.innerText += e.target.innerText;
        }
        console.log(textbox.innerText);
        console.log(e.target.innerText);

    });
});