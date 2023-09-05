// JavaScript for scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-animation");

  function checkIfInView() {
      animatedElements.forEach(function (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight) {
              element.classList.add("animate");
          }
      });
  }

  // Initial check when the page loads
  checkIfInView();

  // Check when the user scrolls
  window.addEventListener("scroll", function () {
      checkIfInView();
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetElement.offsetTop
        });
      }
    });
  });

function redirectToShopPage(target) {
  // Define the target section IDs for each shop category
  const targets = {
    cotton: 'cotton',
    cottonChudithars: 'Cotton-Chudithars',
    silk: 'silk',
    silkChudithars: 'Silk-Chudithars',
    kora: 'kora',
    koraChudithars: 'kora-chudithars',
  };

  // Check if the target is valid
  if (targets.hasOwnProperty(target)) {
    // Get the target section ID
    const targetSection = targets[target];

    // Scroll to the target section
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

<button onclick="redirectToShopPage('cotton')">Cotton Sarees</button>
<button onclick="redirectToShopPage('cottonChudithars')">Cotton Chudithars</button>
<button onclick="redirectToShopPage('silk')">Silk Sarees</button>
<button onclick="redirectToShopPage('silkChudithars')">Silk Chudithars</button>
<button onclick="redirectToShopPage('kora)">Kora Sarees</button>
<button onclick="redirectToShopPage('koraChudithars')">kora Chudithars</button>


document.getElementById('cotton-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#Cotton';
  });

  document.getElementById('silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#silk';
  });

  document.getElementById('kora-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#kora';
  });

  document.getElementById('soft-silk-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'Shop.html#soft_silk';
  });

  document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html#about';
  });
  
  
  
