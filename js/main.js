document.addEventListener('DOMContentLoaded', function () {

    /* ── Theme Toggle ── */
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.checked = false;
        }

        themeToggle.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    /* ── Mobile Menu ── */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    /* ── Active Nav Link on Scroll ── */
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', debounce(updateActiveNavLink, 12));
    updateActiveNavLink();

    /* ── Smooth Scroll on Nav Click ── */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
            }
            // Close mobile menu if open
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });

    /* ── Navbar: tighten on scroll ── */
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ── Section title visibility observer ── */
    const titleObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.section-title').forEach(function (el) {
        titleObserver.observe(el);
    });

    /* ── Scroll-reveal for cards ── */
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
    });

    /* ── Parallax shapes (subtle) ── */
    const parallaxShapes = debounce(function () {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.shape').forEach(function (shape, i) {
            const speed = 0.06 + i * 0.025;
            shape.style.transform = 'translateY(' + (-scrolled * speed) + 'px)';
        });
    }, 16);

    window.addEventListener('scroll', parallaxShapes);

    /* ── Navbar-brand scroll to top ── */
    document.getElementById('navbar-brand')?.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ── Footer year ── */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ── Email handler ── */
    window.tryMailto = function (mailtoUrl) {
        const emailWindow = window.open(mailtoUrl, '_blank');
        setTimeout(function () {
            if (!emailWindow || emailWindow.closed) {
                const params = mailtoUrl.split('?')[1] || '';
                const subject = (params.match(/subject=([^&]*)/) || [])[1] || '';
                const body = (params.match(/body=([^&]*)/) || [])[1] || '';
                const to = mailtoUrl.split('?')[0].replace('mailto:', '');
                window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + to + '&su=' + subject + '&body=' + body;
            } else {
                emailWindow.close();
            }
        }, 500);
    };

    /* ── PDF Viewer ── */
    function initPDFViewer() {
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
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
            canvas.style.opacity = '0.35';

            pdfDoc.getPage(pageNum).then(function (page) {
                const rotation = page.rotate;
                const viewport = page.getViewport({ scale: 3.0, rotation: rotation });

                canvas.width = viewport.width;
                canvas.height = viewport.height;
                canvas.style.width = '100%';
                canvas.style.height = 'auto';

                page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
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
        }).catch(function (err) {
            console.warn('PDF load error:', err);
            indicator.textContent = 'PDF unavailable';
        });

        container.addEventListener('click', nextPage);
    }

    // Init PDF after a short delay to let pdf.js finish loading
    setTimeout(initPDFViewer, 300);

});

/* ── Debounce utility ── */
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(function () { func(...args); }, wait);
    };
}
