let container = document.querySelector('.container');

function newInput() { 
  let newLine = document.createElement('div')
  newLine.className = 'line'
  newLine.innerHTML = '<input type="text">\n<button class="delete"><img class="x" src="pic/X-grey.svg" alt="x"><img class="x-violet" src="pic/X-violet.svg" alt="x"></button>'
  container.append(newLine)
  newLine.lastElementChild.scrollIntoView({behavior: "smooth"})
  update()
}
function spaces(str) { return str.trim().length === 0 }

function update () {
  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('keyup', (event) =>{
      if ((event.key == "Enter") && !spaces(event.target.value)) {
        event.target.readOnly = true
        event.target.className = 'myInputs'
          let blankLineCounter = 0
          document.querySelectorAll('input').forEach(item => {
              if (item.value == '') blankLineCounter++; })
          if (!(blankLineCounter > 1)) newInput();
      }
    })
  })
  document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', (event) => {
      const line = event.target.parentElement.parentElement
      const input = event.target.parentElement.parentElement.firstElementChild
      if ((input.readOnly == false) && (input.value == '')) line.remove()
      else if (input.readOnly == false) input.value = ''
      else if ((input.readOnly == true)) line.remove()

    })
  })
}
update();


let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', (event) => {
  newInput();
  update();
})    


let drag = document.querySelector('.container');
new Sortable(drag, {group: { name: 'shared', pull: 'clone'}, animation: 200})

function sort(sorted) {
  let array = [];
  document.querySelectorAll('.myInputs').forEach(item => array.push(item.value))
  if (sorted == false) { array.sort(); }
  else { array.sort().reverse(); }
  document.querySelectorAll('.myInputs').forEach((item, index) => item.value = array[index])
  update()
}

document.querySelector('.sort-button').addEventListener('click', (event) => {
  if (event.target.src.indexOf("pic/down-grey.svg") != -1)
  { event.target.src = 'pic/up-grey.svg'; sort(false);}
  else { event.target.src = 'pic/down-grey.svg'; sort(true)}
})