$(document).ready(function () {
  //burger===================================================================
  $('.header__burger').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    if ($('.header__menu').hasClass('active')) {
      $('body').addClass('lock');
    } else {
      $('body').removeClass('lock');
    }
  });
  //burger=============================================================================
  //modal==========================================================================
  const modalCall = $('[data-modal]');
  modalCall.on('click', function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $('.modal').addClass('show');
  })
})