document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("save_task_1").addEventListener("click", saveData_1);
});

function saveData_1() 
{
	var txt = document.getElementById("task_1").value;
	var dt = document.getElementById("date_time_1").value;
	var cr = document.getElementById("task_1").style.backgroundColor;
	if(txt == "" || dt == "" || cr == "")
	{
		alert("Необходимо полностью заполнить данные для первой задачи!");
	}
	else
	{
		var data_saver = {};
		data_saver["text_1"] = txt;
		data_saver["time_1"] = dt;
		data_saver["color_1"] = cr;
		chrome.storage.local.set(data_saver);
		window.location.reload();
	}
}

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("save_task_2").addEventListener("click", saveData_2);
});

function saveData_2() 
{
	var txt = document.getElementById("task_2").value;
	var dt = document.getElementById("date_time_2").value;
	var cr = document.getElementById("task_2").style.backgroundColor;
	if(txt == "" || dt == "" || cr == "")
	{
		alert("Необходимо полностью заполнить данные для второй задачи!");
	}
	else
	{
		var data_saver = {};
		data_saver["text_2"] = txt;
		data_saver["time_2"] = dt;
		data_saver["color_2"] = cr;
		chrome.storage.local.set(data_saver);
		window.location.reload();
	}
}

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("save_task_3").addEventListener("click", saveData_3);
});

function saveData_3() 
{
	var txt = document.getElementById("task_3").value;
	var dt = document.getElementById("date_time_3").value;
	var cr = document.getElementById("task_3").style.backgroundColor;
	if(txt == "" || dt == "" || cr == "")
	{
		alert("Необходимо полностью заполнить данные для третьей задачи!");
	}
	else
	{
		var data_saver = {};
		data_saver["text_3"] = txt;
		data_saver["time_3"] = dt;
		data_saver["color_3"] = cr;
		chrome.storage.local.set(data_saver);
		window.location.reload();
	}
}