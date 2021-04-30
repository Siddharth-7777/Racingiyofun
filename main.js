canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d");

var wi1 = 120;
var he1 = 70;
var im1 = "car1.png"
var x1 = 10
var y1 = 10

var wi2 = 120
var he2 = 70;
var im2 = "car2.png"
var x2 = 10;
var y2 = 100;

var backi = "canvaser.jpg";

function add() {
    bimg = new Image()
    bimg.onload = uploadBackground;
    bimg.src = backi

    c1 = new Image()
    c1.onload = uploadcar1;
    c1.src = im1; 

    c2 = new Image()
    c2.onload = uploadcar2;
    c2.src = im2; 
}

function uploadBackground() {
    ctx.drawImage(bimg,0,0, canvas.width, canvas.height)
}

function uploadcar1() {
    ctx.drawImage(c1,x1,y1,wi1,he1)
}

function uploadcar2() {
    ctx.drawImage(c2,x2,y2,wi2,he2)
}

window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (keyPressed == "38") {
        up1()
        console.log("up")
    }

    if (keyPressed =="40") {
        down1()
        console.log("down")
    }

    if (keyPressed == "37") {
        left1()
        console.log("left")
    }

    if (keyPressed == "39") {
        right1()
        console.log("right")
    }

    if (keyPressed == "87") {
        up2()
        console.log("w key")
    }

    if (keyPressed == "65") {
        left2()
        console.log("a key")
    }

    if (keyPressed == "83") {
        down2()
        console.log("s key")
    }

    if (keyPressed == "68") {
        right2()
        console.log("d key")
    }

    if (x1 > 700) {

        if (x2 > 700) {
            document.getElementById("gamestatus").innerHTML = "Car 2 won!"
        } else {
            document.getElementById("gamestatus").innerHTML = "Car 1 won!"
        }
        
    }

    if (x2 > 700) {
        if (x1 > 700) {
            document.getElementById("gamestatus").innerHTML = "Car 1 won!"
        } else {
            document.getElementById("gamestatus").innerHTML = "Car 2 won!"
        }
        
    }

   
}

function up1() {
   if (y1 >= 0) {
       y1 = y1 - 10
       uploadBackground()
       uploadcar1()
       uploadcar2()
   }
}

function down1() {
    if (y1 <= 500) {
        y1 = y1 + 10
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function left1() {
    if (x1 >= 0) {
        x1 = x1 - 10
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function right1() {
    if (x1 <= 700) {
        x1 = x1 + 10
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function up2() {
    if (y2 >= 0) {
        y2 = y2 - 10
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
 }
 
 function down2() {
     if (y2 <= 500) {
         y2 = y2 + 10
         uploadBackground()
         uploadcar1()
         uploadcar2()
     }
 }
 
 function left2() {
     if (x2 >= 0) {
         x2 = x2 - 10
         uploadBackground()
         uploadcar1()
         uploadcar2()
     }
 }
 
 function right2() {
     if (x2 <= 700) {
         x2 = x2 + 10
         uploadBackground()
         uploadcar1()
         uploadcar2()
     }

     

     
 }

