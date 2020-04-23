// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

// window.addEventListener("scroll", function (event) {
//     var scroll = this.scrollY;
//     console.log(scroll)
// });


// var myAnchor = document.querySelector("#myAnchor0");
// var myScrollContent = document.querySelector("#myAnchor0").childNodes[1];

const mySlide = document.querySelectorAll(".mySlideIn");

mySlide.forEach( function(item, index, arr) {
    var slideLeft = 1;
    if (mySlide[index].classList.contains("mySlideLeft")) {
        slideLeft = -1;
    };

    var slideFull = 0;
    if (mySlide[index].classList.contains("mySlideFull")) {
        slideFull = -100;
        mySlide[index].children[0].style.transform = ('translateX(' + -20 + '%)');
    };   

    mySlide[index].style.transform = ('translateX(' + 50 * slideLeft + '%)');
    mySlide[index].style.opacity = (1);

    window.addEventListener("scroll", function(event) {
        // var myScroll = window.scrollY; 
        // wHeight
        let myScrollLocation = ((((mySlide[index].parentElement.offsetTop ) - window.scrollY) / window.wHeight * 100));
        // console.log(myScrollLocation);

        if (myScrollLocation > slideFull) {
            // console.log(myScrollLocation);
            mySlide[index].style.transform = ('translateX(' + myScrollLocation *  slideLeft / 2  + '%)');
            // mySlide[index].style.opacity = (1 - myScrollLocation / 100);
        } else {
            mySlide[index].style.transform = ('translateX(' + 0 + '%)'); 
            // mySlide[index].style.opacity = (1);           
        }
        // if (scrollLocation >= 0) {
        //     myScrollContent.style.left = (scrollLocation + "vw");
        //     myScrollContent.style.opacity = (1-(scrollLocation*2/100));
        // } else {
        //     myScrollContent.style.left = (0 + "vw");
        //     myScrollContent.style.opacity = (1);
        // }
    
    });
});




// var myEfficientFn = debounce(function() {
//     // My Debounce function content:    
//     var myScroll = window.scrollY;
//     let scrollLocation = ((window.wHeight - myScroll) / window.wHeight * 100) / 2;

//     if (scrollLocation >= 0) {
//         window.myScrollContent.style.left = (scrollLocation + "vw");
//         window.myScrollContent.style.opacity = (1-(scrollLocation*2/100));
//     } else {
//         window.myScrollContent.style.left = (0 + "vw");
//         window.myScrollContent.style.opacity = (1);
//     }
//     console.log("dupa");

// }, 50);


// window.addEventListener("scroll", myEfficientFn);


// window.addEventListener("scroll", function(event) {
//     var myScroll = window.scrollY;
//     let scrollLocation = ((window.wHeight - myScroll) / window.wHeight * 100) / 2;

//     if (scrollLocation >= 0) {
//         myScrollContent.style.left = (scrollLocation + "vw");
//         myScrollContent.style.opacity = (1-(scrollLocation*2/100));
//     } else {
//         myScrollContent.style.left = (0 + "vw");
//         myScrollContent.style.opacity = (1);
//     }

// });