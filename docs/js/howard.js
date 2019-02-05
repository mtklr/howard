function getQuotes() {
	if (sessionStorage.length < 1) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "js/howard.json", true);

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var data = JSON.parse(xhr.responseText);
					pickQuote(data);
				} else {
					document.getElementById("phrase").innerHTML = "Hmm.";
				}
			}
			sessionStorage.setItem("howard", JSON.stringify(data));
		};

		xhr.send();
	} else {
		var stored = JSON.parse(sessionStorage.getItem("howard"));
		pickQuote(stored);
	}
}

// for titles, show number matches its array index.
// pick from 1..last element in the array.
function pickQuote(quotes) {
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
}

function applyTheme(startNightHour, endNightHour) {
	const hour = new Date().getHours();

	if (hour > startNightHour || hour < endNightHour) {
		document.body.className = "night";
	} else {
		document.body.className = "day";
	}
}

// month is 0..11, day is 1..31
function checkDay(month, day) {
	const d = new Date();

	if (d.getMonth() === month && d.getDate() === day) {
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

	// set default (fallback) voice
	msg.voice = voices[0];

	// we prefer a British accent (Daniel, hopefully)
	for (i = 0; i < voices.length; i++) {
		if (voices[i].lang == 'en-GB') {
			if (voices[i].name == 'Daniel') {
				msg.voice = voices.filter(function(voice) { return voice.name == 'Daniel'; })[0];
			} else {
				msg.voice = voices.filter(function(voice) { return voice.lang == 'en-GB'; })[0];
			}
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
	applyTheme(19, 5);

	if (checkDay(4, 4)) {
		document.getElementById("phrase").innerHTML =
			"<a href=\"http://www.upc-online.org/respect/\">\
			Happy International Respect for Chickens Day.</a>";
	} else {
		getQuotes();
	}
	if (sound === 1) {
		sayIt = setTimeout(sayQuote, 1000); // needs a delay
	}
	fadeIn(document.getElementById("bub"));
}

window.onload = howNow();
const updateBubble = setInterval(howNow, 90000);
