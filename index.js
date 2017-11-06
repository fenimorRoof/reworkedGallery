$(document).ready(function() {

  let slideNumber = 0;
  let arreyLength = window.images.length;

  //Rendering
  function renderImage() {
    $("#image").html('');
    let srcImage = window.images[slideNumber];
    $("#image").append(`<img src="${srcImage.src}">`);
  };

  function renderPagination() {
    $("#pagination").append("<button id='prev' type='button'>◀</button>");
    $("#pagination").append("<button id='next' type='button'>▶</button>");
    $("#prev").on("click", prevImage);
    $("#next").on("click", nextImage);
  };


  //Actions

  function changeSlide() {
    renderImage();
    updatePagination();
  };

  function prevImage() {
    slideNumber -= 1;
    changeSlide();
  };

  function nextImage() {
    slideNumber += 1;
    changeSlide();
  };

  function updatePagination() {
    $("#pagination button[disabled]").prop('disabled', false);

    if ((+slideNumber - 1) < 0) {
      $("#pagination #prev").prop('disabled', true);
    };

    if ((+slideNumber + 1) == arreyLength) {
      $("#pagination #next").prop('disabled', true);
    };
  };

  //Initialization
  function init() {
    renderImage();
    renderPagination();
    updatePagination();
  };

  init();
});
