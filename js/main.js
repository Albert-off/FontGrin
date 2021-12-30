/*clickboardInput.onclick = () => {
    navigator.clipboard.writeText(clickboardInput.value)
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
}*/

jQuery(document).ready(function($){
    $('.text_copy_link').click(function() {
    var $text_copy = $(this);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($text_copy.text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('.copy_link_mess').fadeIn(400);
    setTimeout(function(){$('.copy_link_mess').fadeOut(400);},1000);
    });
});

const themeSwitchers = document.querySelectorAll('.changeTheme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    });
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'dark') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('dark');
} else if (activeTheme === 'light') { // Если значение равно 'dark' - применяем темную
    applyTheme('light');
}