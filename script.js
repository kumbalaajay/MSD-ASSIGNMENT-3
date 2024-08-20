// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.querySelector('.container');
    
    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            // Reset to initial state
            button.textContent = 'GET';
            text.textContent = 'MY CGPA';
            container.style.backgroundColor = '#fff'; // White background
        } else {
            // Change to toggled state
            button.textContent = 'GO BACK';
            text.textContent = '84%';
            container.style.backgroundColor = '#ffeb3b'; // Yellow background
        }
        isToggled = !isToggled;
    });
});
