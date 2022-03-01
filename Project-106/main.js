//https://teachablemachine.withgoogle.com/models/5JZQ2mW2C/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/5JZQ2mW2C/',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}