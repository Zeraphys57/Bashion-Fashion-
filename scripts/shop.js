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
//==================================================================================================================================
// Carousel functionality with looping
let currentSlide = 0;
const slides = document.querySelectorAll("#carousel img");
const totalSlides = slides.length;
const carousel = document.getElementById("carousel");

// Clone first and last slides for looping effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

// Append and prepend clones
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, slides[0]);

// Update total slides (including clones)
const updatedSlides = document.querySelectorAll("#carousel img");
const updatedTotalSlides = updatedSlides.length;

// Adjust initial position to show the first real slide
carousel.style.transform = `translateX(-100%)`;

// Add event listeners for navigation
document.getElementById("next").addEventListener("click", () => {
  currentSlide++;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;

  // Reset to first slide after animation
  if (currentSlide >= totalSlides) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentSlide = 0;
      carousel.style.transform = `translateX(-100%)`;
    }, 500); // Match duration of the CSS transition
  }
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide--;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;

  // Reset to last slide after animation
  if (currentSlide < 0) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentSlide = totalSlides - 1;
      carousel.style.transform = `translateX(-${totalSlides * 100}%)`;
    }, 500); // Match duration of the CSS transition
  }
});


// // Add to Cart functionality
// const cart = [];
// document.querySelectorAll(".addToCart").forEach(button => {
//   button.addEventListener("click", (e) => {
//     const name = e.target.getAttribute("data-name");
//     const price = parseFloat(e.target.getAttribute("data-price"));
//     cart.push({ name, price });
//     alert(`${name} has been added to the cart!`);
//     console.log(cart); // Logs the updated cart
//   });
// });

// // View Cart
// document.getElementById("viewCart").addEventListener("click", () => {
//   alert("Cart Items:\n" + JSON.stringify(cart, null, 2));
// });


//==================================================================================================================================    

document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('hidden');
  });
  
  document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('menu').classList.add('hidden');
  });
  

  //==================================================================================================================================

  // Mobile menu toggle
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('hidden');
  });

  // Carousel navigation
  let currentIndex = 0;
  const items = document.querySelectorAll('#carouselItems > div');
  const updateCarousel = () => {
    document.getElementById('carouselItems').style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
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

//==================================================================================================================================

//link dinamis

document.querySelectorAll('.item-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah navigasi langsung

      // Ambil data dari atribut
      const name = this.dataset.name;
      const price = this.dataset.price;
      const image = this.dataset.image;

      // Buat URL dengan parameter
      const url = `shopPreview.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;

      // Arahkan ke URL baru
      window.location.href = url;
  });
});

//==================================================================================================================================

  
function addToCart(button) {
  const name = button.dataset.name; // Nama produk
  const price = button.dataset.price; // Harga produk
  const image = button.dataset.image || ""; // Gambar produk (opsional)

  // Ambil cart dari localStorage, atau buat array kosong jika belum ada
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Cari apakah item sudah ada di cart
  const existingItem = cartItems.find(item => item.name === name);

  if (existingItem) {
      existingItem.quantity += 1; // Tambah jumlah jika sudah ada
  } else {
      cartItems.push({ name, price, image, quantity: 1 }); // Tambahkan item baru
  }

  // Simpan kembali ke localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Tampilkan toast notification
  showToast(`${name} has been added to your cart!`);
}

  
  function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'bg-orange-300 text-black p-8 rounded-lg shadow-lg animate-fadeIn';
    toast.innerHTML = `
      <div class="flex items-center">
        <span class="mr-3">🛒</span>
        <span>${message}</span>
      </div>
    `;
  
    toastContainer.appendChild(toast);
  
    // Hapus toast setelah beberapa detik
    setTimeout(() => {
      toast.classList.add('animate-fadeOut');
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
  












//==================================================================================================================================
//DATA BASE SHOP.JSON
// export async function getProducts() {
//     const response = await fetch('shop.json');
//     if (!response.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     return await response.json();
//   }
  
//   export async function addProduct(newProduct) {
//     const response = await fetch('shop.json');
//     const data = await response.json();
//     data.products.push(newProduct);
  
//     // Jika backend ada, gunakan POST untuk menyimpan data baru:
//     // await fetch('/products', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(newProduct),
//     // });
  
//     console.log('Product added:', newProduct);
//   }
  