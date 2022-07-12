const avatar = $(".product__avatar");
const arrow = $(".product-slider__arrow");
const avatarHight = parseInt(avatar.height());
const arrowhieght = parseInt(arrow.height());

const slider = $(".products").bxSlider({
  pager: false,
  controls: false
});


const topArrow = (avatarHight - arrowhieght) / 2;
arrow.css({
  top: topArrow
});


$(".product-slider__arrow--direction--prev").click(e => {
  e.preventDefault();

  slider.goToPrevSlide()
})
$(".product-slider__arrow--direction--next").click(e => {
  e.preventDefault();

  slider.goToNextSlide()
})