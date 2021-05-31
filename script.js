// ハンバーガーメニュー
$(function(){
  $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('#nav').toggleClass('-active');
  });
});

jQuery(function($){$('.item a').on('click', function(){
  if (window.innerWidth <= 768) {
      $('#nav-btn').click();
    }
  });
});

$(function(){
  new WOW().init();
});