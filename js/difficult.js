/**
* Обработка нажатия на ссылку <a>
* Принажатии на ссылку передаётся её id и цвет
* Данная функция принимает эти данные и назначает их элементу
* $(this).data('arg1') - id элемента
* $(this).data('arg2') - назначаемый цвет
*/

$(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
		document.getElementById($(this).data('arg1')).style.backgroundColor = $(this).data('arg2');
	});
});