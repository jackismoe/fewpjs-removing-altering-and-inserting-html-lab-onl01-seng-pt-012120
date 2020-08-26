let main = document.querySelector('body main')
main.remove('main')

const newHeader = document.createElement('h1')
const body = document.querySelector('body')
newHeader.className = 'victory'
newHeader.id = 'victory'
body.appendChild(newHeader)

newHeader.innerHTML = 'SWEEEEET SWEEET SWEET VICTORY, YEAAAAHHHH - Spongebob Squarepants is the champion'