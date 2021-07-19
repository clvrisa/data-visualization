let c = document.getElementById('c1');
let drawing = c.getContext('2d');

// line with stroke() letter C for Clarisa 
drawing.moveTo(0,0); 
drawing.lineTo(200,0);
drawing.moveTo(0,0);
drawing.lineTo(0,200);
drawing.lineTo(200,200);
drawing.lineWidth = 6; 
drawing.strokeStyle = 'black';
drawing.stroke();

// text with fillText()
drawing.font = '50px Oswald';
drawing.textAlign = 'left';
drawing.textBaseline = 'top';
drawing.fillStyle = 'black';
drawing.fillText("C for Clarisa!", 100, 50);

// purple filled 
drawing.fillStyle = 'rgba(200,0,200,0.7)';
drawing.fillRect(100, 250, 300, 300); // x,y,width,height

// pink rect
drawing.strokeStyle = 'pink';
drawing.lineWidth = 10;
drawing.strokeRect(100, 250, 300, 300);

// snowman
drawing.fillStyle = 'white';
drawing.beginPath();
drawing.arc(250, 300, 50, 0, 2 * Math.PI, false);
drawing.fill();
drawing.closePath();

drawing.fillStyle = 'white';
drawing.beginPath();
drawing.arc(250, 380, 50, 0, 2 * Math.PI, false);
drawing.fill();
drawing.closePath();

drawing.fillStyle = 'white';
drawing.beginPath();
drawing.arc(250, 450, 50, 0, 2 * Math.PI, false);
drawing.fill();
drawing.closePath();

function loadJSON() {
$.getJSON( "bar.json", 
function( dataReturned ) {
    doBar( dataReturned );
}
);
}

function doBar(data) {
var canvas1 = document.getElementById('c2')
var context1 = canvas1.getContext('2d');
var startX = canvas1.width;
var bottomY = canvas1.height;
var maxVal = getMax(data);
var scaleY = bottomY / maxVal;
var scaleX = startX / (data.length);
var i, height, lastX = 15;

for (i=0; i <= maxVal; i = i + maxVal / 10) {
context1.beginPath();
context1.moveTo(0, i * scaleY);
context1.lineTo(startX, i * scaleY);
context1.strokeStyle="gray";
context1.stroke();

context1.fillStyle = "black";
context1.font = "bold 32px Oswald";
context1.fillText( maxVal - i, 0, (i*scaleY) - 2);
}

for ( i=0; i < data.length; i++) {
context1.fillStyle = data[i].color;
context1.globalAlpha = 0.7;
height = data[i].val * scaleY;
context1.fillRect( lastX, bottomY - height, scaleX, height );
lastX += scaleX;
}
}

function getMax(data) {
var max = 0;
for (var i=0; i < data.length; i++) {
if ( data[i].val > max ) {
    max = data[i].val;
}
}
return max;
}