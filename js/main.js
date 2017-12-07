window.addEventListener("load", _ => {
    let {getel} = DOMUtl();
    setInterval(() => {
        let c = "#" + ("00000" + (((Math.random() * 0xffffff) | 0).toString(16))).slice(-6);
        getel("#hello").style.color = c;
    }, 1000 / 30);
});