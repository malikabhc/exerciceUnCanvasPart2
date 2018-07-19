var draw = document.getElementById('IceCreamCanvas');
var ctx = draw.getContext('2d');
//Cône de la glace
ctx.beginPath();
ctx.moveTo(160,160);
ctx.lineTo(210,260);
ctx.lineTo(260,160);
ctx.closePath();
ctx.fillStyle = '#AA6522';
ctx.fill();
//Courbe pour la glace
ctx.beginPath();
ctx.lineWidth='2';
ctx.fillStyle='#8a0908';
ctx.moveTo(160,160);
ctx.quadraticCurveTo(200,75,260,160);
ctx.fill();
