var data_saver = ["text_3", "time_3", "color_3"]; 
chrome.storage.local.get(data_saver, function(b) 
{ 
	var val_text = b["text_3"];
	var date_time = b["time_3"];
	var color = b["color_3"]; 
	document.getElementById("task_3").value = val_text;
	document.getElementById("date_time_3").value = date_time;
	document.getElementById("task_3").style.backgroundColor = color;
});