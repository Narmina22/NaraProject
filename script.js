let container = document.querySelector('.container');

function newInput() { 
  let newLine = document.createElement('div')
  newLine.className = 'line'
  newLine.innerHTML = '<input type="text">\n<button class="delete"><img class="x" src="pic/X-grey.svg" alt="x"><img class="x-violet" src="pic/X-violet.svg" alt="x"></button>'
  container.append(newLine)
}

function update () {
  document.querySelectorAll('input').forEach(item1 => {
    item1.addEventListener('keyup', (event) =>{
      if (event.key == "Enter") {
        event.target.readOnly = true;
        newInput();
        update();
      }
      document.querySelectorAll('.line').forEach(item => {
        document.querySelectorAll('.delete').forEach(item2 => {
          item2.addEventListener('click', () => {
            if (item1.readOnly == false) document.querySelector('input').value = '';
            else if (item1.readOnly == true) item.remove()
          })
        })
      })
    })
  })
}
update();


let addButton = document.querySelector('.add-button');

addButton.addEventListener('click', (event) => {
  newInput();
  update();
})    

let remover = document.querySelectorAll('.delete');

// remover.forEach(item => {
//   item.addEventListener('click', () => {
//     document.querySelectorAll('input').forEach(item => {
//       if (item.readOnly == false) document.querySelector('input').value = '';
//       else if (item.readOnly == true) document.querySelector('.line').remove();
//     })
//   })
// })


let drag = document.querySelector('.container');
new Sortable(drag, {group: { name: 'shared', pull: 'clone'}, animation: 150})