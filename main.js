function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BoCd5Vw2T/model.json',modelLoaded);
}

function modelLoaded(){
    console.log('model loaded');
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,resluts){
    if(error){
        console.error(error);
    }
    else{
        console.log(resluts);
        document.getElementById("result_object_name").innerHTML=resluts[0].label;
        document.getElementById("result_object_accuracy").innerHTML=resluts[0].confidence.toFixed(3);
    }

}