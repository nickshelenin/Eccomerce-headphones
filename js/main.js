// slider

// let slideIndex = 1;
// showSlides(slideIndex);

// function currentSlider(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
// }



// footer acc

function footerAcc() {
  const footerAcc = document.querySelectorAll('.footer-link');

  for (let i = 0; i < footerAcc.length; i++) {
    footerAcc[i].addEventListener('click', () => {
      const footerSubmenu = document.querySelectorAll('.footer-submenu');
      const footerPlus = document.querySelectorAll('.footer-plus');

      footerSubmenu[i].classList.toggle('footer-acc-active');
      footerPlus[i].classList.toggle('footer-acc-active');
    });
  }
}

footerAcc();
