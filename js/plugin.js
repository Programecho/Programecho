/*---------------------------------------------------------------------
	File Name: plugin.js
---------------------------------------------------------------------*/

/* Avoid `console` errors in browsers that lack a console.
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
(function () {
	var method;
	var noop = function () {};
	var methods = [
		"assert",
		"clear",
		"count",
		"debug",
		"dir",
		"dirxml",
		"error",
		"exception",
		"group",
		"groupCollapsed",
		"groupEnd",
		"info",
		"log",
		"markTimeline",
		"profile",
		"profileEnd",
		"table",
		"time",
		"timeEnd",
		"timeline",
		"timelineEnd",
		"timeStamp",
		"trace",
		"warn",
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	const sendBtn = document.getElementById("sendBtn");
	sendBtn.onclick = async function (e) {
		const contactForm = document.getElementById("contactForm");
		const contactFormData = new FormData(contactForm);
		await sendContact(contactFormData);
		contactForm.reset();
	};
})();

function sendContact(form) {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "https://submit-form.com/SSFHnSpY");
	xhr.onload = function () {
		if (xhr.status === 200) {
			alert("Success")
		} else if (xhr.status === 404) {
			alert("Failed");
		}
	};

	xhr.send(form);

}
