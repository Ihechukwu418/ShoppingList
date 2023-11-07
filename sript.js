var btn = document.getElementById("btn");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});
