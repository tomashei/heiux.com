// var touchAnchor = 0;
// function jumpto(anchorNo){
//     window.location.href = "#myAnchor" +  anchorNo;//"'";
// }



// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;

// const gestureZone = document.getElementById('gestureZone');

// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);

// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false); 

// function handleGesture() {
//     // if (touchendX <= touchstartX) {
//     //     console.log('Swiped left');
//     //     jumpto(5);
//     // }
    
//     // if (touchendX >= touchstartX) {
//     //     console.log('Swiped right');
//     //     jumpto(5);
//     // }
    
//     if (touchendY <= touchstartY) {
//         console.log('Swiped up');
//         touchAnchor++;
//         jumpto(touchAnchor);
//     }
    
//     if (touchendY >= touchstartY) {
//         console.log('Swiped down');
//         touchAnchor--;
//         jumpto(touchAnchor);
//     }
    
//     // if (touchendY === touchstartY) {
//     //     console.log('Tap');
//     //     jumpto(5);
//     // }
// }