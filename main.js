var prediction_1 = ""
var  prediction_2 = ""

camera=document.getElementById("camera");
Webcam.set({
    height:300,
    width:350,
image_format:'png',
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'">';
});

}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/.json',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}
function check() {
    var img=document.getElementById("captured_image");
     classfier.classfy(img , gotResult);
  }
  function gotResult(error, results) {
       if (error) {
            console.error(error);
         } else {
              console.log(results);
               document.getElementById("result_emotion_name").innerHTML = results[0].label; 
  document.getElementById("result_emotion_name2").innerHTML = results[1].label;
  }
  function speak() {
      var synth= window.SpeechSynthesis;
      var speak_data_1="The first prediction is" + prediction_1;
      var speak_data_2="The second prediction is" + prediction_2;
      var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); 
      synth.speak(utterThis);

  } 