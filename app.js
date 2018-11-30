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

function applyDemo() {
    // Change the 'border-radius' value of the demo
    let value = `${c1.value}px ${c2.value}px ${c3.value}px ${c4.value}px`
    demo.style.borderRadius = value
    // View the code
    code.innerHTML = showCode(c1.value, c2.value, c3.value, c4.value)
}

function showCode(c1, c2, c3, c4) {
    const codeNoPrefix = `
<span>-webkit-border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
<span>-moz-border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
<span>border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;</span>
    `
    return codeNoPrefix
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
let c1_val = c1.value,
    c2_val = c2.value,
    c3_val = c3.value,
    c4_val = c4.value

const shapesCornerValues = [
    {
        c1_val: 150,
        c2_val: 150,
        c3_val: 150,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 150,
        c3_val: 0,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 150,
        c3_val: 150,
        c4_val: 0,
    },
    {
        c1_val: 0,
        c2_val: 0,
        c3_val: 150,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 0,
        c3_val: 0,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 0,
        c3_val: 150,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 150,
        c3_val: 0,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 150,
        c3_val: 150,
        c4_val: 0
    },
    {
        c1_val: 150,
        c2_val: 150,
        c3_val: 0,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 0,
        c3_val: 150,
        c4_val: 150
    },
    {
        c1_val: 0,
        c2_val: 150,
        c3_val: 150,
        c4_val: 150
    },
    {
        c1_val: 150,
        c2_val: 0,
        c3_val: 0,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 150,
        c3_val: 0,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 0,
        c3_val: 150,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 0,
        c3_val: 0,
        c4_val: 150
    },
    {
        c1_val: 300,
        c2_val: 0,
        c3_val: 0,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 300,
        c3_val: 0,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 0,
        c3_val: 300,
        c4_val: 0
    },
    {
        c1_val: 0,
        c2_val: 0,
        c3_val: 0,
        c4_val: 300
    },
    {
        c1_val: 50,
        c2_val: 50,
        c3_val: 50,
        c4_val: 50
    }
]


const shapesElements = document.querySelectorAll(".shape")

for(let i = 0; i < shapesElements.length; i++) {
    shapesElements[i].addEventListener("click", () => {
        // Overwrite the current demo's values with each shape values
        c1.value = shapesCornerValues[i].c1_val
        c2.value = shapesCornerValues[i].c2_val
        c3.value = shapesCornerValues[i].c3_val
        c4.value = shapesCornerValues[i].c4_val
        applyDemo()
    })
}