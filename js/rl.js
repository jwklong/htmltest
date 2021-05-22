// this is the main js file for rl.html, if you want
// to add more to Randomizing layers edit the js here.

let money = 0;
let add = 0;
let mul = 0;
let pow = 0;

function refresh() {
    document.getElementById("moneyCount").innerHTML = Math.round(money);
}

setInterval(() => {
    money += 1/30;
    refresh();
}, 1000/30);