function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vI9-phabu/', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}