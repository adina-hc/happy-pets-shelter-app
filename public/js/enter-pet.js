const enterPetFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const color = document.querySelector('#color').value.trim();
  const size = document.querySelector('#size').value.trim();
  const found_date = document.querySelector('#found_date').value.trim();
  const adoption_date = document.querySelector('#found_date').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();
  const filename = document.querySelector('#filename').value.trim();
  const cage = 1
  const user_id=2
  const response = await fetch('/api/pets', {
    method: 'POST',
    body: JSON.stringify({ name, color, size, category_id, cage, found_date, filename, user_id, adoption_date}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/admin');
  } else {
    alert('Failed to enter pet');
  }
};


document
  .querySelector('.enter-pet-form')
  .addEventListener('submit', enterPetFormHandler);
