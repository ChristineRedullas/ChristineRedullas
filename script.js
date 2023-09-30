// script.js

document.addEventListener('DOMContentLoaded', function() {
    let loadingScreen = document.getElementById('loadingScreen');

    // Wait for 2 seconds and then fade out the loading screen
    setTimeout(() => {
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        loadingScreen.style.opacity = '0';

        // After the transition is done, remove the loading screen from the document
        setTimeout(() => {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }, 500);
    }, 2000);
});

window.addEventListener("load", function() {
    const loader = document.getElementById("loadingScreen");
    loader.style.display = "none";
});