document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if(anchor.dataset.desalign == null) {
            anchor.dataset.desalign = 'start';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: anchor.dataset.desalign
        });
    });
});
