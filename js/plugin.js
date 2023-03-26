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
}

(() => {
	const sendBtn = document.getElementById("sendBtn");
	sendBtn.onclick = () => {
		sendContact();
	};
})();
