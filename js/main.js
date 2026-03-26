// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Theme Toggle Functionality
    if (themeToggle) {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.checked = false;
        }

        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Active Section Indicator
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', debounce(updateActiveNavLink, 10));
    
});

// Skills Data - REMOVED for static HTML
// const skills = [...];
// ... population code removed



    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize active nav link
    updateActiveNavLink();

    // Intersection Observer for section titles
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    // Observe section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .contact-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Enhanced parallax effect for floating shapes
    const parallaxShapes = debounce(() => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.3 + (index * 0.15);
            const yPos = -(scrolled * speed);
            const rotation = scrolled * 0.05 * (index + 1);
            const scale = 1 + Math.sin(scrolled * 0.001 + index) * 0.1;
            shape.style.transform = `translateY(${yPos}px) rotate(${rotation}deg) scale(${scale})`;
        });
    }, 16);

    window.addEventListener('scroll', parallaxShapes);

    // Add loading class to body when page loads
    document.body.classList.add('loaded');

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn-3d');
    buttons.forEach(btn => {
        // Remove any existing event listeners
        btn.replaceWith(btn.cloneNode(true));
    });
    
    // Re-select buttons after cloning
    const newButtons = document.querySelectorAll('.btn-3d');
    newButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px) scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('click', function(e) {
            // Ensure the link works properly
            if (this.href) {
                e.preventDefault();
                window.open(this.href, this.target || '_self');
            }
        });
    });

    // Fix project links specifically
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
        
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add CSS for scrolled navbar
    const style = document.createElement('style');
    style.textContent = `
        nav.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);

    // Email handling function
    window.tryMailto = function(mailtoUrl) {
        const emailWindow = window.open(mailtoUrl, "_blank");
        setTimeout(() => {
            if (!emailWindow || emailWindow.closed || typeof emailWindow.closed === "undefined") {
                const params = mailtoUrl.split("?")[1];
                const subject = params.match(/subject=([^&]*)/)?.[1] || "";
                const body = params.match(/body=([^&]*)/)?.[1] || "";
                const to = mailtoUrl.split("?")[0].replace("mailto:", "");
                window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
            } else {
                emailWindow.close();
            }
        }, 500);
    };

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
        });
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.animation = 'fadeInUp 1s ease-out';
        }, 500);
    }

    // PDF Viewer (moved from inline HTML script)
    function initPDFViewer() {
      if (typeof pdfjsLib === 'undefined') {
        // Dynamically load pdf.js if not available
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        script.onload = function() {
          // Load worker after pdf.js
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          setupPDF();
        };
        document.head.appendChild(script);
      } else {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        setupPDF();
      }
    }
function setupPDF() {
    const url = 'assets/pdf/PredictGrad.pdf';
    const canvas = document.getElementById('pdf-canvas');
    const indicator = document.getElementById('pdf-page-indicator');
    const container = document.querySelector('.pdf-viewer-container');

    if (!canvas || !indicator || !container) return;

    const ctx = canvas.getContext('2d');
    let pdfDoc = null;
    let currentPage = 1;
    let totalPages = 0;
    let rendering = false;

    function renderPage(pageNum) {
        if (rendering || !pdfDoc) return;
        rendering = true;
        canvas.style.opacity = '0.4';

        pdfDoc.getPage(pageNum).then(function (page) {
            // FIX 1: Access the internal rotation of the PDF page
            const rotation = page.rotate; 

            // FIX 2: Increase scale to 3.0 for "Retina" sharpness 
            // and pass the rotation metadata to the viewport
            const viewport = page.getViewport({ 
                scale: 3.0, 
                rotation: rotation 
            });

            // Set internal high-res resolution
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // FIX 3: Force the canvas to fill the width of your container 
            // This prevents the "zoomed out / 1/4 size" look
            canvas.style.width = "100%";
            canvas.style.height = "auto";

            const renderCtx = {
                canvasContext: ctx,
                viewport: viewport,
            };

            page.render(renderCtx).promise.then(function () {
                canvas.style.opacity = '1';
                indicator.textContent = pageNum + ' / ' + totalPages;
                rendering = false;
            });
        });
    }

    function nextPage() {
        if (!pdfDoc || rendering) return;
        currentPage = (currentPage >= totalPages) ? 1 : currentPage + 1;
        renderPage(currentPage);
    }

    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        pdfDoc = pdf;
        totalPages = pdf.numPages;
        renderPage(currentPage);
    }).catch(err => {
        console.error('PDF Error:', err);
        indicator.textContent = 'PDF not found.';
    });

    container.addEventListener('click', nextPage);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

function renderPage(pageNum) {
    if (rendering) return;
    rendering = true;
    canvas.style.opacity = '0.4';

    pdfDoc.getPage(pageNum).then(function (page) {
        // High scale (2.0) ensures it is not blurry on high-res screens
        const viewport = page.getViewport({ scale: 2.0 }); 
        
        // Internal resolution (Large for sharpness)
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderCtx = {
            canvasContext: ctx,
            viewport: viewport,
        };

        page.render(renderCtx).promise.then(function () {
            canvas.style.opacity = '1';
            indicator.textContent = pageNum + ' / ' + totalPages;
            rendering = false;
        });
    });
}