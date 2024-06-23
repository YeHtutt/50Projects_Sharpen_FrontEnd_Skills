const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

//Search for users via the input event in the input field -> callback methode filterLiveUser(input)
filter.addEventListener("input", (e) => filterLiveUser(e.target.value));

/*Retrieve all 150 random user data from the api */ 
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=150");
  const data = await res.json();
  const results = await data.results;
  //Clear result to input HTML content avoiding duplication
  result.innerHTML = "";

  /**run through each results element "user" -> and input the required data to the HTML list by each loop*/
  results.forEach((user) => {
    const listEl = document.createElement("li");
    listEl.innerHTML = `
    <img src="${user.picture.medium}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    //add the list element to the DOM for display UI
    result.appendChild(listEl);
    //push each list Element in the listItems-Array to use in the filter-methode for searching the user by name or location
    listItems.push(listEl);
  });
}

/**Search or Filter methode to display only the searched user on the screen*/
function filterLiveUser(searchInput) {
//Hiding each user from the user list "listItems", if not found, shows only the user found by input 
  listItems.forEach((user) => {
    if (user.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
