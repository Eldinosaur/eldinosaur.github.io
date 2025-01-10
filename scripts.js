const toggleLangButton = document.getElementById('toggle-lang');
let isEnglish = true;

toggleLangButton.addEventListener('click', () => {
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = isEnglish ? 'none' : 'block');
    document.querySelectorAll('.lang-es').forEach(el => el.style.display = isEnglish ? 'block' : 'none');
    toggleLangButton.textContent = isEnglish ? 'English' : 'Español';
    isEnglish = !isEnglish;
});
