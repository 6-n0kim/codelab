// $(document).ready(function () {
// jquery codes here...
// });

$(function () {
  // $('.menu-icon').click(function () {
  //   alert('clicked!!');
  // });
  // $('.footer-nav li').click(function (e) {
  //   e.preventDefault();
  //   alert($(this).attr('class'));
  // });

  // menu active
  $('.menu-icon').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.menu-icon i').attr('class', 'ri-close-large-line');
      $('.mobile-menus').slideDown('fast');
    } else {
      $('.menu-icon i').attr('class', 'ri-menu-line');
      $('.mobile-menus').slideUp('fast');
    }
  });
});

// const lis = document.querySelectorAll('.footer-nav li');
// console.log(lis);

// lis.forEach((li) => {
//   console.log(li);
//   li.addEventListener('click', function (e) {
//     e.preventDefault();
//     alert(this.getAttribute('class'));
//   });
// });
