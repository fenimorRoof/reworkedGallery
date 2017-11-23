$(document).ready(function() {

  let DATA_ARREY_LENGTH = window.images.length;

  let slideNumber = 1;
  let usedImageIdentifier = 0;

  //Rendering
  function renderImage() {

    let image = window.images[slideNumber-1];
    let imageIdentifier = randomIdentifier();

    $('#image').append(`<img src='${image.src}' id="${imageIdentifier}" style ="display: none">`);
    $(`#${imageIdentifier}`).fadeToggle('fast',function() {
      removingImage (imageIdentifier);
    });
  }

  function renderPagination() {
    $('#pagination').append('<button id="prev" type="button">◀</button>');
    $('#pagination').append('<button id="next" type="button">▶</button>');

    for(let i = 1; i <= DATA_ARREY_LENGTH; i+= 1) {

      $('#pagination').append(`<button type="button" value="slide-${i}">${i}</button>`);

      $(`button[value="slide-${i}"]`).click(
        (function(index){
          return function() { changeSlide(index); }
        })(i)
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

    if (+slideNumber == DATA_ARREY_LENGTH) {
      $('#pagination #next').prop('disabled', true);
    }
  }

  function removingImage(id) {
    $(`#${usedImageIdentifier}`).remove('img');
    usedImageIdentifier = id;
  }

  function randomIdentifier () {
   let uniID = new Date();
   return +(uniID.getMilliseconds());
 }

  //Initialization
  function init() {
    renderImage();
    renderPagination();
    updatePagination();
  }

  init();
});
