var SprachenNavigation = document.querySelectorAll('ul[data-navigation="Sprache"] li:not(:first-child)');

var DeutscheElemente = document.querySelectorAll('[lang="de"]');
var EnglischeElemente = document.querySelectorAll('[lang="en"]');

function AlleAuszeichnungenEntfernen() {
  for (var x = 0; x < SprachenNavigation.length; x = x + 1) {
    SprachenNavigation[x].classList.remove('Fett');
  }
}
function Deutsch() {
  for (var x = 0; x < EnglischeElemente.length; x = x + 1) {
    EnglischeElemente[x].classList.remove('AktuelleSprache');
  }

  for (var x = 0; x < DeutscheElemente.length; x = x + 1) {
    DeutscheElemente[x].classList.add('AktuelleSprache');
  }
}

function Englisch() {
  for (var x = 0; x < DeutscheElemente.length; x = x + 1) {
    DeutscheElemente[x].classList.remove('AktuelleSprache');
  }

  for (var x = 0; x < EnglischeElemente.length; x = x + 1) {
    EnglischeElemente[x].classList.add('AktuelleSprache');
  }
}

for (var x = 0; x < SprachenNavigation.length; x = x + 1) {
  SprachenNavigation[x].addEventListener('click', function(e) {
    e.preventDefault();

    var GewaehlteSprache = this.dataset.sprache;

    if (GewaehlteSprache === "Deutsch") {
      Deutsch();

      AlleAuszeichnungenEntfernen()
      this.classList.add('Fett');
    } else {
      Englisch();

      AlleAuszeichnungenEntfernen()
      this.classList.add('Fett');
    }
  })
}
