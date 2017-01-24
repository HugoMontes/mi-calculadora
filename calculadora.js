
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
function potencia(){
	var a = document.getElementById("txtA").value;
	var b = document.getElementById("txtB").value;
	var c = Math.pow(parseInt(a),parseInt(b));
	document.getElementById("resultado").innerHTML = c;
}
function factorial(){
	var a = parseInt(document.getElementById("txtA").value);
	var b = parseInt(document.getElementById("txtB").value);
	var i,fa=1,fb=1;
	for(i=1;i<=a;i++){
		fa=fa*i;
	}
	for(i=1;i<=b;i++){
		fb=fb*i;
	}
	var c=a+"! = "+fa+"<br/>";
	c+=b+"! = "+fb+"<br/>";
	document.getElementById("resultado").innerHTML = c;
}