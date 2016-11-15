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
	var picer = ["pic/hearts.jpg", "pic/watermelon.jpg"];
		document.getElementById("picCount").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
}
