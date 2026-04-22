const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// открыть
burger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// закрыть по клику вне
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});