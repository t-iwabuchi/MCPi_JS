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

window.onload=function(){
	var add_event=$("dotpersecond_button");
	add_event.onclick=updateobj;
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
	draw(newPiObj);
}

//入力値を取得し、オブジェクトを生成する処理

function getinput(){
	var dotpersecond =$("dotpersecond").value;
	var newPi =new pi_canvas(dotpersecond);
	return newPi;
}

//描画処理
function draw(newPiObj){
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

//DOMobjを取得する処理
function $(id){
	return document.getElementById(id);
}
