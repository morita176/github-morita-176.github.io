// ページトップへ戻るボタン
// -------------------------------------------
var buttonToTop = $('#button-to-top');
var footer = $('.footer');
var speed = 600;

// トップへ戻る
buttonToTop.on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, speed);
  return false;
});

// スクロール監視
$(window).on('scroll resize', function () {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var footerTop = $('.footer').offset().top;

  var overlap = scrollTop + windowHeight - footerTop;

  if (overlap > 0) {
    // footerに重なった分だけ持ち上げる
    buttonToTop.css({
      bottom: overlap
    });
  } else {
    buttonToTop.css({
      bottom: 16
    });
  }
});


// -------------------------------------------
// スライド
new Swiper('.swiper', {
  // 初期表示を2枚目に
  initialSlide: 1,
  slidesPerView: 'auto',
  // スライド間の幅
  spaceBetween: 15,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// -------------------------------------------------
// アコーディオンメニュー
// アコーディオンのタイトルがクリックされたら
$('.accordion-section').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  // アイコンの向きを変える
  $(this).children('.bi-caret-down-fill').toggleClass("open", 300);
});
