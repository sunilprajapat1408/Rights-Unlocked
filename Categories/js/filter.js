let products = {
    data: [
        {
            productName: "Aapki Beti Hamari Beti Scheme",
            category: "Bank",
            image: "images/apkibeti-bg.jfif",
            url: "Aapki Beti Hamari Beti(women).html"
        },
        {
            productName: "Annapurna scheme",
            category: "senior-citizen",
            image: "images/anpurna1.jpg",
            url: "Annapurna scheme(women, senior citizen).html"
        },
        {
            productName: "Beti Bachao Beti Padhao Scheme",
            category: "crime",
            image: "images/beti2.jpg",
            url: "Beti Bachao Beti Padhao Scheme(women).html"
        },
        {
            productName: "One Stop Centre Scheme",
            category: "Empowerment",
            image: "images/one1.jpg",
            url: "One Stop Centre Scheme(women).html"
        },
        {
            productName: "Ujjwala scheme",
            category: "all",
            image: "images/ujjwala1.jpg",
            url: "Ujjwala scheme(women).html"
        },
        {
            productName: "Women Helpline Scheme",
            category: "crime",
            image: "images/womenh1.jpg",
            url: "Women Helpline Scheme(women).html"
        },
    ],
  };
  
  for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Anchor tag
    let anchor = document.createElement("a");
    anchor.setAttribute("href", i.url);
    // Img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    anchor.appendChild(image);
    imgContainer.appendChild(anchor);
    card.appendChild(imgContainer);
    // Container
    let container = document.createElement("div");
    container.classList.add("container");
    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    
    // Navigation button
    let navButton = document.createElement("button");
    // navButton.innerText = "Learn More";
    navButton.onclick = function() {
        window.location.href = i.url;
    };
    container.appendChild(navButton);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  // Parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // Check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("actives");
        } else {
            button.classList.remove("actives");
        }
    });
  
    // Select all cards
    let elements = document.querySelectorAll(".card");
    // Loop through all cards
    elements.forEach((element) => {
        // Display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            // Check if element contains category class
            if (element.classList.contains(value)) {
                // Display element based on category
                element.classList.remove("hide");
            } else {
                // Hide other elements
                element.classList.add("hide");
            }
        }
    });
  }
  
  // Search button click
  document.getElementById("search").addEventListener("click", () => {
    // Initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    // Loop through all elements
    elements.forEach((element, index) => {
        // Check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // Display matching card
            cards[index].classList.remove("hide");
        } else {
            // Hide others
            cards[index].classList.add("hide");
        }
    });
  });
  
  // Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  