//your JS code here. If required.
function updateTimer() {
	const timerElement = document.getElementById('timer');
	const currentTime= new Date();
	const options={
		year: 'numeric',
		month: 'numeric',
		day: 'numeric' ,
		hour: 'numeric' ,
		minute: 'numeric' ,
		second: 'numeric',
		timeZoneName: 'short'
	};
	const locale = 'en-IN';
	const formattedTime = currentTime.toLocaleDateString(locale, options);
	timerElement.textContent =`Current Time = ${formattedTime}`;
}
updateTimer();
setInterval(updateTimer, 1000);