onload = function() {
	draw();
}

function draw() {
	let canvas = document.getElementById('piCanvas');
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI*2);
	ctx.stroke();
}

window.onload=function(){
	var add_event=$("addObj_button1");
	add_event.onclick=addobj;
}



//FROM http://forse.hatenablog.com/entry/2014/06/28/170057

window.onload=function(){
	var add_event=$("addObj_button1");
	add_event.onclick=addobj;
}


////////////////
//クラス定義：図//
////////////////
function square(name,id,tel){
	this.name=name;
	this.id=id;
	this.tel=tel;
	this.x=0;
	this.y=0;
	this.height=500;
	this.width=500;
}

//以下の処理を呼び出す処理
  //図をobj生成処理
  //図の描画処理
function addobj(){
	var newSquareObj=getinput();
	draw(newSquareObj);
}

//入力値を取得し、オブジェクトを生成する処理

function getinput(){
	var name=$("name").value;
	var id=$("id").value;
	var tel=$("tel").value;
	var newSquare =new square(name,id,tel);
	return newSquare;
}

//描画処理
function draw(newSquareObj){
	var canvas=$("canvas");
	canvas.height=newSquareObj.height;
	canvas.width=newSquareObj.width;
	var context=canvas.getContext('2d');
	context.fillStyle='#FFFFF0';
	context.fillRect(newSquareObj.x,newSquareObj.y,newSquareObj.width,newSquareObj.height);
	context.font ="30px 'MS Pゴシック'";
	context.fillStyle='#000000';
	var msg="IDは"+newSquareObj.id+",名前は"+newSquareObj.name+",内線は"+newSquareObj.tel;
	context.fillText(msg,10,50);
}

//DOMobjを取得する処理
function $(id){
	return document.getElementById(id);
}
