document.addEventListener('DOMContentLoaded', () => {

    // ========================================================
    // FEATURE 1: CLEAN SINGLE-PAGE ROUTING ENGINE
    // ========================================================
    const navLinks = document.querySelectorAll('.nav-link');
    const pageViews = document.querySelectorAll('.page-view');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Toggle highlight state visibility arrays
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            // Hide old page layers entirely (prevents home bleed-through)
            pageViews.forEach(view => view.classList.remove('active-view'));

            // Render current selected content node context
            const targetView = document.getElementById(targetId);
            if (targetView) {
                targetView.classList.add('active-view');
            }
            
            // Instantly viewport scroll home on view transitions
            window.scrollTo({ top: 0 });
        });
    });

    // ========================================================
    // FEATURE 2: ASYNCHRONOUS HERO TYPING PROCESSOR
    // ========================================================
    const textPool = ["Telecommunication & Network Technician.", "Software Developer.",];
    let poolIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const targetOutputNode = document.getElementById('typing-text');

    function executeTypingLoop() {
        const fullString = textPool[poolIdx];
        
        if (isDeleting) {
            targetOutputNode.textContent = fullString.substring(0, charIdx - 1);
            charIdx--;
        } else {
            targetOutputNode.textContent = fullString.substring(0, charIdx + 1);
            charIdx++;
        }

        let paceDuration = isDeleting ? 45 : 100;

        if (!isDeleting && charIdx === fullString.length) {
            paceDuration = 2200; // Pause showing complete text
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            poolIdx = (poolIdx + 1) % textPool.length; // Rotate target phrase index securely
            paceDuration = 400; // Delay before initiating next string segment
        }

        setTimeout(executeTypingLoop, paceDuration);
    }
    
    // Safety check execution check
    if (targetOutputNode) executeTypingLoop();

    // ========================================================
    // FEATURE 3: EXPERIENCES CATEGORY DATA-FILTER ENGINE
    // ========================================================
    const filterControls = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.experience-card');

    filterControls.forEach(button => {
        button.addEventListener('click', () => {
            filterControls.forEach(ctrl => ctrl.classList.remove('active'));
            button.classList.add('active');

            const parameterRule = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const designator = card.getAttribute('data-category');
                
                if (parameterRule === 'all' || designator === parameterRule) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // ========================================================
    // FEATURE 4: FLOATING BACK TO TOP INTERACTION OBSERVER
    // ========================================================
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Toggle view states dynamically based on standard scroll benchmarks
        if (window.scrollY > 350) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});