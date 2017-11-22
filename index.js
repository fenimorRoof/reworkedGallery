$(document).ready(function() {

  let DATA_ARREY_LENGTH = window.images.length;
  let slideNumber = 1;

  let usedImageID = 0;

  //Rendering
  function renderImage() {

    let srcImage = window.images[slideNumber-1];
    //TODO ХЕндлеры офф

    let idImage = dateGenerator();

    $('#image').append(`<img src='${srcImage.src}' id="${idImage}" style ="display: none">`);
    $(`#${idImage}`).fadeToggle('slow',function() {
      $(`#${usedImageID}`).remove('img');
      usedImageID = idImage;
      console.log(idImage);
      //TODO ХЕндлеры он
    });
  }

  function renderPagination() {
    $('#pagination').append('<button id="prev" type="button" data->◀</button>');
    $('#pagination').append('<button id="next" type="button">▶</button>');
    $('#pagination').append('<div id="slideButtons"></div>');

    for(let i = 1; i <= DATA_ARREY_LENGTH; i+= 1) {

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
    deleteImage();
    updatePagination();
  }

  function deleteImage() {
    $(this).remove();
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

  function dateGenerator () {
   let uniID = new Date();
   uniID = uniID.getMilliseconds();
   return  +uniID;
 }

  //Initialization
  function init() {
    renderImage();
    renderPagination();
    updatePagination();

  }

  init();
});
