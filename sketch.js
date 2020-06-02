var position;
var drawing=[];
var button1;
var database;
var dataArray=[];

function setup() {
  createCanvas(800,400);
  database = firebase.database();
button1= new Button1();

}

function draw() {
  background(0); 
  readData();
  beginShape();
  for(var i=0; i<dataArray.length;i++){
    noFill();
    stroke("red");
    strokeWeight(5);
    vertex(dataArray[i].x,dataArray[i].y);
    endShape();
    
  }

 button1.display();
 
// console.log(position);
}
function mouseDragged(){
  position={
    x:mouseX,
    y:mouseY};
  drawing.push(position);
  database.ref('drawing').set({
    'd' : drawing
  });
  //console.log(drawing);
}

function readData(){
  database.ref('drawing/').on("value",(data)=>{
    dataArray=data.val().d;
  });
}