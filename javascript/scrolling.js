//Navigation
var ScrollingNavigation = document.querySelectorAll('#ScrollingNavigation i');
var ThemenNavigation = document.querySelector('#ThemenNavigation');

//Buttons
var ScrollingOben = document.querySelector('#ScrollingOben');
var ScrollingUnten = document.querySelector('#ScrollingUnten');
var ScrollingRechts = document.querySelector('#ScrollingRechts');
var ScrollingLinks = document.querySelector('#ScrollingLinks');
var ScrollingStart = document.querySelector('#ScrollingStart');

//Aktuelle Fenstergrößen erfassen
var FensterBreite = document.querySelector('html').clientWidth;
var FensterHoehe = document.querySelector('html').clientHeight;

//Bewegtes Element
var Zeile = document.querySelector('#Zeile');
var Spalten = document.querySelectorAll('.Spalte').length;

//Globale Variable für die Position
var PositionY = - FensterHoehe;
var PositionX = 0;

var EndeY = - (FensterHoehe * 2);
var EndeX = (FensterBreite * Spalten) * (-1) + FensterBreite;

function Zuruecksetzen() {
    Zeile.style.marginLeft = 0 + "px";
    Zeile.style.marginTop = - FensterHoehe + "px";

    PositionY = - FensterHoehe;
    PositionX = 0;

    ScrollingOben.classList.add('Anzeige');
    ScrollingUnten.classList.add('Anzeige');
    ScrollingRechts.classList.add('Anzeige');
    ScrollingLinks.classList.remove('Anzeige');
}

ScrollingOben.addEventListener('click', function(e) {
    e.preventDefault();

    PositionY = PositionY + FensterHoehe;

    Zeile.style.marginTop = PositionY + "px";

    if (PositionY === 0) {
        ScrollingOben.classList.remove('Anzeige');
    }
    ScrollingUnten.classList.add('Anzeige');
});

ScrollingUnten.addEventListener('click', function(e) {
    e.preventDefault();

    PositionY = PositionY - FensterHoehe;

    Zeile.style.marginTop = PositionY + "px";

    if (PositionY === EndeY) {
        ScrollingUnten.classList.remove('Anzeige');
    }
    ScrollingOben.classList.add('Anzeige');
});

ScrollingRechts.addEventListener('click', function(e) {
    e.preventDefault();

    PositionX = PositionX - FensterBreite;

    Zeile.style.marginLeft = PositionX + "px";

    if (PositionX === EndeX) {
        ScrollingRechts.classList.remove('Anzeige');
    }

    ScrollingLinks.classList.add('Anzeige');
});

ScrollingLinks.addEventListener('click', function(e) {
    e.preventDefault();

    PositionX = PositionX + FensterBreite;

    Zeile.style.marginLeft = PositionX + "px";


    if (PositionX === 0) {
        ScrollingLinks.classList.remove('Anzeige');
    }

    ScrollingRechts.classList.add('Anzeige');
});

ScrollingStart.addEventListener('click', function(e) {
    e.preventDefault();

    Zuruecksetzen();
});

//tastensteuerung
var Popup = document.querySelectorAll('.Popup');

document.onkeydown = function(Taste) {

    Taste = Taste || window.event;

    //Popups mit "Escape" schließen
    if (Taste.keyCode == 27) {
        PopupsSchliessen();
    }

    //Pfeiltaste "Oben"
    if (Taste.keyCode == 38) {
      if (PositionY != 0 || PositionY < 0) {
        PositionY = PositionY + FensterHoehe;
      }

      if (PositionY === 0) {
          ScrollingOben.classList.remove('Anzeige');
      }
      Zeile.style.marginTop = PositionY + "px";

      ScrollingUnten.classList.add('Anzeige');
    }

    //Pfeiltaste "Unten"
    if (Taste.keyCode == 40) {

      if (PositionY != EndeY || PositionY < EndeY) {
        PositionY = PositionY - FensterHoehe;
      }

      if (PositionY === EndeY) {
          ScrollingUnten.classList.remove('Anzeige');
      }
      Zeile.style.marginTop = PositionY + "px";

      ScrollingOben.classList.add('Anzeige');
    }

    //Pfeiltaste "Links"
    if (Taste.keyCode == 37) {

      if (PositionX != 0 || PositionX < 0) {
        PositionX = PositionX + FensterBreite;
      }

      if (PositionX === 0) {
          ScrollingLinks.classList.remove('Anzeige');
      }
      Zeile.style.marginLeft = PositionX + "px";

      ScrollingRechts.classList.add('Anzeige');
    }

    //Pfeiltaste "Rechts"
    if (Taste.keyCode == 39) {

      if (PositionX != EndeX || PositionX < EndeX) {
        PositionX = PositionX - FensterBreite;
      }

      if (PositionX === EndeX) {
          ScrollingRechts.classList.remove('Anzeige');
      }
      Zeile.style.marginLeft = PositionX + "px";

      ScrollingLinks.classList.add('Anzeige');
    }

    //Zurück zur Startseite mit der "Leertaste"
    if (Taste.keyCode == 32) {
      Zuruecksetzen();
    }
};

function PopupsSchliessen() {
    for(var x = 0; x < Popup.length; x = x + 1) {
        Popup[x].classList.remove('Anzeige');
    }
}
