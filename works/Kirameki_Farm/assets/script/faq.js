// アコーディオンメニュー
// アコーディオンのタイトルがクリックされたら
$('.accordion-section').on('click', function () {
  const content = $(this).next('.accordion-content');

  content.slideToggle();
  $(this).toggleClass('is-open');
});