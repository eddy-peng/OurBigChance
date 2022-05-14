(async function () {
    "use strict";
    await sleep("3000");
    document.getElementsByClassName('loading')[0].classList.toggle('d-none')
    document.getElementsByClassName('enter-button')[0].classList.toggle('d-none')
    // document.getElementsByClassName('intro')[0].classList.toggle('d-none')
   function enter() {
        document.getElementsByClassName('intro')[0].classList.toggle('active')
        document.getElementsByClassName('intro')[0].classList.toggle('d-none')
   }
})()




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
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-200px',
})

scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function (el) {
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = 'Task Complete!'
        }, 1000)
    }
})

