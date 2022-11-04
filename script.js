function newElement()
{
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    li.appendChild(document.createTextNode(inputValue));
        if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("list").appendChild(li);
      }

    document.getElementById("myInput").value = "";
}
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      newElement();
    }
  });