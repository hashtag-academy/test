let apple,
    counter = 0,
    counterBox = document.querySelector("#counter"),
    table = document.querySelector("table"),
    tableSize = rand(10,100),
    tableHTML = ""

for(let i = 0; i < tableSize; i++) {
    tableHTML += "<tr>"
    for(let j = 0; j < tableSize; j++) {
        tableHTML += "<td></td>"
    }
    tableHTML += "</tr>"
}

table.innerHTML = tableHTML

let td = document.querySelectorAll("td")
td.forEach(cell => {
  cell.onclick = function (){
    this.style.backgroundColor = "red"
    this.style.transform = "scale(1.2)"
  }
  cell.onmouseover = function (){
    this.style.transform = "scale(1.2)"
    this.style.backgroundColor = "gold"
    setTimeout(() => {
      this.style.transform = "scale(1)"
      this.style.backgroundColor = "transparent"
    }, 1000)
  }
})

function rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function initApple() {
    apple = td[rand(0, td.length - 1)]
    apple.style.boxShadow = "inset 25px 25px 0 green"
    apple.addEventListener("mouseenter", eatApple)
}

function eatApple() {
    apple.style.boxShadow = "none"
    apple.removeEventListener("mouseenter", eatApple)
    counter++
    counterBox.innerHTML = counter
    initApple()
}

initApple()