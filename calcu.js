const display = document.getElementById('display');

function appendValue(val) {
    if (display.value === '0' && val !== '.') {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = Number(result.toFixed(4)); 
    } catch (error) {
        display.value = 'Error';
    }
}