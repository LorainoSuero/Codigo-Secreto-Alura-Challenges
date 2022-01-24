/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



function desencriptar(texto){

	var resultado = texto.replace(/(enter)/ig, "e").replace(/(imes)/ig, "i").replace(/(ai)/ig, "a").replace(/(ober)/ig, "o").replace(/(ufat)/ig, "u");
	
	return resultado;
}