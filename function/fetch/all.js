function createCard(title, description, category, link) {
  var card = document.createElement('div');
  card.className = "col-lg-4 col-md-6 mb-4";

  var innerCard = document.createElement('div');
  innerCard.className = 'card my-3';
  card.appendChild(innerCard);

  var cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  innerCard.appendChild(cardBody);

  var cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  var cardText = document.createElement('p');
  cardText.className = 'card-text';
  if (description.split(" ").length > 20) {
    description = description.split(" ").splice(0, 20).join(" ") + "...";
  }
  cardText.textContent = description;
  cardBody.appendChild(cardText);

  var cardBody = document.createElement('div');
  cardBody.className = 'card-body justify-content-between d-flex align-items-center';
  innerCard.appendChild(cardBody);

  var badge = document.createElement('span');
  badge.className = 'badge badge-primary category-' + category.toLowerCase();
  badge.innerHTML = '<a href="pages/category/'+category+'">' ;
  badge.textContent = category;
  cardBody.appendChild(badge);

  var spacer = document.createElement('div');
  spacer.style.height = '10px'; // adjust as needed
  cardBody.appendChild(spacer);

  var linkButton = document.createElement('a');
  linkButton.className = 'btn btn-primary';
  linkButton.href = link;
  linkButton.textContent = 'Read More';
  cardBody.appendChild(linkButton);

  return card;
}
let subcategories = ['Mobiles', 'Tablets', 'Laptops', 'Wearables', 'Apps', 'Cryptocurrency', 'Audio', 'Cameras', 'Microsoft', 'Nokia', 'Samsung', 'Google', 'Sony', 'Android', 'Apple', 'Breaking-News', '360Daily', 'Home Entertainment', 'Home-Appliances', 'Smart-Home', 'Opinion', 'Photos', 'Videos', 'Entertainment', 'Internet', 'Gaming', 'Science', 'How-to', 'Podcasts', 'Contests', 'Culture'];

let lowercaseSubcategories = subcategories.map(category => category.toLowerCase());

// Start fetching the first subcategory
fetchSubcategories(0);
fetchSubcategories(1);
fetchSubcategories(2);
fetchSubcategories(3);
fetchSubcategories(4);
fetchSubcategories(5);
fetchSubcategories(6);
fetchSubcategories(7);
fetchSubcategories(8);
fetchSubcategories(9);
fetchSubcategories(10);
fetchSubcategories(11);
fetchSubcategories(12);
fetchSubcategories(13);
fetchSubcategories(14);
fetchSubcategories(15);
fetchSubcategories(16);
fetchSubcategories(17);
fetchSubcategories(18);
fetchSubcategories(19);
fetchSubcategories(20);
fetchSubcategories(21);
fetchSubcategories(22);
fetchSubcategories(23);
fetchSubcategories(24);
fetchSubcategories(25);
fetchSubcategories(26);
fetchSubcategories(27);
fetchSubcategories(28);
fetchSubcategories(29);
fetchSubcategories(30);
fetchSubcategories(31);

function fetchSubcategories(index) {
  // Stop fetching if we've reached the end of the subcategories array
  if (index >= lowercaseSubcategories.length) {
    return;
  }
  
  let category = lowercaseSubcategories[index];
  let fetchURL = `https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.gadgets360.com/rss/${category}/feeds`
  // console.log(fetchURL)
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => {
      let items = data.items.splice(0,9)
      let id = subcategories[index]
      const newsRow = document.getElementById(id);
      items.forEach(item => {
        const card = createCard(item.title, item.description, item.category, item.link);
        newsRow.appendChild(card);
      });
      
      // Fetch the next subcategory
      fetchSubcategories(index + 1);
    })
    .catch(error => console.error(error));
}
