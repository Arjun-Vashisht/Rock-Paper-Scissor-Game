console.log("Welocome to Rock Papper Scissor");
let rulesbtn = document.querySelector('.rulesbtn');
console.log(rulesbtn)
let rules = document.querySelector('.rules')
let cancel = document.querySelector('#cancel')
let image = Array.from(document.querySelectorAll('#image'))
let hid = document.querySelector('.top');
let bott = document.querySelector('.bottom');
let trid = document.querySelector('#tri');
let restext = document.querySelector('.restext')
let result2 = document.querySelector('#result2')
let result1 = document.querySelector('#result1')
let num = document.querySelector('.num')
let score = 0
console.log(result2)
console.log(image)
let result = document.querySelector('.result');
let i = 0;

rulesbtn.addEventListener('click', () => {
    console.log(rules.style);
    rules.style.display = "flex";
})

cancel.addEventListener('click', () => {
    rules.style.display = "none";
})

image[0].addEventListener('click', () => {
    i = Math.ceil(Math.random() * 2);
    console.log(i)
    if (i == 1) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        restext.innerHTML = "YOU LOSE"
        result2.src = "images/icon-scissors.svg"
    }
    if (i == 2) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        score += 1;
        num.innerHTML = +score
    }
    result.style.display = "flex"
})

image[1].addEventListener('click', () => {
    i = Math.floor(Math.random() * 3);
    while (i == 1) {
        i = Math.floor(Math.random() * 3);
    }
    console.log(i)
    if (i == 0) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        result1.src = "images/icon-scissors.svg"
        result2.src = "images/icon-paper.svg"
        score += 1;
        num.innerHTML = +score
    }
    if (i == 2) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        restext.innerHTML = "YOU LOSE"
        result1.src = "images/icon-scissors.svg"
        result2.src = "images/icon-rock.svg"
    }
    result.style.display = "flex"
})

image[2].addEventListener('click', () => {
    i = Math.floor(Math.random() * 2);
    console.log(i)
    if (i == 0) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        restext.innerHTML = "YOU LOSE"
        result1.src = "images/icon-rock.svg"
        result2.src = "images/icon-paper.svg"
    }
    if (i == 1) {
        hid.style.display = "none"
        bott.style.display = "none"
        trid.style.display = "none"
        result1.src = "images/icon-rock.svg"
        result2.src = "images/icon-scissors.svg"
        score += 1;
        num.innerHTML = +score
    }
    result.style.display = "flex"
})