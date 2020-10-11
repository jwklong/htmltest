// this is the main js file for js.html, if you want to add more to the JS test edit the js here.

let money = 0;
let multiplier = 0;
let rebirth = 0;

function OnClickMoney(amount, requires) {
    if (requires <= multiplier) {
        money = money + amount * (multiplier + 1);
        document.getElementById("moneyCount").innerHTML = money;
    }
}

function OnClickMultiplier(amount, cost, requires) {
    if (requires <= rebirth) {
        if (cost <= money) {
            multiplier = multiplier + amount * (rebirth + 1);
            money = money - cost
            document.getElementById("multiplierCount").innerHTML = multiplier;
            document.getElementById("moneyCount").innerHTML = money;
        }
    }
}

function OnClickMoney(amount, cost) {
    if (cost <= multiplier) {
        rebirth = rebirth + amount;
        document.getElementById("rebirthCount").innerHTML = rebirth;
        document.getElementById("multiplierCount").innerHTML = multiplier;
        document.getElementById("moneyCount").innerHTML = money;
    }
}
