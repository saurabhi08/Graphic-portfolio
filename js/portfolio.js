// ========== Sample Project Data ==========
const projects = [
    {
        id: 1,
        title: "Brochure Design",
        category: "graphic",
        description: "Professional brochure designs for school courses and financial sectors.",
        fullDescription: "A collection of professionally designed brochures including school course brochures and financial sector materials. Each brochure showcases attention to detail, brand consistency, and effective communication of key messages through compelling visual layouts.",
        image: "./imgs/brochures/cover.png",
        tech: ["Adobe Illustrator", "Photoshop", "Print Design", "Layout Design"],
        liveLink: "./imgs/brochures/viewer.html",
        codeLink: null
    },
    {
        id: 2,
        title: "Social Media Graphics",
        category: "graphic",
        description: "Series of engaging social media posts for special occasions and campaigns.",
        fullDescription: "A diverse collection of eye-catching social media graphics designed for various occasions including national holidays, awareness campaigns, and special events. Each design features unique visuals and compelling messaging tailored to engage audiences across social media platforms.",
        image: "./imgs/social media/Post-3.jpg",
        gallery: [
            "./imgs/social media/Post-3.jpg",
            "./imgs/social media/post-11.jpg",
            "./imgs/social media/Independance-Day-2021.jpg",
            "./imgs/social media/Republic-Day-2022(ssg).jpg",
            "./imgs/social media/Mahindra-Defence-Women's-Day-2022.jpg",
            "./imgs/social media/Army-day_2021(option-3).jpg",
            "./imgs/social media/Airforce-Day.jpg",
            "./imgs/social media/Covid-creative.jpg",
            "./imgs/social media/Fraud-Awareness.jpg"
        ],
        tech: ["Photoshop", "Illustrator", "Social Media Design"],
        liveLink: null,
        codeLink: null
    },
    {
        id: 3,
        title: "Endless Bubble Wrap Game",
        category: "web",
        description: "Interactive bubble wrap popping game built with HTML, CSS, and JavaScript.",
        fullDescription: "A fun and addictive endless bubble wrap popping game featuring realistic pop sounds and smooth animations. Built entirely with vanilla JavaScript, HTML5, and CSS3, this interactive web game provides a satisfying user experience with responsive design and audio feedback. Perfect for stress relief and entertainment!",
        image: "./EndlessBubbleWrap/mockup.png",
        tech: ["HTML5", "CSS3", "JavaScript", "Interactive Design"],
        liveLink: "./EndlessBubbleWrap/index.html",
        codeLink: null
    },
    {
        id: 4,
        title: "UI Design",
        category: "web",
        description: "Modern UI designs including Home, About Us, and Cyber Security pages.",
        fullDescription: "A comprehensive UI design collection featuring three professionally designed pages: Home Page, About Us, and Cyber Security. Each page showcases modern design principles with clean layouts and engaging visuals. Navigate through all pages using the interactive viewer with next/previous controls.",
        image: "./imgs/website/cover.png",
        tech: ["UI/UX Design", "Visual Design", "Web Design"],
        liveLink: "./imgs/website/viewer.html",
        codeLink: null
    },
    {
        id: 5,
        title: "Calendar Design",
        category: "graphic",
        description: "Professional table calendar design for HDFC with creative layouts and branding.",
        fullDescription: "A comprehensive table calendar design project for HDFC created in 2020. This calendar features carefully crafted monthly layouts with attention to typography, spacing, and brand consistency. Each page is designed to be both functional and visually appealing, incorporating the company's brand elements throughout.",
        image: "./imgs/calender/cover.png",
        pdfFile: "./imgs/calender/HDFC Calendar 2020(new1)_13thdec2019.pdf",
        tech: ["Illustrator", "Photoshop", "Print Design", "Calendar Design"],
        liveLink: "./imgs/calender/HDFC Calendar 2020(new1)_13thdec2019.pdf",
        codeLink: null
    },
    {
        id: 6,
        title: "Digital Art",
        category: "graphic",
        description: "Creative digital illustrations and artwork including sketches, wedding designs, and night scenes.",
        fullDescription: "A diverse collection of digital artwork showcasing various artistic styles and techniques. Includes detailed sketches, wedding illustrations, night scene artwork, and creative invitations. Each piece demonstrates artistic creativity and technical skill in digital media.",
        image: "./imgs/digital art/Wedding-Illustration.jpg",
        gallery: [
            "./imgs/digital art/Wedding-Illustration.jpg",
            "./imgs/digital art/wedding-invite(new).jpg",
            "./imgs/digital art/Night-Scene.jpg",
            "./imgs/digital art/sketch 1.jpg",
            "./imgs/digital art/sketch 2.jpg"
        ],
        tech: ["Digital Art", "Illustration", "Photoshop", "Creative Design"],
        liveLink: null,
        codeLink: null
    },
];

// ========== DOM Elements ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');

// ========== Mobile Navigation Toggle ==========
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== Smooth Scrolling for Navigation Links ==========
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Navbar Background on Scroll ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// ========== Render Projects ==========
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Add animation delay to cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ========== Create Project Card ==========
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    const icon = project.category === 'web' 
        ? '<i class="fas fa-laptop-code"></i>' 
        : '<i class="fas fa-palette"></i>';
    
    const tagText = project.category === 'web' ? 'Web Design' : 'Graphic Design';
    
    card.innerHTML = `
        <div class="project-image">
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : icon}
            <span class="project-tag">${tagText}</span>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(project));
    
    return card;
}

// ========== Filter Projects ==========
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value and render projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ========== Open Modal with Project Details ==========
function openModal(project) {
    console.log('Opening modal for:', project.title); // Debug log
    
    // Clear previous modal content
    modalBody.innerHTML = '';
    
    const icon = project.category === 'web' 
        ? '<i class="fas fa-laptop-code"></i>' 
        : '<i class="fas fa-palette"></i>';
    
    // Check if project has a gallery
    const hasGallery = project.gallery && project.gallery.length > 0;
    const hasPDF = project.pdfFile;
    const hasLiveDemo = project.liveLink && !project.liveLink.endsWith('.pdf');
    
    modalBody.innerHTML = `
        ${hasGallery ? `
            <div class="project-gallery">
                ${project.gallery.map(img => `
                    <div class="gallery-item">
                        <img src="${img}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                    </div>
                `).join('')}
            </div>
        ` : (hasPDF && !hasLiveDemo) ? `
            <div class="pdf-preview" style="width: 100%; height: 500px; border-radius: 10px; overflow: hidden; margin-bottom: 2rem; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; position: relative;">
                <iframe src="${project.pdfFile}" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
        ` : `
            <div class="project-image modal-image" style="height: 400px;">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">` : icon}
            </div>
        `}
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.fullDescription}</p>
        <div class="modal-tech">
            ${project.tech.map(tech => `<span class="tech-tag" style="padding: 0.5rem 1rem; font-size: 0.875rem;">${tech}</span>`).join('')}
        </div>
        ${project.liveLink || project.codeLink || project.pdfFile ? `
            <div class="modal-links">
                ${project.liveLink && !project.liveLink.endsWith('.pdf') ? `<a href="${project.liveLink}" class="btn btn-primary" target="_blank">View Project</a>` : ''}
                ${project.pdfFile && !project.liveLink ? `<a href="${project.pdfFile}" class="btn btn-secondary" target="_blank">View PDF</a>` : ''}
                ${project.liveLink && project.liveLink.endsWith('.pdf') ? `<a href="${project.liveLink}" class="btn btn-primary" target="_blank" download>Download PDF</a>` : ''}
                ${project.codeLink ? `<a href="${project.codeLink}" class="btn btn-secondary" target="_blank">View Code</a>` : ''}
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// ========== Close Modal ==========
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== Contact Form Handling ==========
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll show a beautiful confirmation modal
    showContactModal();
    
    // Reset form
    contactForm.reset();
});

// ========== Contact Modal Functions ==========
function showContactModal() {
    const contactModal = document.getElementById('contactModal');
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const contactModal = document.getElementById('contactModal');
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close contact modal when clicking outside
document.getElementById('contactModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('contactModal')) {
        closeContactModal();
    }
});

// Close contact modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('contactModal').classList.contains('active')) {
        closeContactModal();
    }
});

// ========== Animated Counter for Statistics ==========
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const progressBars = document.querySelectorAll('.progress-bar');
    const aboutSection = document.querySelector('.about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    };

                    updateCounter();
                });

                // Animate progress bars
                progressBars.forEach((bar, index) => {
                    const target = parseInt(counters[index].getAttribute('data-target'));
                    const percentage = Math.min((target / 50) * 100, 100); // Cap at 100%
                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                    }, 500);
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ========== Skill Bar Animation on Scroll ==========
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ========== Scroll Reveal Animation ==========
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .skill-category, .about-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    // Render all projects initially
    renderProjects('all');
    
    // Initialize animations
    animateCounters();
    animateSkillBars();
    revealOnScroll();
});

// ========== Add Parallax Effect to Hero ==========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

