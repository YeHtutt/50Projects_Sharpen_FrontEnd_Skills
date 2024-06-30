const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

/**fetch all the useful user-datas from the github api */
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      errorMessage =
        "No profile under this name. Please enter the correct user name!";
      createErrorCard(errorMessage);
    }
  }
}

/**fetch the github repos of the user*/
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    /**show at the DOM */
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem with fetching github repos!");
  }
}

/**display the user informations at the DOM*/
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            class="avatar" alt="${user.name}"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
          ${user.bio}
          </p>
          <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos"> </div>
        </div>
      </div>
    `;
  main.innerHTML = "";
  main.innerHTML = cardHTML;
}

/**message for not finding the user profile*/
function createErrorCard(message) {
  const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
  main.innerHTML = cardHTML;
}

/**shows 10 latest repos of the github profile on the card */
function addReposToCard(repos) {
  const reposContainer = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposContainer.appendChild(repoEl);
  });
}

/**search the github user-profiles with the search field input*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
