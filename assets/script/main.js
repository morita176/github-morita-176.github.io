// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら.hamburgerの表示・非表示を繰り返す
$('.hamburger__button').on('click', function () {

  hamburger.toggleClass('hamburger-menu-active');
});

// メニューをクリックしたら閉じる
$('.hamburger-nav-list a').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
});

// 画面幅のサイズが変わったらハンバーガーメニューを閉じる
$(window).on('resize', function () {

  hamburger.removeClass('hamburger-menu-active');
});


// ------------------------------------------------------

// Slickリファレンス
// https://kenwheeler.github.io/slick/
$('.works-carousel').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 4000, // 自動再生の速さ、単位はミリ秒
  arrows: true, // 左右のナビゲーションを有効
  dots: true, // ドットを表示
  centerMode: true,
  centerPadding: "200px",
  slidesToShow: 1,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '40px'
      }
    }
  ]
});

