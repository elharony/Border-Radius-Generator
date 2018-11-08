// Cache the Border Corners' Inputs
const c1 = document.querySelector("#corner-1")

// Cache the demo container
const demo = document.querySelector(".demo")


// Attach an Event to it
c1.addEventListener("change", () => {
    demo.style.borderRadius = c1.value + 'px'
    console.log(demo.style)
    console.log("Border Radius: ", demo.style.borderRadius)
    console.log("Changed Value: ", c1.value)
})