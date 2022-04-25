(async function() {
    "use strict";
    await sleep("3000");
    document.getElementsByClassName('loading')[0].classList.toggle('d-none')
    document.getElementsByClassName('intro')[0].classList.toggle('active')
    document.getElementsByClassName('intro')[0].classList.toggle('d-none')
})()


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}