// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth';
//         });
//     });
// });


// document.querySelector(".scrollToTop").addEventListener("click", function(event) {

//         window.scrollTo(0,0);



// });

window.onbeforeunload = window.scrollTo(0,0);