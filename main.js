 function light_mode()
{
    body.style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("camera").style.borderColor = "black";
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
console.log(camera);
Webcam.attach(camera);
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='capture_image'>";
    });
}
console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qrO3OrqEz/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded")
}