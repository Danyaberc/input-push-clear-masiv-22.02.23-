let inp = document.querySelector('.input_text')

let blockname = document.querySelector('.message')

let btnPush = document.querySelector('.buttonRun')

let btnClear = document.querySelector('.buttonClear')

let gender = document.querySelector('.genderselect')

let name = "";

let html = []

let genimg = [
   { image: "./img/01.png" },
   { image: "./img/02.png" },
   { image: "./img/03.png" },
]


btnPush.addEventListener('click', () => {
   let name = inp.value
   if (gender.value === "male") {
      html.push({ name: inp.value, image: genimg[0].image });
      render()
      return
   }
   else if (gender.value === "female") {
      html.push({ name: inp.value, image: genimg[1].image });
      render()
      return
   }
   else if (gender.value === "other") {
      html.push({ name: inp.value, image: genimg[1].image });
      render()
      return
   }

})

btnClear.addEventListener('click', () => {
   html.splice(0)
   blockname.innerHTML = '';
})

const render = () => {
   const newhtml = html.map((item) => {
      const structhtml = `<li class="li">${item.name}<img class="img" src="${item.image}"></li>`
      return structhtml;
   })

   blockname.innerHTML = html.join('');
}



// btnPush.addEventListener('click', () => {
//    newtextinput = textinput.value
//    init()
//    render()
//    choisegender()
// })

// btnClear.addEventListener('click', () => {
//    blockname.innerHTML = '';
//    html.splice(0)
// })

// const init = function () {
//    const newhtml = html.push(newtextinput)
//    console.log(html)
// }

// const render = function () {
//    const renderFun = html.map((item) => {
//       let newname = `<li>${item.image}<img class="img" src="${item.image}"</li> `
//       return newname
//    })
//    blockname.innerHTML = renderFun.join('');
// }










