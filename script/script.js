// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

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

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

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

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

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

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

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

// Blog content data
const blogContent = {
  'web-dev': {
    title: 'Modern Web Development Trends in 2024',
    content: `
      <p>In the ever-evolving landscape of web development, 2024 brings exciting new trends and technologies that are reshaping how we build and interact with web applications. Let's explore some of the most significant developments:</p>
      
      <h5>1. AI-Powered Development</h5>
      <p>Artificial Intelligence is revolutionizing web development through tools like GitHub Copilot and automated testing frameworks. Developers can now leverage AI to write code, debug issues, and optimize performance.</p>
      
      <h5>2. Advanced CSS Techniques</h5>
      <p>Modern CSS features like Container Queries, CSS Grid, and Custom Properties are enabling more flexible and maintainable layouts. These tools allow for better responsive design and component-based styling.</p>
      
      <h5>3. Web Components</h5>
      <p>The adoption of Web Components continues to grow, providing a standardized way to create reusable custom elements. This trend promotes better code organization and maintainability.</p>
    `,
    author: 'Full Stack Developer',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  'machine-learning': {
    title: 'Getting Started with Machine Learning',
    content: `
      <p>Machine Learning is transforming industries and creating new opportunities for developers and data scientists. Here's a comprehensive guide to help you get started:</p>
      
      <h5>1. Understanding the Basics</h5>
      <p>Machine Learning is a subset of artificial intelligence that focuses on developing systems that can learn from and make decisions based on data. It's essential to understand fundamental concepts like supervised and unsupervised learning.</p>
      
      <h5>2. Essential Tools and Libraries</h5>
      <p>Python is the primary language for ML development, with powerful libraries like TensorFlow, PyTorch, and scikit-learn. These tools provide the building blocks for creating and training ML models.</p>
      
      <h5>3. Practical Applications</h5>
      <p>From image recognition to natural language processing, ML has numerous applications. Understanding these use cases helps in choosing the right approach for your projects.</p>
    `,
    author: 'Data Scientist',
    date: 'March 10, 2024',
    readTime: '7 min read'
  },
  'react-patterns': {
    title: 'Advanced React Patterns',
    content: `
      <p>React continues to evolve, bringing new patterns and best practices for building scalable applications. Let's explore some advanced concepts:</p>
      
      <h5>1. Custom Hooks</h5>
      <p>Custom hooks allow you to extract component logic into reusable functions. They're a powerful way to share stateful logic between components while keeping your code DRY.</p>
      
      <h5>2. Context API</h5>
      <p>The Context API provides a way to pass data through the component tree without manually passing props. It's perfect for managing global state and theme settings.</p>
      
      <h5>3. Performance Optimization</h5>
      <p>Understanding React's rendering behavior and using tools like React.memo, useMemo, and useCallback can significantly improve your application's performance.</p>
    `,
    author: 'React Developer',
    date: 'March 5, 2024',
    readTime: '6 min read'
  }
};

// Blog expansion functionality
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-bs-target');
    const modal = new bootstrap.Modal(document.querySelector(modalId));
    modal.show();
  });
});

// Handle blog comment form submission
document.querySelectorAll('.contact-form button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get the modal
    const modal = this.closest('.modal');
    
    // Hide the modal
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  });
});