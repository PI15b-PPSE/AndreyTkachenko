var data_saver_3 = ["text", "time", "color"]; 
chrome.storage.local.get(data_saver_3, function(b_3) 
{ 
	var val_text = b_3["text"];
	var date_time = b_3["time"];
	var color = b_3["color"]; 
	document.getElementById("task_3").value = val_text;
	document.getElementById("date_time_3").value = date_time;
	document.getElementById("task_3").style.backgroundColor = color;
});