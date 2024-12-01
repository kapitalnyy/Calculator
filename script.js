function toggleAdvanced() {
    const advancedButtons = document.getElementById('advanced-buttons');
    const toggleButton = document.getElementById('toggleMode');

    if (advancedButtons.style.display === 'none') {
        advancedButtons.style.display = 'flex';
        toggleButton.textContent = 'Normal mode';
    } else {
        advancedButtons.style.display = 'none';
        toggleButton.textContent = 'Chinese mode';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value); // Pobierz wartość z wyświetlacza
    if (!isNaN(value)) {
        const result = Math.sin(toRadians(value)); // Oblicz sinus
        display.value = result.toFixed(4); // Zaokrąglony wynik
    } else {
        display.value = 'Invalid number'; // Komunikat, jeśli wartość jest nieprawidłowa
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180); // Konwersja stopni na radiany
}

function calculateCos() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value); // Pobierz wartość z wyświetlacza
    if (!isNaN(value)) {
        const result = Math.cos(toRadians(value)); // Oblicz cosinus
        display.value = result.toFixed(4); // Wyświetla wynik w display
    } else {
        alert('Please enter a valid number.'); // Komunikat, jeśli wartość jest nieprawidłowa
    }
}