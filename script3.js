// Wait for the HTML page to fully load before running code
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');

    // Make functions available globally so HTML buttons can see them
    window.appendValue = function(value) {
        if (display) {
            display.value += value;
        } else {
            console.error("Display element not found!");
        }
    }

    window.clearDisplay = function() {
        if (display) display.value = '';
    }

    window.deleteChar = function() {
        if (display) display.value = display.value.slice(0, -1);
    }

    window.calculateResult = function() {
        if (display && display.value !== '') {
            try {
                // Using Function instead of eval for safer execution
                display.value = new Function('return ' + display.value)();
            } catch (e) {
                display.value = 'Error';
            }
        }
    }
});
