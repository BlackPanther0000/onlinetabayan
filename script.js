const SCRIPT_URL = "IMONG_APPS_SCRIPT_URL_DIRI";

function showSection(section) {
    const display = document.getElementById('display-area');
    
    const sections = {
        home: `<h2>🏠 Welcome Home</h2><p>Latest updates para sa Online Tambayan community.</p>`,
        movies: `<h2>🎬 Trending Movies</h2><div class='grid-placeholder'>Diri ibutang ang mga movie posters...</div>`,
        music: `<h2>🎵 Tambayan Playlist</h2><p>Paminaw sa mga paboritong kanta samtang nag-browse.</p>`,
        shopping: `<h2>🛒 Online Tindahan</h2><p>Barato ug de-kalidad nga mga baligya.</p>`,
        about: `<h2>ℹ️ About Online Tambayan</h2><p>Kini nga site gihimo para sa paglingaw-lingaw ug pagtuon.</p>`,
        signup: `
            <div class="signup-form">
                <h3>📝 Create Account</h3><br>
                <input type="text" id="reg-name" placeholder="Full Name"><br>
                <input type="email" id="reg-email" placeholder="Email Address"><br>
                <input type="text" id="reg-user" placeholder="Username"><br>
                <input type="password" id="reg-pass" placeholder="Password"><br><br>
                <button class="btn-login" onclick="processSignup()">Register Now</button>
            </div>`
    };

    display.innerHTML = sections[section] || sections['home'];
}

async function processSignup() {
    const data = {
        action: "signup",
        fullname: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value,
        username: document.getElementById('reg-user').value,
        password: document.getElementById('reg-pass').value
    };

    const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });

    if (await response.text() === "Success") {
        alert("Account Created! Pwede na ka mo-login.");
        showSection('home');
    }
}

async function login() {
    const data = {
        action: "login",
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });

    if (await response.text() === "Authenticated") {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('user-welcome').style.display = 'block';
        document.getElementById('user-welcome').innerText = "Welcome, " + data.username + "!";
        alert("Login Successful!");
    } else {
        alert("Wrong username or password.");
    }
}