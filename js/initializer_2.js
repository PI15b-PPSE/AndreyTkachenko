var data_saver_2 = ["text", "time", "color"]; 
chrome.storage.local.get(data_saver_2, function(b_2) 
{ 
	var val_text = b_2["text"];
	var date_time = b_2["time"];
	var color = b_2["color"]; 
	document.getElementById("task_2").value = val_text;
	document.getElementById("date_time_2").value = date_time;
	document.getElementById("task_2").style.backgroundColor = color;
});