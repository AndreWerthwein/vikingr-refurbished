var Links = document.querySelectorAll('.SlideshowNavigation .Links');
var Rechts = document.querySelectorAll('.SlideshowNavigation .Rechts');

var AktuelleSlideshow = "";
var AktuellerSlide = 0;

//Links
for (var x = 0; x < Links.length; x = x + 1) {
  Links[x].addEventListener('click', function(e) {
    e.preventDefault();

    var SlideshowThema = this.dataset.slideshow;
    var Slides = document.querySelectorAll('.SlideshowInhalt section[data-slideshow="' + SlideshowThema + '"]');
    var MaxSlides = Slides.length
        MaxSlides = MaxSlides - 1;

    function AlleSlidesAusblenden() {
      for (var x = 0; x < Slides.length; x = x + 1) {
        Slides[x].classList.remove('Anzeige');
        Slides[x].classList.remove('Einblenden');

      }
    }

    if (AktuelleSlideshow === SlideshowThema) {
      if (AktuellerSlide === 0) {
        AktuellerSlide = MaxSlides;

        AlleSlidesAusblenden();

        Slides[AktuellerSlide].classList.add('Anzeige');
        setTimeout(function(){
          Slides[AktuellerSlide].classList.add('Einblenden');
        }, 300);
      } else {
        AktuellerSlide = AktuellerSlide - 1;

        AlleSlidesAusblenden();

        Slides[AktuellerSlide].classList.add('Anzeige');
        setTimeout(function(){
          Slides[AktuellerSlide].classList.add('Einblenden');
        }, 300);
      }

    } else {
      AktuelleSlideshow = SlideshowThema;
      AktuellerSlide = MaxSlides;

      AlleSlidesAusblenden();

      Slides[AktuellerSlide].classList.add('Anzeige');
      setTimeout(function(){
        Slides[AktuellerSlide].classList.add('Einblenden');
      }, 300);
    }

    var IndexAktuellerSlide = document.querySelector('.Index[data-slideshow="' + SlideshowThema + '"] .IndexAktuell');
        IndexAktuellerSlide.innerHTML = AktuellerSlide + 1;
  });

}

//Rechts
for (var x = 0; x < Rechts.length; x = x + 1) {
  Rechts[x].addEventListener('click', function(e) {
    e.preventDefault();

    var SlideshowThema = this.dataset.slideshow;
    var Slides = document.querySelectorAll('.SlideshowInhalt section[data-slideshow="' + SlideshowThema + '"]');
    var MaxSlides = Slides.length
        MaxSlides = MaxSlides - 1;

    function AlleSlidesAusblenden() {
      for (var x = 0; x < Slides.length; x = x + 1) {
        Slides[x].classList.remove('Anzeige');
        Slides[x].classList.remove('Einblenden');

      }
    }

    if (AktuelleSlideshow === SlideshowThema) {
      if (AktuellerSlide === MaxSlides) {
        AktuellerSlide = 0;

        AlleSlidesAusblenden();

        Slides[AktuellerSlide].classList.add('Anzeige');
        setTimeout(function(){
          Slides[AktuellerSlide].classList.add('Einblenden');
        }, 300);
      } else {
        AktuellerSlide = AktuellerSlide + 1;

        AlleSlidesAusblenden();

        Slides[AktuellerSlide].classList.add('Anzeige');
        setTimeout(function(){
          Slides[AktuellerSlide].classList.add('Einblenden');
        }, 300);
      }

    } else {
      AktuelleSlideshow = SlideshowThema;
      AktuellerSlide = 0;

      AktuellerSlide = AktuellerSlide + 1;

      AlleSlidesAusblenden();

      Slides[AktuellerSlide].classList.add('Anzeige');
      setTimeout(function(){
        Slides[AktuellerSlide].classList.add('Einblenden');
      }, 300);
    }

    var IndexAktuellerSlide = document.querySelector('.Index[data-slideshow="' + SlideshowThema + '"] .IndexAktuell');
        IndexAktuellerSlide.innerHTML = AktuellerSlide + 1;
  });
}
