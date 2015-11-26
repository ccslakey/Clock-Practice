$(function(){
	var clockDiv = document.getElementById('clock');
	
	function displayTime(){
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();

		clockDiv.innerText = hours + ':' + minutes + ":" + seconds;

	}





})