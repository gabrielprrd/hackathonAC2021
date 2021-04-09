const loginButton = document.getElementById("login-button");
const input = document.getElementById("input-login");
loginButton.addEventListener("click", saveName);

function saveName() {
    const username = input.value;
    var validRegex = /^[a-zA-Z0-9_\-]+$/
    if(!username.match(validRegex)) {
        alert("Username can´t be empty or have white spaces...")
        return;
    }
    setLocalStorage(username)

    window.location.replace("http://localhost:5500/views/tasks.html");
}

// make sure application has persistence on browser
function setLocalStorage(username) {
    localStorage.setItem("username", JSON.stringify(username));
}

