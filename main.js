Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("webcam");
Webcam.attach('#webcam');
function takePicture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captureImage'>";
    });
}
console.log("ml5.version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RG_IivAJ9/model.json",model_loaded);
function model_loaded() {
    console.log("model has loaded");
}
function identify() {
    img=document.getElementById("captureImage");
    classifier.classify(img,gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("familyResult").innerHTML=results[0].label; 
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3); 
    }
}
