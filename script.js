


/* General Setup */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}






/* Body Background*/
body {
    background-image: url('bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    min-height: 20vh;
    display: flex;
    flex-direction: column;

}






/* Heading */
.heading {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 15px 5%;
    z-index: 1000;
}






/* Login Area */

.auth-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap; /* Para mo-bagsak sa ubos kung gamay ang screen */
}

.auth-section input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 8px;
    color: #ffffff;
    outline: none;
    max-width: 150px; /* Limit para dili molapas */
}

.btn-login {
    background: linear-gradient(to right, #3a7bd5, #00d2ff);
    border: none;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
}



/* Input text 'Username' and 'Password' */
.auth-section input::placeholder {
    color: lightgrey;
    opacity: 1;
}

/* for other Edge ug Chrome */
.auth-section input::-webkit-input-placeholder {
    color: lightgrey;
	opacity: 1;
}

/* for Firefox */
.auth-section input::-moz-placeholder {
    color: lightgrey;
    opacity: 1;
}

















/* Create Accounts */
.auth-links {
    margin-top: 10px;
}

.auth-links a {
    display: inline-block;
    padding: 5px 12px;
    color: white;
    text-decoration: none;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.1); /* Transparent glass look */
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.auth-links a:hover {
    background: white;
    color: #3a7bd5; /* Blue text inig hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.auth-links a:active {
    transform: scale(0.95);
}






/* Image Logo */
.logo {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;
}






/* All Buttons Effect*/
.btn-login:hover, 
.nav-sec:hover {
    background: #00d2ff; /* Mausab ang color inig hover */
    transform: scale(1.07); /* Modako gamay */
    transition: 0.3s;
}

.btn-login:active, 
.nav-sec:active {
    background: #3a7bd5;
    transform: scale(0.95); /* Murag napislit */
}






/* Menu Buttons */
.main-nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap; /* Importante para sa Mobile! */
}

.nav-sec {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
}






/* Main Content Card */
.main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.main-content {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px;
    width: 95%; /* Hapit full width sa mobile */
    max-width: 1000px;
    text-align: center;
}


/* Content Display */
.content-display {
    color: White;
    min-height: 150px;
}






/* MOBILE FIXES */
@media screen and (max-width: 480px) {
    .auth-section {
        justify-content: center;
    }
    
    .auth-section input {
        max-width: 75%;
        width: 75%;
    }
    
    .nav-item {
        width: 45%; /* Duha ka column sa mobile */
        text-align: center;
    }
}
