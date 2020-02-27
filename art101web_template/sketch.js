function setup() {
 var canvas = createCanvas(500,500);
    canvas.parent('sketch-holder');
 background(255);
stroke(0);
 angleMode(DEGREES);
}

function draw() {



background(87, 22, 235);
   if (hour() >= 12) {
  background(87, 85, 235);
  }
  if (hour() >= 11) {
  background(87, 95, 235);
  }
  if (hour() >= 10) {
  background(87, 105, 235);
  }
   if (hour() >= 9) {
  background(87, 115, 235);
  }
  if (hour() >= 8) {
  background(87, 125, 235);
  }
  if (hour() >= 7) {
  background(87, 135, 235);
  } if (hour() >= 6) {
  background(87, 145, 235);
  }
  if (hour() >= 5) {
  background(87, 155, 235);
  }
  if (hour() >= 4) {
  background(87, 165, 235);
  } if (hour() >= 3) {
  background(87, 175, 235);
  }
  if (hour() >= 2) {
  background(87, 185, 235);
  }
  if (hour() >= 1) {
  background(87, 195, 235);
  }
  
  if (hour() >= 24) {
  background(87, 185, 235);
  }
  if (hour() >= 23) {
  background(87, 175, 235);
  }
  if (hour() >= 22) {
  background(87, 165, 235);
  } if (hour() >= 21) {
  background(87, 155, 235);
  }
  if (hour() >= 20) {
  background(87, 145, 235);
  }
  if (hour() >= 19) {
  background(87, 145, 235);
  } if (hour() >= 18) {
  background(87, 135, 235);
  }
  if (hour() >= 17) {
  background(87, 125, 235);
  }
  if (hour() >= 16) {
  background(87, 115, 235);
  } if (hour() >= 15) {
  background(87, 105, 235);
  }
  if (hour() >= 14) {
  background(87, 95, 235);
  }
  if (hour() >= 13) {
  background(87, 85, 235);
  }

 let s = second();
 let min = minute();
let hr = hour();
 
 
 console.log(hr + " " + min + " " + s);

 


 
 // secs
 push();

 translate(width/2, height/2);
 var ms = map(s,0,60,0,360);
 rotate(-90);  // offset rotate
 rotate(ms);
 //line(0,0,150,0);
  noFill();
 ellipse(0,0, ms,ms);
 pop();

 // min
 push();
 translate(width/2, height/2);
 var mm = map(min,0,60,0,360);
 rotate(-90);  // offset rotate
 rotate(mm);
 //line(0,0,120,0);
   noFill();
 ellipse(0,0, mm,mm);
 pop();


 //hour
 push();
 translate(width/2, height/2);
 var mh = map(hr,0,24,0,360);
 rotate(-90);  // offset rotate
 rotate(mh);
 //line(0,0,80,0);
   noFill();
 ellipse(0,0, mh,mh);
 pop();
  
  // sun
 push();
 translate(width/2, height/2);
 var sr = map(hr,0,24,0,360);
 rotate(90);  // offset rotate
 rotate(sr);
 //line(0,0,120,0);
  noStroke();
   fill(249,215,28);
 ellipse(215,0, 50,50);
  
 pop();
  

 //if (mouseIsPressed) {

  if (keyIsPressed){
  showtext();
  }
 
if (mouseIsPressed) {
 for ( var i = 0; i <360; i+=90 ) {
   push();
   translate(width/2, height/2);
   rotate(-90);  // offset rotate
   rotate(i);
   ellipse(180,0, 1,20);
   ellipse(135,0, 1,20);
   ellipse(90,0, 1,20);
   ellipse(45,0, 1,20);
   pop();
 }
 }

}


function showtext() {
  push();
  translate(width/2+110,height/2+220);
  scale(1.0);
  console.log("TOD is" + " " +isAMPM(hour())) ;
  console.log("hour" + " " + convert24hrTo12(hour())) ;
  let str;
  str = convert24hrTo12(hour()) + ":";
  str += minute() + ":";
  str += second() + " " ;
  str += isAMPM(hour()) ;
  textSize(19);
  textAlign(CENTER);
  text(str,0, 0, 180,20);
  pop();
}


function isAMPM (hrs) {
let tod;
if (hrs < 12) {  //its AM
 tod = "AM";
} else { //otherwise PM
 tod = "PM";
}
return tod;
}

function convert24hrTo12 (hrs) {
let nuHr;
 if (hrs < 13) {  //its normal 12 hour range
   nuHr = hrs;
 } else { // switch it from 24 to 12
   nuHr = hrs-12;
 }
 return nuHr;


}