const parentContainer = document.getElementById('about');
const services = document.querySelectorAll('.job');

parentContainer.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('service')) {
    alert('Open Modal!');
  }
});

// Scrollable Modals

openModal = (el) => {
  // Open the modal display
};

closeModal = (el) => {
  // Close the modal display
};
