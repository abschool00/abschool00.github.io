
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1,snd2, snd3,img1,img2;
// var duration;
// var  slideWidth = 500;

function preload() {

   snd1 = loadSound("sound/Correct_AnswerIdea_Sound_Effects.mp3");
    snd2 = loadSound("sound/Mouse_Click_-_Sound_Effect_HD.mp3");
    snd3 = loadSound("sound/Party_Horn_Sound_Effect.mp3");
    
    
    
    
    img1 = loadImage('assets/Quarantine_Run_Title_Screen.png');
    img2 = loadImage('assets/Scene1.png');
    img3 = loadImage('assets/Scene2.png');
    img4 = loadImage('assets/Scene3.png');
    img5 = loadImage('assets/Scene4.png');
    img6 = loadImage('assets/EndScene.png');
    img7 = loadImage('assets/HelpScene.png');
    img8 = loadImage('assets/Scene1_1.png');
    img9 = loadImage('assets/Scene2_1.png');
    img10 = loadImage('assets/Scene3_1.png');
    img11 = loadImage('assets/Scene4_1.png');


}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(1080, 720);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(.05);

//     ghosty = createSprite(0, 0);
//     ghosty.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");
//     ghosty.addAnimation("stand", "assets/ghost_standing0001.png",  "assets/ghost_standing0007.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene_start);
    mgr.addScene (scene_lvl1);
    mgr.addScene (scene_lvl1_1);
    mgr.addScene (scene_lvl2);
    mgr.addScene (scene_lvl2_1);
    mgr.addScene (scene_lvl3);
    mgr.addScene (scene_lvl3_1);
    mgr.addScene (scene_lvl4);
    mgr.addScene (scene_lvl4_1);
    mgr.addScene (scene_help);
    mgr.addScene (scene_end);
    mgr.showNextScene();
    

    

    
}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
    
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene_start );
            break;
        case '2':
            mgr.showScene( scene_lvl1 );
            break;
        case '3':
            mgr.showScene( scene_lvl2 );
            break;
        case '4':
            mgr.showScene( scene_lvl3 );
            break;
        case '5':
            mgr.showScene( scene_lvl4 );
            break;
        case '6':
            mgr.showScene( scene_help );
            break;
        case '7':
            mgr.showScene( scene_end );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
