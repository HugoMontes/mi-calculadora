alert('Bienvenido a mi calculadora...');
function sumar(){
	var a = document.getElementById("txtA").value;
	var b = document.getElementById("txtB").value;
	var c = parseInt(a) + parseInt(b);
	document.getElementById("resultado").innerHTML = c;
}
function restar(){
	var a = document.getElementById("txtA").value;
	var b = document.getElementById("txtB").value;
	var c = parseInt(a) - parseInt(b);
	document.getElementById("resultado").innerHTML = c;
}
function multiplicar(){
	var a = document.getElementById("txtA").value;
	var b = document.getElementById("txtB").value;
	var c = parseInt(a) * parseInt(b);
	document.getElementById("resultado").innerHTML = c;
}
function dividir(){
	var a = document.getElementById("txtA").value;
	var b = document.getElementById("txtB").value;
	var c = parseInt(a) / parseInt(b);
	document.getElementById("resultado").innerHTML = c;
}
