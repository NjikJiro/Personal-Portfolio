let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('fw-bold', 'merah');
                document.querySelector('.nav-item a[href*=' + id + ']').classList.add('fw-bold', 'merah');
            });
        };
    });
};