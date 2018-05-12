/**
* Слушатель для очистки задачи №1
* Работает с элементом clear_task_1
* Вызывает функцию dataCleaner_1
*/

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_1").addEventListener("click", dataCleaner_1);
});

/**
* Функция вызываемая слушателем для элемента clear_task_1
* Производит очистку данных, присваивает пустое значение указанным элементам
* Работа с содержимым/значением элементов task_1, date_time_1
*/

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
	window.location.reload();
}

/**
* Слушатель для очистки задачи №2
* Работает с элементом clear_task_2
* Вызывает функцию dataCleaner_2
*/

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_2").addEventListener("click", dataCleaner_2);
});

/**
* Функция вызываемая слушателем для элемента clear_task_2
* Производит очистку данных, присваивает пустое значение указанным элементам
* Работа с содержимым/значением элементов task_2, date_time_2
*/

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
	window.location.reload();
}

/**
* Слушатель для очистки задачи №3
* Работает с элементом clear_task_3
* Вызывает функцию dataCleaner_3
*/

document.addEventListener('DOMContentLoaded', function() 
{
  document.getElementById("clear_task_3").addEventListener("click", dataCleaner_3);
});

/**
* Функция вызываемая слушателем для элемента clear_task_3
* Производит очистку данных, присваивает пустое значение указанным элементам
* Работа с содержимым/значением элементов task_3, date_time_3
*/

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
	window.location.reload();
}