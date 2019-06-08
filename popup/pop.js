  document.addEventListener("click", (e) => {


	browser.tabs.executeScript(null, { 
		file: "/content_scripts/pason.js" 
	  });
  
	  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	  gettingActiveTab.then((tabs) => {
		browser.tabs.sendMessage(tabs[0].id, {comand: 'on'});
	  });

	if (e.target.classList.contains("beast")) {
	 
  
	}
	else if (e.target.classList.contains("clear")) {
	  browser.tabs.reload();
	  window.close();
	}
  });