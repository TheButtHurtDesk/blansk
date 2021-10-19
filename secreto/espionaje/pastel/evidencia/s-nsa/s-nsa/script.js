const cb = document.getElementById("cookieBanner");

window.onresize(e => {
    elpiernas.height = (window.innerHeight);
    elpiernas.width = (window.innerWidth);
})

function aceptas() {
    cb.classList.add("hidden");
    var snd = new Audio("elmatador2.mp3");
    snd.loop = true;
    snd.play();
}