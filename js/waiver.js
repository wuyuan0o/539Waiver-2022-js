var container = document.getElementsByTagName("figure");

for (var i = 0; i < container.length; i++) {
    container[i].className = "one-third";
}

var footer = document.getElementsByTagName('footer')[0];
footer.addEventListener("click", function() {
    this.style.display = 'none';
})

var figure_5 = document.getElementsByTagName("figure")[4];

figure_5.addEventListener("dblclick", function() {
    this.style.visibility = "hidden";
})

var figcaption_1 = document.getElementsByTagName("figcaption")[0];
var basic_font = figcaption_1.style.fontFamily;

figcaption_1.addEventListener("mouseover", function() {
    this.style.fontFamily = "Cursive";
})

figcaption_1.addEventListener("mouseleave", function() {
    this.style.fontFamily = basic_font;
})

figcaption_1.contentEditable = true;
figcaption_1.addEventListener("focus", function() {
    this.style.fontFamily = "Cursive";
})

figcaption_1.addEventListener("blur", function() {
    this.style.fontFamily = "Times";
})