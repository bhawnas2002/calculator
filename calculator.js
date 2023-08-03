const display = document.getElementById("display")
const button = document.getElementById("buttons")

button.addEventListener("click",function(){makesound();})
button.addEventListener("click",(event)=> {
    let target = event.target;
    console.log(target);
    if (target.innerHTML === "C") {
        display.value = "";
    } else if (target.classList.contains("numbers")) {
        display.value += target.innerHTML;
    } else if (target.classList.contains("operator")) {
        // throws error of sign mutiplicity without let
        // display.value += target.innerHTML;
        let lastchar = display.value[display.value.length - 1];
        if (
            lastchar === "+" || lastchar === "-" || lastchar ==="*" || lastchar === "/"
        ) {
            display.value=display.value.slice(0,-1) + target.innerHTML;
        } else {
            display.value += target.innerHTML;
        }
    } else if (target.innerHTML === "=") {
        // shows output in terminal only not on screen
        // console.log(eval(display.value));
        // display.value = eval(display.value);
        // only = shows undefined so len=0 should be blank
        if (display.value.length !== 0) {
            try{
                display.value = eval(display.value);
            } catch (error) {
                display.value = "invalid expression";
            }
            // writing own statement using try catch
            // display.value = eval(display.value);
        } else {
            display.value = "";
        }
    }
})

function makesound() {
    let audio = new Audio("pop.mp3");
    audio.play();
}