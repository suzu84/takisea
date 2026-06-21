"user strict";
$(".category_select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="category_select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="category_options">';
      $(this).find("option").each(function() {
        template += '<span class="category_option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="category_select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".category_option:first-of-type").hover(function() {
  $(this).parents(".category_options").addClass("option-hover");
}, function() {
  $(this).parents(".category_options").removeClass("option-hover");
});
$(".category_select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".category_select").removeClass("opened");
  });
  $(this).parents(".category_select").toggleClass("opened");
  event.stopPropagation();
});
// $(".category_option").on("click", function() {
//   $(this).parents(".category_select-wrapper").find("select").val($(this).data("value"));
//   $(this).parents(".category_options").find(".category_option").removeClass("selection");
//   $(this).addClass("selection");
//   $(this).parents(".category_select").removeClass("opened");
//   $(this).parents(".category_select").find(".category_select-trigger").text($(this).text());
// });