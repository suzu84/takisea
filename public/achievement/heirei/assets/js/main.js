"user strict";
// ハンバーガー
  $(".nav__menuSp").click(function () {
    $(this).toggleClass('active');
  });

  $(".nav__menuSp").click(function () {
    $(".nav__list").toggleClass('active');
  });
// TOPメインビジュアル
$('.main__mainVisual').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
});
// お客様の声スライダー
$('.voice__list.top').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [{
    breakpoint: 769,
    settings: {
    slidesToShow: 1
    }
}]
});
// 自社の想いスライダー1
$('.strength-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  arrows: false,
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [{
    breakpoint: 769,
    settings: {
    slidesToShow: 2
    }
}]
});
