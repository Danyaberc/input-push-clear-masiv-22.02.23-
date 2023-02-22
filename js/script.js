let textinput = document.querySelector('.input_text')

let blockname = document.querySelector('.message')

let btnPush = document.querySelector('.buttonRun')

let btnClear = document.querySelector('.buttonClear')

let newtextinput = "";

let html = []

btnPush.addEventListener('click', () => {
   newtextinput = textinput.value
   init()
   render()
})

btnClear.addEventListener('click', () => {
   blockname.innerHTML = '';
   html.splice(0)
})

const init = function () {
   const newhtml = html.push(newtextinput)
   console.log(html)
}

const render = function () {
   const renderFun = html.map((item) => {
      let newname = `<li>${item}</li>`
      return newname
   })
   blockname.innerHTML = renderFun.join('');
}










