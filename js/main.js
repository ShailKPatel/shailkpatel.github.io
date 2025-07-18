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
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
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

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Skills Data
    const skills = [
        { name: 'Supervised ML', icon: 'assets/images/logo/supervised_learning.png', level: '70%' },
        { name: 'Unsupervised ML', icon: 'assets/images/logo/unsupervised_learning.png', level: '68%' },
        { name: 'Reinforcement Learning', icon: 'assets/images/logo/reinforcement_learning.png', level: '65%' },
        { name: 'Deep Learning', icon: 'assets/images/logo/deep_learning.png', level: '80%' },
        { name: 'Neural Networks', icon: 'assets/images/logo/neural_networks.png', level: '75%' },
        { name: 'TensorFlow', icon: 'assets/images/logo/TensorFlow.png', level: '60%' },
        { name: 'Scikit-Learn', icon: 'assets/images/logo/scikit-learn.png', level: '70%' },
        { name: 'Streamlit', icon: 'assets/images/logo/streamlit.png', level: '68%' },
        { name: 'MERN Stack', icon: 'assets/images/logo/MERN.png', level: '70%' },
        { name: 'Bootstrap', icon: 'assets/images/logo/bootstrap.png', level: '65%' },
        { name: 'Tailwind CSS', icon: 'assets/images/logo/Tailwind.png', level: '68%' },
        { name: 'JavaScript', icon: 'assets/images/logo/ecmascript.png', level: '75%' },
        { name: 'MySQL', icon: 'assets/images/logo/mysql.png', level: '70%' },
        { name: 'PostgreSQL', icon: 'assets/images/logo/postgressql.png', level: '68%' },
        { name: 'Java', icon: 'assets/images/logo/java.png', level: '65%' },
        { name: 'Git', icon: 'assets/images/logo/git.png', level: '75%' }
    ];

    // Populate Skills Section
    const skillsContainer = document.querySelector('#skills .grid');
    if (skillsContainer) {
        skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item fade-in';
            skillElement.style.animationDelay = `${index * 0.1}s`;
            skillElement.innerHTML = `
                <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" />
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">Proficiency: ${skill.level}</div>
            `;
            skillsContainer.appendChild(skillElement);
        });
    }

    // Education Semester Toggle
    const semesterBtns = document.querySelectorAll('.semester-btn:not(.disabled)');
    const semesterSkills = document.querySelectorAll('.semester-skills');

    semesterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const semester = this.dataset.semester;
            
            // Remove active class from all buttons and skills
            semesterBtns.forEach(b => b.classList.remove('active'));
            semesterSkills.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked button and corresponding skills
            this.classList.add('active');
            const targetSkills = document.querySelector(`.semester-skills[data-semester="${semester}"]`);
            if (targetSkills) {
                targetSkills.classList.add('active');
            }
        });
    });

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
    const animateElements = document.querySelectorAll('.project-card, .education-card, .contact-card');
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
});

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