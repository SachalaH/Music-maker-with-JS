window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visuals = document.querySelector('.visuals')
    colors = [
        '#f86067',
        '#7ee4b1',
        '#e76ff6',
        '#f8a354',
        '#f6f86d',
        '#9b9af8'
    ];

    // Playing the audio with pads

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createAnimation(index);
        })
    })

    // Handling the animations

    const createAnimation = (index) => {
        const ball = document.createElement('div');
        visuals.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.addEventListener('animationend', ()=>{
            visuals.removeChild(ball)
        });
        if(index > 2){
            ball.style.animation = "rev-jump 1s ease";
        }
        else{
            ball.style.animation = 'jump 1s ease';
        }
    }
});