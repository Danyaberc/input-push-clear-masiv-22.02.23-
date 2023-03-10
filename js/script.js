let container = document.querySelector('.container')

let block = document.querySelector('.block')


block.addEventListener('click', () => {
   x = Math.floor(Math.random() * 1000) + "px"
   y = Math.floor(Math.random() * 700) + "px"
   renderEl();
})

const renderEl = () => {
   block.style.left = x;
   block.style.top = y;
   return
}
