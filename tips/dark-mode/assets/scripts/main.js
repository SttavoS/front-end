const html = document.querySelector("html")
const checkBox = document.querySelector("input[name=theme]")

const getStle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStle(html, "--bg"),
    bgPanel: getStle(html, "--bg-panel"),
    colorHeadings: getStle(html, "--color-headings"),
    colorText: getStle(html, "--color-text")
}

const darkMode = {
    bg: "#333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])    
    )
}
 
checkBox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})