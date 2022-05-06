// API Cities
const apiCities = [
  {
    name: "New York",
    country: "USA",
    continent: "North America"
  },
  {
    name: "Paris",
    country: "France",
    continent: "Western Europe"
  },
  {
    name: "Tel Aviv",
    country: "Israel",
    continent: "Asia"
  },
  {
    name: "London",
    country: "UK",
    continent: "Europe"
  },
  {
    name: "Berlin",
    country: "Germany",
    continent: "Europe"
  },
  {
    name: "San Francisco",
    country: "USA",
    continent: "North America"
  }
];

// After click on Button
document.getElementById("addButton").onclick = function () {
  // To get value from dashboard
  const getValueFromDashboard = document.getElementById("mySelectCity").value;

  // Removed value from dashboard
  const deleteSelectedCity = document.getElementById("mySelectCity");
  deleteSelectedCity.remove(deleteSelectedCity.selectedIndex);

  // Data parser from apiCities to display
  apiCities.forEach(function (elem) {
    if (getValueFromDashboard === elem.name) {
      // Create Card Element
      const card = document.createElement("div");
      card.classList = "card-body";
      // Create Card Content
      const content = `
           <div class="card">
             <div class="card-header">
               <h4>${elem.name}</h4>
               <div class="card-body">
                 <p>Country: ${elem.country}</p>
                 <p>Continent: ${elem.continent}</p>
               </div>
             </div>
           </div>
         `;
      // Create Style for Card
      card.style = `
                   margin-top: 20px;
                   margin-right: 10px;
                   border: darkgrey solid 2px !important;
                   border-radius: 0.25rem;
                   display: inline-block;
                   width: 330px;
                   `;
      // DIV element gets new parametries from content for Card
      card.innerHTML = content;
      // Class conteiner-fluid inside html file gets Card
      document.querySelector(".container-fluid").appendChild(card);

      // Double-click to remove card from display
      card.onclick = function () {
        card.onclick = function () {
          card.remove();
        };
        // Restore removed name card to dashboard
        var restoreSelectedCity = document.getElementById("mySelectCity");
        var newElement = document.createElement("option");
        newElement.innerHTML = elem.name;
        // restoreSelectedCity.appendChild(newElement);
        restoreSelectedCity.add(newElement, 1);
      };
    }
  });
};
