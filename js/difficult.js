$(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
		document.getElementById($(this).data('arg1')).style.backgroundColor = $(this).data('arg2');
		var data_saver = {};
		data_saver["elem"] = $(this).data('arg1');
		data_saver["color"] = $(this).data('arg2');
		chrome.storage.local.set(data_saver);
	});
});