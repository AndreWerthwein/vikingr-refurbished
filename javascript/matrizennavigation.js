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

var MatrizenNavigation = document.querySelectorAll('.MatrizenNavigation');

var Popup = document.querySelectorAll('.Popup');

function PopupsSchliessen() {
    for(var x = 0; x < Popup.length; x = x + 1) {
        Popup[x].classList.remove('Anzeige');

    }
}

for (var x = 0; x < MatrizenNavigation.length; x = x + 1) {
  MatrizenNavigation[x].addEventListener('click', function(e) {
    e.preventDefault();

    PopupsSchliessen();
    
      var MatrizenKoordinaten = this.dataset.matrizennavigation;
        var MatrizenKoordinatenX = MatrizenKoordinaten.substring(0,1);
        var MatrizenKoordinatenY = MatrizenKoordinaten.substring(2,4);
            MatrizenKoordinatenY = MatrizenKoordinatenY.replace(" ", "");

            PositionX = MatrizenKoordinatenX * FensterBreite * (-1);

              if (MatrizenKoordinatenY === "1") {
                MatrizenKoordinatenY = 0;

                PositionY = MatrizenKoordinatenY * FensterHoehe;
              } else if (MatrizenKoordinatenY === "0") {
                MatrizenKoordinatenY = 1;

                PositionY = MatrizenKoordinatenY * FensterHoehe * (-1);
              } else if (MatrizenKoordinatenY === "-1") {
                MatrizenKoordinatenY = 2;

                PositionY = MatrizenKoordinatenY * FensterHoehe * (-1);
              }

            Zeile.style.marginLeft = PositionX + "px";
            Zeile.style.marginTop = PositionY + "px";
  });
}
