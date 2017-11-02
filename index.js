$(document).ready(function() {

  let slideNumber = 0;
  function turnThePage(number) {
    return window.images[number].src;
  };

  function renderImage() {
    let slide = window.images[slideNumber];
    $("body").append(`<img src='${turnThePage(slideNumber)}'>`);

  };

  function renderPagination() {
    $("body").append("<button id='Prev' type='button'><</button>");
    $("body").append("<button id='Next' type='button'>></button>");
    $("#Next").click(function () {
      slideNumber += 1;
      console.log(slideNumber);
      $("img").remove();
      renderImage();
    })
  };


  function init() {
    renderImage();
    renderPagination();
  };
  init();
});
 e3
