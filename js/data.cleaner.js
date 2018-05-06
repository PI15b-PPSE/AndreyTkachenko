document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_1").addEventListener("click", dataCleaner_1);
});

function dataCleaner_1() 
{
  var data_saver = {};
		data_saver["text_1"] = "";
		data_saver["time_1"] = "";
		data_saver["color_1"] = "";
		chrome.storage.local.set(data_saver);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_2").addEventListener("click", dataCleaner_2);
});

function dataCleaner_2() 
{
  var data_saver = {};
		data_saver["text_2"] = "";
		data_saver["time_2"] = "";
		data_saver["color_2"] = "";
		chrome.storage.local.set(data_saver);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_3").addEventListener("click", dataCleaner_3);
});

function dataCleaner_3() 
{
  var data_saver = {};
		data_saver["text_3"] = "";
		data_saver["time_3"] = "";
		data_saver["color_3"] = "";
		chrome.storage.local.set(data_saver);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}