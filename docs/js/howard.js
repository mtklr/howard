var speech = false;
var button = document.getElementById("speak");
button.addEventListener("click", toggleSpeech, false);
window.onload = howNow();
const updateBubble = setInterval(howNow, 60000);

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

// https://developers.google.com/web/fundamentals/primers/promises
function get(url) {
	return new Promise(function(resolve, reject) {
		// xhr
		var req = new XMLHttpRequest();
		req.open("GET", url);

		req.onload = function() {
			if (req.status === 200) {
				resolve(req.response);
			} else {
				reject(new Error(req.statusText));
			}
		};

		// handle errors
		req.onerror = function() {
			reject(new Error("Network Error"));
		};

		// make the request
		req.send();
	});
}

function getJSON(url) {
	return get(url).then(JSON.parse).catch(function(error) {
		// console.error("getJSON failed for ", url, error);
		throw error;
	});
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
		document.getElementById("phrase").textContent = quotes.data[pick].text;
	}
}

function getQuotes() {
	return getJSON("js/howard.json").then(function(response) {
		pickQuote(response);
	}).catch(function(error) {
		document.getElementById("phrase").textContent = "Hmm.";
		throw error;
	}, Promise.resolve());
}

function sayQuote() {
	if (! window.hasOwnProperty("speechSynthesis")) {
		return;
	}

	var text = document.getElementById("phrase").textContent;
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();

	// set default/fallback voice
	msg.voice = voices[0];

	// we prefer a British accent (Daniel, hopefully)
	voices.forEach(function(voice) {
		if (voice.lang === "en-GB") {
			if (voice.name === "Daniel") {
				msg.voice = voices.filter(function(voice) {
					return voice.name === "Daniel"; })[0];
			} else {
				msg.voice = voices.filter(function(voice) {
					return voice.lang === "en-GB"; })[0];
			}
		}
	});

	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 1;
	msg.text = text;

	speechSynthesis.speak(msg);
}

function toggleSpeech() {
	if (speech === false) {
		speech = true;
		sayQuote();
		document.getElementById("sound").classList.add("speakicon");
		setTimeout(function() {
			document.getElementById("sound").classList.remove("speakicon");
		}, 500);
	} else {
		speech = false;
		document.getElementById("sound").classList.add("dontspeakicon");
		setTimeout(function() {
			document.getElementById("sound").classList.remove("dontspeakicon");
		}, 500);
	}
}

// https://gist.github.com/chrisbuttery/cf34533cbb30c95ff155
function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";

	function fade() {
		var val = parseFloat(el.style.opacity) + 0.1;
		if (val < 1) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	}

	fade();
}

function howNow() {
	applyTheme(19, 5);

	if (checkDay(4, 4)) {
		document.getElementById("phrase").innerHTML =
			"<a href=\"http://www.upc-online.org/respect/\">Happy International Respect for Chickens Day.</a>";
	} else {
		getQuotes();
	}

	fadeIn(document.getElementById("bub"));

	if (speech === true) {
		setTimeout(sayQuote, 1000); // needs a delay
	}
}
