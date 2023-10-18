function submitForm() {
  const form = document.getElementById('myForm');
  if (form.checkValidity()) {
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = '';

    const firstName = document.getElementById("firstName").value;
    popupContent.innerHTML += `<p><strong>First Name:</strong> ${firstName}</p>`;

    const lastName = document.getElementById("lastName").value;
    popupContent.innerHTML += `<p><strong>Last Name:</strong> ${lastName}</p>`;

    const dob = document.getElementById("dob").value;
    popupContent.innerHTML += `<p><strong>Date of Birth:</strong> ${dob}</p>`;

    const country = document.getElementById("country").value;
    popupContent.innerHTML += `<p><strong>Country:</strong> ${country}</p>`;

    const gender = document.querySelector('input[name="gender"]:checked').value;
    popupContent.innerHTML +=`<p><strong>Gender:</strong> ${gender}</p>`;

    const profession = document.getElementById("profession").value;
    popupContent.innerHTML += `<p><strong>Profession:</strong> ${profession}</p>`;

    const email = document.getElementById("email").value;
    popupContent.innerHTML += `<p><strong>Email:</strong> ${email}</p>`;

    const mobile = document.getElementById("mobile").value;
    popupContent.innerHTML += `<p><strong>Mobile Number:</strong> ${mobile}</p>`;

    popupContent.innerHTML += `<p><strong>Thank You! Your response was successfully submitted. </strong></p>`;

    document.getElementById('popup').style.display = 'block';
  } else {
    alert('Please fill out all the fields.');
  }
}

function resetForm() {
  document.getElementById('myForm').reset();
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
