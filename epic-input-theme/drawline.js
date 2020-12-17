<line x1="206" y1="206" x2="206" y2="206" style="stroke:#f9f9f9;stroke-width:3" id="LeftLine"></line>

function drawLine(){
	let xstr = document.getElementById("LeftThumb").style.left;
	let ystr = document.getElementById("LeftThumb").style.top;
	
	let x = Number(xstr.substring(0, xstr.length-1)) * 4 + 6;
	let y = Number(ystr.substring(0, ystr.length-1)) * 4 + 6;
	
	document.getElementById("LeftLine").x2.baseVal.value = x;
	document.getElementById("LeftLine").y2.baseVal.value = y;
}

var update_loop = setInterval(drawLine, 5);