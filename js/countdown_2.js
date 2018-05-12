/**
* Функция обратного отсчёта таймера
* Берём переданные аргументы, производим инициализацию
* передаём аргументы в переменные и начинаем отсчёт
* по окончанию отсчёта воспроизводим звук и выводим сообщение в указаном месте
* работа с парамертами 
* elm - наш таймер на форме, точнее его графическое представление
* tl - дедлайн, который загружается из локального хранилища
* mes - сообщение о завершении отсчёта, воспроизведение звукового оповещения
*/

function CountdownTimer(elm,tl,mes)
{
	this.initialize.apply(this,arguments);
}
CountdownTimer.prototype=
{
	 initialize:function(elm,tl,mes) 
	 {
		  this.elem = document.getElementById(elm);
		  this.tl = tl;
		  this.mes = mes;
	 },countDown:function()
	 {
		  var timer='';
		  var today=new Date();
		  var day=Math.floor((this.tl-today)/(24*60*60*1000));
		  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
		  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
		  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
		  var me=this;

		  if( ( this.tl - today ) > 0 )
		  {
			   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Дней</div><span class="number day">'+day+'</span></span>';
			   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Часов</div><span class="number hour">'+hour+'</span></span>';
			   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Минут</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
			   this.elem.innerHTML = timer;
			   tid = setTimeout( function(){me.countDown();},10 );
		  }
		  else
		  {
			  this.elem.innerHTML = this.mes;
			  return;
		  }
	 },addZero:function(num){ return ('0'+num).slice(-2); }
}

/**
* Главная функция, которая запускает работу библиотеки
* Работа с значением таймера_2
* Функция берёт значение дляя обратного отсчёта из локального хранилища расширения
* Затем проверяет, если там есть значение не равное пустой строке, то
* назначаем дедлайн и запускаем обратный отсчёт таймера до указанной даты и времени
* по окончанию отсчёта будет звуковое и письменное уведомление
* если значение равно пустой строке, то выставляем нули в таймере и даём понять, что считать ещё нечего.
*/

function CDT()
{
	var data_saver = ["time_2"]; 
	chrome.storage.local.get(data_saver, function(b) 
	{
		var tl = b["time_2"];
		if(tl == "")
		{
			this.elem = document.getElementById("CDT_2");
			var val = "";
			val += '<span class="number-wrapper"><div class="line"></div><div class="caption">Дней</div><span class="number day">' + "00" + '</span></span>';
			val += '<span class="number-wrapper"><div class="line"></div><div class="caption">Часов</div><span class="number hour">' + "00" + '</span></span>';
			val += '<span class="number-wrapper"><div class="line"></div><div class="caption">Минут</div><span class="number min">' + "00" + '</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">' + "00" + '</span></span>';
			this.elem.innerHTML = val;
		}
		else
		{
			tl = new Date(tl);
			var timer = new CountdownTimer('CDT_2',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Время вышло!</span></span>'
			+ '<audio autoplay><source src="../res/sound/alarm.mp3" type="audio/mpeg" /></audio>');
			timer.countDown();
		}
	});
}

/**
* Вызов главной функции библиотеки
*/

CDT();