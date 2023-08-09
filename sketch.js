var splash
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton;
var backgroundImg, player, zombie, bgSound,playerimg;

function preload() {
    splash = loadImage("splash.gif")
    backgroundImg = loadImage("Background.jpg")
    playerimg = loadImage("HunterImage.png")
    zombie = loadImage("GhostImg.jpg")
    bgSound = loadSound("BackgroundMusicSound.mp3")
    level1bg=loadImage("Background.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("StartButtonImage.png")
    playbutton.position(20, height / 2.5 )
    playbutton.size(155, 140);

    soundonbutton = createImg("SoundButtonOn.png")
    soundonbutton.position(width-150, playbutton.y - 25)
    soundonbutton.size(150, 175)
    soundonbutton.mouseClicked(mute)


    soundoffbutton = createImg("SoundButtonOff.png")
    soundoffbutton.position(width-150, playbutton.y - 25)
    soundoffbutton.size(150, 175)
    soundoffbutton.hide()
    soundoffbutton.mouseClicked(mute)

    bgSound.play()

    ground=createSprite(0,0,width,height)
    ground.addImage(level1bg)
   ground.visible=false
  ground.x=ground.width/2
  ground.scale=3.35

    player=createSprite(width/2,height-150);
     player.addImage(playerimg);
     player.scale=0.7
     player.visible=false;
}

function draw() {

    if (gameState === "wait") {
        background(splash)
        // if (!bgSound.isPlaying) {
        //     bgSound.play()
        // }
        
       
    }

    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })

    if (gameState == "level1") {
         background(level1bg)
        player.visible=true;
        playbutton.hide()
        soundoffbutton.hide()
        soundonbutton.hide()
        ground.visible=true
    //    ground.velocityY=-5
        ground.velocityX = -5

if(ground.x<0){
    ground.x=ground.width/2
}

    }

drawSprites()

}

function mute() {
    if (bgSound.isPlaying()) {
        bgSound.stop();
        soundoffbutton.show();
        soundonbutton.hide();
        console.log("mute")
    }
    else {
        soundonbutton.show()
        soundoffbutton.hide();
        bgSound.play();
        console.log("unmute")
    }
}

