let inp= document.querySelectorAll('input');

function PasOff() {
	alert("Паролі буде показано");
	for (let index = 0; index < inp.length; index++) {
	
		if (inp[index].type == "password") {
			
			inp[index].type = "text";
			inp[index].className += " pasof";
			
		}
		
		
	}	
}

function PasOn() {
	alert("Паролі буде приховано");
	for (let index = 0; index < inp.length; index++) {
	
		if (inp[index].classList.contains("pasof")) {
			
			inp[index].type = "password";
			
			
		}
		
		
	}	
}
	
PasOff();
