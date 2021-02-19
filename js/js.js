// this is the main js file for js.html, if you want to add more to the JS test edit the js here.

let money = 0;
let multiplier = 0;
let rebirth = 0;
let ultrarebirth = 0;
let prestige = 0;
let reset = 0;
dev(1)
ResetStats();
OnClickMoney(0, 0, 0);
OnClickMultiplier(0, 0, 0);
OnClickRebirth(0, 0, 0);
OnClickUltra(0, 0, 0);
OnClickPrestige(0, 0);

function Refresh() {
    document.getElementById("moneyCount").innerHTML = money;
    document.getElementById("multiplierCount").innerHTML = multiplier;
    document.getElementById("rebirthCount").innerHTML = rebirth;
    document.getElementById("ultraCount").innerHTML = ultrarebirth;
    document.getElementById("prestigeCount").innerHTML = prestige;
}

function ResetStats() {
    reset = reset + 1;
    if (reset > 1) {
        money = 0;
        multiplier = 0;
        rebirth = 0;
        ultrarebirth = 0;
        prestige = 0;
        Refresh();
        reset = 0;
    }
}

function OnClickMoney(amount, requires, requires2) {
    if (requires2 <= rebirth) {
        if (requires <= multiplier) {
            money = money + amount * (multiplier + (1 * ((prestige * 3) + 1)));
            Refresh();
        }
    }
}

function OnClickMultiplier(amount, cost, requires) {
    if (requires <= rebirth) {
        if (cost <= money) {
            multiplier = multiplier + amount * (rebirth + 1);
            money = money - cost;
            Refresh();
        }
    }
}

function OnClickUltra(amount, cost, requires) {
    if (requires <= prestige) {
        if (cost <= rebirth) {
            ultrarebirth = ultrarebirth + amount * ((prestige * 1.5) + 1);
            rebirth = 0;
            multiplier = 0;
            money = 0;
            Refresh();
        }
    } 
}

function dev(no) {
    if (no == "howdidyoufindit") {
        console.log("huh i guess you found it")
    }
} 