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

    // --- Initialization ---
    init();

    function init() {
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

        // Hide Preloader
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 1000);
        });

        // Initialize Magnetic Buttons
        initMagneticButtons();
    }

    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.glass-btn, .download-btn, #login-btn, #back-btn');

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

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
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

        if (detailView.classList.contains('hidden')) {
            renderDashboard();
        } else {
            if (window.currentAttractionId) {
                renderDetail(window.currentAttractionId);
            }
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
                    <img src="${item.image}" alt="${item.title}" class="card-image">
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

                const img = card.querySelector('.card-image');
                if (img) {
                    img.style.transform = `scale(1.1) translate(${(x - centerX) / 20}px, ${(y - centerY) / 20}px)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                const img = card.querySelector('.card-image');
                if (img) img.style.transform = '';
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
            renderDetail(hash);
            switchView(detailView);
        } else {
            // Show dashboard and reset state
            window.currentAttractionId = null;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderDashboard();
            switchView(dashboardView);
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
        detailImage.src = item.image;

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
});
