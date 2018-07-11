
// color change
function changeOne() {
	var contentChange = document.getElementsByClassName('one')[0];
	contentChange.style = "background:red";
	contentChange.innerHTML = "This is red box";
}
function changeTwo() {
	var contentChange = document.getElementsByClassName('one')[0];
	contentChange.style = "background:yellow;color:#000";
	contentChange.innerHTML = "This is yellow box";
}
function changeThree() {
	var contentChange = document.getElementsByClassName('one')[0];
	contentChange.style = "background:blue";
	contentChange.innerHTML = "This is blue box";
}

function changeFour() {
	var contentChange = document.getElementsByClassName('one')[0];
	contentChange.style = "background:black";
	contentChange.innerHTML = "This is black box";
}

function changeFive() {
	var contentChange = document.getElementsByClassName('one')[0];
	contentChange.style = "background:aqua;color:#000";
	contentChange.innerHTML = "This is aqua box";
}


// image change

function imageOne() {
	var contentChange = document.getElementsByTagName('img')[0];
	contentChange.src = "image/g1.jpg";
}
function imageTwo() {
	var contentChange = document.getElementsByTagName('img')[0];
	contentChange.src = "image/g2.jpg";
}
function imageThree() {
	var contentChange = document.getElementsByTagName('img')[0];
	contentChange.src = "image/g3.jpg";
}

function imageFour() {
	var contentChange = document.getElementsByTagName('img')[0];
	contentChange.src = "image/g4.jpg";
}

function imageFive() {
	var contentChange = document.getElementsByTagName('img')[0];
	contentChange.src = "image/g5.jpg";
}