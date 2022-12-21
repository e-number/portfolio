const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector(".menu__overlay");

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
   
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            upElem.classList.add( 'animate__animated', 'animate__fadeIn');
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.add('animate__fadeOut');
            upElem.classList.remove('animate__fadeIn');
        }
    });
};

scrolling(".pageupmain");
