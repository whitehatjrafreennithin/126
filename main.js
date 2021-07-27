song="";
song1="";
leftWristY =0;
leftWristX =0;
rightWristY =0;
rightWristX =0;

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music1.mp3");
}
function setup(){
canvas = createCanvas(500, 450);
canvas.center();

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet is loaded");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log(rightWristX, rightWristY, leftWristX, leftWristY);
    }
}
function draw(){
    image(video, 0, 0 , 500, 500);
    
}

function play(){
    song.play();

    
}