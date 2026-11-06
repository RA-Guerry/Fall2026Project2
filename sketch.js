let biomes;
let bioId;
let bioButton = false;
let biomeNum = 0;
let randomNum = 0;
let itrain = false;
let inbutton = false;
let inmenu = false;
let shuffleIn = false;
let menu = false;
let drop = [];
let button = [];
let textx1 = 0;
let textx2 = -360;
let texty = 68;
let temperature;

function preload(){
  biomes = loadJSON("biomes.json");
  nethimg = loadImage("netherrack.png");
  endimg = loadImage("endstone.png");
  opmenu = loadImage("hamg.png");
  font = loadFont("mc-font/MinecraftTen.ttf");
}

function setup() {
  createCanvas(400, 400);

   for(let i = 0; i < 60; i++){
    drop[i] = new Drop();
} 

   for(let i = 0; i < 65; i++){
    button[i] = new Button(0,(texty-20)+25*[i],290,25,0+[i]);
} 
}

function keyPressed(){
  if (keyCode == 37 || keyCode == 65){
    if (biomeNum == 0){
      biomeNum = 0;
    } else{
      biomeNum = biomeNum - 1;
    }
    } else if (keyCode == 39 || keyCode == 68){
      if (biomeNum == 64){
        biomeNum = 64;
      } else{
        biomeNum = biomeNum + 1;
      }
  }

}

function draw() {
  textFont(font);

  
  let name = biomes[biomeNum].displayName;
  let type = biomes[biomeNum].category;
  let dimension = biomes[biomeNum].dimension;
  temperature = biomes[biomeNum].temperature;
  let rain = biomes[biomeNum].has_precipitation;

  if (dimension == "overworld"){
    if (itrain == true && rain == true){
     background(50,120,190);
    } else{
      background(100,175,255);
    }
  } else if (dimension == "nether"){
    if(name == "Soul Sand Valley") {
    background(20,150,170);
    } else{
       background(190,35,35);
    }
  } else if (dimension == "end"){
    background(10);
  }


  for(let i = 0; i < 60; i++){
    if (itrain == true && rain == true){
      drop[i].show();
      drop[i].update();
    }
  }

   noStroke();


  if (type == "ocean"){
    fill(0,0,255);
    rect(-5,305,405,400);
  }

  if (type == "beach" || type == "desert"){
    if(name == "Stony Shore"){
      fill(240,240,170);
      rect(-5,305,405,400);
      fill(150);
      rect(-5,305,180,400);
      rect(-5,350,300,50);
    } else{
      fill(240,240,170);
      rect(-5,305,405,400);
    }
    
  }

  if (type == "mesa"){
    fill(230,120,20);
    rect(-5,305,405,400);
  }

  if (type == "underground"){
    if (name == "Deep Dark"){
      fill(80,220,80);
      rect(-5,5,405,400);
      fill(100,60,20);
      rect(-5,15,405,400);
      fill(130);
      rect(-5,75,405,400);
      fill(0,20,40);
      rect(-5,320,405,100);
      rect(-5,270,90,100);
       rect(320,270,90,100);
    } else if (name == "Dripstone Caves"){
    fill(80,220,80);
    rect(-5,5,405,400);
    fill(100,60,20);
    rect(-5,15,405,400);
    fill(130);
    rect(-5,75,405,400);
    fill(105,85,85);
      rect(-5,320,405,100);
      rect(-5,270,90,100);
       rect(320,270,90,100);
    } else if (name == "Lush Caves"){
      fill(80,220,80);
    rect(-5,5,405,400);
    fill(100,60,20);
    rect(-5,15,405,400);
    fill(130);
    rect(-5,75,405,400);
    fill(60,110,40);
      rect(-5,320,405,100);
      rect(-5,270,90,100);
       rect(320,270,90,100);
    } else{
      fill(80,220,80);
    rect(-5,5,405,400);
    fill(100,60,20);
    rect(-5,15,405,400);
    fill(130);
    rect(-5,75,405,400);
    }
    
  }

  if (type == "ice"){
    fill(180,220,255);
    rect(-5,305,405,400);
  }

  if (type == "jungle"){
    if (name == "Bamboo Jungle"){
      fill(40,145,40);
      rect(70,0,25,390);
      rect(15,0,25,390);
      rect(295,0,25,390);
      rect(135,0,25,390);
      rect(180,0,25,390);
      rect(240,0,25,390);
      rect(375,0,25,390);
      rect(338,0,20,390);
    } else{
      fill(70,35,15);
      rect(50,0,110,400);
    }
    fill(30,170,50);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
  }

  if (type == "forest"){
    if(name == "Birch Forest" || name == "Old Growth Birch Forest"){
    fill(200);
    rect(50,70,70,400);
    fill(0,80,0);
    rect(0,70,190,100);
    rect(25,20,120,100);
    } else if(name == "Cherry Grove"){
    fill(40,0,0);
    rect(50,70,70,400);
    fill(240,180,170);
    rect(0,70,190,100);
    rect(25,20,120,100);
    } else if(name == "Dark Forest" || name == "Grove"){
    fill(60,20,0);
    rect(50,70,70,400);
    fill(0,50,0);
    rect(0,70,190,100);
    rect(25,20,120,100);
    }  else if(name == "Mangrove Swamp"){
    fill(80,60,40);
    rect(50,70,70,400);
    fill(20,40,20);
    rect(0,70,190,100);
    rect(25,20,120,100);
    } else {
    fill(90,50,10);
    rect(50,70,70,400);
    fill(0,110,20);
    rect(0,70,190,100);
    rect(25,20,120,100);
    }
    
    if (name == "Mangrove Swamp"){
      fill(80,120,80);
    rect(-5,300,405,400);
    fill(70,60,20);
    rect(-5,310,405,400);
      fill(40,75,60);
    rect(200,300,405,55);
    } else{
      fill(80,220,80);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
    }
    
    
  }

  if (type == "river"){
    fill(80,220,80);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
    fill(0,0,255);
    rect(60,300,270,400);
  }

  if (type == "savanna"){
    fill(180,220,20);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
  }

  if (type == "swamp"){
    fill(80,60,40);
    rect(50,70,70,400);
    fill(20,40,20);
    rect(0,70,190,100);
    rect(25,20,120,100);
    fill(80,120,80);
    rect(-5,300,405,400);
    fill(70,60,20);
    rect(-5,310,405,400);
    fill(40,75,60);
    rect(200,300,405,55);
  }

  if (type == "plains"){
    fill(80,220,80);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
  }

  if (type == "taiga"){
    fill(60,20,0);
    rect(60,0,70,400);
    fill(95,150,110);
    rect(-5,300,405,400);
    fill(120,80,40);
    rect(-5,310,405,400);
  }


  if (type == "mountain"){
    fill(130);
    rect(50,30,300,400);
    fill(130);
    rect(25,65,350,400);
    fill(130);
    rect(-5,100,405,400);
  }

  if (type == "extreme hills"){
    fill(130);
    rect(100,40,300,400);
    fill(130);
    rect(50,70,350,400);
    fill(130);
    rect(-5,110,405,400);
    fill(140,100,60);
    rect(-5,110,55,100);
    fill(75,110,80);
    rect(-5,110,55,10);
  }

  if (type == "mushroom"){
    fill(200);
    rect(80,70,70,400);
    fill(170,0,0);
    rect(20,60,190,160);
    fill(230);
    rect(150,60,60,50);
    rect(20,170,60,50);
    rect(40,75,70,60);
    rect(125,145,70,60);
    fill(140,130,160);
    rect(-5,300,405,400);
    fill(120,80,40)
    rect(-5,310,405,400);
  }

  if (name == "Pale Garden"){
    fill(80);
    rect(50,70,70,400);
    fill(170);
    rect(0,70,190,100);
    rect(25,20,120,100);
    fill(160,180,160);
    rect(-5,300,405,400);
    fill(110,95,75);
    rect(-5,310,405,400);
  }

  if (type == "nether"){
    if (name == "Crimson Forest"){
      fill(100,60,60);
    rect(50,70,70,300);
    fill(160,0,0);
    rect(0,70,190,100);
    rect(25,20,120,100);
      fill(80,15,15,110);
    image(nethimg,25,310,70,70);
    image(nethimg,95,310,70,70);
    image(nethimg,165,310,70,70);
    image(nethimg,235,310,70,70);
    image(nethimg,305,310,70,70);
    rect(25,310,350,70);
    } else if(name == "Warped Forest"){
      fill(60,80,100);
    rect(50,70,70,300);
    fill(0,160,180);
    rect(0,70,190,100);
    rect(25,20,120,100);
      fill(80,15,15,110);
    image(nethimg,25,310,70,70);
    image(nethimg,95,310,70,70);
    image(nethimg,165,310,70,70);
    image(nethimg,235,310,70,70);
    image(nethimg,305,310,70,70);
    rect(25,310,350,70);
    } else if(name == "Basalt Deltas") {
      fill(70);
    rect(-5,310,200,100);
    fill(20);
    rect(180,310,200,100);
    fill(250,150,0);
    rect(300,310,350,100);
    } else if(name == "Soul Sand Valley") {
      fill(85,70,60);
    rect(-5,310,250,100);
    fill(75,60,50);
    rect(240,310,350,100);
    } else{
      fill(80,15,15,110);
    image(nethimg,25,310,70,70);
    image(nethimg,95,310,70,70);
    image(nethimg,165,310,70,70);
    image(nethimg,235,310,70,70);
    image(nethimg,305,310,70,70);
    rect(25,310,350,70);
    }
    
    
  }

  if (type == "the end"){
    fill(220,220,180,110);
    image(endimg,25,310,70,70);
    image(endimg,95,310,70,70);
    image(endimg,165,310,70,70);
    image(endimg,235,310,70,70);
    image(endimg,305,310,70,70);
    rect(25,310,350,70);
  }
  

  if (type == "underground" || type == "mountain" || type == "extreme hills"){
    fill(255);
  textSize(32);
  textAlign(CENTER);
  text(name,200,160);
  text(type,200,200);
  text(dimension,200,270);
  text(temperature,200,300);

  if (temperature > 0){
    fill(250,250-temperature*30,250-temperature*120);
    text(temperature,200,300);
  } else {
    fill(250-temperature*-120,250,250);
    text(temperature,200,300);
  }

  if (itrain == true){
     if(mouseX > 220 && mouseY > 363 && mouseX < 388 && mouseY < 388){
      inbutton = true;
      fill(235,220,80);
      text("Reset Rain", 305,385);
    } else {
        inbutton = false;
        fill(255,255,80);
        text("Reset Rain", 305,385);
      }

    if (rain == true){
      fill(250);
      text("Yes", 200,235);
    } else{
      fill(250);
      text("No", 200,235);
    }
  } else if (itrain == false){
    if(mouseX > 163 && mouseY > 213 && mouseX < 250 && mouseY < 240){
     inbutton = true;
     strokeWeight(3);
     fill(240);
    } else{
     inbutton = false;
     strokeWeight(1);
     fill(250);
    }
    stroke(30);
    textSize(30);
    text("Rain?", 205,235);
   
  }

  } else {
    fill(0,0,250);
   rect(0,0,400,38);
   textSize(34);
   fill(255,255,80);
   text("Biomes Report",textx1,30);
   text("Biomes Report",textx2,30);

   if (textx1 > 550){
    textx1 = -150;
   } else{
    textx1 = textx1 + 1.5;
   }

   if (textx2 > 550){
    textx2 = -150;
   } else{
    textx2 = textx2 + 1.5;
   }

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(name,200,130);
  text(type,200,170);
  text(dimension,200,240);
  if (temperature > 0){
    fill(250,250-temperature*30,250-temperature*120);
    text(temperature,200,270);
  } else {
    fill(250-temperature*-120,250,250);
    text(temperature,200,270);
  }

  if (itrain == true){
    if(mouseX > 245 && mouseY > 370 && mouseX < 392 && mouseY < 390){
      inbutton = true;
      textSize(28);
      fill(235,220,80);
      text("Reset Rain", 320,390);
    } else {
      inbutton = false;
      textSize(28);
      fill(255,255,80);
      text("Reset Rain", 320,390);
      }

    if (rain == true){
      fill(250);
      text("Yes", 200,205);
    } else{
      fill(250);
      text("No", 200,205);
    }
  } else if (itrain == false){
    if(mouseX > 163 && mouseY > 183 && mouseX < 250 && mouseY < 210){
     inbutton = true;
     strokeWeight(3);
     fill(240);
    } else{
     inbutton = false;
     strokeWeight(1);
     fill(250);
    }
    stroke(30);
    textSize(30);
    text("Rain?", 205,205);
   
  }
  }
  
  if (menu == true){
    inbutton = false;

     if(mouseX > 0 && mouseX < 290){
      inmenu = false;
     } else{inmenu = true;}

    noStroke();
    fill(0);
    rect(0,0,290,400);
    textSize(22);
    textAlign(LEFT);

     for(let i = 0; i < 65; i+= 1){
      button[i].show();
      button[i].update();
     } 

    for(let i = 0; i < 65; i+= 1){
      fill(250);
      text(biomes[i].displayName,10,texty+25*[i]);
    }
    fill(0);
    rect(0,0,290,45);
    textSize(40);
    fill(255);
    text("Biomes",10,38);

    if (keyIsDown(83) === true){
        if (texty < -1208){
          texty = texty;
        } else{
          texty = texty - 4;
        }
      } else if (keyIsDown(87) === true){
         if (texty > 67){
          texty = texty;
        } else{
        texty = texty + 4;
        }
      }

      if(mouseX > 0 && mouseX < 290 && mouseY < 400 && mouseY > 47){
    bioButton = true;
  } else{
    bioButton = false;
  }
  
    } else{
    if(mouseX > 0 && mouseY > 0 && mouseX < 38 && mouseY < 38){
 inmenu = true;
 fill(45); 
 } else{
 inmenu = false;
 fill(0); 
 }
 noStroke();
 rect(0,0,38,38);
 image(opmenu,6,7,25,25);
  }

  if (menu == true){}else{
  if(mouseX > 6 && mouseY > 370 && mouseX < 205 && mouseY < 390){
      shuffleIn = true;
      textSize(28);
      fill(235,220,80);
      text("Shuffle Biome", 105,390);
    } else {
      shuffleIn = false;
      textSize(28);
      fill(255,255,80);
      text("Shuffle Biome", 105,390);
      }
  }
 
  console.log(bioId);
}

function mousePressed(){
  if(inmenu == true){
    if (menu == false){
      menu = true;
    } else{
      menu = false;
    }
  } else  if (inbutton == true){
      if (itrain == false){
        itrain = true;
      } else{
        itrain = false;
      } 
    } else if (shuffleIn == true){
      randomNum = random(0,64);
      biomeNum = int(randomNum);
    } else if (bioButton == true){
      biomeNum = bioId;
      menu = false;
      itrain = false;
    }
 

}

class Drop {
  constructor(x,y, sizex, sizey){
  this.x = random(-50,450);
  this.y = random(0,450)-450;
  this.speed = 9;
  }

  show() {
    if (temperature < 0.1){
      fill(230);
      rect(this.x, this.y, 7, 12);
    } else{
      fill(0, 0, 250);
      rect(this.x, this.y, 7, 15);
    }
    
  }

  update() {
    if (temperature < 0.1){
      this.speed = 1.5;
    } else{
      this.speed = 9;
    }

    if (this.y > 400){
      this.y = random(0,450)-450;
    } else{
      this.y = this.y + this.speed;
    }
    
  }
}

 class Button{
    constructor(x,y,length,height,id){
      this.x = x;
      this.y = y;
      this.length = length;
      this.height = height;
      this.id = id;
    }

    show() {
      if (mouseX < 290 && mouseY > this.y && mouseY < this.y+this.height){
        bioId = int(this.id);
        fill(50);
      } else{
        fill(0);}

      rect(this.x,this.y,this.length,this.height);
    }

    update() {

      if (keyIsDown(83) === true){
        if (texty < -1208){
          this.y = this.y;
        } else{
          this.y = this.y - 4;
        }
      } 
      if (keyIsDown(87) === true){
        if (texty > 67){
          this.y = this.y;
        } else{
          this.y = this.y + 4;
        }
      }
    }
  }

