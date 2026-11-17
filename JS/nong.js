// 4-2 · Event playground 

const eventName = document.querySelector("#event-name");
const pad = document.querySelector("#pad");
const text = document.querySelector("#text");
const preview = document.querySelector("#preview");

function show(name) {
  eventName.textContent = name;
}

// 1 · "click" on #pad          → show("click")
pad.addEventListener("click", function() {
    show("Click too mooch")
})


// 2 · "dblclick" on #pad       → show("dblclick")
pad.addEventListener("dblclick", function() {
  show("SenSeiWik")
})

// 3 · Hover = TWO events:
//          "mouseenter" on #pad     → show it + add class "hot"
//          "mouseleave" on #pad     → show it + remove class "hot"
pad.addEventListener("mouseenter", () => {
  show("AiAoon")
  pad.classList.add("hot")
})
pad.addEventListener("mouseleave", () => {
  show("AoonMhak")
  pad.classList.remove("hot")
})

// 4 · "input" on #text         → put text.value in #preview (every keystroke!)
text.addEventListener("input", () => {
  show("ตาลือ")
  preview.textContent = text.value
})


// 5 · "keydown" on document    → show which key:  (event) => show(`keydown: ${event.key}`)
//          (the event object tells you WHAT happened: event.key, event.type, ...)
document.addEventListener("keydown", (event) => {
  console.log(event)
  show(`keydown : ${event.key}`)
})
