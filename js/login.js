const loginButton = document.getElementById("login-button");
const input = document.getElementById("input-login");
loginButton.addEventListener("click", saveName);

function saveName() {
    const username = input.value;
    setLocalStorage(username)

    window.location.replace("http://localhost:5500/views/tasks.html");
}

// make sure application has persistence on browser
function setLocalStorage(username) {
    localStorage.setItem("username", JSON.stringify(username));
}

