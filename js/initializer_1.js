var data_saver = ["text_1", "time_1", "color_1"]; 
chrome.storage.local.get(data_saver, function(b) 
{ 
	var val_text = b["text_1"];
	var date_time = b["time_1"];
	var color = b["color_1"]; 
	document.getElementById("task_1").value = val_text;
	document.getElementById("date_time_1").value = date_time;
	document.getElementById("task_1").style.backgroundColor = color;
});