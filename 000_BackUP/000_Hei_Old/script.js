//Check if WebBrowser is MOBILE:
var isMobile = false;
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     // some code..
// }


//Adjust Window Height
var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
document.documentElement.style.setProperty('--vHeight', `${wHeight*0.01}px`);
document.documentElement.style.setProperty('--vHeightHero', `${wHeight*0.01}px`);

window.addEventListener("resize", function(event) {
    // let wHeight = window.innerHeight;// * 0.01;
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;

    // if (isMobile === false) {
       document.documentElement.style.setProperty('--vHeight', `${wHeight*0.01}px`);
       if (isMobile === false) {
        document.documentElement.style.setProperty('--vHeightHero', `${wHeight*0.01}px`);
       }
    // }
});

//Gets Maximum Values
var wMax;
var wMin;
if (wWidth >= wHeight) { wMax = wWidth; wMin = wHeight; } else { wMax = wHeight; wMin = wWidth; };



//Introduce main Constants and Varibles
const myHeroSvg = document.getElementById("HeroSvg");


//Start Generateing BOOBLES
var myBooble = [];
for (var i=0; i < 40; i++) {
    myBooble.push(document.createElementNS('http://www.w3.org/2000/svg', 'ellipse'));
    myBooble[i].setAttributeNS(null, 'rx', Math.random()*15);
    myBooble[i].setAttributeNS(null, 'ry', parseInt(window.myBooble[i].getAttributeNS(null, 'rx'), 10));
    myBooble[i].setAttributeNS(null, 'cx', (Math.random()-0.2)*1.6*window.innerWidth);
    myBooble[i].setAttributeNS(null, 'cy', 0);//(Math.random()-0.2)*1.6*window.innerWidth);
    // myBooble[i].setAttributeNS(null, 'filter', "url(#f1)");
    // myBooble[i].setAttributeNS(null, 'id', "myBooble"); 
    myBooble[i].setAttributeNS(null, 'class', "myBooble");     
    myHeroSvg.appendChild(myBooble[i]); //insertBefore() or insertAfter()
}

//Make the Animation start from 10ms 
function $myTimer() { myBooble.forEach( function(item, index, arr) {
    myBooble[index].setAttributeNS(null, 'cy', (Math.random()-0.2)*1.6*window.innerHeight);
    })
}
var myVar = setTimeout($myTimer, 10);

//Functions to repeat animation
function $myTimerSnowX() { myBooble.forEach( function(item, index, arr) {
    window.myBooble[index].setAttributeNS(null, 'cx', (Math.random()-0.2)*1.6*window.innerWidth);
    })
}
function $myTimerSnowY() { myBooble.forEach( function(item, index, arr) {
    myBooble[index].setAttributeNS(null, 'cy', (Math.random()-0.2)*1.6*window.innerHeight);
    })
}

//Repeat animation in interval
var $myGameLoop = setInterval($myTimerSnowX, 8000);
var $myGameLoop2 = setInterval($myTimerSnowY, 7000);



//Start Generating GRADIENTS
var myGradient =[];
myGradient.push(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));
myGradient[0].setAttributeNS(null, 'width', wMax*2);//Math.random()*1500);
myGradient[0].setAttributeNS(null, 'height', wMax*2);
myGradient[0].setAttributeNS(null, 'x', -wWidth);
myGradient[0].setAttributeNS(null, 'y', -wHeight);//(Math.random()-0.2)*1.6*window.innerWidth);
myGradient[0].setAttributeNS(null, 'fill', "url(#img1)");
myGradient[0].setAttributeNS(null, 'id', "myGradient0"); 
myHeroSvg.appendChild(myGradient[0]); //insertBefore() or insertAfter()


myGradient.push(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));
myGradient[1].setAttributeNS(null, 'width', wMax*2);//Math.random()*1500);
myGradient[1].setAttributeNS(null, 'height', wMax*2);
myGradient[1].setAttributeNS(null, 'x', wMin-wMax);
myGradient[1].setAttributeNS(null, 'y', 0);//(Math.random()-0.2)*1.6*window.innerWidth);
myGradient[1].setAttributeNS(null, 'fill', "url(#img1)");
myGradient[1].setAttributeNS(null, 'id', "myGradient1"); 
myHeroSvg.appendChild(myGradient[1]); //insertBefore() or insertAfter()

// function $myTimerSnowX() { myBooble.forEach( function(item, index, arr) {
//     window.myBooble[index].setAttributeNS(null, 'cx', (Math.random()-0.2)*1.6*window.innerWidth);
//     })
// }