console.log('hello');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log("+");
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  console.log("curr")
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');

  if(n > slides.length) slideIndex = 1; //on end start over
  if(n < 1) slideIndex = slides.length; //on start go to end

  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}