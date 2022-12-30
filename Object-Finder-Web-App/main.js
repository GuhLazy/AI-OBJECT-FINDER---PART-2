status=""
function start(){
    
}
function preload(){

}
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(550,200);
    
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(550,200)
    vieo.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses)
}
function draw(){
    image(video,0,0,600,500);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}
function modelLoaded(){
    console.log(modelLoaded)
    status=true;
}