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
	var countPic = 0;
function picChange() {
	var picArray = ['pic/heart.jpg','pic/tiedie.jpg','pic/watermelon.jpg','pic/bunny.jpg','pic/cactus.jpg'
			, 'pic/cherry.jpg','pic/minion.jpg','pic/orangefish.jpg','pic/wpc.jpg','pic/starbucks.jpg'
			,'pic/cookiem.jpg','pic/snowman.jpg','pic/emoji.jpg','pic/bugers.jpg','pic/wonderland.jpg'
			,'pic/mnm.jpg','pic/hearcake.jpg'];
	console.log(picArray.length);
	var changePic = document.getElementById('picCount');
	countPic++;
	if (countPic === 17) {
		countPic = 0;
	}
	/*for (var i = 0; i < picArray.length; i++){
		countPic++;
		if (countPic === 17) {
			countPic = 0;
		}
		console.log(countPic);
		changePic.src = picArray[i];
	}*/
	changePic.src = picArray[countPic];
	//console.log(changePic.src);
	var buttonP = document.getElementById('buttonPic');
	buttonP.innerHTML = countPic;
}
function onKey(){
	 var abcde;
	 window.onkeydown = function(event){
	 	abcde = document.getElementById('abc');
	 	 abcde.innerHTML += event.key;
	 }
}

onKey();
