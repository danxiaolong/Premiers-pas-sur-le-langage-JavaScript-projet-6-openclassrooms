const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const flecheDroite = document.querySelector(".arrow_right")
const flecheGauche = document.querySelector(".arrow_left")
const dotsDivParent = document.querySelector(".dots")
const dotsList = []
const imagesBanniere = document.querySelector(".banner-img");
const imagesTextes = document.querySelector("#banner p");
let position = 0

console.log(position);

for (let i=0 ; i < slides.length ; i++ ) {
	let dotsDivChild = document.createElement("div") ;
	dotsDivChild.classList.add("dot") ;
	dotsDivParent.appendChild(dotsDivChild) ;
	dotsList.push(dotsDivChild)
}

mettreAJourBanniere();
whereIsDot(position, dotsList);

function whereIsDot(position, dotsList ) {
	dotsList.forEach(dot => dot.classList.remove("dot_selected"));
	dotsList[position].classList.add("dot_selected")
}

function mettreAJourBanniere() {
    imagesBanniere.src = "./assets/images/slideshow/" + slides[position].image;
    imagesTextes.innerHTML = slides[position].tagLine;
}


flecheDroite.addEventListener("click", () => {
    console.log("vous avez appuiyer sur le bouton droit du carouselle") ;
	if (position === slides.length - 1) {
        position = 0; 
    } else {
        position++; 
    }
	whereIsDot(position, dotsList);
	console.log(position);
	mettreAJourBanniere();
});

flecheGauche.addEventListener("click", () => {
    console.log("vous avez appuiyer sur le bouton gauche du carouselle")
	if (position === 0) {
		position= slides.length-1 ;
	} else {
		position--;
	}
	whereIsDot(position, dotsList);
	console.log(position);
	mettreAJourBanniere();
});

