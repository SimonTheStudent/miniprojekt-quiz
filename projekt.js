function check(){
	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	var q6 = document.quiz.q6.value;
	var q7 = document.quiz.q7.value;
	var q8 = document.quiz.q8.value;
	var q9 = document.quiz.q9.value;
	var q10 = document.quiz.q10.value;
	var correct = 0;

	if (q1 == "TL"){
		correct++;
	}
	if (q2 == "TSM"){
		correct++;
	}
	if (q3 == "EG"){
		correct++;
	}
	if (q4 == "C9"){
		correct++;
	}
	if (q5 == "GG"){
		correct++;
	}
	if (q6 == "100"){
		correct++;
	}
	if (q7 == "FQ"){
		correct++;
	}
	if (q8 == "CLG"){
		correct++;
	}
	if (q9 == "DIG"){
		correct++;
	}
	if (q10 == "IMT"){
		correct++;
	}

var meddelanden = ["Perfekt", "Bra jobbat", "Det var ok", "Du gjorde testet iallafall"];
var bild = ["img/20.jpg", "img/22.jpg", "img/23.jpg", "img/21.jpg"]

var range;
var score;
	
	if (correct < 8){
		range = 3;
		score = 3;
	}
	if (correct < 5 && correct > 9){
		range = 2;
		score = 2;
	}
	if (correct < 2 && correct > 6){
		range = 1;
		score = 1;
	}
	if (correct > 3){
		range = 0;
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = meddelanden[range];
	document.getElementById("number_correct").innerHTML = "Du fick " + correct + " rätt av 10"
	document.getElementById("picture").src = bild[score];
}