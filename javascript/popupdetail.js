var Bilder = document.querySelectorAll('img');
var PopupDetailBild = document.querySelector('#DetailBild');
var DetailBild = document.querySelector('#DetailBild img');
var Schliessen = document.querySelector('#DetailBild i');

for (var x = 0; x < Bilder.length; x = x + 1) {
    Bilder[x].addEventListener('click', function(e) {
        e.preventDefault();

        var Quelle = this.src;

            DetailBild.src = Quelle;
            PopupDetailBild.classList.toggle('Anzeige');

            var BildBreite = DetailBild.clientWidth;
            var BildHoehe = DetailBild.clientHeight;
            var FensterBreite = document.querySelector('html').clientWidth;
            var FensterHoehe = document.querySelector('html').clientHeight;

            var VerschiebungBreite = (FensterBreite - BildBreite) / 2;
                VerschiebungBreite = VerschiebungBreite.toString();

            var VerschiebungHoehe = (FensterHoehe - BildHoehe) / 2;
                VerschiebungHoehe = VerschiebungHoehe.toString();

            DetailBild.style.marginLeft = VerschiebungBreite + "px";
            DetailBild.style.marginTop = VerschiebungHoehe + "px";
    });
}

Schliessen.addEventListener('click', function(e) {
    e.preventDefault();

      PopupDetailBild.classList.remove('Anzeige');

    DetailBild.src = "";
});
