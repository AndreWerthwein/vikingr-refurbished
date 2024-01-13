var Button = document.querySelectorAll('.RechtlicheVerweise div span');
var ButtonText = document.querySelectorAll('.ButtonText');
var TextVerweise = document.querySelectorAll('.TextVerweis');
var Popup = document.querySelectorAll('.Popup');

var PopupAnzeige = false;
var PopupThemaVergangenheit = "";

var SchliessenButton = document.querySelectorAll('.Schliessen');

var RechtlicheVerweise = document.querySelectorAll('.RechtlicheVerweise');
var OnPageLinks = document.querySelectorAll('.ButtonText');

var GoetterVonAsgardSumme = document.querySelectorAll('.SlideshowInhalt[data-slideshow="GoetterVonAsgard"] section').length;
var GoetterVonAsgardAusgabeSumme = document.querySelector('.Index[data-slideshow="GoetterVonAsgard"] .IndexSumme');

var ArtefakteVonAsgardSumme = document.querySelectorAll('.SlideshowInhalt[data-slideshow="ArtefakteVonAsgard"] section').length;
var ArtefakteVonAsgardAusgabeSumme = document.querySelector('.Index[data-slideshow="ArtefakteVonAsgard"] .IndexSumme');


//Fallback - Beim Laden der Website werden alle absoluten Links, gegen Popups und ähnliche Verweise getauscht.
//Wenn Javascript im Browser unterdrückt wird, sind nur absolute Links verfügbar.
window.onload = function() {
    RechtlicheVerweiseMenueTauschen();
    TextVerweiseTauschen();

    document.querySelector('.Popup[data-popup="Steuerung"]').classList.toggle('Anzeige');

      GoetterVonAsgardAusgabeSumme.innerHTML = GoetterVonAsgardSumme;
      ArtefakteVonAsgardAusgabeSumme.innerHTML = ArtefakteVonAsgardSumme;
}

function RechtlicheVerweiseMenueTauschen() {
    for (var x = 0; x < RechtlicheVerweise.length; x = x + 1) {
        RechtlicheVerweise[x].classList.toggle('Anzeige');
    }
}

function TextVerweiseTauschen() {
    for (var x = 0; x < TextVerweise.length; x = x + 1) {
        TextVerweise[x].classList.toggle('Eingliedern');
    }
}


function PopupsSchliessen() {
    for(var x = 0; x < Popup.length; x = x + 1) {
        Popup[x].classList.remove('Anzeige');

    }
}

for (var x = 0; x < Button.length; x = x + 1) {
    Button[x].addEventListener('click', function(e) {
        e.preventDefault();

        var PopupThema = this.dataset.popup;

        if (PopupAnzeige === true && PopupThema === PopupThemaVergangenheit) {

            PopupsSchliessen();

            PopupAnzeige = false;
            PopupThemaVergangenheit = "";
        } else {
            var PopupAktuell = document.querySelector('.Popup[data-popup="' + PopupThema + '"]');

            PopupsSchliessen();

            PopupAktuell.classList.toggle('Anzeige');

            PopupAnzeige = true;
            PopupThemaVergangenheit = PopupThema;
        }
    });
}

for (var x = 0; x < ButtonText.length; x = x + 1) {
    ButtonText[x].addEventListener('click', function(e) {
        e.preventDefault();

        var PopupThema = this.dataset.popup;

        if (PopupAnzeige === true && PopupThema === PopupThemaVergangenheit) {

            PopupsSchliessen();

            PopupAnzeige = false;
            PopupThemaVergangenheit = "";
        } else {
            var PopupAktuell = document.querySelector('.Popup[data-popup="' + PopupThema + '"]');

            PopupsSchliessen();

            PopupAktuell.classList.toggle('Anzeige');

            PopupAnzeige = true;
            PopupThemaVergangenheit = PopupThema;
        }
    });
}

for (var x = 0; x < SchliessenButton.length; x = x + 1) {
    SchliessenButton[x].addEventListener('click', function(e) {
        e.preventDefault();

        PopupsSchliessen();
    });
}

function AlleBeschreibungenAusblenden() {
  var KapitelBeschreibung = document.querySelectorAll('.KapitelBeschreibung');

  for (var x = 0; x < KapitelBeschreibung.length; x = x + 1) {
    KapitelBeschreibung[x].classList.remove('Anzeige');
  }
}

function PositionsBestimmung() {
  var Zeile = document.querySelector('#Zeile');
  var FensterBreite = document.querySelector('html').clientWidth;
  var FensterHoehe = document.querySelector('html').clientHeight;

  var AusgabeXKoordinate = document.querySelector('#XKoordinate');
  var AusgabeYKoordinate = document.querySelector('#YKoordinate');

  var XVerschiebung = Zeile.currentStyle || window.getComputedStyle(Zeile);
      XVerschiebung = XVerschiebung.marginLeft;
      XVerschiebung = XVerschiebung.replace("px", "");

  var YVerschiebung = Zeile.currentStyle || window.getComputedStyle(Zeile);
      YVerschiebung = YVerschiebung.marginTop;
      YVerschiebung = YVerschiebung.replace("px", "");

  var XKoordinate = (XVerschiebung / FensterBreite) * (-1);
      AusgabeXKoordinate.innerHTML = XKoordinate;

  var YKoordinate = YVerschiebung / FensterHoehe;

      if (YKoordinate > -1 || YKoordinate === 0) {
        YKoordinate = "&nbsp;" + 1;
      } else if (YKoordinate < -1 && YKoordinate > -2 || YKoordinate === -1) {
          YKoordinate = "&nbsp;" + 0;
      } else if (YKoordinate < -2 || YKoordinate === -2) {
        YKoordinate = -1;
      }
      AusgabeYKoordinate.innerHTML = YKoordinate;

  var KurzBeschreibungKoordinaten = XKoordinate + "," + YKoordinate;
      KurzBeschreibungKoordinaten = KurzBeschreibungKoordinaten.replace("&nbsp;", "");

  var KurzBeschreibung = document.querySelector('.KapitelBeschreibung[data-koordinate="' + KurzBeschreibungKoordinaten + '"]');

      AlleBeschreibungenAusblenden();

      KurzBeschreibung.classList.toggle('Anzeige');
}

var KartePopupButton = document.querySelector('#ThemenNavigation section[data-popup="Karte"]');

KartePopupButton.addEventListener('click', function(e) {
  e.preventDefault();

  PositionsBestimmung();

  var KartePopup = document.querySelector('.Popup[data-popup="Karte"]');

  var PopupThema = this.dataset.popup;

  if (PopupAnzeige === true && PopupThemaVergangenheit === PopupThema) {
    PopupsSchliessen();

    PopupAnzeige = false;
    PopupThemaVergangenheit = "";
  } else {
    PopupsSchliessen();

    KartePopup.classList.toggle('Anzeige');

    PopupAnzeige = true;
    PopupThemaVergangenheit = PopupThema;
  }
});

var SteuerungPopupButton = document.querySelector('#ThemenNavigation section[data-popup="Steuerung"]');

SteuerungPopupButton.addEventListener('click', function(e) {
  e.preventDefault();

  PositionsBestimmung();

  var SteuerungPopup = document.querySelector('.Popup[data-popup="Steuerung"]');

  var PopupThema = this.dataset.popup;

  if (PopupAnzeige === true && PopupThemaVergangenheit === PopupThema) {
    PopupsSchliessen();

    PopupAnzeige = false;
    PopupThemaVergangenheit = "";
  } else {
    PopupsSchliessen();

    SteuerungPopup.classList.toggle('Anzeige');

    PopupAnzeige = true;
    PopupThemaVergangenheit = PopupThema;
  }
});
