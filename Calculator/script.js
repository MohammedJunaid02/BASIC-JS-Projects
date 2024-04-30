const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const buttons = document.querySelectorAll(".button");
// const equal = document.querySelectorAll(".equal");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const buttonValue = button.value;
        // alert(buttonValue);
        if(buttonValue ==="C"){
            display.value = "";
        }
        else if(buttonValue === "backspace"){
            // alert('hi');
            display.value = display.value.slice(0,-1);
            // alert('hi');
        }
        else if(buttonValue === "="){
            const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
            try{
                const result = eval(expression);
                display.value = result;
            }
            catch(error){
                display.value = error;
            }
        }
        else{
            display.value += buttonValue;
        }
    });
});

const displayInput = document.getElementById('display');

       // Add event listener for input events (typing)
       displayInput.addEventListener('input', () => {
           // Ensure the latest typed characters are visible by adjusting scroll position
           displayInput.scrollLeft = displayInput.scrollWidth;
       });