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
	if (q1 == "TSM"){
		correct++;
	}
	if (q1 == "EG"){
		correct++;
	}
	if (q1 == "C9"){
		correct++;
	}
	if (q1 == "GG"){
		correct++;
	}
	if (q1 == "100"){
		correct++;
	}
	if (q1 == "FQ"){
		correct++;
	}
	if (q1 == "CLG"){
		correct++;
	}
	if (q1 == "DIG"){
		correct++;
	}
	if (q1 == "IMT"){
		correct++;
	}

var meddelanden = ["Perfekt", "Bra jobbat", "Det var ok", "Du gjorde testet antat jag"];
var bild = ["img/20.jpg", "img/22.jpg", "img/23.jpg", "img/21.jpg"]

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "Du fick " + correct + " rätt av 10"
}