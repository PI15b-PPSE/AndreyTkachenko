var data_saver = ["text_2", "time_2", "color_2"]; 
chrome.storage.local.get(data_saver, function(b) 
{ 
	var val_text = b["text_2"];
	var date_time = b["time_2"];
	var color = b["color_2"]; 
	
	if(val_text == "" || date_time == "" || color == "")
	{
		document.getElementById("task_2").value = "";
		document.getElementById("date_time_2").value = "";
		document.getElementById("task_2").style.backgroundColor = "#fff";
	}
	else
	{
		document.getElementById("task_2").value = val_text;
		document.getElementById("date_time_2").value = date_time;
		document.getElementById("task_2").style.backgroundColor = color;
	}
});