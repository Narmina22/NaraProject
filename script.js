// function update () {
//   document.querySelectorAll('input').forEach(item => {
//     item.addEventListener('keyup', (event) =>{
//       if (event.key == "Enter") {
//         event.target.readOnly = true;
//       }
//     })
//   })
// }

// update()

// let addButton = document.querySelector('.add-button');
// let container = document.querySelector('.container');

// addButton.addEventListener('click', (event) => {
//   let newLine = document.createElement('div')
//   newLine.className = 'line'
//   newLine.innerHTML = '<input type="text">\n<button class="delete"><img class="x" src="pic/X-grey.svg" alt="x"><img class="x-violet" src="pic/X-violet.svg" alt="x"></button>'
//   container.append(newLine)
//   update()
// })    
let container = document.querySelector('.container');

function newInput() { 
  let newLine = document.createElement('div')
  newLine.className = 'line'
  newLine.innerHTML = '<input type="text">\n<button class="delete"><img class="x" src="pic/X-grey.svg" alt="x"><img class="x-violet" src="pic/X-violet.svg" alt="x"></button>'
  container.append(newLine)
}

function update () {
  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('keyup', (event) =>{
      if (event.key == "Enter") {
        event.target.readOnly = true;
        newInput();
        update();
      }
    })
  })
}

update();


let addButton = document.querySelector('.add-button');

addButton.addEventListener('click', (event) => {
  newInput();
  update();
})    

let remover = document.querySelector('.delete');
remover.addEventListener('click', () => {
  if (Input.target.readOnly == true) document.querySelector('.line').remove();
  else document.querySelector('input').value = '';
})