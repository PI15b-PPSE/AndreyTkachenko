$(document).ready(function(){
    $('a').click(function(e){
        e.preventDefault();
		document.getElementById($(this).data('arg1')).style.backgroundColor = $(this).data('arg2');;
	});
});