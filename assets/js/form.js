//

const my_button = document.getElementById('btnForm')

my_button.onclick = function() {
	event.preventDefault();

	const name = document.getElementById('nameForm');
	const email = document.getElementById('emailForm');
	const text = document.getElementById('textForm');

  const form = document.getElementById('contactForm');

	const message = document.getElementById('message_block');

	let classNameForm = name.classList;
	let classEmailForm = email.classList;
	let classTextForm = text.classList;

	// let classNamesMessage = message.classList;

	// console.log(classNamesForm);

	if (name.value == "") {
		classNameForm.add("input-red");
		console.log(name.classList);
	}
	else {
		classNameForm.remove("input-red");
		console.log(name.classList);
	}

	if (email.value == "") {
		classEmailForm.add("input-red");
		console.log(email.classList);
	}
	else {
		classEmailForm.remove("input-red");
		console.log(email.classList);
	}

  if (text.value == "") {
		classTextForm.add("input-red");
		console.log(email.classList);
	}
	else {
		classTextForm.remove("input-red");
		console.log(email.classList);
	}

	if (name.value != "" && email.value != "" && text.value != "") {
		// form.style.display = "none";
		// classNamesForm.remove("form");
		// message.style.display = "block";
		// console.log(message.classList);
    alert("Done");

	}
}
