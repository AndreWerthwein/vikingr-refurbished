var DropdownButton = document.querySelectorAll('#ThemenNavigation section:not(:first-child) ul li:first-child');
alert(DropdownButton.length);
var Dropdown = document.querySelectorAll('#ThemenNavigation section:not(:first-child) ul');
var AktuellesDropdown = "";

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

function AlleDropdownReduzieren() {
  for (var x = 0; x < Dropdown.length; x = x + 1) {
    Dropdown[x].style.height = "35px";
  }
}

for (var x = 0; x < DropdownButton.length; x = x + 1) {
  DropdownButton[x].addEventListener('click', function() {
      //Kein e.preventDefault(); da sonst die absolute Verlinkung unterdrückt wird

      AlleDropdownReduzieren();

      var Navigation = this.dataset.navigation;

      var DropdownInhalt = document.querySelector('#ThemenNavigation section ul[data-navigation="' + Navigation + '"]');

      var AnzahlOptionen = document.querySelectorAll('#ThemenNavigation section ul[data-navigation="' + Navigation + '"] li').length;

        var VolleHoehe = AnzahlOptionen * 35;

      if (AktuellesDropdown === Navigation) {
          AlleDropdownReduzieren();
          AktuellesDropdown = "";
      } else {
          DropdownInhalt.style.height = VolleHoehe + "px";
          AktuellesDropdown = Navigation;
      }
  });
}

var NavigationThema = document.querySelectorAll('#ThemenNavigation section ul[data-navigation="Thema"] li');
var NavigationThemaTitel = document.querySelectorAll('#ThemenNavigation section ul[data-navigation="Thema"] li .Titel');

function AlleAuszeichnungenAusblenden() {
  for (var x = 0; x < NavigationThemaTitel.length; x = x + 1) {
    NavigationThemaTitel[x].classList.remove('Fett');
  }
}

//Elemente mit dem Index "1" sind Überschriften für die Navigation
//Elemente mit dem Index/über dem Index von "11" sind absolute Links
//"12" = Dokumentation, "13" = Quellen
for (var x = 1; x < 12; x = x + 1) {
  NavigationThema[x].addEventListener('click', function(e) {
    e.preventDefault();

    var ThemaKoordinaten = this.dataset.themennavigation;
        var ThemaKoordinatenX = ThemaKoordinaten.substring(0,1);
        var ThemaKoordinatenY = ThemaKoordinaten.substring(2,4);
            ThemaKoordinatenY = ThemaKoordinatenY.replace(" ", "");

    AlleAuszeichnungenAusblenden();

    //this.querySelector('.Titel').classList.add('Fett');

      PositionX = ThemaKoordinatenX * FensterBreite * (-1);

        if (ThemaKoordinatenY === "1") {
          ThemaKoordinatenY = 0;

          PositionY = ThemaKoordinatenY * FensterHoehe;
        } else if (ThemaKoordinatenY === "0") {
          ThemaKoordinatenY = 1;

          PositionY = ThemaKoordinatenY * FensterHoehe * (-1);
        } else if (ThemaKoordinatenY === "-1") {
          ThemaKoordinatenY = 2;

          PositionY = ThemaKoordinatenY * FensterHoehe * (-1);
        }

      Zeile.style.marginLeft = PositionX + "px";
      Zeile.style.marginTop = PositionY + "px";

      AlleDropdownReduzieren();
  });
}
