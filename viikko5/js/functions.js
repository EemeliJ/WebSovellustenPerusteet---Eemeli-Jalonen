var isAnimationInProgress = false;

function heitäNoppa() {
    if (isAnimationInProgress) return;
    isAnimationInProgress = true;

    var noppaKuva = document.querySelector("#dice img");
    var numero = 1;
    var maxNumero = 6;


    var preloadImages = [];
    for (var i = 1; i <= maxNumero; i++) {
        var img = new Image();
        img.src = "./img/noppa" + i + ".png";
        preloadImages.push(img);
    }


    noppaKuva.src = "./img/noppa1.png";
    noppaKuva.style.transition = "transform 1s ease-in-out";
    noppaKuva.style.transform = "rotate(360deg)";

    var interval = setInterval(function () {
        noppaKuva.src = "./img/noppa" + numero + ".png";
        numero++;
        if (numero > maxNumero) {
            numero = 1;
        }
    }, 50);

    setTimeout(function () {
        clearInterval(interval);
        var heitettyNumero = Math.floor(Math.random() * 6) + 1;
        noppaKuva.src = "./img/noppa" + heitettyNumero + ".png";


        setTimeout(function () {
            noppaKuva.style.transition = "none";
            noppaKuva.style.transform = "rotate(0deg)";
            isAnimationInProgress = false;
        }, 1000);
    }, 1000);
}








