document.addEventListener('DOMContentLoaded', () => {

    const btnTrigger = document.querySelector('.btn-trigger');
    const header = document.querySelector('.g_header');
    const nav = document.querySelector('.g_header nav');
    const navLinks = document.querySelectorAll('.g_header nav a');

    if (btnTrigger && header) {
        btnTrigger.addEventListener('click', function () {
            this.classList.toggle('active');
            header.classList.toggle('active');
        });

        nav.addEventListener('click', () => {
            btnTrigger.classList.remove('active');
            header.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                btnTrigger.classList.remove('active');
                header.classList.remove('active');
            });
        });
    }
});