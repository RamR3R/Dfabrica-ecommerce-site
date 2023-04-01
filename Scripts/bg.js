var audio = document.getElementById("audio");
    audio.volume = 0.08;
    document.addEventListener("click", function() {
      audio.play();
    });