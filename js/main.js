document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        trial.style.backgroundColor = '#1d1d1d'
        trial.style.transition = '0.25s'
    }
    else{
        trial.style.backgroundColor = 'transparent';
    }
});
const navSlide = () => {
    const header = document.querySelector('.divs');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    header.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    

    navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
            }
        });
         header.classList.toggle('toggle');
    });

}

navSlide();