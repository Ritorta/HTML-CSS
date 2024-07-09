const menu = document.querySelector('.menu'); // Находим класс меню.
const selector_menu = document.querySelector('.button_menu_icon_menu'); // Находим кнопку меню.

function toggleMenu() {
    // menu.classList.toggle('hidden'); // Включает и выключает класс "hidden"
    menu.classList.toggle('active'); // Включает и выключает класс "active", для переключения обратно на "hidden" надо раскоментировать CSS "hidden"
} 

selector_menu.addEventListener('click', toggleMenu); // Сделаем чтобы по клику на кнопку меню срабатывало собитие по показу меню.


