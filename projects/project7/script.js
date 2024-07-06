const addUser = document.querySelector("#addUser");
const card = document.querySelector("#card")


async function getUser(user) {
    const reqURL = `https://api.github.com/users/${user}`;
    const request = new XMLHttpRequest();
    request.open("GET", reqURL);

    return new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const user = JSON.parse(request.responseText);
                    resolve(user);
                } else {
                    reject(new Error('User not found'));
                    document.querySelector("#error").innerHTML= "User Doesn't Exist! Plaese Check Username and Try again"
                }
            }
        };
        request.send();
    });
}

function createCard(user) {
    const div = document.createElement("div");
    div.className = "user-card";
    div.setAttribute("title", `GitHub username: ${user.login}`);

    const img = document.createElement("img");
    img.src = `${user.avatar_url}`;
    img.style.borderRadius = "50%";
    img.alt = `${user.login}'s avatar`;

    const inDiv = document.createElement("div");
    inDiv.className = "user-info";
    inDiv.innerHTML = `
        <h3>${user.name || user.login}</h3>
        <span>Followers: ${user.followers}</span>
        <span>Following: ${user.following}</span>
        <h5>About</h5>
        <p>${user.bio || 'No bio available'}</p>
        <div class="links">
            <a class="nav-link" href="${user.html_url}" target="_blank">
                <i class="fab fa-github text-white"></i> GitHub
            </a>
            ${user.blog ? `<a class="nav-link" href="${user.blog}" target="_blank">
                <i class="fa-brands fa-blogger"></i> Blog
            </a>` : ''}
            ${user.email ? `<a class="nav-link" href="mailto:${user.email}" target="_blank">
                <i class="fa-solid fa-envelope-circle-check"></i> Email
            </a>` : ''}
        </div>
    `;

    div.appendChild(img);
    
    div.appendChild(inDiv);
    console.log(div)
    card.appendChild(div);
}

addUser.addEventListener("click", async () => {
    const user = document.querySelector("#col").value;
    try {
        const webuser = await getUser(user);
        createCard(webuser);
    } catch (error) {
        console.error(error.message);
     
    }
});
