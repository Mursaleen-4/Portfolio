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
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
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
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Back to top button functionality
const backToTopButton = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
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

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    contactForm.appendChild(successMessage);
    
    // Clear form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
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
