// this is the main js file for bs.html, if you
// want to add more to Button Simulator edit the js here.

let money = 0;
let multiplier = 0;
let rebirth = 0;
let ultrarebirth = 0;
let prestige = 0;
let reset = 0;
money = JSON.parse(window.localStorage.getItem('money'));
multiplier = JSON.parse(window.localStorage.getItem('multi'));
rebirth = JSON.parse(window.localStorage.getItem('rebirth'));
ultrarebirth = JSON.parse(window.localStorage.getItem('ultra'));
prestige = JSON.parse(window.localStorage.getItem('prestige'));

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
        window.localStorage.clear();
        reset = 0;
    }
}

function OnClickMoney(amount, requires, requires2) {
    if (requires2 <= rebirth) {
        if (requires <= multiplier) {
            money = money + amount * (multiplier + (1 * ((prestige * 3) + 1)));
            window.localStorage.setItem('money', JSON.stringify(money));
            Refresh();
        }
    }
}

function OnClickMultiplier(amount, cost, requires) {
    if (requires <= rebirth) {
        if (cost <= money) {
            multiplier = multiplier + amount * (rebirth + 1);
            money = money - cost;
            window.localStorage.setItem('money', JSON.stringify(money));
            window.localStorage.setItem('multi', JSON.stringify(multiplier));
            Refresh();
        }
    }
}

function OnClickRebirth(amount, cost, requires) {
    if (requires <= ultrarebirth) {
        if (cost <= multiplier) {
            rebirth = rebirth + amount * ((ultrarebirth * 2) + 1);
            multiplier = 0;
            money = 0;
            window.localStorage.setItem('money', JSON.stringify(money));
            window.localStorage.setItem('multi', JSON.stringify(multiplier));
            window.localStorage.setItem('rebirth', JSON.stringify(rebirth));
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
            window.localStorage.setItem('money', JSON.stringify(money));
            window.localStorage.setItem('multi', JSON.stringify(multiplier));
            window.localStorage.setItem('rebirth', JSON.stringify(rebirth));
            window.localStorage.setItem('ultra', JSON.stringify(ultrarebirth));
            Refresh();
        }
    }
}

function OnClickPrestige(amount, cost) {
    if (cost <= ultrarebirth) {
        prestige = prestige + amount;
        ultrarebirth = 0;
        rebirth = 0;
        multiplier = 0;
        money = 0;
        window.localStorage.setItem('money', JSON.stringify(money));
        window.localStorage.setItem('multi', JSON.stringify(multiplier));
        window.localStorage.setItem('rebirth', JSON.stringify(rebirth));
        window.localStorage.setItem('ultra', JSON.stringify(ultrarebirth));
        window.localStorage.setItem('prestige', JSON.stringify(prestige));
        Refresh();
    }
}

function dev(no) {
    if (no === "howdidyoufindit") {
        prestige =+ 1;
    }
}
dev(1);
ResetStats();
reset = 0;
OnClickMoney(0, 0, 0);
OnClickMultiplier(0, 0, 0);
OnClickRebirth(0, 0, 0);
OnClickUltra(0, 0, 0);
OnClickPrestige(0, 0);
Refresh()
