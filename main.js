var graus = prompt("Digite os Graus Celsius para conversão");
//var chute = parseInt(document.getElementById("valor").value);
var elementoResultado = document.getElementById("resultado");

var fahrenheit = (graus* (9/5)) + 32;
elementoResultado.innerHTML = "O valor convertido em fahrenheit é: " + fahrenheit;


