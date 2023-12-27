const arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

const body = document.querySelector('body')
const container = document.querySelector('.container')
const textColor = document.querySelector('#color-text')

function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++){
        let a = Math.trunc(Math.random() * arr.length)
        color += arr[a]
    }
    
    return color
}

getGradient()

function setGradient() {
    let color1 = getGradient()
    let color2 = getGradient()

    let deg = Math.trunc(Math.random() * 360)
    let bgColor = `linear-gradient(${deg}deg, ${color1}, ${color2})`
    body.style.background = bgColor
    textColor.textContent = bgColor
}

setGradient()
container.addEventListener("click", () => {
    setGradient()
})

const btn = document.querySelector('.btn')

btn.addEventListener("click", () => {
    navigator.clipboard.writeText(textColor.textContent)
    btn.textContent = "Copied!"
})