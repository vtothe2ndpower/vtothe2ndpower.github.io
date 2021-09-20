console.log('connected');

const parentContainer = document.getElementById('about');
const services = document.querySelectorAll('.job');

parentContainer.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);

  if (target.classList.contains('service')) {
    alert('Open Modal!');
  }
});

console.log(parentContainer);
console.log(services);

// Scrollable Modals

openModal = (el) => {
  // Open the modal display
};

closeModal = (el) => {
  // Close the modal display
};
