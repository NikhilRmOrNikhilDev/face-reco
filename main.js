Webcam.set({
    width:360,
    height:200,
    image_format:"png",
    png_quality:100
})
camera = document.getElementById("camera");

function startWebcam(){
    Webcam.attach(camera);
}
function tas(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'" >';
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4Pn2DzHOA/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded!")
}