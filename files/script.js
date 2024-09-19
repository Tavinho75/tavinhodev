const openBtn = document.querySelector('.open_btn');
const sidebar = document.querySelector('.sidebar');
const icon = document.getElementById('open_btn_icon');

openBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open-sidebar');

    // Alterna o ícone de seta
    icon.classList.toggle('fa-chevron-right');
    icon.classList.toggle('fa-chevron-left');
});
