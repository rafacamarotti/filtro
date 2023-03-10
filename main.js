noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('oculos.png');
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}