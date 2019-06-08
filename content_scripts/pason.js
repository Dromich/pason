
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
	


(function () {	
	browser.runtime.onMessage.addListener((message) => {

		console.log(message.comand)
		if (message.comand === "on") {
	
			PasOff()
	
		}else if(message.comand === "copy"){
			
	
		}else if (message.comand === "off") {
			PasOn()	
		}
	});


})();