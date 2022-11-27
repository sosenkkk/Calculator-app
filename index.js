var c = document.querySelectorAll(".calculator button").length;
var ca = '';
var prevop = '';
var calc = '';
for (var i = 0; i < c; i++) {
	document.querySelectorAll(".calculator button")[i].addEventListener("click", function (i) {
		if (this.classList.contains("num")) {
			number(this.innerHTML);
		}
		else if (this.classList.contains('op')) {
			if (calc === '') {
				calc === this.innerHTML;
				operator(this.innerHTML);
			} else {
				var ret = evalute(calc);
				ca = ret;
				operator(this.innerHTML);
			}
		}
		else if (this.classList.contains('del')) {
			ca = ca.substring(0, ca.length - 1);
			document.getElementById("screen").value = ca;
		}
		else if (this.classList.contains('equal')) {
			if (ca === '') {
				document.getElementById("screen").value = ca;
			} else {
				document.getElementById("screen").value = eval(ca);
				ca = '';
			}
		} else if (this.classList.contains('res')) {
			ca = '';
			document.getElementById("screen").value = ca;
		}
	});
}
function number(oper) {
	prevop = '';
	ca = ca + oper;
	document.getElementById("screen").value = ca;
}

function operator(oper) {
	if ((ca !== '') && (ca !== "+" && ca !== '-')) {
		if (prevop === '') {
			ca = ca + oper;
			document.getElementById("screen").value = ca;
			prevop = oper;
		} 
		else if((prevop==='*'|| prevop==='/') && (oper==='-'|| oper==='+') ){
			console.log('h');
			ca = ca + oper;
			document.getElementById("screen").value = ca;
		}
		else {
			ca = ca.substring(0, ca.length - 1) + oper;
			document.getElementById("screen").value = ca;
			prevop = oper;
		}
	} else {
		if ((oper === '-' || oper === '+') && (ca !== "+" || ca !== '-')) {
			ca = ca.substring(0, ca.length - 1) + oper;
			document.getElementById("screen").value = ca;
		}
		else {
			ca = "NaN";
			document.getElementById("screen").value = ca;
			ca = "";
		}
	}
}





document.getElementById('myRange').addEventListener('input', function() {
	console.log(document.getElementById('myRange').value);
});