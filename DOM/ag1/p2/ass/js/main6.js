// var venjoy = 1;
// while (venjoy < 1) {       //到11为止
        // alert(venjoy);
        // venjoy++;
// }

// var venjoy = 1;
// do {
        // alert(venjoy);
        // venjoy++;
// } while (venjoy < 1);

// for (var venjoy= 1; venjoy <1; venjoy++) {
        // alert(venjoy);
// }
// function shout() {
        // var venjoy = Array("5cm", "izzue", "muji", "zara");
        // for (var waSi=0; waSi<venjoy.length; waSi++) {
                // alert(venjoy[waSi]);
        // }
// }

// function numChenfa(num1, num2) {
        // var shuZhi = num1 * num2;
        // // alert(shuZhi);
        // return shuZhi;
// }
// // numChenfa(10, 2);
// //
function duihuanWendu(tak) {
        var test = tak - 32;
        test = test / 1.8;     //换算方式
        return test;
}

// var temp_fahrenheit = 95;
var huashiWendu = 95;
var zhongshiWendu = duihuanWendu(huashiWendu);
alert(zhongshiWendu);
