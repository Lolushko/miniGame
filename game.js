let $start = document.querySelector('#start')
let $game = document.querySelector('#game')  
let $time = document.querySelector('#time')
let $result = document.querySelector('#result')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $gameTime = document.querySelector('#game-time')

let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBloxClick)
$gameTime.addEventListener('input', setGameTime)

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}


function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start) 

    let interval = setInterval(function(){
        let time = parseFloat($time.textContent)

        if (time <= 5) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
    renderBox()
    
}

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    let time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}


function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled', 'false')
    show($start)
    game.style.backgroundColor = '#ccc'
    game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
  }


function handleBloxClick(event) {
    if (!isGameStarted) {
        return
    }

    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

function renderBox() {
    
    $game.innerHTML = ''

    let box = document.createElement('div')

    let = boxSize = (getRandom(30, 70 ))

    let gameSize = $game.getBoundingClientRect()

    let maxTop = gameSize.height -  boxSize
    let maxleft = gameSize.width - boxSize

    

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = getRandomColor()
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxleft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)

}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}




   
function getRandomColor() {
    var color = []
    while (color.length < 3) color.push(Math.floor(Math.random() * 255))
    return 'rgb('+color.join(', ')+')'
  }


  
      
