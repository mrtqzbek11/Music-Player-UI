let music = document.getElementById('player-music');

let progress = document.querySelector('.bar');

let plybtn = document.querySelector('.play');


plybtn.addEventListener('click', () => {
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }

})

music.onplay = function () {
    plybtn.classList.remove('bi-play-fill');
    plybtn.classList.add('bi-pause-fill');
}


music.onpause = function () {
    plybtn.classList.add('bi-play-fill');
    plybtn.classList.remove('bi-pause-fill');
}

music.ontimeupdate = function () {
    let foo = music.currentTime;

    let duration = music.duration;

    prog = Math.floor((foo * 100) / duration);
    progress.style.setProperty('--progress', prog + '%');
}




