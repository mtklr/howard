let speech = false;
const button = document.getElementById("speak");
button.addEventListener("click", toggleSpeech, false);
const synth = window.speechSynthesis;
window.onload = loop();

function applyTheme(startNightHour, endNightHour) {
	const hour = new Date().getHours();

	document.body.className = "day";

	if (hour > startNightHour || hour < endNightHour) {
		document.body.className = "night";
	}
}

// month is 0..11, day is 1..31
function checkDay(month, day) {
	const d = new Date();

	if (d.getMonth() === month && d.getDate() === day) {
		return true;
	}

	return false;
}

// https://developers.google.com/web/fundamentals/primers/promises
function get(url) {
	return new Promise(function (resolve, reject) {
		// xhr
		const req = new XMLHttpRequest();
		req.open("GET", url);

		req.onload = function () {
			if (req.status === 200) {
				resolve(req.response);
			} else {
				reject(new Error(req.statusText));
			}
		};

		// handle errors
		req.onerror = function () {
			reject(new Error("Network Error"));
		};

		// make the request
		req.send();
	});
}

function getJSON(url) {
	return get(url)
		.then(JSON.parse)
		.catch(function (error) {
			console.log("getJSON failed for ", url, error);
			throw error;
		});
}

// for titles, show number matches its array index.
// pick from 1..last element in the array.
function pickQuote(quotes) {
	const pick = Math.floor(Math.random() * (quotes.data.length - 1)) + 1;
	document.getElementById("phrase").textContent = quotes.data[pick].text;

	if (quotes.data[pick].title) {
		const url = "http://5by5.tv/b2w/" + pick;
		let t = quotes.data[pick].title;

		if (quotes.data[pick].topic) {
			// if there's a topic, maybe pick it
			let pickedTopic = Math.floor(Math.random() * 2);

			if (pickedTopic === 1) {
				t = quotes.data[pick].topic;
			}
		}

		document.getElementById("phrase").innerHTML =
			'<a href="' + url.toString() + '">' + t + "</a>";
	}
}

function getQuotes() {
	return getJSON("https://howardchicken.com/js/howard.json")
		.then(function (response) {
			pickQuote(response);
		})
		.catch(function (error) {
			console.log(error);
			document.getElementById("phrase").textContent = "Hmm.";
			throw error;
		}, Promise.resolve());
}

function asyncVoices() {
	return new Promise(function (resolve) {
		voices = synth.getVoices();
		// give the browser .5s to get the voice list, then call `resolve`
		// to return values to the variable that's `await`ing them.
		setTimeout(() => resolve(voices), 500);
	});
}

// an async function that uses the func above, when called by the `if` below
async function populateVoiceList() {
	voices = await asyncVoices();
}

// the 'watcher' that calls the async function above
if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = populateVoiceList;
}

async function sayQuote() {
	if (!window.hasOwnProperty("speechSynthesis")) {
		return;
	}

	const text = document.getElementById("phrase").textContent;
	const msg = new SpeechSynthesisUtterance();
	const voices = await asyncVoices();

	// we prefer the dulcet tones of Daniel
	const danielsVoice = voices.filter(function (voice) {
		return voice.name === "Daniel";
	});

	msg.voice = danielsVoice[0] || voices[0];

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
		setTimeout(function () {
			document.getElementById("sound").classList.remove("speakicon");
		}, 500);
	} else {
		speech = false;
		document.getElementById("sound").classList.add("dontspeakicon");
		setTimeout(function () {
			document.getElementById("sound").classList.remove("dontspeakicon");
		}, 500);
	}
}

// https://gist.github.com/chrisbuttery/cf34533cbb30c95ff155
function fadeIn(el, interval, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	interval = interval || 0.1;

	function fade() {
		const val = parseFloat(el.style.opacity) + interval;
		if (val < 1) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		} else {
			el.style.opacity = 1;
		}
	}

	fade();
}

function howNow() {
	applyTheme(19, 5);

	if (checkDay(4, 4)) {
		document.getElementById("phrase").innerHTML =
			'<a href="http://www.upc-online.org/respect/">Happy International Respect for Chickens Day.</a>';
	} else {
		getQuotes();
	}

	fadeIn(document.getElementById("bub"), 0.04);

	if (speech === true) {
		setTimeout(sayQuote, 1000); // needs a delay
	}

}

function loop() {
	howNow();
	setTimeout(loop, Math.floor(Math.random() * 40000 + 10000));
}
