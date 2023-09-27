document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");
    
    setTimeout(function () {
        document.querySelector(".loadingscreen").style.display = "none";
    }, 4000); 
});

