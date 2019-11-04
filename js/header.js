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

function headerToggle() {
  const searchbar = document.querySelector('.desktop-searchbar');
  const closeSearchbar = document.querySelector('#close-searchbar');
  const searchIcon = document.querySelector('.search-bar');
  const shopLink = document.querySelector('.shop-container');
  const shopDropdown = document.querySelector('.shop-dropdown')

  searchIcon.addEventListener('click', () => {
    searchbar.style.display = 'flex';
  });

  closeSearchbar.addEventListener('click', () => {
    searchbar.style.display = 'none';
  });
 
  shopLink.addEventListener('click', () =>{
    shopDropdown.classList.toggle('header-active-click')
  })


  // shopLink.addEventListener('mouseover', () =>{
  //   shopDropdown.style.display = 'flex'
  //   shopLink.classList.add('header-link-hover')
  // })

  // shopDropdown.addEventListener('mouseleave', () =>{
  //   shopDropdown.style.display = 'none'
  //   shopLink.classList.remove('header-link-hover')
  // })
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
  headerToggle();
  shopDropdown();
}

init();
