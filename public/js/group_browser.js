const groupForm = document.querySelector('#group-form');

function handleGroupSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#group-name-input');

  fetch('/api/group', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value
    })
  }).then(res => {
    alert('Group added successfully!');
    nameInput.value = '';
  });
}

groupForm.addEventListener('submit', handleGroupSubmit);