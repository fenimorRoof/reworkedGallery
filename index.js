$(document).ready(function() {

  let slideNumber = 1;
  let arreyLength = window.images.length;

  //Rendering
  function renderImage() {
    //$('#image').html(''); //Delete previous image

    let srcImage = window.images[slideNumber-1];
    //TODO ХЕндлеры офф
    let removingImageID = dateGenerator();
    $('#image').append(`<img src='${srcImage.src}' date-id="${removingImageID}" style ="display: none">`);
    $('img').fadeToggle('slow',function() {
      $(`img [data-id=${removingImageID}]`).remove();  //TODO Вынести в отдельную функцию с параметром принимающим removingImageID
      console.log(+removingImageID);
      //TODO ХЕндлеры он
    });
  }

  function renderPagination() {
    $('#pagination').append('<button id="prev" type="button" data->◀</button>');
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

  function dateGenerator () {
   let uniID = new Date();
   uniID = (Math.random()) * uniID.getMilliseconds();
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
