document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours in ms
    const VALID_USERNAME = "venezia";
    const VALID_PASSWORD = "guide";

    // --- State ---
    let currentLang = localStorage.getItem('venice_lang') || 'en';
    let favorites = JSON.parse(localStorage.getItem('venice_favorites') || '[]');
    // visited state removed
    let searchTerm = "";
    let showFavoritesOnly = false;
    let currentAudio = null; // Track currently playing audio
    let map = null;
    let markers = [];
    let isMapView = false;
    let stickyPlayerInterval = null;

    // --- DOM Elements ---
    const preloader = document.getElementById('preloader');
    const loginSection = document.getElementById('login-section');
    const appSection = document.getElementById('app-section');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const customLangSelector = document.getElementById('custom-lang-selector');
    const currentLangText = document.getElementById('current-lang-text');

    // Views
    const dashboardView = document.getElementById('dashboard-view');
    const mapView = document.getElementById('map-view');
    const mapToggleBtn = document.getElementById('map-toggle');
    const mapBackBtn = document.getElementById('map-back-btn');
    const detailView = document.getElementById('detail-view');
    const attractionsGrid = document.getElementById('attractions-grid');
    const backBtn = document.getElementById('back-btn');
    const searchInput = document.getElementById('search-input');
    const favoritesToggle = document.getElementById('favorites-toggle');
    const loginCard = document.querySelector('.login-card');

    // Detail Elements
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    // const detailAudio = document.getElementById('detail-audio'); // Removed
    const detailPdf = document.getElementById('detail-pdf'); // Use the anchor tag instead

    // Static Text Elements
    const loginTitle = document.getElementById('login-title');
    const loginBtn = document.getElementById('login-btn');
    const dashboardTitle = document.getElementById('dashboard-title');
    const logoutText = document.getElementById('logout-text');

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    // --- Initialization ---
    init();

    function init() {
        // Init Theme
        const currentTheme = localStorage.getItem('venice_theme') || 'light';
        if (currentTheme === 'light') {
            document.body.classList.add('light-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');

            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('venice_theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('venice_theme', 'dark');
            }
        });

        // Set initial language in selector
        updateLanguageUI();
        updateStaticTexts();

        // Check Session
        if (isSessionValid()) {
            showApp();
        } else {
            showLogin();
        }

        // Event Listeners
        loginForm.addEventListener('submit', handleLogin);
        logoutBtn.addEventListener('click', handleLogout);

        // Custom Language Selector Toggle
        customLangSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            customLangSelector.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            customLangSelector.classList.remove('open');
        });

        // Language Option Click
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.value;
                handleLanguageChange(lang);
            });
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.glass-header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Deep Linking & Navigation
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check on init

        // Sticky Player Controls
        const stickyPlayBtn = document.getElementById('sticky-play-btn');
        const stickyCloseBtn = document.getElementById('sticky-close-btn');

        stickyPlayBtn.addEventListener('click', () => {
            if (currentAudio) {
                if (currentAudio.paused) currentAudio.play();
                else currentAudio.pause();
                updateStickyIcon();
            }
        });

        stickyCloseBtn.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            document.getElementById('sticky-audio-player').classList.add('hidden');
            currentAudio = null;
        });

        mapToggleBtn.addEventListener('click', () => {
            isMapView = !isMapView;
            if (isMapView) {
                mapToggleBtn.classList.add('active');
                mapToggleBtn.innerHTML = '<i class="fas fa-th-large"></i>'; // Grid icon
                switchView(mapView);
                setTimeout(() => {
                    if (!map) initMap();
                    else map.invalidateSize();
                }, 450); // Fix map render issue when unhidden
            } else {
                mapToggleBtn.classList.remove('active');
                mapToggleBtn.innerHTML = '<i class="fas fa-map-marked-alt"></i>'; // Map icon
                switchView(dashboardView);
            }
        });

        mapBackBtn.addEventListener('click', () => {
            isMapView = false;
            mapToggleBtn.classList.remove('active');
            mapToggleBtn.innerHTML = '<i class="fas fa-map-marked-alt"></i>'; // Map icon
            switchView(dashboardView);
        });

        favoritesToggle.addEventListener('click', () => {
            showFavoritesOnly = !showFavoritesOnly;
            favoritesToggle.classList.toggle('active', showFavoritesOnly);
            renderDashboard();
        });

        // Search Input Listener
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase().trim();
            renderDashboard();
        });

        searchInput.addEventListener('focus', () => {
            const filterControls = document.querySelector('.filter-controls');
            if (filterControls) filterControls.classList.add('search-focused');
        });

        searchInput.addEventListener('blur', () => {
            const filterControls = document.querySelector('.filter-controls');
            if (filterControls) filterControls.classList.remove('search-focused');
        });

        backBtn.addEventListener('click', () => {
            window.location.hash = ''; // Clear hash, let handleHashChange handle UI
        });

        // 3D Tilt Effect
        loginSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            loginCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        loginSection.addEventListener('mouseenter', () => {
            loginCard.style.transition = 'none';
        });

        loginSection.addEventListener('mouseleave', () => {
            loginCard.style.transition = 'all 0.5s ease';
            loginCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });

        // Global Spotlight Effect
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight';
        document.body.prepend(spotlight);

        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });

        // Initialize Intersection Observer for scroll-reveal
        window.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        // Hide Preloader robustly
        const hidePreloader = () => {
            if (preloader && !preloader.classList.contains('fade-out')) {
                preloader.classList.add('fade-out');
            }
        };

        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 1000);
        });

        // Fallback: ensure preloader hides after 2.5 seconds maximum
        setTimeout(hidePreloader, 2500);

        // Initialize Magnetic Buttons
        initMagneticButtons();
    }

    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.glass-btn, .download-btn, #login-btn, #back-btn, #map-toggle, #map-back-btn');

        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // --- Navigation System ---
    function switchView(viewToShow) {
        if (viewToShow === detailView && window.innerWidth > 900) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const views = document.querySelectorAll('.view');

        // Find current active view
        const currentActive = Array.from(views).find(v => v.classList.contains('active-view'));

        if (currentActive === viewToShow) return;

        // Fade out current
        if (currentActive) {
            currentActive.classList.remove('active-view');
            setTimeout(() => {
                currentActive.classList.add('hidden');

                // Show new view
                viewToShow.classList.remove('hidden');
                // Force referee
                viewToShow.offsetHeight;
                viewToShow.classList.add('active-view');
            }, 400); // Wait for fade out
        } else {
            viewToShow.classList.remove('hidden');
            viewToShow.classList.add('active-view');
        }
    }

    // --- Authentication ---
    function handleLogin(e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username.toLowerCase() === VALID_USERNAME && password === VALID_PASSWORD) {
            const now = new Date().getTime();
            localStorage.setItem('venice_login_time', now);
            loginError.textContent = "";
            showApp();
        } else {
            loginError.textContent = translations[currentLang].error_login;
        }
    }

    function handleLogout() {
        localStorage.removeItem('venice_login_time');
        // visited logic removed
        showLogin();
    }

    function isSessionValid() {
        const loginTime = localStorage.getItem('venice_login_time');
        if (!loginTime) return false;

        const now = new Date().getTime();
        if (now - parseInt(loginTime) > SESSION_DURATION) {
            localStorage.removeItem('venice_login_time'); // Expired
            // visited logic removed
            return false;
        }
        return true;
    }

    function showApp() {
        loginSection.classList.add('hidden');
        loginSection.classList.remove('active-section');
        appSection.classList.remove('hidden');
        // Progress container removed
        renderDashboard();
    }

    function showLogin() {
        appSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        loginSection.classList.add('active-section');
        loginForm.reset();
    }

    function handleLanguageChange(lang) {
        currentLang = lang;
        localStorage.setItem('venice_lang', lang);
        updateLanguageUI();
        updateStaticTexts();

        // Always re-render both so the DOM is fully translated
        renderDashboard();
        if (window.currentAttractionId) {
            renderDetail(window.currentAttractionId);
        }
    }

    function updateLanguageUI() {
        const langMap = {
            'en': 'English',
            'it': 'Italiano',
            'de': 'Deutsch',
            'fr': 'Français',
            'es': 'Español',
            'pt': 'Português'
        };
        currentLangText.textContent = langMap[currentLang] || 'English';
    }

    // --- Content Rendering ---
    function updateStaticTexts() {
        const t = translations[currentLang];
        loginTitle.textContent = t.login_title;
        loginBtn.textContent = t.login_btn;
        usernameInput.placeholder = t.username_ph;
        passwordInput.placeholder = t.password_ph;
        logoutText.textContent = t.logout;
        document.title = t.title;
        // Dashboard title is slightly dynamic "Select an Attraction" -> could be translated if added to data.
        // For now let's Hardcode "Select Attraction" in data or just keep English/Simple. 
        // Adding it to data.js would be better but I can't edit it now easily without re-writing.
        // Let's assume the user accepted the data.js structure, I will maintain English for untranslated parts or infer.
        // Actually, let's keep it simple.
    }

    function renderDashboard() {
        attractionsGrid.innerHTML = '';
        const t = translations[currentLang];

        let keys = Object.keys(t.attractions);

        // Filter by Search
        if (searchTerm) {
            keys = keys.filter(key => {
                const item = t.attractions[key];
                const titleMatch = item.title.toLowerCase().includes(searchTerm);
                const descMatch = item.desc.toLowerCase().includes(searchTerm);
                return titleMatch || descMatch;
            });
        }

        // Filter by Favorites
        if (showFavoritesOnly) {
            keys = keys.filter(key => favorites.includes(key));
        }

        // Staggered Animation Delay
        let delay = 0;

        keys.forEach(key => {
            const item = t.attractions[key];
            const isFav = favorites.includes(key);
            const card = document.createElement('div');
            card.className = 'attraction-card';
            card.style.animation = `fadeInUp 0.5s ease forwards ${delay}s`;
            card.style.opacity = '0'; // Start hidden for animation

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${item.image_dark}" alt="${item.title}" class="card-image-dark">
                    <img src="${item.image_light}" alt="${item.title}" class="card-image-light">
                </div>
                <span class="read-time-badge"><i class="far fa-clock"></i> ${calculateReadingTime(item)} min</span>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${key}">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <div class="card-title">${item.title}</div>
            `;

            // visited check logic removed

            // Handle Card Click (excluding fav button)
            card.addEventListener('click', (e) => {
                if (e.target.closest('.fav-btn')) return;
                window.location.hash = key; // Deep Linking
            });

            // 3D Tilt and Parallax Effect for Cards
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                const imgDark = card.querySelector('.card-image-dark');
                const imgLight = card.querySelector('.card-image-light');
                if (imgDark) imgDark.style.transform = `scale(1.1) translate(${(x - centerX) / 20}px, ${(y - centerY) / 20}px)`;
                if (imgLight) imgLight.style.transform = `scale(1.1) translate(${(x - centerX) / 20}px, ${(y - centerY) / 20}px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                const imgDark = card.querySelector('.card-image-dark');
                const imgLight = card.querySelector('.card-image-light');
                if (imgDark) imgDark.style.transform = '';
                if (imgLight) imgLight.style.transform = '';
            });

            // Handle Fav Click
            const favBtn = card.querySelector('.fav-btn');
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(key);
            });

            attractionsGrid.appendChild(card);
            delay += 0.1;
        });

        if (keys.length === 0) {
            attractionsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ccc;">No attractions found.</div>';
        }
    }

    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            favorites = favorites.filter(fav => fav !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('venice_favorites', JSON.stringify(favorites));
        renderDashboard(); // Re-render to update UI
    }




    function handleHashChange() {
        if (!isSessionValid()) return;
        const hash = window.location.hash.substring(1);

        // Stop any playing audio when hash changes
        const audios = detailView.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        if (hash && translations[currentLang].attractions[hash]) {
            window.currentAttractionId = hash;
            
            // Immediately scroll window to top before starting animations to avoid glitch
            window.scrollTo(0, 0); 
            
            renderDetail(hash);
            switchView(detailView);

            // Scroll right side container to top for mobile and desktop
            // Needs a timeout because display:none elements cannot be scrolled
            setTimeout(() => {
                const detailInfo = document.querySelector('.detail-info');
                if (detailInfo) detailInfo.scrollTop = 0;
            }, 450);
        } else {
            // Show dashboard and reset state
            window.currentAttractionId = null;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderDashboard();
            const activeMainView = isMapView ? mapView : dashboardView;
            switchView(activeMainView);
            if (isMapView) {
                setTimeout(() => {
                    if (!map) initMap();
                    else map.invalidateSize();
                }, 450);
            }
        }
    }

    function calculateReadingTime(item) {
        let text = item.desc;
        if (item.chapters) {
            item.chapters.forEach(c => text += " " + c.text);
        }
        const words = text.split(' ').length;
        return Math.ceil(words / 200); // 200 wpm
    }

    // updateProgress removed

    window.playAudio = function (audioElement, title) {
        // Stop others
        document.querySelectorAll('audio').forEach(a => {
            if (a !== audioElement) a.pause();
        });

        currentAudio = audioElement;

        // Sticky player removed as per user request
    }

    window.updateStickyIcon = function () {
        // Sticky player removed
    }
    // --- Utils ---
    window.downloadAudio = async (url, filename) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = downloadUrl;
            a.download = filename || url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(a);
        } catch (error) {
            console.warn('Fetch download failed:', error);
            // Fallback: Notify user to use manual save
            // Detect if Italian (simple check based on currentLang) to give translated message
            const isItalian = localStorage.getItem('venice_lang') === 'it';
            const msg = isItalian
                ? "Il download automatico non è disponibile per i file locali. Per favore, clicca con il tasto destro sull'icona di download e seleziona 'Salva link con nome' (o 'Scarica file collegato')."
                : "Automatic download is not available for local files. Please right-click the download icon and select 'Save Link As' (or 'Download Linked File').";

            alert(msg);
        }
    };

    function renderDetail(key) {
        const t = translations[currentLang];
        const item = t.attractions[key];

        detailTitle.textContent = item.title;
        detailDesc.textContent = item.desc;

        const detailImgDark = document.getElementById('detail-image-dark');
        const detailImgLight = document.getElementById('detail-image-light');
        if (detailImgDark) detailImgDark.src = item.image_dark;
        if (detailImgLight) detailImgLight.src = item.image_light;

        // Mark as Visited logic removed


        // --- Audio Rendering Logic ---
        const audioContainer = document.getElementById('audio-container');
        audioContainer.innerHTML = ''; // Clear previous players

        let audioList = [];
        if (Array.isArray(item.audio)) {
            // It's already a list of objects {title, src} or strings
            audioList = item.audio.map(a => typeof a === 'string' ? { title: 'Audio Guide', src: a } : a);
        } else if (item.audio) {
            // Single string
            audioList = [{ title: 'Audio Guide', src: item.audio }];
        }

        audioList.forEach(audioItem => {
            const playerWrapper = document.createElement('div');
            playerWrapper.className = 'audio-player';
            const filename = audioItem.src.split('/').pop();

            playerWrapper.innerHTML = `
                <div class="audio-header">
                    <label><i class="fas fa-headphones"></i> ${audioItem.title || 'Audio Guide'}</label>
                    <a href="javascript:void(0)" onclick="downloadAudio('${audioItem.src}', '${filename}')" class="audio-download-btn" title="Download Audio">
                        <i class="fas fa-download"></i>
                    </a>
                </div>
                <audio controls onplay="playAudio(this, '${(audioItem.title || 'Audio Guide').replace(/'/g, "\\'")}')" onpause="updateStickyIcon()">
                    <source src="${audioItem.src}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            audioContainer.appendChild(playerWrapper);
        });

        // Update PDF Link
        detailPdf.href = item.pdf;

        // Clean up old chapters
        const existingChapters = document.getElementById('chapters-container');
        if (existingChapters) existingChapters.remove();

        // Render Chapters if they exist
        if (item.chapters && item.chapters.length > 0) {
            const chapContainer = document.createElement('div');
            chapContainer.id = 'chapters-container';

            item.chapters.forEach((chap, idx) => {
                const chapEl = document.createElement('div');
                chapEl.className = 'chapter-item';
                // Remove initial inline stagger for observer-based reveal, 
                // but we can keep a slight delay if they appear simultaneously
                chapEl.style.transitionDelay = `${idx * 0.05}s`;

                let audioHtml = '';
                if (chap.audio) {
                    let chapAudioList = [];
                    if (Array.isArray(chap.audio)) {
                        chapAudioList = chap.audio.map(a => typeof a === 'string' ? { title: 'Audio', src: a } : a);
                    } else {
                        chapAudioList = [{ title: 'Audio', src: chap.audio }];
                    }

                    chapAudioList.forEach(cAudio => {
                        const cFilename = cAudio.src.split('/').pop();
                        audioHtml += `
                            <div class="audio-player">
                            <div class="audio-header">
                                <label><i class="fas fa-headphones"></i> ${cAudio.title || 'Audio'}</label>
                                <a href="javascript:void(0)" onclick="downloadAudio('${cAudio.src}', '${cFilename}')" class="audio-download-btn" title="Download Audio">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                             <audio controls onplay="playAudio(this, '${(cAudio.title || 'Audio').replace(/'/g, "\\'")}')" onpause="updateStickyIcon()">
                                <source src="${cAudio.src}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>`;
                    });
                }

                chapEl.innerHTML = `
                    <h3 class="chapter-title">${chap.title}</h3>
                    <p class="chapter-text">${chap.text}</p>
                    ${audioHtml}
                `;
                chapContainer.appendChild(chapEl);
                window.revealObserver.observe(chapEl);
            });

            // Insert before download section
            const downloadSection = document.querySelector('.download-section');
            if (downloadSection) {
                downloadSection.parentNode.insertBefore(chapContainer, downloadSection);
            } else {
                detailDesc.parentNode.appendChild(chapContainer);
            }
        }
    }

    // --- Map Implementation ---
    function initMap() {
        if (typeof L === 'undefined') return;

        // Initialize map centered on Venice
        map = L.map('venice-map', {
            zoomControl: false // Custom position later if needed
        }).setView([45.4340, 12.3380], 14);

        L.control.zoom({
            position: 'bottomright'
        }).addTo(map);

        // Add a premium dark/light styled tileset
        const isLight = document.body.classList.contains('light-theme');
        setMapTiles(isLight);

        // Listen for theme changes to update map
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isLightNow = document.body.classList.contains('light-theme');
                    setMapTiles(isLightNow);
                }
            });
        });
        observer.observe(document.body, { attributes: true });

        renderMapMarkers();
    }

    function setMapTiles(isLight) {
        if (!map) return;
        
        // Remove existing layers
        map.eachLayer((layer) => {
            if (layer instanceof L.TileLayer) {
                map.removeLayer(layer);
            }
        });

        // Add new layer based on theme. Using CartoDB for clean, modern look without API keys
        const tileUrl = isLight 
            ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
            
        L.tileLayer(tileUrl, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);
    }

    function renderMapMarkers() {
        if (!map) return;

        // Clear existing markers
        markers.forEach(m => map.removeLayer(m));
        markers = [];

        const t = translations[currentLang];
        let keys = Object.keys(t.attractions);

        // Apply filters
        if (searchTerm) {
            keys = keys.filter(key => {
                const item = t.attractions[key];
                return item.title.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm);
            });
        }
        if (showFavoritesOnly) {
            keys = keys.filter(key => favorites.includes(key));
        }

        const isLight = document.body.classList.contains('light-theme');
        const imgKey = isLight ? 'image_light' : 'image_dark';

        keys.forEach(key => {
            const item = t.attractions[key];
            const fallbackItem = translations['en'].attractions[key]; // Ensure image exists even if translation is missing it
            
            // Centralized coordinates to avoid duplication across all 6 languages
            const PARSED_COORDS = {
                'gondola': { lat: 45.4336, lng: 12.3395 },
                'palazzo_ducale': { lat: 45.4337, lng: 12.3404 },
                'basilica': { lat: 45.4345, lng: 12.3397 },
                'rialto': { lat: 45.4337, lng: 12.3373 }, // Museo Correr
                'campanile': { lat: 45.4340, lng: 12.3386 },
                'Murano': { lat: 45.4578, lng: 12.3551 },
                'Burano': { lat: 45.4854, lng: 12.4167 }
            };

            const coords = item.coords || PARSED_COORDS[key];
            if (!coords) return; // Skip if no coordinates

            // Custom modern marker icon
            const customIcon = L.divIcon({
                className: 'custom-map-marker',
                html: `<div class="marker-pin"><i class="fas ${favorites.includes(key) ? 'fa-heart' : 'fa-gem'}"></i></div>`,
                iconSize: [30, 42],
                iconAnchor: [15, 42],
                popupAnchor: [0, -35]
            });

            const marker = L.marker([coords.lat, coords.lng], { icon: customIcon }).addTo(map);

            const imgSrc = item[imgKey] || item.image_dark || fallbackItem[imgKey] || fallbackItem.image_dark || '';

            // Custom Popup content
            const popupContent = `
                <div class="map-popup-content">
                    <img src="${imgSrc}" class="map-popup-img" alt="${item.title}">
                    <div class="map-popup-info">
                        <h4 class="map-popup-title">${item.title}</h4>
                        <a href="javascript:void(0)" onclick="window.location.hash = '${key}'" class="map-popup-btn">
                            ${currentLang === 'it' ? 'Esplora' : 'Explore'}
                        </a>
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent, {
                closeButton: true,
                minWidth: 220,
                maxWidth: 220
            });

            markers.push(marker);
        });

        // Fit map bounds to show all markers if any exist
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    }

    // Wrap renderDashboard to also update map markers
    const originalRenderDashboard = renderDashboard;
    renderDashboard = function() {
        originalRenderDashboard();
        if (isMapView && map) {
            renderMapMarkers();
        }
    };

});
