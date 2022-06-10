var column1, column2, column3, column4;
var line1, line2, line3, line4;

var input1;



function setup() {
  createCanvas(300, 300);

  column1 = createSprite(0, 150, 10, 300);
  column2 = createSprite(96.67, 150, 10, 300);
  column3 = createSprite(203.34, 150, 10, 300);
  column4 = createSprite(300, 150, 10, 300);

  line1 = createSprite(150, 0, 300, 10);
  line2 = createSprite(150, 96.67, 300, 10);
  line3 = createSprite(150, 203.34, 300, 10);
  line4 = createSprite(150, 300, 300, 10);

  input1 = createInput("").attribute("placeholder", "Digite um número");
  input1.position(5,5)
  input1.class("customInput")


}

function draw() {
  background(180);




  drawSprites();
}

