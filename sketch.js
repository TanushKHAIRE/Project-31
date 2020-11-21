var particles,plinkos,divisions;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var divisionHeight =300 ;
particles = [] ;
plinkos = [];
divisions = [];

function draw() {
  background(255,255,255);
  for(var k = 0 ; k <= width; k = k = 80) {
    divisions.push(new divisions(k, height - divisionHeight/2,10,divisionHeight));
    if (frameCount% 60 === 0 ) {
      
    particles.push(new particles(k, height - divisionHeight/2,10,divisionHeight));
  }
  }
  drawSprites();
}