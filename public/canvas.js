
function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.lineTo(170, -120);
  ctx.lineTo(-40, 185);
  ctx.lineTo(-190, -120);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.save();
  var time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.beginPath();
  ctx.moveTo(-100, -180);
  ctx.lineTo(140, 120);
  ctx.stroke();
  ctx.restore();

  ctx.fillRect(-160, 10, 100, 100);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
