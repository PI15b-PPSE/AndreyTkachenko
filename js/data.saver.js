document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_1").addEventListener("click", saveData_1);
});

function saveData_1() {
  var data_saver = {};
		data_saver["text_1"] = document.getElementById("task_1").value;
		data_saver["time_1"] = document.getElementById("date_time_1").value;
		data_saver["color_1"] = document.getElementById("task_1").style.backgroundColor;
		chrome.storage.local.set(data_saver);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_2").addEventListener("click", saveData_2);
});

function saveData_2() {
  var data_saver = {};
		data_saver["text_2"] = document.getElementById("task_2").value;
		data_saver["time_2"] = document.getElementById("date_time_2").value;
		data_saver["color_2"] = document.getElementById("task_2").style.backgroundColor;
		chrome.storage.local.set(data_saver);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_3").addEventListener("click", saveData_3);
});

function saveData_3() {
  var data_saver = {};
		data_saver["text_3"] = document.getElementById("task_3").value;
		data_saver["time_3"] = document.getElementById("date_time_3").value;
		data_saver["color_3"] = document.getElementById("task_3").style.backgroundColor;
		chrome.storage.local.set(data_saver);
}