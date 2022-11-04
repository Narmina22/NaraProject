document.querySelector('input').addEventListener('keyup', (event) =>{
  if (event.key == "Enter") {
    let newEl = document.createElement('div');
    newEl.className = 'text';
    newEl.textContent = event.target.value;
    event.target.outerHTML = newEl.outerHTML;
  }
})