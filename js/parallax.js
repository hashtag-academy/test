let parallaxBG = document.querySelector(".feed"),
    parallaxStartPos

parallaxBG.onmouseenter = function (e) {
    parallaxStartPos = e.pageY - window.pageYOffset - parallaxBG.getBoundingClientRect().top + 1
}

parallaxBG.onmousemove = function (e) {
    let Y = e.pageY - window.pageYOffset - parallaxBG.getBoundingClientRect().top + 1
    console.log(e.pageY)
    parallaxBG.style.backgroundPosition = "center " + ((Y - parallaxStartPos + parseInt(getComputedStyle(parallaxBG).backgroundPositionY)) / 100) + "%"
}