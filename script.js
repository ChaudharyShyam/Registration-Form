document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var imageLink = document.getElementById('imageLink').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = Array.from(document.querySelectorAll('input[name="skills[]"]:checked')).map(skill => skill.value).join(', ');

    var displayData = `
      <div class="submitted-container">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    if (imageLink.trim() !== '') {
      displayData += `<div id="image-container"><img id="user-image" src="${imageLink}" alt="User Image"></div>`;
    }

    displayData += `</div>`;
    document.getElementById('display-data').innerHTML += displayData;
    document.getElementById('registrationForm').reset();
  });