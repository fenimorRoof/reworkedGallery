$(document).ready(function() {

  let slideNumber = 1;
  let arreyLength = window.images.length;

  //Rendering
  function renderImage() {
    $('#image').html(''); //Delete previous image

    let srcImage = window.images[slideNumber-1];
    $('#image').append(`<img src='${srcImage.src}'>`);
  }

  function renderPagination() {
    $('#pagination').append('<button id="prev" type="button">◀</button>');
    $('#pagination').append('<button id="next" type="button">▶</button>');
    $('#pagination').append('<div id="slideButtons"></div>');

    for(let i = 1; i <= arreyLength; i+= 1) {

      //"i+1" for butons names and just i for slideNumber variable

      $('#slideButtons').append(`<button type="button" value="slide-${i}">${i}</button>`);
      $(`#slideButtons button[value="slide-${i}"]`).click(
        (function(index){
          return function() { changeSlide(index); } }
        )(i)
      );
    }

    $('#prev').on('click', prevImage);
    $('#next').on('click', nextImage);
  }


  //Actions
  function prevImage() {
    changeSlide(slideNumber - 1);
  }

  function nextImage() {
    changeSlide(slideNumber + 1);
  }

  function changeSlide(slide) {
    slideNumber = slide;
    renderImage();
    updatePagination();
  }

  function updatePagination() {

    $('#pagination button[disabled]').prop('disabled', false);

    $(`#pagination button[value="slide-${slideNumber}"]`).prop('disabled', true);

    if (+slideNumber == 1) {
      $('#pagination #prev').prop('disabled', true);
    };

    if (+slideNumber == arreyLength) {
      $('#pagination #next').prop('disabled', true);
    }
  }



  //Initialization
  function init() {
    renderImage();
    renderPagination();
    updatePagination();
  }

  init();
});
