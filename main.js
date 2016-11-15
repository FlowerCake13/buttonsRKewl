// console.log("hey");
var score = 0;

function hey() {
	/*console.log('test')
	console.log(document.getElementById('yourName'));*/
var pId = document.getElementById('yourName');
	pId.innerHTML = score;
		score++;
	console.log('OMG! Your score is ' + score);
}

function picChange() {
	var picHold = document.getElementById('picCount');
	if (picHold.src == "pic/heart.jpg") {
		console.log("waterMELOON!" , picHold.src);
		picHold.src = "pic/tiedie.jpg";
	}else if (picHold.src == "pic/heart.jpg"){
		picHold.src = "pic/heart.jpg";
	}
}