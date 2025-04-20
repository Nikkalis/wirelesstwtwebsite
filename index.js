const numImages = 1000;
const image = document.querySelector('#img');
const text = document.querySelector('#hey');
const hi = document.querySelector('#hi');
const site = document.querySelector('#site');
let number = 1;
let numberchange = 1;
function imageframe() {
    image.src = 'https://wirelesstwtwebsite.com/image/Version1/image_'+number+'.png';
    // const number = Math.floor((Math.random() * numImages) + 1);
    if (number === 1){
        numberchange = 1;
    }
    else if (number === 400){
        numberchange = -1;
    }
    number += numberchange
}
setInterval(imageframe,50);

function textframe() {
    text.style = 'top: '+(Math.random()*1+29)+'%; left: '+(Math.random()*1+14)+'%;';
}
setInterval(textframe,50);

function hiframe() {

    hi.style = 'top: '+(Math.random()*2+1)+'%; left: '+(Math.random()*100+1)+'%;';
}
setInterval(hiframe,50);

function siteframe() {

    site.style = 'top: '+(Math.random()*1+5)+'%; left: '+(Math.random()*20+1)+'%;';
}
setInterval(siteframe,5);