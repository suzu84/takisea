"user strict";
{
  // ハンバーガーメニュー
  $(".nav__hum").click(function () {
    $(this).toggleClass('active');
  });

  $(".nav__hum").click(function () {
    $(".nav__menu-sp").toggleClass('active');
  });
}

{
  $(function () {
    // サムネイルの数を取得
    var thumbnailCount = $('.thumbnail').children().length;
    // メイン画像のオプション
    $(".slider").slick({
      autoplay: true, // 自動再生ON
      arrows: false, // 矢印非表示
      asNavFor: ".thumbnail", // サムネイルと同期
    });
    // サムネイルのオプション
    $(".thumbnail").slick({
      // slidesToShow: thumbnailCount,
      slidesToShow: Math.min(thumbnailCount, 20),
      asNavFor: ".slider", // メイン画像と同期
      focusOnSelect: true, // サムネイルクリックを有効化
      arrows: false,
    });
  });
}

// フェードイン
{
  $(window).on('load scroll', function() {
    // fadeIn と fadeIn_right の要素をまとめて取得
    const fade = $('.fadeIn_left, .fadeIn_right, .fadeIn');
    
    fade.each(function() {
      const boxoff = $(this).offset().top;
      const wh = $(window).height();
      const scrollTop = $(window).scrollTop();
      
      if (scrollTop > boxoff - wh + 100) {
        $(this).addClass('animated');
      }
    });
  });
}