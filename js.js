// this is the main js file for js.html, if you want to add more to the JS test edit the js here.

counter = 0;

function OnClick() {
    counter = counter + 1;
    document.getElementById("clickCount").innerHTML = counter;
}
