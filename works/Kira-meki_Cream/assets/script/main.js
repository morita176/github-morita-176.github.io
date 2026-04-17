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
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerGroup: 3, // PCでは3枚を1ページ扱い
      centeredSlides: false,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
