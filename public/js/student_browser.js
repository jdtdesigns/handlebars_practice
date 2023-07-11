const studentForm = document.querySelector('#student-form');
const firstInput = document.querySelector('#first-input');
const lastInput = document.querySelector('#last-input');
const emailInput = document.querySelector('#email-input');
const groupSelect = document.querySelector('#group-select');

function handleStudentSubmit(event) {
  event.preventDefault();

  // Send a fetch POST request to /api/student
  // The method should be set to POST
  // The headers object should have a property of 'Content-Type' and value of 'application/json'
  // The body should be a stringified json object, matching the required fields on your student
  // Also include the group id in your object
  fetch('/api/student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: firstInput.value,
      last_name: lastInput.value,
      email: emailInput.value,
      groupId: groupSelect.value
    })
  }).then(res => {
    alert('Student added successfully!');
    firstInput.value = '';
    lastInput.value = '';
    emailInput.value = '';
  });
}

function getGroups() {
  // Make a server request to GET the groups from the db
  fetch('/api/groups')
    .then(res => res.json())
    .then(data => {
      if (!data.length) return window.location = '/group';
      // Loop over our data array of groups
      data.forEach(groupObj => {
        // For each group object, insert an option element into the groupSelect
        // The value should be the id of the group
        // The option text should be the name of the group
        // <option value="1">Team Google Ninjas</option>
        groupSelect.insertAdjacentHTML('beforeend',
          `<option value="${groupObj.id}">${groupObj.name}</option>`)
      });

    });
}

getGroups();
studentForm.addEventListener('submit', handleStudentSubmit);



