// onload = function() {
// 	draw();
// }
//
// function draw() {
// 	let canvas = document.getElementById('piCanvas');
// 	if (!canvas || !canvas.getContext) {
// 		return false;
// 	}
// 	var ctx = canvas.getContext('2d');
//         ctx.fillStyle = 'rgb(255,255,255)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	ctx.beginPath();
// 	ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI*2);
// 	ctx.stroke();
// }


//FROM http://forse.hatenablog.com/entry/2014/06/28/170057

var timer;

var allPoint = 0;
var inPoint = 0;

window.onload=function(){
	var add_event=$("dotpersecond_button");
	add_event.onclick=updateobj;
	drawBefore();
}


////////////////
//クラス定義：図//
////////////////
function pi_canvas(dotpersecond){
	this.dotpersecond=dotpersecond;
}

//以下の処理を呼び出す処理
  //図をobj生成処理
  //図の描画処理
function updateobj(){
	var newPiObj=getinput();
	timer = setInterval("draw(newPiObj)",getinput());
}

//入力値を取得し、オブジェクトを生成する処理

function getinput(){
	var dotpersecond =$("dotpersecond").value;
	var dotpersecond_number =new pi_canvas(dotpersecond);
	return dotpersecond_number;
}

//描画処理
function drawBefore(newPiObj){
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

function draw(newPiObj){
	var canvas=$("piCanvas");
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var content = canvas.getContext('2d');
	var randX = Math.floor(Math.random() * canvas.width);
	var randY = Math.floor(Math.random() * canvas.height);
	paint.setStrokeWidth(12);
	canvas.fillRect(randX, randY, 1, 1);
}

//DOMobjを取得する処理
function $(id){
	return document.getElementById(id);
}
