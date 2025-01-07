// FORM SELECTORS
const form = document.querySelector(".example-form");

// FIRST NAME SELECTORS
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error");

// LAST NAME SELECTORS
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error");

// EMAIL SELECTORS
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

// CONFIRM EMAIL SELECTORS
const confirmEmail = document.getElementById("confirm-email");
const confirmEmailError = document.querySelector("#confirm-email + span.error");

// PASSWORD SELECTORS
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

// CONFIRM PASSWORD SELECTORS
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector(
	"#confirm-password + span.error"
);

// PHONE SELECTORS
const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + span.error");

// ADDRESS SELECTORS
const address = document.getElementById("address");
const addressError = document.querySelector("#address + span.error");

// ZIP CODE SELECTORS
const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector("#zip-code + span.error");

// SUBMIT ERROR SELECTOR
const submitError = document.querySelector("#submit + span.error");

////////////////////////////////////////////////////////////////////////////////

// CHECK VALIDITY ON FIRST NAME INPUT
firstName.addEventListener("input", (e) => {
	if (firstName.validity.valid) {
		firstNameError.textContent = "";
		firstNameError.className = "error";
	} else {
		showErrors("firstName");
	}
});

// CHECK VALIDITY ON LAST NAME INPUT
lastName.addEventListener("input", (e) => {
	if (lastName.validity.valid) {
		lastNameError.textContent = "";
		lastNameError.className = "error";
	} else {
		showErrors("lastName");
	}
});

// CHECK VALIDITY ON EMAIL INPUT
email.addEventListener("input", (e) => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = "error";
	} else {
		showErrors("email");
	}
});

// CHECK VALIDITY ON CONFIRM EMAIL INPUT
confirmEmail.addEventListener("input", (e) => {
	if (confirmEmail.validity.valid && confirmEmail.value === email.value) {
		confirmEmailError.textContent = "";
		confirmEmailError.className = "error";
	} else {
		showErrors("confirmEmail");
	}
});

// CHECK VALIDITY ON PASSWORD INPUT
password.addEventListener("input", (e) => {
	if (password.validity.valid) {
		passwordError.textContent = "";
		passwordError.className = "error";
	} else {
		showErrors("password");
	}
});

// CHECK VALIDITY ON CONFIRM PASSWORD INPUT
confirmPassword.addEventListener("input", (e) => {
	if (
		confirmPassword.validity.valid &&
		confirmPassword.value === password.value
	) {
		confirmPasswordError.textContent = "";
		confirmPasswordError.className = "error";
	} else {
		showErrors("confirmPassword");
	}
});

// CHECK VALIDITY ON PHONE INPUT
phone.addEventListener("input", (e) => {
	if (phone.validity.valid) {
		phoneError.textContent = "";
		phoneError.className = "error";
	} else {
		showErrors("phone");
	}
});

// CHECK VALIDITY ON ADDRESS INPUT
address.addEventListener("input", (e) => {
	if (address.validity.valid) {
		addressError.textContent = "";
		addressError.className = "error";
	} else {
		showErrors("address");
	}
});

// CHECK VALIDITY ON ZIP CODE INPUT
zipCode.addEventListener("input", (e) => {
	if (zipCode.validity.valid) {
		zipCodeError.textContent = "";
		zipCodeError.className = "error";
	} else {
		showErrors("zipCode");
	}
});

////////////////////////////////////////////////////////////////////////////////

// CHECK VALIDITY ON SUBMIT
form.addEventListener("submit", (event) => {
	// If at least a field is invalid
	if (!checkAllFields()) {
		// display an appropriate error message
		submitError.textContent =
			"Please fill required fields before submitting.";
		showErrors("firstName");
		showErrors("lastName");
		showErrors("email");
		showErrors("confirmEmail");
		showErrors("password");
		showErrors("confirmPassword");
		showErrors("phone");
		showErrors("address");
		showErrors("zipCode");
		// prevent form submission
		event.preventDefault();
	}
});

// Function returns true only if all fields vailidity.valid is true and if confirm email and password are matched
function checkAllFields() {
	if (
		firstName.validity.valid &&
		lastName.validity.valid &&
		email.validity.valid &&
		confirmEmail.value === email.value &&
		password.validity.valid &&
		confirmPassword.value === password.value &&
		phone.validity.valid &&
		address.validity.valid &&
		zipCode.validity.valid
	) {
		return true;
	}
}

////////////////////////////////////////////////////////////////////////////////

// Displays appropriate error message
// Accepts "all", "email",
function showErrors(arg) {
	switch (arg) {
		case "firstName":
			if (firstName.validity.valueMissing) {
				firstNameError.textContent = "Please enter your first name.";
			} else if (firstName.validity.tooShort) {
				firstNameError.textContent = `First name should be at least ${firstName.minLength} characters; you entered ${firstName.value.length} characters.`;
			}
            firstNameError.className = "error active";
			break;
		case "lastName":
			if (lastName.validity.valueMissing) {
				lastNameError.textContent = "Please enter your last name.";
			} else if (lastName.validity.tooShort) {
				lastNameError.textContent = `Last name should be at least ${lastName.minLength} characters; you entered ${lastName.value.length} characters.`;
			}
            lastNameError.className = "error active";
			break;
		case "email":
			if (email.validity.valueMissing) {
				emailError.textContent = "Please enter an email address.";
			} else if (email.validity.typeMismatch) {
				emailError.textContent =
					"Entered value needs to be an email address.";
			} else if (email.validity.tooShort) {
				emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length} characters.`;
			}
			emailError.className = "error active";
			break;
		case "confirmEmail":
			if (confirmEmail.validity.valueMissing) {
				confirmEmailError.textContent =
					"Please confirm the email address.";
			} else if (confirmEmail.value !== email.value) {
				confirmEmailError.textContent = "Emails do not match.";
			}
            confirmEmailError.className = "error active";
			break;
		case "password":
			if (password.validity.patternMismatch) {
				passwordError.textContent =
					"Password must be at least 8 characters long and contain at least 2 uppercase letters, 3 lowercase letters, 2 numbers, and one special character (!@#$&*).";
			}
            passwordError.className = "error active";
			break;
		case "confirmPassword":
			if (confirmPassword.validity.valueMissing) {
				confirmPasswordError.textContent =
					"Please confirm the password.";
			} else if (confirmPassword.value !== password.value) {
				confirmPasswordError.textContent = "Passwords do not match.";
			}
            confirmPasswordError.className = "error active";
			break;
		case "phone":
			if (phone.validity.valueMissing) {
				phoneError.textContent = "Please enter your phone number.";
			} else if (phone.validity.tooShort) {
				phoneError.textContent = `Phone number should be at least ${phone.minLength} digits; you entered ${phone.value.length} digits.`;
			}
            phoneError.className = "error active";
			break;
		case "address":
			if (address.validity.valueMissing) {
				addressError.textContent = "Please enter your address.";
			} else if (address.validity.tooShort) {
				addressError.textContent = `Address should be at least ${address.minLength} characters; you entered ${address.value.length} characters.`;
			}
            addressError.className = "error active";
			break;
		case "zipCode":
			if (zipCode.validity.valueMissing) {
				zipCodeError.textContent = "Please enter your zip code.";
			} else if (zipCode.validity.patternMismatch) {
				zipCodeError.textContent = `Zip code should be exactly 5 digits.`;
			}
            zipCodeError.className = "error active";
			break;
	}
}
