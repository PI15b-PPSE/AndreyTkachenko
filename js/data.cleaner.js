document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clear_task_1").addEventListener("click", dataCleaner_1);
});

function dataCleaner_1() {
  var data_saver_1 = {};
		data_saver_1["text"] = "";
		data_saver_1["time"] = "";
		data_saver_1["color"] = "";
		chrome.storage.local.set(data_saver_1);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clear_task_2").addEventListener("click", dataCleaner_2);
});

function dataCleaner_2() {
  var data_saver_1 = {};
		data_saver_1["text"] = "";
		data_saver_1["time"] = "";
		data_saver_1["color"] = "";
		chrome.storage.local.set(data_saver_1);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clear_task_3").addEventListener("click", dataCleaner_3);
});

function dataCleaner_3() {
  var data_saver_1 = {};
		data_saver_1["text"] = "";
		data_saver_1["time"] = "";
		data_saver_1["color"] = "";
		chrome.storage.local.set(data_saver_1);
	document.getElementById($(this).data('text_area')).value = "";
	document.getElementById($(this).data('date_time')).value = "";
	document.getElementById($(this).data('text_area')).style.backgroundColor = "";
}