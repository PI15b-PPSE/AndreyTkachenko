document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_1").addEventListener("click", saveData_1);
});

function saveData_1() {
  var data_saver_1 = {};
		data_saver_1["text"] = document.getElementById("task_1").value;
		data_saver_1["time"] = document.getElementById("date_time_1").value;
		data_saver_1["color"] = document.getElementById("task_1").style.backgroundColor;
		chrome.storage.local.set(data_saver_1);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_2").addEventListener("click", saveData_2);
});

function saveData_2() {
  var data_saver_2 = {};
		data_saver_2["text"] = document.getElementById("task_2").value;
		data_saver_2["time"] = document.getElementById("date_time_2").value;
		data_saver_2["color"] = document.getElementById("task_2").style.backgroundColor;
		chrome.storage.local.set(data_saver_2);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("save_task_3").addEventListener("click", saveData_3);
});

function saveData_3() {
  var data_saver_3 = {};
		data_saver_3["text"] = document.getElementById("task_3").value;
		data_saver_3["time"] = document.getElementById("date_time_3").value;
		data_saver_3["color"] = document.getElementById("task_3").style.backgroundColor;
		chrome.storage.local.set(data_saver_3);
}