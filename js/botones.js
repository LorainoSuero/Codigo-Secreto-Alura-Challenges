var botonEncriptar = document.getElementById("btn-encriptar");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var botonCopiar = document.getElementById("btn-copy");


botonEncriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = encriptar(texto);
	document.getElementById("msg").value = texto;
});

botonDesencriptar.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = desencriptar(texto);
	document.getElementById("msg").value = texto;
});
