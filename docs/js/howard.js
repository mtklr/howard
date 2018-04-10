function pickQuote() {
	// https://stackoverflow.com/a/40332133
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
		   	if (xhr.status === 200) {
				const quotes = JSON.parse(xhr.responseText);
				const pick = Math.floor(Math.random() * (quotes.data.length - 1)) + 1;

				if (quotes.data[pick].title) {
					var t = quotes.data[pick].title;
					if (quotes.data[pick].topic) {
						// if there's a topic, maybe pick it
						const pickedTopic = Math.floor(Math.random() * 2);
						if (pickedTopic === 1) {
							t = quotes.data[pick].topic;
						}
					}

					const url = "http://5by5.tv/b2w/" + pick;
					document.getElementById("phrase").innerHTML = "<a href=\"" +
						url.toString() + "\">" + t + "</a>";
				} else {
					document.getElementById("phrase").innerHTML = quotes.data[pick].text;
				}
			} else {
				document.getElementById("phrase").innerHTML = "Hmm.";
			}
		}
	};
	xhr.open("GET", "js/howard.json", true);
	xhr.send();
}

function applyTheme() {
	const hour = new Date().getHours();
	if (hour > 19 || hour < 5) {
		document.body.className = "night";
	} else {
		document.body.className = "day";
	}
}

function checkDay() {
	const d = new Date();
	if (d.getMonth() === 4 && d.getDate() === 4) {
		return true;
	} else {
		return false;
	}
}

// fade in - https://gist.github.com/chrisbuttery/cf34533cbb30c95ff155
function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		var val = parseFloat(el.style.opacity) + 0.1; // 'let'
		if (val < 1) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	}());
}

var sound = 0;

function toggleSound() {
	if (sound === 0) {
		sound = 1;
	} else {
		sound = 0;
	}

	if (sound === 1) {
		sayQuote();
	}
}

function sayQuote() {
	if (! 'speechSynthesis' in window) {
		return;
	}

	var text = document.getElementById("phrase").innerHTML;
	text = text.replace(/(<a href[^>]*>|<\/a>)/g, ""); // remove tags or they're spoken
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();

	msg.lang = 'en-GB';

	// we prefer Daniel
	for (i = 0; i < voices.length; i++) {
		if (voices[i].name == 'Daniel') {
			msg.voice = voices.filter(function(voice) { return voice.name == 'Daniel'; })[0];
			break;
		}
	}

	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 1;
	msg.text = text;

	speechSynthesis.speak(msg);
}

function howNow() {
	applyTheme();
	if (checkDay()) {
		document.getElementById("phrase").innerHTML = "<a href=\"http://www.upc-online.org/respect/\">Happy International Respect for Chickens Day.</a>";
	} else {
		pickQuote();
	}
	if (sound === 1) {
		sayIt = setTimeout(sayQuote, 1000); // needs a delay
	}
	fadeIn(document.getElementById("bub"));
}

window.onload = howNow();
const updateBubble = setInterval(howNow, 90000);
