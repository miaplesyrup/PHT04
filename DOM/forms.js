// access the html file
const myForm = document.getElementById("myForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");

// handle form submission
myForm.addEventListener("submit", handleSubmit);

// form submission event handler
function handleSubmit(event) {
  event.preventDefault(); //prevent form from resubmission

  //validate the form inputs
  const isValid = validateForm()

  if (isValid) {
    console.log("Form was submitted successfully!");
    myForm.reset();
    nameError.textContent = "";
    emailError.textContent = "";
  }
}

// validate the form inputs or form input validation
function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (nameValue === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailValue === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else {
    emailError.textContent = "";
  }
  return isValid;
}