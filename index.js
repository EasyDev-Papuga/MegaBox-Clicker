let button = document.getElementById("button")
let button_img = document.getElementById("button-img")
let score = document.getElementById("score")
let scoreint = 0
let scaleToReplace = `${300}px`
let imgsReplaced = 1
let league = document.getElementById("league")
let league_value = "Boxes"
let ifWin = false

button.addEventListener('click', addScore)

function addScore() {
    localStorage.setItem('scoreint', scoreint)
    scoreint = localStorage.getItem('scoreint')
    league.textContent = `League: ${league_value}`
    if(scoreint == 20){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
    }
    if(scoreint == 40){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
    }
    if(scoreint == 60){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
    }
    if(scoreint == 80){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
        league_value = "Star Drops"
        button_img.setAttribute('width', 91)
        button_img.setAttribute('height', 90)
    }
    if(scoreint == 100){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
        league_value = "Monster Eggs"
        league.style.setProperty('padding-left', `${70}px`)
    }
    if(scoreint == 120){
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        imgsReplaced += 1
        league_value = "Mega Pig"
    }
    if(scoreint == 140){
        league_value = "You Win!"
        ifWin = true
        scoreint = "Max"
        button_img.setAttribute('src', `images/${imgsReplaced}.jpg`)
        button_img.style.setProperty('border-radius', `${40}px`)
    }

    if(ifWin == false){
        scoreint += 1;

        button_img.style.scale = 1.6
    
        setTimeout(() => {
            /*button.style.scale = 0.8*/
            button_img.style.scale = 1.8
        }, 50)

        setTimeout(() => {
           /*button.style.scale = 0.9*/
           button_img.style.scale = 2.0
        }, 50)

       setTimeout(() => {
           /*button.style.scale = 1.0*/
           button_img.style.scale = 2.1
       }, 100)
}

    score.innerHTML = `Score: ${scoreint}`;
}