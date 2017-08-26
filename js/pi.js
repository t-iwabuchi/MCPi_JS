var timer;

var allPoint = 0;
var inPoint = 0;

//ページ読み込み時の処理
window.onload=function(){
	set_interval();
	drawBefore();
}

//事前描画処理(初期描画)
function drawBefore(){
	var canvas=$("piCanvas");
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var content = canvas.getContext('2d');
	content.fillStyle = 'rgb(255,255,255)';
	content.fillRect(0, 0, canvas.width, canvas.height);
	content.beginPath();
	content.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI*2);
	content.stroke();
}

function get_interval(){
	return 1000 / document.forms.set_interval.dotpersecond.value;
}

function set_interval(){
	if(timer) clearInterval(timer);
	timer = setInterval(`draw()`, get_interval());
	console.log(document.forms.set_interval.dotpersecond.value);
	return false;
}

function view_number(allPoint, inPoint){
	$("allPoints").innerHTML = allPoint;
	$("inPoints").innerHTML = inPoint;
	$("outPoints").innerHTML = allPoint - inPoint;
	$("piNumber").innerHTML = inPoint / allPoint * 4;
}

function draw(){
		var canvas=$("piCanvas");
		if (!canvas || !canvas.getContext) {
			return false;
		}
		var content = canvas.getContext('2d');
		var randX = Math.floor(Math.random() * canvas.width);
		var randY = Math.floor(Math.random() * canvas.height);
		var dx = randX - canvas.width/2;
		var dy = randY - canvas.height/2;
		if(Math.sqrt(dx*dx + dy*dy) <= canvas.width/2){
			inPoint++;
			content.fillStyle = 'rgb(255,0,0)';
		}else{
			content.fillStyle = 'rgb(0,0,255)';
		}
		allPoint++;
		view_number(allPoint, inPoint);
		content.fillRect(randX, randY, 1, 1);
}

//DOMobjを取得する処理
function $(id){
	return document.getElementById(id);
}
