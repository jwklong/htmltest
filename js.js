// this is the main js file for js.html, if you want to add more to the JS test edit the js here.

let counter = 0;
let multiplier = 0;

function OnClickMoney(amount, requires) {
    if (requires <= multiplier) {
        counter = counter + amount * (multiplier + 1);
        document.getElementById("clickCount").innerHTML = counter;
    }
}

function OnClickMultiplier(amount, cost) {
    if (cost <= counter) {
        multiplier = multiplier + amount;
        counter = counter - cost
        document.getElementById("multiplierCount").innerHTML = multiplier;
        document.getElementById("clickCount").innerHTML = counter;
    }
}