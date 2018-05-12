function play_sound()
{
	var snd = new Audio("../res/sound/alarm.mp3");
	snd.preload = "auto";
	snd.play();
}