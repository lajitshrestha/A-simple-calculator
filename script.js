const display = document.querySelector('.display input');
const button = document.querySelectorAll('input[type="button"]');

let currentInput = '';
function updateDisplay(value){
    display.value = value;
}


button.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if(value === 'AC'){
            currentInput = '';

        }else if(value ==='DE'){
            currentInput = currentInput.slice(0,-1);

        }else if(value === '='){
            try{
                currentInput = eval(currentInput).toString();
            }catch{
                currentInput = 'Error';
            }
        }else{
            currentInput += value;
        }
        updateDisplay(currentInput);
    });
});