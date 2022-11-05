function update () {
  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('keyup', (event) =>{
      if (event.key == "Enter") {
        event.target.readOnly = true;
        // let newEl = document.createElement('div');
        // newEl.className = 'text';
        // newEl.textContent = event.target.value;
        // // console.log(event.target.outerHTML)
        // // console.log(newEl.outerHTML)
        // event.target.outerHTML = newEl.outerHTML;
      }
    })
  })
}

update()

let addButton = document.querySelector('.add-button');
let container = document.querySelector('.container');

addButton.addEventListener('click', (event) => {
  let newLine = document.createElement('div')
  newLine.className = 'line'
  newLine.innerHTML = '<input type="text">\n<button class="delete"><img class="x" src="pic/X-grey.svg" alt="x"></button>'
  container.append(newLine)
  update()
})    