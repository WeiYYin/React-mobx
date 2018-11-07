{
    let c = document.documentElement.clientWidth;
    if (c > 1920) {
        c = 1920;
    }
    document.documentElement.style.fontSize = c / 19.2 + "px";
    console.log(c,document.documentElement.style.fontSize);
}
window.onresize  = function(){
    let c = document.documentElement.clientWidth;
    if (c > 1920) {
        c = 1920;
    }
    document.documentElement.style.fontSize = c / 19.2 + "px";
}