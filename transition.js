// const loadingScreen = document.querySelector('.loading-screen')
// const mainNavigation = document.querySelector('.main-navigation')

// // Function to add and remove the page transition screen
// function pageTransitionIn() {
//   // GSAP methods can be chained and return directly a promise
//   // but here, a simple tween is enough
//   return gsap
//     // .timeline()
//     // .set(loadingScreen, { transformOrigin: 'bottom left'})
//     // .to(loadingScreen, { duration: .5, scaleY: 1 })
//     .to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'bottom left'})
// }
// // Function to add and remove the page transition screen
// function pageTransitionOut(container) {
//   // GSAP methods can be chained and return directly a promise
//   return gsap
//     .timeline({ delay: 1 }) // More readable to put it here
//     .add('start') // Use a label to sync screen and content animation
//     .to(loadingScreen, {
//       duration: 0.5,
//       scaleY: 0,
//       skewX: 0,
//       transformOrigin: 'top left',
//       ease: 'power1.out'
//     }, 'start')
//     .call(contentAnimation, [container], 'start')
// }

// Function to animate the content of each page
function contentAnimation() {
  // Query from container
  $(document.querySelector('.green-heading-bg')).addClass('show')
  // GSAP methods can be chained and return directly a promise
  return gsap
    .timeline()
    .from(document.querySelector('.is-animated'), {
      duration: 1,
      translateY: 20,
      opacity: 0,
      stagger: 0.4
    })
    .from(mainNavigation, { duration: .5, translateY: -20, opacity: 0})
}
contentAnimation()

// $(function() {
//   barba.init({
//     // We don't want "synced transition"
//     // because both content are not visible at the same time
//     // and we don't need next content is available to start the page transition
//     // sync: true,
//     views: [{
//       namespace: 'home',
//       beforeEnter() {
//         // update the menu based on user navigation
//         document.querySelector('.main-body').style.opacity = 0;
//       },
//       afterEnter() {
//         // refresh the parallax based on new page content
//         document.querySelector('.main-body').style.opacity = 1;
//         parallax.refresh();
//       }
//     }],

//     transitions: [{
//       // NB: `data` was not used.
//       // But usually, it's safer (and more efficient)
//       // to pass the right container as a paramater to the function
//       // and get DOM elements directly from it
//       async leave(data) {
//         // Not needed with async/await or promises
//         // const done = this.async();
//         // document.querySelector('.main-body').style.opacity = 0;
//         await pageTransitionIn()
//         // No more needed as we "await" for pageTransition
//         // And i we change the transition duration, no need to update the delay…
//         // await delay(1000)

//         // Not needed with async/await or promises
//         // done()

//         // Loading screen is hiding everything, time to remove old content!
//         data.current.container.remove()
//         // document.querySelector('.main-body').style.opacity = 1;
//         console.log('in transition function')
//       },

//       async enter(data) {
//         await pageTransitionOut(data.next.container)
//       },
//       // Variations for didactical purpose…
//       // Better browser support than async/await
//       // enter({ next }) {
//       //   return pageTransitionOut(next.container);
//       // },
//       // More concise way
//       // enter: ({ next }) => pageTransitionOut(next.container),

//       async once(data) {
//         await contentAnimation(data.next.container);
//       }
//     }]
//   })});

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});
