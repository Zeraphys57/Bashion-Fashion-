document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("closeMenu");

  // Membuka menu
  burger.addEventListener("click", () => {
    console.log("Burger clicked");
    menu.style.display = "block";
  });

  // Menutup menu
  closeMenu.addEventListener("click", () => {
    console.log("Close clicked");
    menu.style.display = "none";
  });
});

//===================================================================================================
    // const chatForm = document.getElementById('chat-form');
    // const userInput = document.getElementById('user-input');
    // const chatContainer = document.getElementById('chat-container');
   

    // const apiKey = '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'; 
    // const apiUrl = 'https://api.openrouter.ai/v1/chat'; 

    // // Function to send user input to the API and display the response
    // async function sendMessage(message) {
    //   // Add user's message to the chat
    //   addMessage('user', message);

    //   try {
    //     const response = await fetch(apiUrl, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${apiKey}`,
    //       },
    //       body: JSON.stringify({
    //         model:'deepseek-r1',
    //         messages:[
    //           {role: 'system', content: 'You are an AI fashion assistant.'},
    //           {role: 'user', content: message}
    //         ],
    //       }),
    //     });

    //     const data = await response.json();

    //     // Add API response to the chat
    //     if (data && data.choices && data.choices[0].message.content) {
    //       addMessage('ai', data.choices[0].message.content);
    //     } else {
    //       addMessage('ai', "Sorry, I couldn't process your question.");
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //     addMessage('ai', "Something went wrong. Please try again later.");
    //   }
    // }

    // // Function to add a message to the chat container
    // function addMessage(sender, message) {
    //   const messageElement = document.createElement('div');
    
    //   // Tambahkan kelas secara terpisah
    //   const baseClasses = ['p-2', 'rounded-lg', 'mb-2', 'max-w-sm'];
    //   const senderClasses = sender === 'user'
    //     ? ['bg-blue-500', 'text-white', 'self-end']
    //     : ['bg-gray-200', 'text-gray-800', 'self-start'];
    
    //   messageElement.classList.add(...baseClasses, ...senderClasses);
    
    //   messageElement.textContent = message;
    //   chatContainer.appendChild(messageElement);
    
    //   // Scroll to the bottom
    //   chatContainer.scrollTop = chatContainer.scrollHeight;
    // }
    
    // // Handle form submission
    // chatForm.addEventListener('submit', (e) => {
    //   e.preventDefault();

    //   const message = userInput.value.trim();
    //   if (message) {
    //     sendMessage(message);
    //     userInput.value = '';
    //   }
    // });


//===================================================================================================
  // Icon Scroll di Best Sale Section
  

  function updateArrows() {
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    const scrollLeft = window.scrollX; // Scroll horizontal
    const scrollWidth = document.documentElement.scrollWidth; 
    const clientWidth = document.documentElement.clientWidth; 
    // Jika scroll berada di paling kiri, sembunyikan panah kiri
  if (scrollLeft === 0) {
    arrowLeft.style.display = "none";
  } else {
    arrowLeft.style.display = "block"; // Tampilkan panah kiri
  }

  // Jika scroll berada di paling kanan, sembunyikan panah kanan
  if (scrollLeft + clientWidth >= scrollWidth) {
    arrowRight.style.display = "none";
  } else {
    arrowRight.style.display = "block"; // Tampilkan panah kanan
  }
}
  
  window.addEventListener('scroll', updateArrows);

  // Inisialisasi
  updateArrows();

//===================================================================================================
  gsap.registerPlugin(ScrollTrigger);

  
  document.addEventListener("DOMContentLoaded", () => {
    // Buat timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#text-section",
        start: "top top",
        end: "bottom+=200%",
        scrub: true,
        pin: true,
      },
    });
  
    // Animasi pinned text
    timeline
      .fromTo(
        "#folded-text",
        { y: 0, opacity: 1 },
        { y: -200, opacity: 0, ease: "power1.out" }
      )
  });
  
  // Timeline untuk teks panjang (paragraf)
  gsap.timeline({
    scrollTrigger: {
      trigger: "#text-content",   // Elemen teks panjang
      scrub: 1,                   // Animasi halus saat scroll
      start: "top 80%",           // Dimulai saat elemen mendekati viewport
      end: "bottom top",               // Selesai lebih cepat
    },
  });


//===================================================================================================
  // Animasi fade-in untuk background gambar
  gsap.timeline({
    scrollTrigger: {
      trigger: "#text-content", // Elemen teks panjang
      start: "top 90%",         // Animasi dimulai saat elemen mendekati viewport
      end: "top 70%",           // Selesai saat elemen lebih jauh ke viewport
      scrub: 1,                 // Animasi halus saat scrolling
    },
  })
  .fromTo(
    "#text-content div:first-child", // Background abstrak
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power1.inOut" }
  );
  
        // Animasi fade-in untuk teks panjang
        gsap.timeline({
        scrollTrigger: {
        trigger: "#text-content", // Elemen teks panjang
        start: "top 80%",         // Animasi dimulai saat elemen mendekati viewport
        end: "top 50%",           // Selesai saat elemen lebih jauh ke viewport
        scrub: 1,                 // Animasi halus saat scrolling
        },
        })
        .fromTo(
        "#text-content div:last-child", // Kontainer teks
        { opacity: 0, y: 50 },          // Awalnya transparan dan turun
        { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" } // Fade-in dan naik
        );
  
//===================================================================================================
//   // Timeline untuk spinning text
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: " ",  // Elemen spinning text
//       scrub: 1,                   // Animasi halus saat scroll
//       start: "top 75%",           // Dimulai saat elemen mendekati viewport
//       end: "bottom top",  
//       pin: true,           // Selesai setelah scrolling 100% dari tinggi layar
//     },
//   }).to("#spinning-text", {
//     rotateZ: 900,                 // Rotasi hingga 720 derajat
//     ease: "power1.inOut",         // Gerakan halus masuk dan keluar
//     duration: 1,                  // Durasi animasi relatif terhadap scroll
//   });
  
// // Fade-out spinning text
// gsap.timeline({
//   scrollTrigger: {
//     trigger: "#spinning-text",
//     start: "bottom 50%",
//     end: "bottom top",
//     scrub: 1,
//   },
// }).fromTo("#spinning-text", { opacity: 1 }, { opacity: 0 });
  
  
  
 //=================================================================================================== 
 // GSAP ScrollTrigger Animations
 gsap.registerPlugin(ScrollTrigger); 
 gsap.fromTo("#animatedText", 
    { opacity: 0, x: 100 }, 
    { opacity: 1, x: 0, duration: 1.5, repeat: -1, yoyo: true } 
  );

  // Animasi teks muncul satu per satu
  gsap.fromTo("#animatedText1", 
    { opacity: 0, x: 50 }, 
    { opacity: 1, x: 0, duration: 1 }
  );

  gsap.fromTo("#animatedText2", 
    { opacity: 0, x: 50 }, 
    { opacity: 1, x: 0, duration: 1, delay: 0.5 }
  );

  // Animasi ikon melayang
  gsap.to("#floatingIcons > div", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    stagger: 0.3,
  });

//===================================================================================================
  // Timeline GSAP untuk teks
  const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  textTimeline
    .fromTo("#line1", { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
    .fromTo("#line2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<")
    .fromTo("#line3", { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "<")
    .to("#interactiveText div", { opacity: 0, duration: 0.5, stagger: 0.2 });

  // Animasi ikon melayang acak
  const floatingIcons = document.querySelectorAll(".floatingIcon");
  floatingIcons.forEach(icon => {
    gsap.to(icon, {
      x: "random(-700, 500)",
      y: "random(-300, 400)",
      rotation: "random(-45, 45)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });
  });

  // Efek Parallax saat Scroll
  window.addEventListener("scroll", () => {
    const scrollOffset = window.scrollY / 100; // Menyesuaikan kecepatan parallax
    gsap.to("#animationWrapper", {
      y: -scrollOffset * 50,
      duration: 0.5,
      ease: "power1.out",
    });
  });

//===================================================================================================

 // Hover Efek 3D
 const hoverElements = document.querySelectorAll(".hover-3d");
 hoverElements.forEach((element) => {
   element.addEventListener("mousemove", (e) => {
     const { offsetX, offsetY, target } = e;
     const width = target.offsetWidth;
     const height = target.offsetHeight;
     const rotateX = ((offsetY / height) - 0.5) * 20;
     const rotateY = ((offsetX / width) - 0.5) * -20;
     gsap.to(target, {
       rotationX: rotateX,
       rotationY: rotateY,
       transformPerspective: 1000,
       duration: 0.2,
     });
   });
   element.addEventListener("mouseleave", () => {
     gsap.to(element, { rotationX: 0, rotationY: 0, duration: 0.3 });
   });
 });

 

 // Teks Masuk dari Sisi yang Berbeda
 textTimeline
   .from("#text1", { x: -200, opacity: 0, duration: 5 })
   .from("#text2", { x: 200, opacity: 0, duration: 5 }, "<0.5")
   .from("#text3", { y: -200, opacity: 0, duration: 5 }, "<0.5");

//===================================================================================================
 // Parallax Effect for Hero Section
 gsap.to("#parallaxBg", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// Animate Hero Text
gsap.from(".animate-text", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power4.out",
});


//===================================================================================================
// GSAP Infinite Carousel Animation
const carousels = document.querySelector("#carouselItems");
const item = Array.from(carousels.children);
let totalWidth = 0;

// Clone itemto create the loop effect
item.forEach((item) => {
  const clone = item.cloneNode(true);
  carousels.appendChild(clone);
  totalWidth += item.offsetWidth + 24; // Item width + gap
});

gsap.to("#carouselItems", {
  x: `-${totalWidth / 2}px`,
  duration: 15,
  repeat: -1,
  ease: "none",
});

// JavaScript File (FashionCarousel.js)
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-item");

  gsap.to(images, {
    xPercent: -100 * (images.length - 1), // Gerakan menuju ujung layar
    ease: "linear",
    duration: 15, // Kecepatan looping
    repeat: -1, // Looping tanpa batas
    modifiers: {
      xPercent: (xPercent) => {
        return gsap.utils.wrap(-100 * (images.length - 1), 0, xPercent);
      },
    },
  });
});


const itemWidth = item[0].offsetWidth;
let index = 1; // Mulai dari item pertama (setelah clone)

carousels.style.transform = `translateX(${-index * itemWidth}px)`;

function slideNext() {
  index++;
  carousels.style.transition = 'transform 0.5s ease-in-out';
  carousels.style.transform = `translateX(${-index * itemWidth}px)`;

  // Reset ke awal saat sampai item clone terakhir
  carousels.addEventListener('transitionend', () => {
    if (index === item.length - 1) {
      index = 1;
      carousels.style.transition = 'none';
      carousels.style.transform = `translateX(${-index * itemWidth}px)`;
    }
  });
}

// Set interval untuk menjalankan carousel otomatis
setInterval(slideNext, 3000);
//===================================================================================================
 // Parallax Effect for Hero Section
 gsap.to("#parallaxBg", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});


// Scroll-triggered Animations
gsap.from("#collectionTitle", {
  scrollTrigger: {
    trigger: "#collectionTitle",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
});

  // Floating Button Animation
 // gsap.from("#floatBtn", {
 //   y: 100,
  //  opacity: 0,
 //   duration: 1,
 //   delay: 1,
 //   ease: "power4.out",
 // }); 

// Mouse Tracking Effect
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector("#carouselItems");
  const { clientX: x, clientY: y } = e;
  hero.style.backgroundPositionX = -x / 20 + "px";
  hero.style.backgroundPositionY = -y / 20 + "px";
});

//===================================================================================================

// Ambil elemen tombol floating
const floatBtn = document.getElementById("floatBtn");

// Tambahkan event listener untuk klik tombol
floatBtn.addEventListener("click", () => {
  // Scroll ke elemen dengan id="featured"
  const featuredElement = document.getElementById("ad-background");
  if (featuredElement) {
    featuredElement.scrollIntoView({
      behavior: "smooth", 
      block: "start"      
    });
  } else {
    console.warn('Element with ID "featured" not found!');
  }
});



//===================================================================================================




 // Timeline untuk stitching teks B A S H I O N
 gsap.timeline({ repeat: -1, yoyo: true })
 .to("#bashion-text", {
   strokeDasharray: "500, 0", // Menjahit seluruh teks
   duration: 4,              // Durasi menjahit
   ease: "power2.inOut",     // Efek halus
 });


  