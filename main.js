const themeChanger = document.querySelector('input');
themeChanger.addEventListener('click', changeTheme);

function changeTheme(e) {
    document.querySelector('body').classList.toggle('dark-theme-BG');
    document.querySelector('header').classList.toggle('dark-theme-header');
    document.querySelector('.logo-details h1').classList.toggle('dark-theme-text');
    document.querySelector('.logo-details p').classList.toggle('dark-theme-text-2');
    document.querySelector('.theme p').classList.toggle('dark-theme-text');
    document.querySelector('.second-container h1').classList.toggle('dark-theme-text');
    document.querySelector('footer p').classList.toggle('dark-theme-text');
    document.querySelector('.toggle-btn').classList.toggle('toggle-bg');
    

    
    document.querySelectorAll('.box h1').forEach(boxh1 => boxh1.classList.toggle('dark-theme-text'));
    document.querySelectorAll('.box h4').forEach(boxParagraph => boxParagraph.classList.toggle('dark-theme-text-2'));
    document.querySelectorAll('.figure h1').forEach(figureh1 => figureh1.classList.toggle('dark-theme-text'));
    document.querySelectorAll('.box').forEach(box => box.classList.toggle('dark-theme'));
    document.querySelectorAll('.sub-box').forEach(one => one.classList.toggle('dark-theme'));
    document.querySelectorAll('.pages-media p').forEach(page => page.classList.toggle('dark-theme-text-2'));
}

