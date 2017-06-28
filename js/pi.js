onload = function() {
	draw();
}

function draw() {
	let canvas = document.getElementById('piCanvas');
	if (!canvas || !canvas.getContext) {
		return false;
	}
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI*2);
	ctx.stroke();
}

