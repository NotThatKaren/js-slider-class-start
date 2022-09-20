// Start at 14:00


// JavaScipt functions - Pure JavaScript Slider
//
// Goals:
// Use functions to pass in a variable
// Design a solution to a problem

//On Page Load init()
//  Hide all but the first Slide
//  Hide text for all but first Slide
//  Add button to top of page, if needed

//When user clicks next
//  Fade out current slide. Fade in next Slide

//When user clicks back
//  Fade out current slide. Fade in previous slide

//When user is on last slide and clicks next
// Fade out current slide. Go back to first slide


//We start with hiding everything except the first slide

var slideIndex = 1;

function plusSlides(n) {
  console.log("inside plusSlides with a value of " + n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  console.log(n);
  showSlides(slideIndex = n);
}

function showSlides(n) {
 console.log("inside showSlides with a value of " + n);

 var slides = document.getElementsByClassName("my-slides");
 var dots = document.getElementsByClassName("dot");
 console.log(slides);
 console.log(dots);

 // resets it back to beginning
 if (n < 1) {
   slideIndex = slides.length;
 }

 if (n > slides.length) {
   slideIndex = 1;
 }


 //hides the slides

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }

for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}


 slides[slideIndex-1].style.display = "block";

}

showSlides(slideIndex);
dots[slideIndex-1].className += " active";
