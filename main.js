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
      "<img id='snapshot' src='" + data_uri + "' />";
  });
  document.getElementById("result").style.display = "block";
  document.getElementById("identify").style.display = "block";
}

//console.log("Hallo", ml5.version)

classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/uzQhIMYhR/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log("Hallo");
}

function identify() {
  img = document.getElementById("snapshot");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  console.log(error);
  console.log(results);
  console.log(results[0].label, results[0].confidence);

  var accuracy = (results[0].confidence.toFixed(2))*100;

  document.getElementById("object").innerHTML = results[0].label;
  document.getElementById("accuracy").innerHTML = accuracy + "%";

  document.getElementById("doNotShow").style.display = "block";
}
