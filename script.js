function createCard(title, description, category, link) {
    var card = document.createElement('div');
    card.className = "col-lg-4 col-md-6 mb-4 ";
  
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
  
  fetch('https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.gadgets360.com/rss/feeds ')
    .then(response => response.json())
    .then(data => {
      const items = data.items.slice(0, 9);
      const newsRow = document.getElementById('newsRow');
      items.forEach(item => {
        const card = createCard(item.title, item.description, item.category, item.link);
        newsRow.appendChild(card);
      });
    })
    .catch(error => console.error(error));
  