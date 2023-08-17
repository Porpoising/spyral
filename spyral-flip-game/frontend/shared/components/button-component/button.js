window.addEventListener("load", function () {
    let svgObject = this.document.getElementById('spyral-svg').contentDocument;
    let svg = svgObject.getElementById('spyral-logo');
    console.log(svg);


})

let buttons = document.querySelector(".button-container")
console.log(buttons);
let hoverEvent = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': false,
    'cancelable': true
})
button.dispatchEvent(hoverEvent)