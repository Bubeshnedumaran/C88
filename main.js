var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_X=10;
player_Y=10;
var player_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
        
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_object);
        
    });
}
window.addEventListener("keydown",key_down);
function key_down(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='73') {
        console.log("i & shiftPressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (e.shiftKey==true && keyPressed=='68') {
        console.log("d & shiftPressed together");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (keyPressed=='38') {
        up();
        console.log("up");
    }
    if (keyPressed=='40') {
        down();
        console.log("down");
    }
    if (keyPressed=='37') {
        left();
        console.log("left");
    }
    if (keyPressed=='39') {
        right();
        console.log("right");
    }
    if (keyPressed=='87') {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keyPressed=='71') {
        new_image('ground.png');
        console.log("g");
    }
    if (keyPressed=='76') {
        new_image('light_green.png');
        console.log("l");
    }
    if (keyPressed=='84') {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keyPressed=='82') {
        new_image('roof.jpg');
        console.log("r");
    }
    if (keyPressed=='89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed=='68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keyPressed=='85') {
        new_image('unique.png');
        console.log("u");
    }
    if (keyPressed=='67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up() {
    if (player_Y>=0) {
        player_Y=player_Y-block_height;
        console.log("block image height="+block_height);
        console.log("when up arrow is pressed,x="+player_X+",y="+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_Y<=500) {
        player_Y=player_Y+block_height;
        console.log("block image height="+block_height);
        console.log("when up arrow is pressed,x="+player_X+",y="+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_X>0) {
        player_X=player_X-block_width;
        console.log("block image width="+block_width);
        console.log("when up arrow is pressed,x="+player_X+",y="+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_X<=850) {
        player_X=player_X+block_width;
        console.log("block image width="+block_width);
        console.log("when up arrow is pressed,x="+player_X+",y="+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}