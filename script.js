document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const modeLabel = document.getElementById('mode-label');
    const body = document.body;

    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
        modeLabel.innerText = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for dark mode preference
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
        modeLabel.innerText = 'Dark Mode';
    }
});
