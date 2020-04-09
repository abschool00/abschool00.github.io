
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";
var click1;
var click2;
var click3;
var click4;
var click5;
var click6;
var click7;
var click8;
var click9;
var click10;
var click11;
var click12;

// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////

function scene_start()  {
    this.setup = function() {
          background(255);
        
  image(img1, 1,1,1080,720);
       
      click1 = new Clickable();
          click1.locate(230, 465);
  click1.resize(250, 100);
        
        click1.onHover = function(){
	 this.text = "Lvl 1";
     this.textSize = 80;          
        this.color = "#FFFFFF";
  }
  
  click1.onOutside = function(){
	 this.text = "Lvl 1";
      this.textSize = 80;
        this.color = "#FFFFFF";
     
       
  }  
           click1.onPress = function()
         {
	
            
   //   mgr.showScene( scene_lvl1 );
  }   
      
     
         
         
         
            click8= new Clickable();
          click8.locate(600, 465);
  click8.resize(250, 100);
        
          click8.onHover = function(){
	 this.text = "Help";
     this.textSize = 80;          
        this.color = "#FFFFFF";
  }
  
  click8.onOutside = function(){
	 this.text = "Help";
      this.textSize = 80;
        this.color = "#FFFFFF";
  }
         click8.onPress = function()
         {
	
            
      mgr.showScene( scene_help );
  }
//         click1.onOutside = function(){
//  this.color = "#rgba(0,0,0,0)";
//  this.textColor = "#rgba(0,0,0,0)";             
//}
    }
     this.enter = function()
  {
           background(255);
 
  image(img1, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img1, 1,1,1080,720);
          click1.draw();
         click8.draw();
     }
    
 
     
}


  function scene_lvl1()  {
   this.setup = function() {
          background(255);
 
image(img2, 1,1,1080,720);
               click5 = new Clickable();
          click5.locate(230, 500);
  click5.resize(250, 100);
        
        click5.onHover = function(){
	 this.text = "DSW";
     this.textSize = 80;          
        this.color = "#FFFFFF";
  }
  
  click5.onOutside = function(){
	 this.text = "DSW";
      this.textSize = 80;
        this.color = "#FFFFFF";
     
       
  }  
           click5.onPress = function()
         {
	mgr.showScene( scene_lvl1_1 );
  }   
            click6= new Clickable();
          click6.locate(600, 500);
  click6.resize(250, 100);
        
          click6.onHover = function(){
	 this.text = "Safeway";
     this.textSize = 80;          
        this.color = "#FFFFFF";
  }
  
  click6.onOutside = function(){
	 this.text = "Safeway";
      this.textSize = 80;
        this.color = "#FFFFFF";
  }
         click6.onPress = function()
         {
	
            
      mgr.showScene( scene_lvl1_2 );
  }

    }
     this.enter = function()
  {
           background(255);
 
  image(img2, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img2, 1,1,1080,720);
          click5.draw();
         click6.draw();
     }
  }
 function scene_lvl1_1()  {
   this.setup = function() {
          background(255);
 
  image(img8, 1,1,1080,720);
          click9 = new Clickable();
          click9.locate(975, 115);
  click9.resize(75, 75);
         click9.onPress = function(){
	 snd2.play();
             mgr.showScene( scene_lvl2 );
  }
       
  }
     this.enter = function()
  {
           background(255);
 
  image(img8, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img8, 1,1,1080,720);
          click9.draw();
      
     }
  

}



  function scene_lvl2()  {
   this.setup = function() {
          background(255);
 
  image(img3, 1,1,1080,720);
          click3 = new Clickable();
                click3.locate(975, 115);
  click3.resize(75, 75);
         click3.onPress = function(){
	snd1.play();
             mgr.showScene( scene_lvl2_1 );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img3, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img3, 1,1,1080,720);
          click3.draw();
     }



  }
 function scene_lvl2_1()  {
   this.setup = function() {
          background(255);
 
  image(img9, 1,1,1080,720);
          click10 = new Clickable();
                click10.locate(975, 115);
  click10.resize(75, 75);
         click10.onPress = function(){
	snd2.play();
             mgr.showScene( scene_lvl3 );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img9, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img9, 1,1,1080,720);
          click10.draw();
     }



  }



function scene_lvl3()  {
  
   this.setup = function() {
          background(255);
 
  image(img4, 1,1,1080,720);
          click4 = new Clickable();
                click4.locate(975, 115);
  click4.resize(75, 75);
         click4.onPress = function(){
	 snd1.play();
             mgr.showScene( scene_lvl3_1 );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img4, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img4, 1,1,1080,720);
          click4.draw();
     }

}
function scene_lvl3_1()  {
  
   this.setup = function() {
          background(255);
 
  image(img10, 1,1,1080,720);
          click11 = new Clickable();
                click11.locate(975, 115);
  click11.resize(75, 75);
         click11.onPress = function(){
	 snd2.play();
             mgr.showScene( scene_lvl4 );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img10, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img10, 1,1,1080,720);
          click11.draw();
     }

}

function scene_lvl4() {

     this.setup = function() {
          background(255);
 
  image(img5, 1,1,1080,720);
          click5 = new Clickable();
               click5.locate(975, 115);
  click5.resize(75, 75);
         click5.onPress = function(){
	 snd1.play();
             mgr.showScene( scene_lvl4_1);
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img5, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img5, 1,1,1080,720);
          click5.draw();
     }

        
}
function scene_lvl4_1() {

     this.setup = function() {
          background(255);
 
  image(img11, 1,1,1080,720);
          click12 = new Clickable();
               click12.locate(975, 115);
  click12.resize(75, 75);
         click12.onPress = function(){
	 snd3.play();
             mgr.showScene( scene_end);
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img11, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img11, 1,1,1080,720);
          click12.draw();
     }

        
}
        function scene_help()  {

   this.setup = function() {
          background(255);
 
  image(img7, 1,1,1080,720);
          click6 = new Clickable();
          click6.locate(900, 30);
  click6.resize(150, 75);
        click6.onHover = function(){
	 this.text = "Main Menu";
     this.textSize = 20;          
        this.color = "#FFFFFF";
  }
  
  click6.onOutside = function(){
	 this.text = "Main Menu";
      this.textSize = 20;
        this.color = "#FFFFFF";
  }
         click6.onPress = function(){
	
             mgr.showScene( scene_start );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img7, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img7, 1,1,1080,720);
          click6.draw();
     }

}


        
        
              function scene_end()  {
                  
                this.setup = function() {
          background(255);
 
  image(img6, 1,1,1080,720);
          click7 = new Clickable();
          click7.locate(410, 480);
  click7.resize(250, 120);
     click7.onHover = function(){
	 this.text = "Play Again";
     this.textSize = 40;          
        this.color = "#FFFFFF";
  }
  
  click7.onOutside = function(){
	 this.text = "Play Again";
      this.textSize = 40;
        this.color = "#FFFFFF";
  }
         click7.onPress = function(){
	
             mgr.showScene( scene_start );
  }
  }
     this.enter = function()
  {
           background(255);
 
  image(img6, 1,1,1080,720);
     }
     this.draw = function()
    {
           background(255);
 
  image(img6, 1,1,1080,720);
          click7.draw();
     }     
                  
              }




