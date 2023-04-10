const sendContact = () => {
	const contactForm = document.getElementById("contactForm");
	const contactFormData = new FormData(contactForm);
	const contactFormDataJSON = JSON.stringify(
		Object.fromEntries(contactFormData.entries())
	);
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "https://submit-form.com/SSFHnSpY");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onload = () => {
		if (xhr.status === 200) {
			alert("Success");
			contactForm.reset();
		} else {
			alert("Failed");
		}
	};

	xhr.send(contactFormDataJSON);
};

(() => {
	const sendBtn = document.getElementById("sendBtn");
	sendBtn.onclick = () => {
		sendContact();
	};

	const usesDarkMode =
		window.matchMedia("(prefers-color-scheme: dark)").matches || false;
	const favicon = document.getElementById("favicon");

	function switchIcon(usesDarkMode) {
		if (usesDarkMode) {
			favicon.href = "images/programecho-dark.svg";
		} else {
			favicon.href = "images/programecho-light.svg";
		}
	}

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => switchIcon(e.matches));
	switchIcon(usesDarkMode);
})();


