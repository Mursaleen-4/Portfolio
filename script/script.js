// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

if (htmlProgress && htmlValue) {
  let progresshtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
      htmlStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (htmlStartValue == htmlEndValue) {
      clearInterval(progresshtml);
    }
  }, htmlspeed);
}

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

if (javascriptProgress && javascriptValue) {
  let progressjs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
      javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (javascriptStartValue == javascriptEndValue) {
      clearInterval(progressjs);
    }
  }, jsspeed);
}

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

if (phpProgress && phpValue) {
  let progressphp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#20c997 ${
      phpStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (phpStartValue == phpEndValue) {
      clearInterval(progressphp);
    }
  }, phpspeed);
}

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

if (reactProgress && reactValue) {
  let progressreact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${
      reactStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (reactStartValue == reactEndValue) {
      clearInterval(progressreact);
    }
  }, rjsspeed);
}


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      const navbarTop = document.getElementById('navbar-top');
      const navbarElem = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        if (navbarTop) navbarTop.classList.add('fixed-top');
        // add padding top to show content behind navbar
        if (navbarElem) {
          navbar_height = navbarElem.offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        }
      } else {
        if (navbarTop) navbarTop.classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    if (mybutton) mybutton.style.display = "block";
  } else {
    if (mybutton) mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
if (mybutton) {
  mybutton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

// Back to top button functionality
const backToTopButton = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
  if (backToTopButton) {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
});

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  if (!navbar) return;
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    // Scroll Down
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    // Scroll Up
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// AJAX Formspree submission for contact form
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    // Remove any previous success message
    const prevMsg = form.parentElement.querySelector('.form-success-message');
    if (prevMsg) prevMsg.remove();
    if (response.ok) {
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success-message alert alert-success mt-3';
      successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
      form.parentElement.appendChild(successMessage);
      form.reset();
    } else {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'form-success-message alert alert-danger mt-3';
      errorMessage.textContent = 'Oops! There was a problem sending your message.';
      form.parentElement.appendChild(errorMessage);
    }
  });
}

// Ultra Advanced Cosmic Background Enhancement
function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.left = Math.random() * 100 + '%';
  shootingStar.style.top = Math.random() * 50 + '%';
  shootingStar.style.animationDuration = (Math.random() * 3 + 3) + 's';
  shootingStar.style.animationDelay = Math.random() * 2 + 's';
  
  // Add random color variations
  const colors = ['#fff', '#4f46e5', '#7c3aed', '#f97316'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  shootingStar.style.background = randomColor;
  
  document.body.appendChild(shootingStar);
  
  // Remove shooting star after animation
  setTimeout(() => {
    if (shootingStar.parentNode) {
      shootingStar.parentNode.removeChild(shootingStar);
    }
  }, 6000);
}

// Create quantum particles
function createQuantumParticle() {
  const particle = document.createElement('div');
  particle.className = 'quantum-particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 15 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
  
  // Random particle properties
  const size = Math.random() * 3 + 1;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  // Random glow colors
  const glowColors = ['rgba(255, 255, 255, 0.8)', 'rgba(79, 70, 229, 0.8)', 'rgba(124, 58, 237, 0.8)', 'rgba(249, 115, 22, 0.8)'];
  const randomGlow = glowColors[Math.floor(Math.random() * glowColors.length)];
  particle.style.boxShadow = `0 0 0 2px ${randomGlow}, 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 10px ${randomGlow}, 0 0 20px rgba(255, 255, 255, 0.4)`;
  
  document.body.appendChild(particle);
  
  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 20000);
}

// Create shooting stars periodically
setInterval(createShootingStar, 2500);

// Create quantum particles periodically
setInterval(createQuantumParticle, 2000);

// Advanced parallax effects for cosmic elements
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Dark matter parallax
  const darkMatters = document.querySelectorAll('.dark-matter');
  darkMatters.forEach((matter, index) => {
    const speed = 0.3 + (index * 0.1);
    const yPos = -(scrolled * speed);
    const xPos = (scrolled * 0.05) * (index % 2 === 0 ? 1 : -1);
    matter.style.transform = `translateY(${yPos}px) translateX(${xPos}px)`;
  });
  
  // Energy vortex parallax
  const energyVortexes = document.querySelectorAll('.energy-vortex');
  energyVortexes.forEach((vortex, index) => {
    const speed = 0.4 + (index * 0.15);
    const yPos = -(scrolled * speed);
    const scale = 1 + (scrolled * 0.0001);
    vortex.style.transform = `translateY(${yPos}px) scale(${scale})`;
  });
  
  // Quantum particles parallax
  const quantumParticles = document.querySelectorAll('.quantum-particle');
  quantumParticles.forEach((particle, index) => {
    const speed = 0.2 + (index * 0.05);
    const yPos = -(scrolled * speed);
    particle.style.transform = `translateY(${yPos}px)`;
  });
});

// Mouse interaction effects
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  // Subtle mouse tracking for energy vortexes
  const energyVortexes = document.querySelectorAll('.energy-vortex');
  energyVortexes.forEach((vortex, index) => {
    const moveX = (mouseX - 0.5) * 20 * (index + 1);
    const moveY = (mouseY - 0.5) * 20 * (index + 1);
    vortex.style.transform += ` translate(${moveX}px, ${moveY}px)`;
  });
});

// Add twinkling effect to random stars
function addTwinklingStars() {
  const stars = document.querySelectorAll('body::before, body::after');
  stars.forEach((star, index) => {
    if (Math.random() > 0.7) {
      star.style.animation = `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`;
    }
  });
}

// Initialize ULTRA COMPLEX MULTI-LAYER ANIMATION SYSTEM
document.addEventListener('DOMContentLoaded', () => {
  addTwinklingStars();
  createCosmicDust();
  createInitialQuantumParticles();
  initializeCosmicInteractions();
  createMatrixCharacters();
  initializeAdvancedInteractions();
  createDynamicLightning();
});

// Create cosmic dust particles
function createCosmicDust() {
  const dustCount = 75;
  
  for (let i = 0; i < dustCount; i++) {
    const dust = document.createElement('div');
    dust.className = 'cosmic-dust';
    dust.style.left = Math.random() * 100 + '%';
    dust.style.animationDelay = Math.random() * 10 + 's';
    dust.style.animationDuration = (Math.random() * 10 + 5) + 's';
    dust.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.body.appendChild(dust);
  }
}

// Create initial quantum particles
function createInitialQuantumParticles() {
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    createQuantumParticle();
  }
}

// Initialize cosmic interactions
function initializeCosmicInteractions() {
  // Add click effects for energy vortexes
  const energyVortexes = document.querySelectorAll('.energy-vortex');
  energyVortexes.forEach(vortex => {
    vortex.addEventListener('click', () => {
      vortex.style.animation = 'vortexSpin 2s linear infinite, vortexGlow 1s ease-in-out infinite';
      setTimeout(() => {
        vortex.style.animation = '';
      }, 2000);
    });
  });
  
  // Add hover effects for dark matter
  const darkMatters = document.querySelectorAll('.dark-matter');
  darkMatters.forEach(matter => {
    matter.addEventListener('mouseenter', () => {
      matter.style.filter = 'blur(30px) brightness(1.5)';
      matter.style.opacity = '0.7';
    });
    
    matter.addEventListener('mouseleave', () => {
      matter.style.filter = 'blur(60px)';
      matter.style.opacity = '0.4';
    });
  });
  
  // Add plasma ball interactions
  const plasmaBalls = document.querySelectorAll('.plasma-ball');
  plasmaBalls.forEach(ball => {
    ball.addEventListener('mouseenter', () => {
      ball.style.filter = 'blur(10px) brightness(2)';
      ball.style.opacity = '0.8';
    });
    
    ball.addEventListener('mouseleave', () => {
      ball.style.filter = 'blur(20px)';
      ball.style.opacity = '0.4';
    });
  });
}

// Create Matrix-style falling characters
function createMatrixCharacters() {
  const matrixContainer = document.querySelector('.matrix-rain');
  if (!matrixContainer) return;
  
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const columns = Math.floor(window.innerWidth / 20);
  
  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.style.position = 'absolute';
    column.style.left = (i * 20) + 'px';
    column.style.top = '-100px';
    column.style.color = 'rgba(0, 255, 0, 0.8)';
    column.style.fontSize = '14px';
    column.style.fontFamily = 'monospace';
    column.style.animation = `matrixFlow ${Math.random() * 10 + 10}s linear infinite`;
    column.style.animationDelay = Math.random() * 10 + 's';
    
    let text = '';
    for (let j = 0; j < 20; j++) {
      text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
    }
    column.innerHTML = text;
    
    matrixContainer.appendChild(column);
  }
}



// Initialize advanced interactions
function initializeAdvancedInteractions() {
  // Add click effects for lightning
  const lightnings = document.querySelectorAll('.lightning');
  lightnings.forEach(lightning => {
    lightning.addEventListener('click', () => {
      lightning.style.animation = 'lightningFlash 0.5s ease-in-out';
      setTimeout(() => {
        lightning.style.animation = '';
      }, 500);
    });
  });
  
  // Add fractal pattern interaction
  const fractalPattern = document.querySelector('.fractal-pattern');
  if (fractalPattern) {
    fractalPattern.addEventListener('mouseenter', () => {
      fractalPattern.style.animation = 'fractalScale 10s linear infinite';
    });
    
    fractalPattern.addEventListener('mouseleave', () => {
      fractalPattern.style.animation = 'fractalScale 80s linear infinite';
    });
  }
  
  // Add DNA helix interaction
  const dnaHelix = document.querySelector('.dna-helix');
  if (dnaHelix) {
    dnaHelix.addEventListener('mouseenter', () => {
      dnaHelix.style.animation = 'dnaTwist 10s linear infinite';
    });
    
    dnaHelix.addEventListener('mouseleave', () => {
      dnaHelix.style.animation = 'dnaTwist 50s linear infinite';
    });
  }
}

// Create dynamic lightning effects
function createDynamicLightning() {
  setInterval(() => {
    const lightning = document.createElement('div');
    lightning.style.position = 'fixed';
    lightning.style.left = Math.random() * 100 + '%';
    lightning.style.top = '0';
    lightning.style.width = '1px';
    lightning.style.height = '100%';
    lightning.style.background = 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9), transparent)';
    lightning.style.animation = 'lightningFlash 0.3s ease-in-out';
    lightning.style.pointerEvents = 'none';
    lightning.style.zIndex = '5';
    
    document.body.appendChild(lightning);
    
    setTimeout(() => {
      if (lightning.parentNode) {
        lightning.parentNode.removeChild(lightning);
      }
    }, 300);
  }, 3000);
}

// Add animation to skill progress bars
const progressBars = document.querySelectorAll('.circular-progress');
const progressValues = {
  'html-css': 90,
  'typescript': 75,
  'javascript': 75,
  'reactjs': 70,
  'python': 80,
  'database': 80,
  'datascience': 80
};

progressBars.forEach(bar => {
  const skillClasses = Array.from(bar.classList).filter(cls => cls !== 'circular-progress');
  let skill = skillClasses[0];
  if (skill === 'html-css') skill = 'html-css';
  else if (skill === 'typescript') skill = 'typescript';
  else if (skill === 'javascript') skill = 'javascript';
  else if (skill === 'reactjs') skill = 'reactjs';
  else if (skill === 'python') skill = 'python';
  else if (skill === 'database') skill = 'database';
  else if (skill === 'datascience') skill = 'datascience';
  const value = progressValues[skill];
  const progressValue = bar.querySelector('.progress-value');
  let startValue = 0;
  const endValue = value;
  const speed = 30;
  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    bar.style.background = `conic-gradient(var(--primary) ${startValue * 3.6}deg, #f1f5f9 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Add typing effect to the main heading
const mainHeading = document.querySelector('.home h2');
if (mainHeading) {
  const text = mainHeading.textContent;
  mainHeading.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      mainHeading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing effect when the section is in view
  const headingObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeWriter();
      headingObserver.disconnect();
    }
  });
  
  headingObserver.observe(mainHeading);
}

// Subtle animated starfield
function createStarfield() {
  if (document.querySelector('.starfield-canvas')) return; // Prevent duplicates
  let canvas = document.createElement('canvas');
  canvas.className = 'starfield-canvas';
  document.body.appendChild(canvas);
  let ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  let stars = [];
  let numStars = Math.floor(w * h / 1200); // density
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 0.7 + 0.3,
      tw: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.1 + 0.02
    });
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let s of stars) {
      s.tw += s.speed;
      let alpha = 0.5 + 0.5 * Math.sin(s.tw);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 2;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}

// On DOMContentLoaded, always create the starfield
window.addEventListener('DOMContentLoaded', createStarfield);

// Remove any leftover geometric shapes on load
function removeAllShapes() {
  document.querySelectorAll('.geometric-grid, .hexagon-pattern, .wave-pattern, .floating-shape, .floatingShape').forEach(e => e.remove());
}

// Ensure this runs on every load
window.addEventListener('DOMContentLoaded', removeAllShapes);

// Ensure matrix rain is visible immediately
function showMatrixRain() {
  const matrix = document.querySelector('.matrix-rain');
  if (matrix) matrix.style.opacity = '1';
}

// On DOMContentLoaded, run the new starfield and cleanup
const oldInit = window.onload;
window.onload = function() {
  if (typeof oldInit === 'function') oldInit();
  removeAllShapes(); // was removeOldStarsAndShapes()
  createStarfield();
  showMatrixRain();
};
