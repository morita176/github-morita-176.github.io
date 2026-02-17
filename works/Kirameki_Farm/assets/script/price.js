// スライド
new Swiper('.swiper', {
  initialSlide: 0,      // ← 1枚目
  slidesPerView: 1,     // ← 常に1枚だけ表示
  centeredSlides: false, // ← 中央寄せしない
  spaceBetween: 0,      // ← 余白不要

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

