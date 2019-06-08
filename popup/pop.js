browser.tabs.executeScript(null, { 
	file: "/content_scripts/pason.js" 
  });
 
 document.addEventListener("click", (e) => {

	
	

	if (e.target.classList.contains("passon")) {
		
	  
		  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		  gettingActiveTab.then((tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {comand: 'on'});
		  });
  
	}
	else if (e.target.classList.contains("passof")) {
	
	  
		  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		  gettingActiveTab.then((tabs) => {
			browser.tabs.sendMessage(tabs[0].id, {comand: 'off'});
		  });
	}
  });