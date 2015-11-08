document.addEventListener('DOMContentLoaded', function(){

var sessionLength = document.getElementById('sessionLength');
var start = document.getElementById('startClock');
var breakLength = document.getElementById('breakLength');
var display  = document.getElementById('time');
var sessionPlus = document.getElementById("sessionPlus");
var sessionMinus = document.getElementById("sessionMinus");


// reset timer
function reset(){
	display.textContent = '25:00';
	sessionLength.textContent = '25';
	breakLength.textContent = '05';
	sessionPlus.disabled = false;
    sessionMinus.disabled = false;
}


function sessionTimer(duration, display){
	var timer = duration, minutes, seconds;

	var t = setInterval(function(){
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		if(minutes < 10) minutes = '0' + minutes;
		if(seconds < 10) seconds = '0' + seconds;

		display.textContent = minutes + ':' + seconds;

		if(--timer < 0){
			var brLength = 60 * breakLength.innerHTML;
			timer = breakTimer(brLength, display);
		}
	}, 1000);

	// stop timer
	document.getElementById('resetClock').addEventListener('click', function(){
		clearInterval(t);
		reset();
	}, false);
}

function breakTimer(duration, display){
	var timer = duration, minutes, seconds;

	var t = setInterval(function(){
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		if(minutes < 10) minutes = '0' + minutes;
		if(seconds < 10) seconds = '0' + seconds;

		display.innerHTML = minutes + ':' + seconds;

		if(--timer < 0){
			var sesLength = 60 * sessionLength.innerHTML;
			timer = sessionTimer(sesLength, display);
		}
	}, 1000);

	// stop timer
	document.getElementById('resetClock').addEventListener('click', function(){
		clearInterval(t);
		reset();
	}, false);
}

// function add one minute
function addOne(value, show){
	var plus = value.innerHTML;
	plus++;
	if (plus < 10) plus = '0' + plus;
	value.textContent = plus;
	show.textContent = plus;

}

// function substract one minute 
function substractOne(value, show){
	var minus = value.innerHTML;
	if(--minus >= 0){
		if(minus < 10) minus  = '0' + minus;
		value.textContent = minus;
		show.textContent = minus;
	}
}


// add one minute to session length on click
sessionPlus.onclick = function(){
	addOne(sessionLength, display);
};

// substract one minute from session length on click
sessionMinus.onclick = function(){
	substractOne(sessionLength, display);
};

// add one minute to break length on click
document.getElementById('breakPlus').onclick = function(){
	addOne(breakLength);
};

// substract one minute from break length on click
document.getElementById('breakMinus').onclick = function(){
	substractOne(breakLength);
};


start.addEventListener('click', function(){
	 var dur = 60 * sessionLength.innerHTML;
     sessionTimer(dur, display);
     sessionPlus.disabled = true;
     sessionMinus.disabled = true;
}, false);
	

}, false);

/*
function reset(){
	sessionLength.innerHTML = '25';
	breakLength.innerHTML = '05';
	display.innerHTML = '25:00';
}

document.getElementById('resetClock').addEventListener('click', reset, false);


// add one to session length
document.getElementById('sessionPlus').addEventListener('click',function(){
	
	var plus = sessionLength.innerHTML;
	plus++;
	if (plus < 10) plus = '0' + plus; 
	sessionLength.innerHTML = plus;
	display.innerHTML = plus;

}, false);

// substract one from session length
document.getElementById('sessionMinus').addEventListener('click',function(){
	var minus = sessionLength.innerHTML;

	if(--minus >= 0) {
		if(minus < 10) minus = '0' + minus;
		sessionLength.innerHTML = minus;
	}
	

}, false);

function addOne(value){
	var plus = value.innerHTML;
	plus++;
	if (plus < 10) plus = '0' + plus;
	value.innerHTML = plus;
}

// add one to break length
//document.getElementById('breakPlus').addEventListener('click',addOne, false);
document.getElementById('breakPlus').onclick = function(){
	addOne(breakLength);
};

// substract one from break length
document.getElementById('breakMinus').addEventListener('click',function(){
	var minus = breakLength.innerHTML;

	if(--minus >= 0) {
		if(minus < 10) minus = '0' + minus;
		breakLength.innerHTML = minus;
	}
	

}, false);

*/


