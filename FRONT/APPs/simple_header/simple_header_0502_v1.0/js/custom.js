// menu toggle
const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu i');
const nav = document.querySelector('.navi');

// menu를 클릭하면 active라는 이름의 클래스가 생성 됐다 안됐다 한다.(toggle)
menu.addEventListener('click', function () {
  this.classList.toggle('active');
  const navHeight = nav.scrollHeight;

  //   console.log(navHeight);

  if (this.classList.contains('active')) {
    icon.setAttribute('class', 'ri-close-line');
    nav.style.height = navHeight + 'px';
  } else {
    icon.setAttribute('class', 'ri-menu-line');
    nav.style.height = 0;
  }

  //   this.classList.contains('active')
  //     ? icon.setAttribute('class', 'ri-close-line')
  //     : icon.setAttribute('class', 'ri-menu-line');
});

// Navigation Activate
const navs = document.querySelectorAll('.navi li');

navs.forEach((nav, idx) => {
  nav.addEventListener('click', function () {
    navs.forEach((nav) => {
      nav.classList.remove('active');
    });

    this.classList.add('active');
  });
});

// console.log(navs);
