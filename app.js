// Cache the Border Corners' Inputs
const corners = document.querySelectorAll(".border-corner"),
        c1 = document.querySelector("#corner-1"),
        c2 = document.querySelector("#corner-2"),
        c3 = document.querySelector("#corner-3"),
        c4 = document.querySelector("#corner-4")

// Cache the 'demo' container
const demo = document.querySelector(".demo")
// Cache the 'code' container
const code = document.querySelector(".code")

for(let i = 0; i < corners.length; i++) {
    // Attach an Event to each 'Corner's Input' change
    corners[i].addEventListener("change", () => {
        applyDemo()
    })
}


function showCode(c1, c2, c3, c4) {
    const codeNoPrefix = `
<span>-webkit-border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
<span>-moz-border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
<span>border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
    `
    return codeNoPrefix
}

function applyDemo() {
    // Change the 'border-radius' value of the demo
    let value = `${c1.value}px ${c2.value}px ${c3.value}px ${c4.value}px`
    demo.style.borderRadius = value
    // View the code
    code.innerHTML = showCode(c1.value, c2.value, c3.value, c4.value)
}

// Copy To Clipboard
const copyBtn = document.querySelector("#copy-btn")
const popup = document.querySelector(".popup")
copyBtn.addEventListener("click", () => {
    copyToClipboard()

    // Add the 'animated' class to the popup
    popup.classList.add("animated")
    // Remove that class
    setTimeout(() => {
        popup.classList.remove("animated")
    }, 500)
})

function copyToClipboard(){
  const tempTxt = document.createElement("textarea")
  tempTxt.value = code.textContent
  document.body.appendChild(tempTxt)
  tempTxt.select()
  document.execCommand("copy")
  document.body.removeChild(tempTxt)
}

// Pre-Developed Shapes
const shape_1 = document.querySelector("#shape-1")
shape_1.addEventListener("click", () => {
    c1.value = 150
    c2.value = 150
    c3.value = 150
    c4.value = 150
    applyDemo()
})

const shape_2 = document.querySelector("#shape-2")
shape_2.addEventListener("click", () => {
    c1.value = 150
    c2.value = 150
    c3.value = 0
    c4.value = 0
    applyDemo()
})

const shape_3 = document.querySelector("#shape-3")
shape_3.addEventListener("click", () => {
    c1.value = 0
    c2.value = 150
    c3.value = 150
    c4.value = 0
    applyDemo()
})

const shape_4 = document.querySelector("#shape-4")
shape_4.addEventListener("click", () => {
    c1.value = 0
    c2.value = 0
    c3.value = 150
    c4.value = 150
    applyDemo()
})

const shape_5 = document.querySelector("#shape-5")
shape_5.addEventListener("click", () => {
    c1.value = 150
    c2.value = 0
    c3.value = 0
    c4.value = 150
    applyDemo()
})

const shape_6 = document.querySelector("#shape-6")
shape_6.addEventListener("click", () => {
    c1.value = 150
    c2.value = 0
    c3.value = 150
    c4.value = 0
    applyDemo()
})

const shape_7 = document.querySelector("#shape-7")
shape_7.addEventListener("click", () => {
    c1.value = 0
    c2.value = 150
    c3.value = 0
    c4.value = 150
    applyDemo()
})