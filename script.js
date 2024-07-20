document.addEventListener('DOMContentLoaded', function() {
    var musicIndex = 0;
    var backgroundIndex = 0;
    var musicTracks = [
        'audio/underwater_fantasy.mp3',
        'audio/ocean_depths.mp3'
    ];

    var backgroundImages = [
        'images/underwater1.jpg',
        'images/underwater2.jpg'
    ];

    var backgroundMusic = document.getElementById('background-music');
    var container = document.querySelector('.container');

    document.getElementById('change-music').addEventListener('click', function() {
        musicIndex = (musicIndex + 1) % musicTracks.length;
        backgroundMusic.src = musicTracks[musicIndex];
        backgroundMusic.play();
    });

    document.getElementById('change-background').addEventListener('click', function() {
        backgroundIndex = (backgroundIndex + 1) % backgroundImages.length;
        container.style.backgroundImage = 'url(' + backgroundImages[backgroundIndex] + ')';
    });

    backgroundMusic.play();
    container.style.backgroundImage = 'url(' + backgroundImages[0] + ')';
});
