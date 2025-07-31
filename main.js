/**
 * Little Wonders Photography Studio - Main JavaScript
 * This file initializes all JavaScript functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize sticky navigation
    initStickyNav();
    
    // Initialize AOS animations if the library is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
});

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    mobileMenuButton.addEventListener('click', function() {
        // Toggle mobile menu visibility
        mobileMenu.classList.toggle('hidden');
        
        // Toggle menu button icon (optional)
        const menuIcon = mobileMenuButton.querySelector('svg');
        if (menuIcon) {
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.classList.contains('hidden') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            
            // Reset menu button icon
            const menuIcon = mobileMenuButton.querySelector('svg');
            if (menuIcon) {
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    });
}

/**
 * Initialize sticky navigation functionality
 */
function initStickyNav() {
    const nav = document.querySelector('nav');
    
    if (!nav) return;
    
    const navHeight = nav.offsetHeight;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            nav.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
        }
    });
}