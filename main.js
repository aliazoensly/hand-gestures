//https://teachablemachine.withgoogle.com/models/TDn2u_OLk/

prediction1="";
prediction2="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="caputure_img" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TDn2u_OLk/model.json', modelLoaded);
function modelLoaded(){
    console.log('modelIsLoaded');
}

function check() {
    img= document.getElementById("capture_img");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if(results[0].label == "thumbs up"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[0].label == "ok"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label == "shut up peace sign"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[1].label == "thumbs up"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }
        if(results[1].label == "ok"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
        if(results[1].label == "shut up peace sign"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
    }

}
