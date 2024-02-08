const userPrefersDark = false;
const darkThemeClass = 'dark-theme';
function setThemePreference(prefersDark) {
    if (prefersDark) {
        document.body.classList.add(darkThemeClass);
    } else {
        document.body.classList.remove(darkThemeClass);
    }
}
setThemePreference(userPrefersDark);

const checkbox = document.getElementById('checkbox');

checkbox.checked = userPrefersDark;

checkbox.addEventListener('change', (event) => {
    const darkModeEnabled = event.target.checked;
    setThemePreference(darkModeEnabled);
});