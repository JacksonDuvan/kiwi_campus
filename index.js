const menu = document.querySelector('.menu');
const burgerButtun = document.querySelector('#burger-menu')
const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const video3 = document.getElementById('video3')

burgerButtun.addEventListener('click', hideShow);

function hideShow(){
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else{
        menu.classList.add('is-active');
    }
}

const options = {
    threshold: .25,
}

const videos = video =>{
    const observer = new IntersectionObserver(entries => {
    const isVisible = entries[0].isIntersecting

    isVisible ? video.play() : video.pause()
}, options)

    observer.observe(video)
}

const handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible"

    isVisible ? video2.play() : video2.pause()
}

document.addEventListener('visibilitychange', handleVisibilityChange)

videos(video1)
videos(video2)
videos(video3)