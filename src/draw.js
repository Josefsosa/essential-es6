/**
 * Created by josefsosa on 4/3/16.
 */
// Calculate offset either layerX/Y or offsetX/Y
function getOffset(event) {
  return {
    offsetX: event.offsetX === undefined ? event.layerX - event.target.offsetLeft : event.offsetX,
    offsetY: event.offsetY === undefined ? event.layerY - event.target.offsetTop : event.offsetY
  };
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();

var mouseButton = Emit.merge(Emit.events('mousedown', canvas).map(true),
    Emit.events('mouseup').map(false));

Emit.events('mousemove', canvas)
    .map(getOffset)
    .buffer(2, 1)
    .filter(mouseButton)
    .forEach(function (x) {
      ctx.moveTo(x[0].offsetX, x[0].offsetY);
      ctx.lineTo(x[1].offsetX, x[1].offsetY);
      ctx.stroke();
    });
