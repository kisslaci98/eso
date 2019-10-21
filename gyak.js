"use strict";


/*let pos_2 = 0;
let ertek_1 = 0;
let ertek_2 = 0;
let mozgat_1 = 0;
let mozgat_2 = 0;*/
let mozgat = function() {};
/*let elem_1 = document.getElementById("animate_1");
let elem_2 = document.getElementById("animate_2");
let elem_3 = document.getElementById("animate_3");
let elem_4 = document.getElementById("animate_4");
let elem_5 = document.getElementById("animate_5");
let elem_6 = document.getElementById("animate_6");
let elem_7 = document.getElementById("animate_7");
let elem_8 = document.getElementById("animate_8");*/

/*function myStop() {
    window.clearInterval(mozgat);
    if (mozgat_1 > 0) {
        pos_2 = 1400 - ertek_1;
        mozgat_1 = 0;
    } else if (mozgat_2 > 0) {
        pos_1 = 1400 - ertek_2;
        mozgat_2 = 0;
    }
}*/

function pattog(elem) {
    /*mozgat_1++;*/
    let pos = 0;
    mozgat = window.setInterval(frame, 10);

    function frame() {
        if (pos < 350) {
            pos++;
            elem.style.top = `${pos}px`;
        } 
        else if (pos < 500) {
            pos++;
            elem.style.top = `${700 - pos}px`;
        }
        else if (pos < 650) {
            pos++;
            elem.style.top = `${pos - 300}px`;
        }
        else if (pos < 700) {
            pos++;
            elem.style.top = `${1000 - pos}px`;
        }
        else if (pos < 750) {
            pos++;
            elem.style.top = `${pos - 400}px`;
        }
    }
}

/*function myMoveRight() {
    mozgat_2++;

    mozgat = window.setInterval(frame, 5);

    function frame() {
        ertek_2 = pos_2 % 1400;
        if (ertek_2 < 350) {
            pos_2++;
            leftTop(-1, 0, 350, ertek_2);
        } 
        else if (ertek_2 < 700) {
            pos_2++;
            topLeft(-1, 350, 700, ertek_2);
        }
        else if (ertek_2 < 1050) {
            pos_2++;
            leftTop(1, 1050, 700, ertek_2);
        }
        else if (ertek_2 < 1400) {
            pos_2++;
            topLeft(1, 1400, 1050, ertek_2);
        }
    }
}

function topLeft(elojel, a, b, ertek) {
    elem_1.style.top = `${elojel * (a - ertek)}px`;
    elem_2.style.left = `${elojel * (a - ertek)}px`;
    elem_3.style.top = `${elojel * (ertek - b)}px`;
    elem_4.style.left = `${elojel * (ertek - b)}px`;
}

function leftTop(elojel, a, b, ertek) {
    elem_1.style.left = `${elojel * (a - ertek)}px`;
    elem_2.style.top = `${elojel * (ertek - b)}px`;
    elem_3.style.left = `${elojel * (ertek - b)}px`;
    elem_4.style.top = `${elojel * (a - ertek)}px`;
}*/