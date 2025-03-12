document.getElementById("startButton").addEventListener("click", function() {
    let bgMusic = document.getElementById("backgroundMusic");
    let arcanineCry = document.getElementById("arcanineCry");
    let snivyCry = document.getElementById("snivyCry");
    let animationContainer = document.getElementById("animationContainer");
    let arcanine = document.getElementById("arcanine");
    let snivy = document.getElementById("snivy");

    // Ensure audio is loaded before playing
    bgMusic.volume = 0.5;
    bgMusic.play().catch(error => console.log("Autoplay blocked:", error));

    arcanineCry.play();

    setTimeout(() => {
        snivyCry.play();
    }, 1500);

    // Show animation container
    animationContainer.style.display = "block";

    // Apply animations dynamically to ensure they trigger every time
    arcanine.style.animation = "run 3s linear forwards";
    snivy.style.animation = "ride 3s linear forwards";
});
