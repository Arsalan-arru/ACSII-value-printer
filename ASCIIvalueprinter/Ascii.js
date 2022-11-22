var str = document.getElementById("In");

function Result(event) {
    var a = "ASCII value is :";
    document.getElementById("output").innerHTML
        = a + str.value.charCodeAt(0);
        event.preventDefault();
}

