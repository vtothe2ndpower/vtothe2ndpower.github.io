console.log('connected');

const categories = document.querySelectorAll('.categories')[0];
const items = document.querySelectorAll('.item');
let activeBtn = null;

categories.addEventListener('click', (e) => {
  const target = e.target;

  if (target.value) {
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    activeBtn = target;
    activeBtn.classList.add('active');
    filterProjects(activeBtn.value);
  }
});

filterProjects = (keyword) => {
  items.forEach((item) => {
    item.style.display = item.classList.contains(keyword) ? 'block' : 'none';
  });

  // if all empty - give message a display of block, hide otherwise
};

// Add a fade out and fade in effect
// Style the buttons - add margin and pretty colors
// Double check the tags
// add active and in active styles for btns
