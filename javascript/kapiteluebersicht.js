var KoordinatenButton = document.querySelectorAll('.KoordinatenMatrix td');

function AlleBeschreibungenAusblenden() {
  var KapitelBeschreibung = document.querySelectorAll('.KapitelBeschreibung');

  for (var x = 0; x < KapitelBeschreibung.length; x = x + 1) {
    KapitelBeschreibung[x].classList.remove('Anzeige');
  }
}

for(var x = 0; x < KoordinatenButton.length; x = x + 1) {
  KoordinatenButton[x].addEventListener('click', function(e) {
    var KapitelKoordinate = this.dataset.koordinate;

    var KapitelBeschreibung = document.querySelector('.KapitelBeschreibung[data-koordinate="' + KapitelKoordinate + '"]');

    AlleBeschreibungenAusblenden();

    KapitelBeschreibung.classList.toggle('Anzeige');
  });
}
