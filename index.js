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
	theme(document.getElementById('myRange').value);
});

function theme(value){
	console.log(value);
	switch (value) {
		case "0":
			document.querySelector("body").classList.remove("theme2body");
			document.getElementById("screen").classList.remove("theme2screen");
			for(var i=0; i< document.querySelectorAll("button").length; i++){
				document.querySelectorAll("button")[i].classList.remove("theme2button")
			}
			document.querySelector(".res").classList.remove("theme2res");
			document.querySelector(".equal").classList.remove("theme2equal");
			document.querySelector(".del").classList.remove("theme2del");
			document.querySelector(".title").classList.remove("theme2tit");
			document.querySelector(".calculator").classList.remove("theme2calculator");
			document.querySelector(".slider").classList.remove("theme2slider");
			document.querySelector("body").classList.remove("theme3body");
			document.getElementById("screen").classList.remove("theme3screen");
			for(var i=0; i< document.querySelectorAll("button").length; i++){
				document.querySelectorAll("button")[i].classList.remove("theme3button")
			}
			document.querySelector(".res").classList.remove("theme3res");
			document.querySelector(".equal").classList.remove("theme3equal");
			document.querySelector(".del").classList.remove("theme3del");
			document.querySelector(".title").classList.remove("theme3tit");
			document.querySelector(".calculator").classList.remove("theme3calculator");
			document.querySelector(".slider").classList.remove("theme3slider");
			console.log("0");
			break;
		case "1":
			console.log("1");
			document.querySelector("body").classList.add("theme2body");
			document.getElementById("screen").classList.add("theme2screen");
			for(var i=0; i< document.querySelectorAll("button").length; i++){
				document.querySelectorAll("button")[i].classList.add("theme2button")
			}
			document.querySelector(".res").classList.add("theme2res");
			document.querySelector(".equal").classList.add("theme2equal");
			document.querySelector(".del").classList.add("theme2del");
			document.querySelector(".title").classList.add("theme2tit");
			document.querySelector(".calculator").classList.add("theme2calculator");
			document.querySelector(".slider").classList.add("theme2slider");		
			document.querySelector("body").classList.remove("theme3body");
			document.getElementById("screen").classList.remove("theme3screen");
			for(var i=0; i< document.querySelectorAll("button").length; i++){
				document.querySelectorAll("button")[i].classList.remove("theme3button")
			}
			document.querySelector(".res").classList.remove("theme3res");
			document.querySelector(".equal").classList.remove("theme3equal");
			document.querySelector(".del").classList.remove("theme3del");
			document.querySelector(".title").classList.remove("theme3tit");
			document.querySelector(".calculator").classList.remove("theme3calculator");
			document.querySelector(".slider").classList.remove("theme3slider");
		
			break;
		case "2":
			console.log("2");
			document.querySelector("body").classList.add("theme3body");
			document.getElementById("screen").classList.add("theme3screen");
			for(var i=0; i< document.querySelectorAll("button").length; i++){
				document.querySelectorAll("button")[i].classList.add("theme3button")
			}
			document.querySelector(".res").classList.add("theme3res");
			document.querySelector(".equal").classList.add("theme3equal");
			document.querySelector(".del").classList.add("theme3del");
			document.querySelector(".title").classList.add("theme3tit");
			document.querySelector(".calculator").classList.add("theme3calculator");
			document.querySelector(".slider").classList.add("theme3slider");		
			
			break;
	
		default:
			break;
	}
}