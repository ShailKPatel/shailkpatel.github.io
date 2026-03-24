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

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Skills Data
const skills = [
    { name: 'Django', icon: 'assets/images/logo/django.png'},
    { name: 'FastAPI', icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.svg'},
    { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png'},
    { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg'},
    { name: 'LlamaIndex', icon: 'https://raw.githubusercontent.com/run-llama/logos/main/llamaindex-logo.svg'},
    { name: 'LangGraph', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAIVBMVEX49/8cPDz9/f8CLCvS1NsAHx2rs7ji5OtCWFpmdniGkpazUuCRAAAB3klEQVRYhe2V25bDIAhFEQQv///Bg6JGTdrJTN+6Yi8PMWwPR0RwHw54AA/gAXwpgG6M1wBil8X/MiQ7pmsA54CIgG9HmQ6ZLwAUA8LNgSHSDuB8O7wQcIhoABbsU+V7gyA8A2jEizopLwlmQyPQAaA0QvhtOlmtGmslOgDjjWgJhcvlg9VB7A8GYEqgJZYuJJR4J0Go67UkCoDHO5KMwP5EqPGgFgceArkBjvW0knxF0Kko0DXtmntTXF2AKQN7ajZsBIRMzgOuAGmAxTLMdCagV/PEUc2MeoL6tAIYFoD0Kp3j9fwUACs1Upw3vQDWdAP3w4FTfMpqfqSsv0MxXgKwK6CMR3z5E5Vc4nEHwArIndBy1UV1n/T4sGZHizcGIL8SYBxVS0I33syJpYjmeH+1jVXyLKHsgCmBkdXk91pIbSJ0DXWmK9BSjGtxpL2Ux4yZqBlj9wBr/PZeL+U9Bw0pfgV1M2Krgpx4jze3t+NcJ7RZZEypnIvaGmodEu/rw9QPZhdC4piipCQBtYtb1Yj2+13m1FCOlliHhyASgw9wNDDcO+XS0nYC2A2wS17jl6b617YOp7ZuF8tNBl5dLFWEb9LffMrw6epqc59frlZ9n1zv/xoP4AE8gK8B/ADS9hUEHxQacgAAAABJRU5ErkJggg=='},
    { name: 'LiteLLM', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEVHcEyXmZubpq8xcaNfbHmoq66mqayGmapSYnFSY3E7iMS8vsDo6ekzgr5XWFqoqq0gZZgjHyAiZ5q4ur0zfbWVl5mBg4fJy8ogDwAXEBGUlZfW2d1uoMuEkqL96balv9dsbW8lR2WMQFisAAAACnRSTlMAjmbbHqHNP2+0k5V8cAAAAeNJREFUWIXtleGSgiAURkktTcU2Ualwc3v/l1xAUMQLmPtrZzo6Tjme714RFKEPHz78X5I0jaLDkXM6nd4y04grlyVvqBeQYLtJkrrcUEB2PlecDrCIoJC47Wrkx1alpmxngLYXPpktA78++aDrCMgqy4crOwOM8mL8vDIQkBh61fpr86Hk+Nr3qwWljLHS6bduV6ilxuF3BXXJs2sHZIHuCbHlsmQM8iHdthkd+j7HGE9+qvUHpBeGzYah5ybOcc6xnx+oG8UHWVaqIzpgvHdo6AmdS/emugjg869roWkz67JvW9cBESgLVPMMtnVAKi6lHEd5CrRuBiTi4qdk6TNdPXf6MoC3T56rAF2+d8sq4Cj6lzolK31wN68DpgGYFy+Zxt5RHk+HXN7AaGl5njdQefsMirROxkXOpllHPUNnBFANY8xcLgOgQ4HIXqBq0obGzhcg10u4NBQgFvlKdqEuQ70il8t0m2xehcxnugeU7lZVAIpwgxc0al9t88HYxGKMvyBquY8/5J9aHeZNnB/fB3G9G/1OzeIa7COI+V1u9mAE7H0KUwN/DADng/j8BHbvDVxvYaZPK+C/7tcwngaa2wb/ig6SGLqBTaCH4FusRrzcX7f7FlQAQLeNMaB9QLRb+AXG75PCma7RZwAAAABJRU5ErkJggg=='},
    { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg'},
    { name: 'LoRA Fine-tuning', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'},  
    { name: 'PostgreSQL', icon: 'assets/images/logo/postgressql.png'},
    { name: 'Git', icon: 'assets/images/logo/git.png'},
    { name: 'System Design', icon: 'https://cdn-icons-png.flaticon.com/512/1581/1581882.png'}
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
                `;
                skillsContainer.appendChild(skillElement);
            });
        }
        // <div class="skill-level">Proficiency: ${skill.level}</div>

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