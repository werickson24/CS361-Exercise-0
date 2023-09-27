'use strict';

window.onload = init;

function init(){
	let start = 1;
	let end = 1000;
	
	squareRootSequence(start, end);
}

function squareRootSequence (start, end) {
	let outputString = "";
	for(let a = start; a <= end; a++){
		outputString += squareRoot(a) + ", ";
	}
	window.document.querySelector("#output").innerHTML = outputString;
}

function squareRoot(num){
	return Math.sqrt(num);
}