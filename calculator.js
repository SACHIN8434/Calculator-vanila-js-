console.log("working");
let string = "";
let buttons = document.querySelectorAll(".grid");
let input = document.getElementsByClassName("in")[0]
console.log(input)

Array.from(buttons).forEach((e) => {
    e.addEventListener("click", (e) => {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === "=") {
            console.log("come")
            string = eval(string);
            
            input.value = string;
        }


        string = string + e.target.innerHTML;
        input.innerHTML = string;


    })
})