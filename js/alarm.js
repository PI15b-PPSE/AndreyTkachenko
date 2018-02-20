<script type="text/javascript">
function yours_function(){
alert('Ваше сообщение');
}

function timer(){
var obj=document.getElementById('time');
obj.innerHTML--;
if(obj.innerHTML==0) {
    yours_function(); 
    obj.innerHTML=10; 
    setTimeout(timer,1000);
}
else{ setTimeout(timer,1000); }
}

setTimeout(timer,1000);
</script>

<span id="time">10</span>