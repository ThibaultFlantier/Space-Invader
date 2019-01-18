window.onload=function(){
var invader = document.getElementsByClassName('invader');
var sonTir = document.getElementById('audio1');
var vaisseau = document.getElementById('vaisseau');
  ///////
///J'apelle les variables qui vont permettrent d'agir
///sur les elements selectionnés 
///on utilise getElement sur l'objet document (le DOM)
///////
//
//
//
//////////
///
///
window.addEventListener('keydown', function(e){

if (e.keyCode==37){
	if (vaisseau.offsetLeft <=1800){
	vaisseau.style.left=vaisseau.offsetLeft -10 + 'px';
	}
}
if (e.keyCode == 39) {
	if(vaisseau.offsetLeft>=20){
	vaisseau.style.left=vaisseau.offsetLeft +10 + 'px';
	}

}
if(e.keyCode==32){
	sonTir.play();
	createMissile();
	

}
///addEvenListener appliqué à l'objet window permet de 
///mettre en place une fonction à appeler chaque fois 
///que l'evenement spécifié (ici 'keydown') est demandé
///ici donc si la touche 37 est préssée alors la
///position du vaisseau par rapport à sa gauche(
/// dans le style css) sera égale sa position actuelle
/// moins 10 pixels par rapport à la position du coin
/// superieur gauche de l'objet
///
///

})

console.log(invader);
console.log(vaisseau);

function createMissile(){
	var missile = document.createElement('img');
	missile.src = 'img/rocket.png';
	missile.classList.add('mabite');
	missile.style.left = vaisseau.offsetLeft + 25 + 'px';
	setInterval(function(){
		missile.style.top = missile.offsetTop - 10 +'px';
		console.log(missile.offsetTop);
	if(missile.offsetLeft >= (invader.offsetLeft - 50) && 
	missile.offsetLeft <= (invader.offsetLeft + 50) &&
               missile.offsetTop >= (invader.offsetTop - 50) && 
               missile.offsetTop <= (invader.offsetTop + 50)) {
	missile.src = 'img/explosion.png';
}
	}, 20);
/////////////////////////////////////////////////////////
///Pour créer la fonction createMissile je déclare une 
///variable missile pour créer une image, je spécifie la 
///source de l'image et lui donne une classe (chaque missile
///fera partie de cette classe), je définie la place du
///missile par rapport à celle du vaisseau pour qu'il semble 
///partir du vaisseau,
///setInterval permet d'appeler une fonction de manière
///répétée 
	document.getElementById('idmissile').appendChild(missile);
}


//////COLLISION///////
x=setInterval(function(){
	var invader = document.getElementsByClassName('invader');
	var missiles = document.getElementsByClassName('mabite');
	for (var i=0; x < missiles.length; i++ ) {
missiles[i].style.top=missiles[i].offsetTop;
for (var j=0; j<invader.length; j++) {
	var collision = //regarder collision mozzila dev ;
	if (collision) {
		alert('boom');
	};
	
	}
}},20);

		

}


