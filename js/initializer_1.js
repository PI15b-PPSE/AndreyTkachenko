var data_saver_1 = ["text", "time", "color"]; 
chrome.storage.local.get(data_saver_1, function(b_1) 
{ 
	var val_text = b_1["text"];
	var date_time = b_1["time"];
	var color = b_1["color"]; 
	document.getElementById("task_1").value = val_text;
	document.getElementById("date_time_1").value = date_time;
	document.getElementById("task_1").style.backgroundColor = color;
});