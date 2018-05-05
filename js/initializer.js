var data_saver = ["elem", "color"]; 
	chrome.storage.local.get(data_saver, function(b) 
	{ 
		var elem = b["elem"]; 
		var color = b["color"] 
		document.getElementById(elem).style.backgroundColor = color;
	});