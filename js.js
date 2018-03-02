function bon (){
	var sum = Number(prompt("Введите число"));
	var a = 1;
	var b = 1;
	var c;
	for (var i = 3; i<= sum; i++) {
			c = a + b;
			a = b;
			b = c;
	}
	alert(b);
}

bon();