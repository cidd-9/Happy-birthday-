function showLetter() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showSurprise() {
    document.getElementById("letter").style.display = "none";
    document.getElementById("surprise").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}