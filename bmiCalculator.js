const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res){

  var weight = Number(req.body.userWeight);
  var height = Number(req.body.userHeight);
  var heightSq = height * height;

  var BMI = Math.round(weight/heightSq);

  if (BMI < 18.5){
    res.send("Your BMI is " + BMI + ". You are classified as UNDERWEIGHT.")
  }

  else if (BMI > 18.5 && BMI < 24.9){
    res.send("Your BMI is " + BMI + ". You are classified as NORMAL WEIGHT.")
  }

  else if (BMI > 24.9 && BMI < 29.9){
    res.send("Your BMI is " + BMI + ". You are classified as OVER WEIGHT.")
  }

  else{
    res.send("Your BMI is " + BMI + ". You are classified as OBESE.")
  }


});

app.listen(3000);
