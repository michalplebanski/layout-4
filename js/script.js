function count () {
	var today = new Date();

	var day = today.getDate();
	var hour = today.getHours();
	if(hour < 10) hour = "0" +hour;

	var minute = today.getMinutes();
	if(minute < 10) minute = "0" + minute;

	var second = today.getSeconds();
	if(second < 10) second = "0" + second;

	document.getElementById("js-day").innerHTML = day;
	document.getElementById("js-hour").innerHTML = hour;
	document.getElementById("js-minute").innerHTML = minute;
	document.getElementById("js-second").innerHTML = second;

	setTimeout("count()", 1000);
}

count();