const clickSound = new Audio("images/clickSound.wav")
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'noodles',
        img: 'images/noodles.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'sandwich',
        img: 'images/sandwich.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'noodles',
        img: 'images/noodles.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'sandwich',
        img: 'images/sandwich.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardWon = []

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
        
    }
}
creatBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (optionOneId == optionTwoId){
        cards[optionOneId[0]].setAttribute('src', 'images/blank.png')
        cards[optionTwoId[0]].setAttribute('src', 'images/blank.png')
        //alert('You have clicked the same image!')
    } 

    if (cardChosen[0] == cardChosen[1]) {
        //alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard) 
        cardWon.push(cardChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //alert('Sorry try again!')
    }
    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []

    if(cardWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}

function flipCard() {
    console.log(cardArray)
   const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    clickSound.play()
    console.log(cardChosen)
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2) {
        setTimeout( checkMatch, 1000)
    }

}