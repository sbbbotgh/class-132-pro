statuss = "";
img = "";

function preload(){
    img = loadImage("park.jpg");
}

function setup(){
    canvas = createCanvas(500, 300);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    statuss = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
    }
}

function draw(){
    canvas.center();
    image(img, 0, 0, 640, 420);
}


function back(){
    window.location = "index.html";
}