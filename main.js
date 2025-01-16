function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active")
}

// var swiper = new swiper(".service-slider", {
//     slidesPerView: 1,
//     spaceBetween: 70,
//     // autoplay: {
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     // },
//     navigation: {
//     nextEl: ".service-slider .swiper-button-next",
//     prevEl: ".service-slider .swiper-button-prev",
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//       },
//       950: {
//         slidesPerView: 4,
//       },
//       1200: {
//         slidesPerView: 5,
//       },
//     },
//   });