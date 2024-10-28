function results() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	getheight = height * 0.3048; // 1 foot = 0.3048 meters
	getBMI = (weight / Math.pow(getheight, 2)).toFixed(2);

	if (getBMI <= 18.4) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showUnderweight").innerHTML = "Result : Underweight &#128533, To transition from underweight to normal weight, focus on consuming calorie-dense nutrient-rich foods, incorporating strength training and cardio exercises, and consulting with a healthcare professional for personalized guidance.";
	}

	if (getBMI >= 18.5 && getBMI <= 24.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showNormal").innerHTML = "Result :You are in a Healthy Weight &#128512;";
	}

	if (getBMI >= 25 && getBMI <= 29.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showOverweight").innerHTML = "Result : Overweight &#128544 Focus on a balanced diet and regular exercise to gradually transition from being overweight to a healthy and normal weight.";
	}

	if (getBMI >= 30) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showObese").innerHTML = "Result : Obesity &#128545 Gradually incorporate more whole foods and vegetables into your diet while increasing physical activity to transition from obesity to a healthier weight.";
	}

	if ((weight.length <= 0) || (height.length <= 0)) {
		document.getElementById("message").innerHTML = "Note : Please enter your exact height & weight.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight < 0) || (height < 0)) {
		document.getElementById("message").innerHTML = "Note : Height and weight should not be negative values.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight == 0) || (height == 0)) {
		document.getElementById("message").innerHTML = "Note : Please enter your exact height & weight.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	else {
		document.getElementById("showResult").innerHTML = showResults;
	}

	// remove the [results] button

	document.querySelector(".reset").style.display = "block";
	document.querySelector(".results").style.display = "none";
}