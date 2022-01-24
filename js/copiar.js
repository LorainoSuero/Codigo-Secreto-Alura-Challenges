

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#msg");
    texto.select();
    document.execCommand('copy');
	alert("Copiado!");

});