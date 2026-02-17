// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger__button').on('click', function () {

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-nav-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-nav-active');
});

// メニュー一覧をクリックしたら
$('.hamburger-nav-list').on('click', function () {

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-nav-active');

});
