const enterPetFormHandler = async (event) => {
  event.preventDefault();
  //var FormData = require('form-data');
  const name = document.querySelector('#name').value.trim();
  const color = document.querySelector('#color').value.trim();
  const size = document.querySelector('#size').value.trim();
  const found_date = document.querySelector('#found_date').value.trim();
  const adoption_date = document.querySelector('#found_date').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();
  const filedata = document.querySelector('#filename')
  const cage = 1
  const user_id=1
  const filename=filedata.files[0].name

  //Creating a pet
  const response = await fetch('/api/pets', {
    method: 'POST',
    body: JSON.stringify({ name, color, size, category_id, cage, found_date, filename, user_id, adoption_date}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {

        const uploadResponse = await fetch('/upload', {
          method: 'POST',
          body:filedata.files[0],
        });

        if (uploadResponse.ok) {
          document.location.replace('/admin');
        } else {
          alert('Failed to upload image');
        }


    
  } else {
    alert('Failed to enter pet');
  }

  
};


document
  .querySelector('.enter-pet-form')
  .addEventListener('submit', enterPetFormHandler);
