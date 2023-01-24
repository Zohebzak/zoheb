let string = ""
let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string

        } else if(e.target.innerHTML == 'C'){
            document.querySelector('input').value = "";
        } else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
})

// let clearButton= document.getElementById("clearButton");
// let inputBox = document.getElementById("inputBox");
// function clear() {
//     if (inputBox.target.value === "C") {
//         inputBox.target.value = "";
//     }
// }