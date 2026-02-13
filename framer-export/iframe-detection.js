// Iframe Responsive Detection for Framer
(function() {
    'use strict';
    
    // Check if we're in an iframe
    const isInIframe = window.self !== window.top;
    
    if (isInIframe) {
        console.log('🔍 Detected iframe environment - applying responsive fixes');
        
        // Add iframe class to body
        document.body.classList.add('iframe-mode');
        
        // Function to check iframe size and apply appropriate styles
        function checkIframeSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isMobile = width <= 768 || height <= 1024;
            const isSmall = width <= 480;
            const isLandscape = height <= 600 && width > height;
            
            // Remove existing size classes
            document.body.classList.remove('iframe-mobile', 'iframe-small', 'iframe-landscape');
            
            // Add appropriate size classes
            if (isLandscape) {
                document.body.classList.add('iframe-landscape');
            }
            if (isSmall) {
                document.body.classList.add('iframe-small');
            }
            if (isMobile) {
                document.body.classList.add('iframe-mobile');
            }
            
            console.log(`📱 Iframe size: ${width}x${height} - Mobile: ${isMobile}, Small: ${isSmall}, Landscape: ${isLandscape}`);
        }
        
        // Initial check
        checkIframeSize();
        
        // Check on resize (with debouncing)
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkIframeSize, 250);
        });
        
        // Check on orientation change
        window.addEventListener('orientationchange', function() {
            setTimeout(checkIframeSize, 100);
        });
        
        // Force mobile styles for small iframes
        function forceMobileStyles() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            if (width <= 768 || height <= 1024) {
                // Add mobile-specific meta tag if not present
                let viewport = document.querySelector('meta[name="viewport"]');
                if (!viewport) {
                    viewport = document.createElement('meta');
                    viewport.name = 'viewport';
                    viewport.content = 'width=device-width, initial-scale=1.0';
                    document.head.appendChild(viewport);
                }
                
                // Force mobile font sizes
                document.documentElement.style.fontSize = '16px';
                
                // Add mobile-specific CSS
                const mobileCSS = `
                    .iframe-mode .hero-title { font-size: ${width <= 480 ? '1.5rem' : '1.75rem'} !important; }
                    .iframe-mode .hero-description { font-size: 0.9375rem !important; }
                    .iframe-mode .section-title { font-size: ${width <= 480 ? '1.75rem' : '2rem'} !important; }
                    .iframe-mode .btn-primary, .iframe-mode .btn-secondary { 
                        font-size: 0.875rem !important; 
                        padding: 0.75rem 1.25rem !important;
                        width: 100% !important;
                    }
                    .iframe-mode .hero-buttons { flex-direction: column !important; }
                    .iframe-mode .benefits-grid, .iframe-mode .packages-grid { 
                        grid-template-columns: 1fr !important; 
                    }
                `;
                
                // Add or update mobile styles
                let mobileStyle = document.getElementById('iframe-mobile-styles');
                if (!mobileStyle) {
                    mobileStyle = document.createElement('style');
                    mobileStyle.id = 'iframe-mobile-styles';
                    mobileStyle.textContent = mobileCSS;
                    document.head.appendChild(mobileStyle);
                }
            }
        }
        
        // Apply mobile styles immediately and on resize
        forceMobileStyles();
        window.addEventListener('resize', forceMobileStyles);
        
        // Communicate with parent frame (if available)
        try {
            window.parent.postMessage({
                type: 'iframe-ready',
                width: window.innerWidth,
                height: window.innerHeight
            }, '*');
        } catch (e) {
            console.log('📡 Cannot communicate with parent frame');
        }
        
        // Listen for messages from parent
        window.addEventListener('message', function(event) {
            if (event.data.type === 'resize-iframe') {
                // Handle resize requests from parent
                if (event.data.width && event.data.height) {
                    console.log('📐 Parent requested resize to:', event.data.width, 'x', event.data.height);
                    checkIframeSize();
                    forceMobileStyles();
                }
            }
        });
        
        // Auto-adjust for Framer's preview mode
        function detectFramerPreview() {
            // Check if we're in Framer's preview environment
            const isFramer = window.location.hostname.includes('framer') || 
                           window.location.hostname.includes('framercanvas') ||
                           document.referrer.includes('framer');
            
            if (isFramer) {
                console.log('🎨 Framer preview detected - applying special optimizations');
                document.body.classList.add('framer-preview');
                
                // Framer-specific adjustments
                const framerCSS = `
                    .framer-preview .hero { min-height: 100vh !important; }
                    .framer-preview .container { padding: 0 1rem !important; }
                    .framer-preview .package-card { margin-bottom: 1rem !important; }
                `;
                
                let framerStyle = document.getElementById('framer-styles');
                if (!framerStyle) {
                    framerStyle = document.createElement('style');
                    framerStyle.id = 'framer-styles';
                    framerStyle.textContent = framerCSS;
                    document.head.appendChild(framerStyle);
                }
            }
        }
        
        detectFramerPreview();
        
        // Performance optimization for iframe
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() {
                console.log('⚡ Iframe optimizations applied successfully');
            });
        }
    } else {
        console.log('🌐 Not in iframe - using normal responsive behavior');
    }
})();
