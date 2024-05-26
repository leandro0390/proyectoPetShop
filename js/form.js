const form = document.querySelector('.form');
const firstname = document.getElementById('firstname');
const mail = document.getElementById('mail');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const firstnameValue = firstname.value.trim();
	const mailValue = mail.value.trim();

	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(firstname);
	}
	
	if(mailValue === '') {
		setErrorFor(mail, 'No puede dejar el email en blanco');
	} else if (!isEmail(mailValue)) {
		setErrorFor(mail, 'No ingreso un email válido');
	} else {
		setSuccessFor(mail);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

