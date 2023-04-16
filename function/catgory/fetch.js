fetch('/function/catgory/category.json')

  .then(response => response.json())
  .then(data => {
    // create categories and subcategories dynamically using data
    const categoryList = document.getElementById('categoryList');

// Loop through each category
  data.categories.forEach(category => {
  const li = document.createElement('li');
  li.className = 'dropdown-submenu';
  li.setAttribute('aria-labelledby', 'navbarDropdown');

  const a = document.createElement('a');
  a.href = '#';
  a.className = 'dropdown-item dropdown-toggle';
  a.innerText = category.name;
  li.appendChild(a);

  const subList = document.createElement('ul');
  subList.className = 'dropdown-menu';

  // Loop through each subcategory for this category
  category.subcategories.forEach(subcategory => {
    const subLi = document.createElement('li');
    const subA = document.createElement('a');
    // console.log(category.name)
    subA.href = `/pages/category/${category.name.toLowerCase()}/${subcategory.toLowerCase()}/`;
    subA.className = 'dropdown-item';
    subA.innerText = subcategory;
    subLi.appendChild(subA);
    subList.appendChild(subLi);
  });

  li.appendChild(subList);
  categoryList.appendChild(li);
});

  })
  .catch(error => console.error(error));
