const categories = document.querySelectorAll('.categories')[0];
const items = document.querySelectorAll('.item');
const noResultsDiv = document.getElementById('noResults');
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
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(keyword)) {
      items[i].style.display = 'block';
      count += 1;
    } else {
      items[i].style.display = 'none';
    }

    if (!count) {
      noResultsDiv.style.display = 'block';
    } else {
      noResultsDiv.style.display = 'none';
    }
  }
};

// Add a slide in/slide out effect
// Double check the HTML tags
