// Tarea 1

const canvas=document.getElementById('animation');
const ctx=canvas.getContext('2d');

let x=100;
let y=100;
let vx=3;
let vy=7;
let r=80;

let x2=550;
let y2=100;
let vx2=4;
let vy2=5;
let s3=0;
let s4=150;

function crashConditions(){
  if(x > canvas.width- r ||  x<r){
    vx=-vx;
  }
  if(y > canvas.height -r || y<r){
    vy=-vy;
  }

  if(x2 > canvas.width- s3 || x2 > canvas.width- s4 || x2<s3){ 
    vx2=-vx2; 
  }
  if(y2 > canvas.height -s3 || y2 > canvas.height -s4 || y2<s3){
    vy2=-vy2; 
  }

  window.requestAnimationFrame(crashConditions);
}

function shapes(){
  const circle = new circleShape(x, y, vx, vy, r);
  const square = new squareShape(x, y, vx, vy, s3,s4);

  circle.figureCircle();
  square.figureSquare();

  x+=vx;
  y+=vy;

  x2+=vx2;
  y2+=vy2;

  window.requestAnimationFrame(shapes);
}

class circleShape {
  constructor (x, y, vx, vy, r){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.r=r;
  }
  figureCircle(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle="rgba(255, 255, 255, 0.8)";
    ctx.fill();
    ctx.closePath();
  }
}

class squareShape {
  constructor (x2, y2, vx2, vy2, s3,s4){
    this.x2=x2;
    this.y2=y2;
    this.vx2=vx2;
    this.vy2=vy2;
    this.s3=s3;
    this.s4=s4;
  }
  figureSquare(){
    ctx.beginPath();
    ctx.fillStyle="rgba(0, 0, 0, 0.8)";
    ctx.fillRect(x2,y2,150,150)
    ctx.closePath();
  }
}

window.requestAnimationFrame(crashConditions);
window.requestAnimationFrame(shapes);

// let canvas=document.getElementById('animation');
// let ctx=canvas.getContext('2d');

// x=100;
// y=100;
// vx=3;
// vy=7;
// r=80;

// x2=550;
// y2=100;
// vx2=4;
// vy2=5;
// s3=0;
// s4=150;

// function createShapes(){ 

//   Circle
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   if(x > canvas.width- r ||  x<r){
//     vx=-vx;
//   }
//   if(y > canvas.height -r || y<r){
//     vy=-vy;
//   }
//   x+=vx;
//   y+=vy;

//   ctx.beginPath();
//   ctx.arc(x,y,r,0,2*Math.PI);
//   ctx.fillStyle="rgba(255, 255, 255, 0.8)";
//   ctx.fill();
//   ctx.closePath();

//   Rectangle
//   if(x2 > canvas.width- s3 || x2 > canvas.width- s4 || x2<s3){ 
//     vx2=-vx2; 
//   }
//   if(y2 > canvas.height -s3 || y2 > canvas.height -s4 || y2<s3){
//     vy2=-vy2; 
//   }
//   x2+=vx2;
//   y2+=vy2;

//   ctx.beginPath();
//   ctx.fillStyle="rgba(0, 0, 0, 0.8)";
//   ctx.fillRect(x2,y2,150,150)
//   ctx.closePath();

//   window.requestAnimationFrame(createShapes);
// }

// createShapes();
