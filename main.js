Webcam.set({
  width: 400,
  height: 300,
  image_format: "jpeg",
  jpeg_quality: 90,
});
Webcam.attach("camera");

function capture() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      "<img src='" + data_uri + "' />";
  });
  document.getElementById("result").style.display="block";
  document.getElementById("identify").style.display="block";
}

//console.log("Hallo", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uzQhIMYhR/model.json", modelLoaded);

function modelLoaded(){
    console.log("Hallo");
}