// Cache the Border Corners' Inputs
const corners = document.querySelectorAll(".border-corner"),
        c1 = document.querySelector("#corner-1"),
        c2 = document.querySelector("#corner-2"),
        c3 = document.querySelector("#corner-3"),
        c4 = document.querySelector("#corner-4")

// Cache the demo container
const demo = document.querySelector(".demo")


for(let i = 0; i < corners.length; i++) {
    // Attach an Event to each 'Corner's Input' change
    corners[i].addEventListener("change", () => {
        // Change the 'border-radius' value of the demo
        let value = `${c1.value}px ${c2.value}px ${c3.value}px ${c4.value}px`
        demo.style.borderRadius = value
    })
}