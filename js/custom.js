window.onload = function(){
  //hide the preloader
  document.querySelector(".content").style.display = "none";
}


  $('#side_three .button').on('click', function(){
    
    $('#side_three .button ').toggleClass('current');
  });







// $(document).ready(function(){ 
//   // Get the container element
//   var btnContainer = document.getElementById("myDIV1");
  
//   // Get all buttons with class="btn" inside the container
//   var btns = btnContainer.getElementsByClassName("new");
  
//   // Loop through the buttons and add the active class to the current/clicked button
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
  
//       // If there's no active class
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
  
//       // Add the active class to the current/clicked button
//       this.className += " active";
//     });
//   } 
  
  
//   }); 





// $(document).ready(function(){ 
// // Get the container element
// var btnContainer = document.getElementById("myDIV");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("new");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// } 
// }); 



/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
// })

// sr.reveal(`.easy-writing, .img`,{delay: 400})
// sr.reveal(`.quality`,{delay: 300})
// sr.reveal(``,{delay: 300, origin: 'top'})

// sr.reveal(`.work, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 50})
// sr.reveal(`.our-feature, .discount__animate`,{origin: 'left', interval: 50})

// sr.reveal(``,{origin: 'top'})
// sr.reveal(``)


/*=============== banner ===============*/
$(document).ready(function(){ 
      //slider start;
    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;


});  

/*=============== banner ===============*/
$(document).ready(function(){ 
  //slider start;



         //about patner slider START;
         $('.image_slider').slick({
          autoplay: false,
          autoplaySpeed: 1800, 
          speed: 800,
         
          cssEase: 'linear',
   
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode:true,
          centerPadding: '60px',
          dots: false,
          arrows:true,
          prevArrow:'<i class="fas fa-chevron-right  previous-arrow"></i>',
          nextArrow:'<i class="fas fa-chevron-left  next-arrow"></i>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
            
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
          });
           //about patner slider END;
//slider start;


}); 
$(document).ready(function(){ 
  //slider start;
$('.slider_pet').slick({
    autoplay: false,
    autoplaySpeed: 1800, 
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
      
        }
      },
      {
        breakpoint: 768,
        settings: {
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });
//slider start;


});


$(document).ready(function(){ 
  //slider start;
$('.slider1').slick({
    autoplay: false,
    autoplaySpeed: 1800, 
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
      
        }
      },
      {
        breakpoint: 768,
        settings: {
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });
//slider start;


});



$(document).ready(function(){ 
  //slider start;
$('.slider2').slick({
    autoplay: false,
    autoplaySpeed: 1800, 
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
      
        }
      },
      {
        breakpoint: 768,
        settings: {
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });
//slider start;


});

$(document).ready(function(){ 
      //slider start;
    $('.slider_two').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows:false
                        }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;


});      

















