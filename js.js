// this is the main js file for js.html, if you want to add more to the JS test edit the js here.

let money = 0;
let multiplier = 0;
let rebirth = 0;
let ultrarebirth = 0;
let prestige = 0;
OnClickMoney(0, 0, 0)
OnClickMultiplier(0, 0, 0)
OnClickRebirth(0, 0, 0)
OnClickUltra(0, 0)

function OnClickMoney(amount, requires, requires2) {
    if (requires2 <= rebirth) {
        if (requires <= multiplier) {
            money = money + amount * (multiplier + 1);
            document.getElementById("moneyCount").innerHTML = money;
        }
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

function OnClickRebirth(amount, cost, requires) {
    if (requires <= ultrarebirth) {
        if (cost <= multiplier) {
            rebirth = rebirth + amount * ((ultrarebirth * 2) + 1)
            multiplier = 0
            money = 0
            document.getElementById("rebirthCount").innerHTML = rebirth;
            document.getElementById("multiplierCount").innerHTML = multiplier;
            document.getElementById("moneyCount").innerHTML = money;
        }
    }
}

function OnClickUltra(amount, cost) {
    if (cost <= rebirth) {
        ultrarebirth = ultrarebirth + amount * ((prestige * 3) + 1);
        rebirth = 0
        multiplier = 0
        money = 0
        document.getElementById("ultraCount").innerHTML = ultrarebirth;
        document.getElementById("rebirthCount").innerHTML = rebirth;
        document.getElementById("multiplierCount").innerHTML = multiplier;
        document.getElementById("moneyCount").innerHTML = money;
    }
}
