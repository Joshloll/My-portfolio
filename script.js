// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const floatingBtn = document.getElementById('floating-btn');
const floatingOptions = document.getElementById('floating-options');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const portfolioModal = document.getElementById('portfolio-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Portfolio Data
const portfolioData = {
    'social-media': {
        title: 'Social Media Campaign',
        description: 'Complete Instagram post designs for a product launch campaign.',
        details: `
            <h3>Project Overview</h3>
            <p>Created a comprehensive social media campaign for a new product launch, including 12 Instagram posts with consistent branding and messaging.</p>
            
            <h3>Services Provided</h3>
            <ul>
                <li>Brand identity development</li>
                <li>12 custom Instagram post designs</li>
                <li>Content calendar creation</li>
                <li>Hashtag research and strategy</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Canva, Adobe Color, Instagram Business Suite</p>
            
            <h3>Results</h3>
            <p>The campaign achieved 45% higher engagement rates compared to previous posts and helped increase product awareness by 60%.</p>
        `
    },
    'excel-dashboard': {
        title: 'Excel Dashboard',
        description: 'Sales tracking and reporting system for small business.',
        details: `
            <h3>Project Overview</h3>
            <p>Developed a comprehensive Excel dashboard for tracking sales, inventory, and customer data with automated reporting features.</p>
            
            <h3>Features Implemented</h3>
            <ul>
                <li>Automated data import from CSV files</li>
                <li>Interactive charts and graphs</li>
                <li>Monthly and yearly sales reports</li>
                <li>Inventory tracking system</li>
                <li>Customer data management</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Microsoft Excel, Advanced Formulas, Pivot Tables, Conditional Formatting</p>
            
            <h3>Impact</h3>
            <p>Reduced manual data entry time by 70% and provided real-time insights for business decisions.</p>
        `
    },
    'admin-workflow': {
        title: 'Admin Workflow',
        description: 'Streamlined client onboarding process.',
        details: `
            <h3>Project Overview</h3>
            <p>Designed and implemented a streamlined client onboarding workflow that reduced processing time by 50%.</p>
            
            <h3>Process Improvements</h3>
            <ul>
                <li>Automated email templates</li>
                <li>Digital document management system</li>
                <li>Client tracking spreadsheet</li>
                <li>Automated follow-up reminders</li>
                <li>Quality control checklist</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Google Workspace, Trello, Zapier, Google Forms</p>
            
            <h3>Results</h3>
            <p>Client satisfaction increased by 35% and administrative overhead reduced significantly.</p>
        `
    },
    'youtube-thumbnails': {
        title: 'YouTube Thumbnails',
        description: 'Custom thumbnails for video series.',
        details: `
            <h3>Project Overview</h3>
            <p>Created custom YouTube thumbnails for a 20-episode educational video series with consistent branding.</p>
            
            <h3>Design Elements</h3>
            <ul>
                <li>Consistent color scheme and branding</li>
                <li>Engaging visual elements</li>
                <li>Clear typography for readability</li>
                <li>Optimized for different devices</li>
                <li>A/B testing on design variations</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Canva, Adobe Photoshop, YouTube Analytics</p>
            
            <h3>Performance</h3>
            <p>Average click-through rate increased by 28% compared to previous thumbnails.</p>
        `
    },
    'data-system': {
        title: 'Data Management System',
        description: 'Customer database and tracking.',
        details: `
            <h3>Project Overview</h3>
            <p>Built a comprehensive customer database and tracking system for a growing e-commerce business.</p>
            
            <h3>System Features</h3>
            <ul>
                <li>Customer information database</li>
                <li>Purchase history tracking</li>
                <li>Communication log</li>
                <li>Automated follow-up system</li>
                <li>Reporting and analytics dashboard</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Google Sheets, Google Forms, Mailchimp, Zapier</p>
            
            <h3>Benefits</h3>
            <p>Improved customer retention by 25% and enabled targeted marketing campaigns.</p>
        `
    },
    'presentation': {
        title: 'Business Presentation',
        description: 'Professional pitch deck design.',
        details: `
            <h3>Project Overview</h3>
            <p>Designed a professional pitch deck for a startup seeking Series A funding.</p>
            
            <h3>Design Elements</h3>
            <ul>
                <li>20-slide professional presentation</li>
                <li>Custom infographics and charts</li>
                <li>Consistent branding throughout</li>
                <li>Speaker notes preparation</li>
                <li>Print-ready handouts</li>
            </ul>
            
            <h3>Tools Used</h3>
            <p>Canva, PowerPoint, Adobe Illustrator</p>
            
            <h3>Outcome</h3>
            <p>Presentation helped secure $500K in funding and was praised by investors for clarity and professionalism.</p>
        `
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init({
        publicKey: 'PkV8LJvLXD2SuFz12'
    });
    
    // Initialize animations
    initAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize navbar
    initNavbar();
    
    // Initialize floating contact
    initFloatingContact();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize portfolio modal
    initPortfolioModal();
    
    // Initialize skill progress bars
    initSkillBars();
});

// Navbar functionality
function initNavbar() {
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle CTA buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Floating contact button
function initFloatingContact() {
    floatingBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        floatingOptions.classList.toggle('active');
    });

    // Close floating options when clicking outside
    document.addEventListener('click', function(e) {
        if (!floatingBtn.contains(e.target) && !floatingOptions.contains(e.target)) {
            floatingOptions.classList.remove('active');
        }
    });
}

// Contact form
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual implementation)
        simulateFormSubmission(name, email, subject, message);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function simulateFormSubmission(name, email, subject, message) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Prepare email parameters
    const templateParams = {
        to_email: 'lawrenzjoshmamparo@gmail.com',
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };
    
    // Send email using EmailJS
    emailjs.send('service_7wxnmtm', 'template_contact_form', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        })
        .catch(function(error) {
            console.error('Email delivery failed:', error);
            showFormMessage('Failed to send message. Please try again or contact directly.', 'error');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

// Portfolio modal
function initPortfolioModal() {
    // Add click events to portfolio buttons
    document.querySelectorAll('.btn-view-project').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.getAttribute('data-project');
            openPortfolioModal(projectId);
        });
    });

    // Close modal
    closeModal.addEventListener('click', closePortfolioModal);
    
    // Close modal when clicking outside
    portfolioModal.addEventListener('click', function(e) {
        if (e.target === portfolioModal) {
            closePortfolioModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && portfolioModal.style.display === 'block') {
            closePortfolioModal();
        }
    });
}

function openPortfolioModal(projectId) {
    const project = portfolioData[projectId];
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        ${project.details}
    `;
    
    portfolioModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Skill progress bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            const rect = bar.getBoundingClientRect();
            
            // Check if element is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.width = progress + '%';
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
}

// Fade-in animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe service cards, portfolio items
    document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid #667eea';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }, 50);
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-item h3');
    
    const animateValue = (element, start, end, duration) => {
        const startTimestamp = Date.now();
        const step = () => {
            const timestamp = Date.now();
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start) + (element.textContent.includes('+') ? '+' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const value = parseInt(text.replace(/\D/g, ''));
                animateValue(entry.target, 0, value, 2000);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Initialize stats animation
animateStats();

// Add smooth hover effect for social links
document.querySelectorAll('.social-link, .contact-method').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add smooth scroll indicator animation
function animateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    setInterval(() => {
        scrollIndicator.style.opacity = '0.5';
        setTimeout(() => {
            scrollIndicator.style.opacity = '1';
        }, 500);
    }, 2000);
}

animateScrollIndicator();

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
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations here
}, 10));

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press '/' to focus search or contact form
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        document.getElementById('name')?.focus();
    }
    
    // Press 'Escape' to close any open modals or menus
    if (e.key === 'Escape') {
        closePortfolioModal();
        floatingOptions.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add print styles support
window.addEventListener('beforeprint', () => {
    // Hide elements that shouldn't be printed
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.floating-contact').style.display = 'none';
    document.querySelector('.scroll-indicator').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    // Restore elements
    document.querySelector('.navbar').style.display = '';
    document.querySelector('.floating-contact').style.display = '';
    document.querySelector('.scroll-indicator').style.display = '';
});

// Console log for debugging
console.log('Portfolio website loaded successfully! 🚀');
