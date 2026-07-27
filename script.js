const hero = document.querySelector(".hero");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

const openGift = document.getElementById("openGift");
const next = document.getElementById("next");

openGift.addEventListener("click", () => {

    hero.style.display = "none";

    letter.style.display = "flex";

    letter.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

next.addEventListener("click", () => {

    letter.style.display = "none";

    finalPage.style.display = "flex";

    finalPage.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* Create Falling Sakura Petals */

const petals = document.querySelector(".petals");

for(let i=0;i<35;i++){

    const petal=document.createElement("span");

    petal.style.left=Math.random()*100+"%";

    petal.style.animationDuration=(8+Math.random()*8)+"s";

    petal.style.animationDelay=(Math.random()*6)+"s";

    petal.style.opacity=Math.random();

    petal.style.transform=`scale(${0.5+Math.random()})`;

    petals.appendChild(petal);

}