function setup() {
    video = createCapture(VIDEO);
    video.size(540,500);

    canvas = createCanvas(550,550);
    canvas.position(560,160);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('Pose',gotPoses);
}

function draw() {
    background('#D2B4DE');
}

function modelLoaded() {
    console.log("Pose net is initialised");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}