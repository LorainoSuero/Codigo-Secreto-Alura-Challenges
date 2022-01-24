/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/



function encriptar(texto){

	var resultado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");
	
	return resultado;
}