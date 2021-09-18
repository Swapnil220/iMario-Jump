score = 0;
cross = true;

//music = new Audio('music/music.mp3');
musicgo = new Audio('music/gameover.mp3');


document.addEventListener('keydown', e => {
    //console.log('key: ', e.which);
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
    }
    setTimeout(() => {
        mario.classList.remove('animateMario');
    }, 700);

    if (e.keyCode == 39) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 80 + "px";
    }

    if (e.keyCode == 37) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 80) + "px";
    }
})

setInterval(() => {
    mario = document.querySelector('.mario');
    dyno = document.querySelector('.dyno');
    gameOver = document.querySelector('.gameOver');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('top'));

    offsetX = Math.abs(mx - dx);
    offsetY = Math.abs(my - dy);
    //console.log(offsetX, offsetY)

    if (offsetX < 70 && offsetY < 50) {
        gameOver.style.visibility = 'visible';
        dyno.classList.remove('dynoAnimate');
        mario.style.visibility = 'hidden';
        musicgo.play();
        setTimeout(() => {
            musicgo.pause();
        }, 500);
    }
    else if (offsetX < 150 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            animDur = parseFloat(window.getComputedStyle(dyno, null).getPropertyValue('animation-duration'));
            newanimDur = animdur - 0.1;
            dyno.style.animationDuration = newanimDur + 's';
            //console.log(newanimDur);
        }, 500);
    }
}, 10);

function updatescore(score) {
    yourScore.innerHTML = "Your Score : " + score;
}