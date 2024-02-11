

// Schemes
var defaultDark = ["181818", "282828", "383838", "585858", "b8b8b8", "d8d8d8",
    "e8e8e8", "f8f8f8", "ab4642", "dc9656", "f7ca88", "a1b56c", "86c1b9",
    "7cafc2", "ba8baf", "a16946"];

var ocean = ["2b303b", "343d46", "4f5b66", "65737e", "a7adba", "c0c5ce",
    "dfe1e8", "eff1f5", "bf616a", "d08770", "ebcb8b", "a3be8c", "96b5b4",
    "8fa1b3", "b48ead", "ab7967"];

// Define bases
var bases = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0A",
    "0B", "0C", "0D", "0E", "0F"];

// Changes all colours and background colours
function changeColors(scheme) {

    // Changes dark section background color
    var elements = document.querySelectorAll(".dark");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.backgroundColor = "#" + scheme[0];
    }

    // Changes dark section code block backgrounds    
    var elements = document.querySelectorAll(".dark code");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.backgroundColor = "#" + scheme[1];
    }

    // Changes dark section text colours
    var elements = document.querySelectorAll(".dark p, .dark h1, .dark h2,"
        + ".dark h3, .dark ul");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.color = "#" + scheme[5];
    }
    
    // Changes light section background color
    var elements = document.querySelectorAll(".light");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.backgroundColor = "#" + scheme[7];
    }

    // Changes light section code block backgrounds    
    var elements = document.querySelectorAll(".light code");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.backgroundColor = "#" + scheme[6];
    }

    // Changes light section text colours
    var elements = document.querySelectorAll(".light p, .light h1, .light h2,"
        + ".light h3, .light ul");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.color = "#" + scheme[2];
    }
    
    for (var i = 0; i < bases.length; i++) {
        var colourClass = "color-base" + bases[i];
        var backgroundClass = "background-" + colourClass;

        // Change all colors
        var elements = document.querySelectorAll("." + colourClass);
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.color = "#" + scheme[i];
        }

        // Change all background colors        
        var elements = document.querySelectorAll("." + backgroundClass);
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = "#" + scheme[i];
        }
    }
}