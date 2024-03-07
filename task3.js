var formDataArray = [];
function submitForm() {
  if (validateForm()) {
    logFormData();
  }
}
function validateForm() {
  if (document.getElementById("resume").files.length <= 0) {
    alert("Please upload CV");
    return false;
  }

  var phoneNumberRegex = /^\d+$/;
  var phoneNumberInput = document.getElementById("phone_Number");
  if (!phoneNumberRegex.test(phoneNumberInput.value)) {
    alert("Please use only numbers for Phone Number");
    return false;
  }
  var phoneNumberLength = phoneNumberInput.value.length;
  if (phoneNumberLength != 10) {
    alert("Please use a 10-digit number for Phone Number");
    return false;
  }

  var zipRegex = /^\d+$/;
  var zipInput = document.getElementById("zip");
  if (!zipRegex.test(zipInput.value)) {
    alert("Please enter a valid ZIP code containing only integers");
    return false;
  }

  var graduationYearInput = document.getElementById("graduation");
  var graduationYear = parseInt(graduationYearInput.value, 10);
  if (isNaN(graduationYear) || graduationYear < 1980 || graduationYear > 2030) {
    alert("Please enter a valid graduation year between 1980 and 2030");
    return false;
  }

  var employmentDatesRegex = /^\d{4}$/;
  var employmentDatesInput = document.getElementById("employmentDates");
  if (!employmentDatesRegex.test(employmentDatesInput.value)) {
    alert("Please enter a valid year for employment dates");
    return false;
  }

  var startDateInput = document.getElementById("startDate");
  if (startDateInput.value === "") {
    alert("Please select a Start Date");
    return false;
  }

  var preferredScheduleInput = document.getElementById("preferredSchedule");
  if (preferredScheduleInput.value === "") {
    alert("Please enter Preferred Work Schedule");
    return false;
  }

  var referenceNameInput = document.getElementById("referenceName");
  if (referenceNameInput.value === "") {
    alert("Please enter Reference Name");
    return false;
  }

  var referenceContactInput = document.getElementById("referenceContact");
  if (referenceContactInput.value === "") {
    alert("Please enter Reference Contact Information");
    return false;
  }

  var relationshipToApplicantInput = document.getElementById(
    "relationshipToApplicant"
  );
  if (relationshipToApplicantInput.value === "") {
    alert("Please enter Relationship to Applicant");
    return false;
  }

  var whyWorkForCompanyInput = document.getElementById("whyWorkForCompany");
  if (whyWorkForCompanyInput.value === "") {
    alert(
      "Please provide a response to 'Why do you want to work for this company?'"
    );
    return false;
  }

  if (!document.getElementById("privacyPolicy").checked) {
    alert("Please check Privacy Policy");
    return false;
  }

  if (!document.getElementById("agreement").checked) {
    alert("Please check Agreement");
    return false;
  }

  if (document.getElementById("jobResponsibilities").value.length <= 0) {
    alert("Please enter job responsibilities");
    return false;
  }

  if (document.getElementById("coverLetter").value.length <= 0) {
    alert("Please enter cover letter");
    return false;
  }

  if (document.getElementById("relevantSkills").value.length <= 0) {
    alert("Please enter job skills");
    return false;
  }

  return true;
}

function logFormData() {
  var formData = {
    fName: document.getElementById("first_Name").value,
    lName: document.getElementById("last_Name").value,
    phoneNumber: document.getElementById("phone_Number").value,
    email: document.getElementById("email").value,
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    resumeFileName: document.getElementById("resume").files[0].name,
    coverLetterText: document.getElementById("coverLetter").value,
    educationLevel: document.getElementById("educationLevel").value,
    universityName: document.getElementById("school").value,
    major: document.getElementById("major").value,
    graduationYear: document.getElementById("graduation").value,
    jobTitles: document.getElementById("jobTitles").value,
    companyNames: document.getElementById("companyNames").value,
    employmentDates: document.getElementById("employmentDates").value,
    jobResponsibilities: document.getElementById("jobResponsibilities").value,
    relevantSkills: document.getElementById("relevantSkills").value,
    certifications: document.getElementById("certifications").value,
    agreement: document.getElementById("agreement").checked,
    privacyPolicy: document.getElementById("privacyPolicy").checked,
    startDate: document.getElementById("startDate").value,
    preferredSchedule: document.getElementById("preferredSchedule").value,
    willingToRelocate: document.getElementById("willingToRelocate").checked,
    referenceName: document.getElementById("referenceName").value,
    referenceContact: document.getElementById("referenceContact").value,
    relationshipToApplicant: document.getElementById("relationshipToApplicant")
      .value,
    whyWorkForCompany: document.getElementById("whyWorkForCompany").value,
  };

  formDataArray.push(formData);
  console.log("Form Data Array:", formDataArray);
  clearForm();
}

function clearForm() {
  document.querySelector("form").reset();
}

function displayTable() {
  var table = document.getElementById("dataTable");
  var tableBody = document.getElementById("dataTableBody");
  tableBody.innerHTML = "";

  for (var i = 0; i < formDataArray.length; i++) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent =
      formDataArray[i].fName + " " + formDataArray[i].lName;
    row.appendChild(nameCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = formDataArray[i].email;
    row.appendChild(emailCell);

    var phoneCell = document.createElement("td");
    phoneCell.textContent = formDataArray[i].phoneNumber;
    row.appendChild(phoneCell);

    var resumeCell = document.createElement("td");
    resumeCell.textContent = formDataArray[i].resumeFileName;
    row.appendChild(resumeCell);

    var coverLetterCell = document.createElement("td");
    coverLetterCell.textContent = formDataArray[i].coverLetterText;
    row.appendChild(coverLetterCell);

    tableBody.appendChild(row);
  }

  // Toggle the visibility of the table
  form = document.getElementById("applicationForm");
  form.style.display = form.style.display === "none" ? "" : "none";
  table.style.display = table.style.display === "none" ? "table" : "none";
}
