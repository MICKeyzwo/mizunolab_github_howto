window.addEventListener("load", _ => {
    let {getel} = DOMUtl();
    setInterval(() => {
        let c = randomColor();
        getel("#hello").style.color = c;
    }, 1000 / 30);
});