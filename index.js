(async function () {
    "use strict";
    await sleep("3000");
    document.getElementsByClassName('loading')[0].classList.toggle('d-none')
    document.getElementsByClassName('enter-button')[0].classList.toggle('d-none')
    // document.getElementsByClassName('intro')[0].classList.toggle('d-none')
})()

function enter() {
    document.getElementsByClassName('enter-button')[0].classList.toggle('d-none')
    document.getElementsByClassName('intro')[0].classList.toggle('active')
    document.getElementsByClassName('intro')[0].classList.toggle('d-none')
    document.getElementById('theme-music').play()
}

function  musicMute(){
    var music = document.getElementById('theme-music')
    if (music.muted) {
        music.muted = false;
        document.getElementById('light-sound').classList.toggle("d-none")
        document.getElementById('light-mute').classList.toggle("d-none")
        document.getElementById('dark-sound').classList.toggle("d-none")
        document.getElementById('dark-mute').classList.toggle("d-none")
        document.getElementById('light-sound-home').classList.toggle("d-none")
        document.getElementById('light-mute-home').classList.toggle("d-none")
    } else{
        music.muted = true;
        document.getElementById('light-sound').classList.toggle("d-none")
        document.getElementById('light-mute').classList.toggle("d-none")
        document.getElementById('dark-sound').classList.toggle("d-none")
        document.getElementById('dark-mute').classList.toggle("d-none")
        document.getElementById('light-sound-home').classList.toggle("d-none")
        document.getElementById('light-mute-home').classList.toggle("d-none")
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el)
        } else {
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

const sideNav = document.getElementById("sidenav")
    sideNav.addEventListener('blur', ()=>{
        sideNav.classList.remove('extend')
    })

function showHomePage(){
    document.getElementById("animation").classList.add("d-none")
    document.getElementById("home").classList.remove("d-none")
}

function showMenu(){
    document.getElementById("menu-closed").classList.toggle("close")
    document.getElementById("menu-opened").classList.toggle("close")
    sideNav.classList.add('extend')
}


