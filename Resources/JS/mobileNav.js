function openMenu() {
    var elements = document.getElementsByClassName('js--nav-open')
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.add("js--show-class")
    }
    document.getElementsByClassName('js--open-menu')[0].classList.add("js--hide-class")
    document.getElementsByClassName('js--close-menu')[0].classList.add("js--show-class")
};

function closeMenu() {
    var elements = document.getElementsByClassName('js--nav-open')
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove("js--show-class")
    }
    document.getElementsByClassName('js--open-menu')[0].classList.remove("js--hide-class")
    document.getElementsByClassName('js--close-menu')[0].classList.remove("js--show-class")
};

var mediaQuery = window.matchMedia('(max-width: 767px)');
var isItMobile = mediaQuery.matches
var windowHeight = false;

function needStickyNav(a, b){
    if (a && b == false && document.getElementsByClassName('navigation row')[0].classList.contains("sticky") == false){
        document.getElementsByClassName('navigation row')[0].classList.add("sticky")
    }
    else if ((b == true || a == false) && document.getElementsByClassName('navigation row')[0].classList.contains("sticky") == true){
        document.getElementsByClassName('navigation row')[0].classList.remove("sticky")
    }
}

// This needs to be made responsive, so a basic value depending on de basic width of the screen
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("features");
  if (window.scrollY > (elementTarget.offsetTop)) {
        windowHeight = true;
  }
  else {
        windowHeight = false;}
        needStickyNav(windowHeight, isItMobile)
});

// Zoek voor een Javascript code die continu de waarde in de gaten houd, deze doet het alleen bij een verandering van.. 
mediaQuery.addEventListener( "change", (e) => {
    isItMobile = e.matches
    needStickyNav(windowHeight, isItMobile)
    // document.getElementsByClassName('navigation row')[0].classList.add("sticky")
});