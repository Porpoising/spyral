window.addEventListener("load", function () {
    let svgObject = document.getElementById('spyral-svg').contentDocument;
    let svg = svgObject.getElementById('spyral-logo');
    // console.log(svg);

    let buttonsTopCollection = document.getElementsByClassName("button-top")
    for (let i = 0; i < buttonsTopCollection.length; i++) {
        buttonsTopCollection[i].addEventListener("mouseover", buttonTopMouseover, false)
        buttonsTopCollection[i].addEventListener("mouseout", buttonTopOnMouseout, false)
    }

    function buttonTopMouseover() {
        svg.style.fill = "#354b74"
        // svg.querySelector("style").innerHTML = ".st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}.st1{fill:#354B74;}"
        // for non-optimized svg
    }

    function buttonTopOnMouseout() {
        svg.style.fill = "#fff"
        // svg.querySelector("style").innerHTML = ".st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}.st1{fill:#FFFFFF;}"
        // for non-optimized svg
    }
})
