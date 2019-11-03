function toggle() {
  const hamburger = document.querySelector('.hamburger');
  const activeElements = document.querySelectorAll('.active-element');

  hamburger.addEventListener('click', () => {
    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.toggle('active');
    }
  });
}

function accClick() {
  const acc = document.querySelectorAll('.link');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
      const submenu = document.querySelectorAll('.submenu');
      const plus = document.querySelectorAll('.plus');

      submenu[i].classList.toggle('acc-active');
      plus[i].classList.toggle('acc-active');
    });
  }
}

async function init() {
  await fetch('./header.html')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector('header').innerHTML = data;
    });
  toggle();
  accClick();
}

init();
