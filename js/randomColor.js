function randomColor() {
    return "#" + ("00000" + (((Math.random() * 0xffffff) | 0).toString(16))).slice(-6);
}