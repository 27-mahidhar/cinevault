/**
 * CineVault - Core Application Interactive Logic
 * Handles Catalog Rendering, Search & Filters, Details Modal,
 * YouTube Trailer Embeds, Watchlist with localStorage, and TMDB v3 Integration.
 */

(function () {
  'use strict';

  // ==========================================
  // APPLICATION STATE
  // ==========================================
  const state = {
    allMovies: window.CURATED_MOVIES || [],
    filteredMovies: [],
    activeIndustry: 'All',
    activeGenre: 'All',
    searchQuery: '',
    sortBy: 'top-rated',
    
    // Featured Hero banner state
    featuredList: [],
    currentHeroIndex: 0,
    heroAutoTimer: null,

    // Currently opened movie in detail modal
    activeModalMovie: null,

    // Personal Watchlist stored in localStorage
    watchlist: new Set(),

    // TMDB v3 Configuration
    tmdb: {
      apiKey: '',
      liveMode: false,
      isConnected: false
    },
    isTmdbSearching: false
  };

  // LocalStorage Keys
  const STORAGE_KEY_WATCHLIST = 'cinevault_watchlist_v1';
  const STORAGE_KEY_TMDB = 'cinevault_tmdb_settings_v1';

  // DOM Elements Cache
  const DOM = {
    // Header & Search
    siteHeader: document.getElementById('siteHeader'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    openWatchlistBtn: document.getElementById('openWatchlistBtn'),
    watchlistBadge: document.getElementById('watchlistBadge'),
    openTmdbModalBtn: document.getElementById('openTmdbModalBtn'),
    tmdbModePill: document.getElementById('tmdbModePill'),
    tmdbModeLabel: document.getElementById('tmdbModeLabel'),

    // Hero Banner
    heroSection: document.getElementById('hero'),
    heroBackdrop: document.getElementById('heroBackdrop'),
    heroContent: document.getElementById('heroContent'),
    heroDots: document.getElementById('heroDots'),
    heroPrevBtn: document.getElementById('heroPrevBtn'),
    heroNextBtn: document.getElementById('heroNextBtn'),

    // Spotlight Strip
    filterRamCharanQuickBtn: document.getElementById('filterRamCharanQuickBtn'),

    // Catalog & Controls
    industryPills: document.getElementById('industryPills'),
    genreSelect: document.getElementById('genreSelect'),
    sortSelect: document.getElementById('sortSelect'),
    resultsCount: document.getElementById('resultsCount'),
    activeFilterTags: document.getElementById('activeFilterTags'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    moviesGrid: document.getElementById('moviesGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyDesc: document.getElementById('emptyDesc'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),

    // Movie Details Modal
    movieDetailsModal: document.getElementById('movieDetailsModal'),
    closeMovieDetailsBtn: document.getElementById('closeMovieDetailsBtn'),
    modalBackdropImg: document.getElementById('modalBackdropImg'),
    modalPoster: document.getElementById('modalPoster'),
    modalQuickWatchlistBtn: document.getElementById('modalQuickWatchlistBtn'),
    modalIndustryBadge: document.getElementById('modalIndustryBadge'),
    modalCertBadge: document.getElementById('modalCertBadge'),
    modalYearBadge: document.getElementById('modalYearBadge'),
    modalRuntimeBadge: document.getElementById('modalRuntimeBadge'),
    modalMovieTitle: document.getElementById('modalMovieTitle'),
    modalOriginalTitle: document.getElementById('modalOriginalTitle'),
    modalTagline: document.getElementById('modalTagline'),
    modalRatingScore: document.getElementById('modalRatingScore'),
    modalGenrePills: document.getElementById('modalGenrePills'),
    modalPlayTrailerBtn: document.getElementById('modalPlayTrailerBtn'),
    modalWatchlistBtn: document.getElementById('modalWatchlistBtn'),
    modalWatchlistBtnText: document.getElementById('modalWatchlistBtnText'),
    modalShareBtn: document.getElementById('modalShareBtn'),
    modalSynopsis: document.getElementById('modalSynopsis'),
    modalDirector: document.getElementById('modalDirector'),
    modalCastChips: document.getElementById('modalCastChips'),
    modalRecommendationsRow: document.getElementById('modalRecommendationsRow'),

    // Trailer Video Modal
    trailerModal: document.getElementById('trailerModal'),
    closeTrailerBtn: document.getElementById('closeTrailerBtn'),
    trailerTitle: document.getElementById('trailerTitle'),
    trailerIframe: document.getElementById('trailerIframe'),
    externalTrailerLink: document.getElementById('externalTrailerLink'),

    // Watchlist Drawer
    watchlistDrawer: document.getElementById('watchlistDrawer'),
    watchlistOverlay: document.getElementById('watchlistOverlay'),
    closeWatchlistBtn: document.getElementById('closeWatchlistBtn'),
    clearWatchlistBtn: document.getElementById('clearWatchlistBtn'),
    drawerCountBadge: document.getElementById('drawerCountBadge'),
    watchlistItemsList: document.getElementById('watchlistItemsList'),
    watchlistEmptyState: document.getElementById('watchlistEmptyState'),
    exploreCatalogFromDrawerBtn: document.getElementById('exploreCatalogFromDrawerBtn'),

    // TMDB Modal
    tmdbModal: document.getElementById('tmdbModal'),
    closeTmdbBtn: document.getElementById('closeTmdbBtn'),
    tmdbKeyForm: document.getElementById('tmdbKeyForm'),
    tmdbApiKeyInput: document.getElementById('tmdbApiKeyInput'),
    toggleApiKeyVisibilityBtn: document.getElementById('toggleApiKeyVisibilityBtn'),
    tmdbModeToggle: document.getElementById('tmdbModeToggle'),
    modeSubText: document.getElementById('modeSubText'),
    tmdbStatusBox: document.getElementById('tmdbStatusBox'),
    tmdbStatusIcon: document.getElementById('tmdbStatusIcon'),
    tmdbStatusMsg: document.getElementById('tmdbStatusMsg'),
    testTmdbConnectionBtn: document.getElementById('testTmdbConnectionBtn'),
    removeTmdbKeyBtn: document.getElementById('removeTmdbKeyBtn'),

    // Toast Notification
    toastNotification: document.getElementById('toastNotification'),
    toastIcon: document.getElementById('toastIcon'),
    toastMessage: document.getElementById('toastMessage')
  };

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    loadWatchlistFromStorage();
    loadTmdbSettingsFromStorage();
    populateGenreDropdown();
    setupFeaturedHeroList();
    renderHeroBanner();
    applyFiltersAndSort();
    bindEventListeners();
    setupKeyboardShortcuts();
    startHeroAutoplay();
  }

  // ==========================================
  // LOCAL STORAGE: WATCHLIST
  // ==========================================
  function loadWatchlistFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WATCHLIST);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          state.watchlist = new Set(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not read watchlist from localStorage:', e);
      state.watchlist = new Set();
    }
    updateWatchlistBadges();
  }

  function saveWatchlistToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_WATCHLIST, JSON.stringify(Array.from(state.watchlist)));
    } catch (e) {
      console.warn('Could not write watchlist to localStorage:', e);
    }
    updateWatchlistBadges();
  }

  function updateWatchlistBadges() {
    const count = state.watchlist.size;
    DOM.watchlistBadge.textContent = count;
    DOM.drawerCountBadge.textContent = count;
  }

  function toggleWatchlistMovie(movie, notify = true) {
    if (!movie || !movie.id) return;
    const isSaved = state.watchlist.has(movie.id);

    if (isSaved) {
      state.watchlist.delete(movie.id);
      if (notify) showToast(`Removed "${movie.title}" from your Watchlist`, 'info');
    } else {
      state.watchlist.add(movie.id);
      if (notify) showToast(`Added "${movie.title}" to your Watchlist`, 'success');
    }

    saveWatchlistToStorage();
    updateCardWatchlistButtons(movie.id, !isSaved);
    updateDetailModalWatchlistButton(movie.id);
    renderWatchlistDrawerItems();
  }

  function updateCardWatchlistButtons(movieId, inWatchlist) {
    const cardBtns = document.querySelectorAll(`.card-watchlist-btn[data-movie-id="${movieId}"]`);
    cardBtns.forEach(btn => {
      if (inWatchlist) {
        btn.classList.add('in-watchlist');
        btn.setAttribute('title', 'Remove from Watchlist');
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      } else {
        btn.classList.remove('in-watchlist');
        btn.setAttribute('title', 'Add to Watchlist');
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      }
    });
  }

  function updateDetailModalWatchlistButton(movieId) {
    const inWatchlist = state.watchlist.has(movieId);
    if (inWatchlist) {
      DOM.modalWatchlistBtn.classList.remove('btn-secondary');
      DOM.modalWatchlistBtn.classList.add('btn-primary');
      DOM.modalWatchlistBtnText.textContent = 'In Watchlist (Remove)';
      DOM.modalQuickWatchlistBtn.classList.add('in-watchlist');
    } else {
      DOM.modalWatchlistBtn.classList.remove('btn-primary');
      DOM.modalWatchlistBtn.classList.add('btn-secondary');
      DOM.modalWatchlistBtnText.textContent = 'Add to Watchlist';
      DOM.modalQuickWatchlistBtn.classList.remove('in-watchlist');
    }
  }

  // ==========================================
  // LOCAL STORAGE: TMDB SETTINGS
  // ==========================================
  function loadTmdbSettingsFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TMDB);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.tmdb.apiKey = parsed.apiKey || '';
        state.tmdb.liveMode = Boolean(parsed.liveMode);
      }
    } catch (e) {
      console.warn('Could not read TMDB settings from localStorage:', e);
    }

    updateTmdbUIStatus();
  }

  function saveTmdbSettingsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_TMDB, JSON.stringify({
        apiKey: state.tmdb.apiKey,
        liveMode: state.tmdb.liveMode
      }));
    } catch (e) {
      console.warn('Could not write TMDB settings to localStorage:', e);
    }

    updateTmdbUIStatus();
  }

  function updateTmdbUIStatus() {
    const hasKey = Boolean(state.tmdb.apiKey && state.tmdb.apiKey.trim().length >= 10);
    const isLive = state.tmdb.liveMode && hasKey;

    if (DOM.tmdbApiKeyInput) {
      DOM.tmdbApiKeyInput.value = state.tmdb.apiKey || '';
    }
    if (DOM.tmdbModeToggle) {
      DOM.tmdbModeToggle.checked = state.tmdb.liveMode;
      DOM.tmdbModeToggle.disabled = !hasKey;
    }
    if (DOM.removeTmdbKeyBtn) {
      DOM.removeTmdbKeyBtn.classList.toggle('hidden', !hasKey);
    }

    const pulseDot = DOM.tmdbModePill.querySelector('.pulse-dot');
    if (isLive) {
      DOM.tmdbModeLabel.textContent = 'TMDB Live Mode';
      if (pulseDot) pulseDot.classList.add('tmdb-active');
      DOM.modeSubText.textContent = 'Connected to TMDB API for live title discovery';
    } else {
      DOM.tmdbModeLabel.textContent = 'Curated Offline';
      if (pulseDot) pulseDot.classList.remove('tmdb-active');
      DOM.modeSubText.textContent = hasKey ? 'Key saved, offline catalog active' : 'Using curated offline catalog';
    }
  }

  // ==========================================
  // FEATURED HERO BANNER
  // Scarface (1983) is the Main Attraction at slot 0!
  // ==========================================
  function setupFeaturedHeroList() {
    // Scarface headlines as the Main Attraction!
    const scarfaceMovie = state.allMovies.find(m => m.title === "Scarface");
    const ogMovie = state.allMovies.find(m => m.title === "They Call Him OG");
    const otherFeatured = state.allMovies.filter(m => m.featured && m.title !== "Scarface" && m.title !== "They Call Him OG");
    
    state.featuredList = [];
    if (scarfaceMovie) state.featuredList.push(scarfaceMovie);
    if (ogMovie) state.featuredList.push(ogMovie);
    state.featuredList = state.featuredList.concat(otherFeatured);

    // If still empty or small, fill with first 6 movies
    if (state.featuredList.length === 0) {
      state.featuredList = state.allMovies.slice(0, 5);
    }

    renderHeroDots();
  }

  function renderHeroDots() {
    DOM.heroDots.innerHTML = '';
    state.featuredList.forEach((movie, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `hero-dot ${index === state.currentHeroIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Show featured movie ${index + 1}: ${movie.title}`);
      dot.addEventListener('click', () => {
        stopHeroAutoplay();
        setFeaturedHeroIndex(index);
        startHeroAutoplay();
      });
      DOM.heroDots.appendChild(dot);
    });
  }

  function setFeaturedHeroIndex(index) {
    if (index < 0) index = state.featuredList.length - 1;
    if (index >= state.featuredList.length) index = 0;
    state.currentHeroIndex = index;
    renderHeroBanner();

    // Update dots active class
    const dots = DOM.heroDots.querySelectorAll('.hero-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === state.currentHeroIndex);
    });
  }

  function renderHeroBanner() {
    const movie = state.featuredList[state.currentHeroIndex];
    if (!movie) return;

    // Set backdrop background image with fallback
    const backdropUrl = movie.backdrop || window.generateFallbackBackdropSVG(movie);
    
    // Pre-test image or load with inline fallback
    DOM.heroBackdrop.style.backgroundImage = `url('${backdropUrl}'), url('${movie.onlinePoster || ''}'), url('${window.generateFallbackBackdropSVG(movie)}')`;

    // Render Hero Content HTML with Split Photo Showcase
    const inWatchlist = state.watchlist.has(movie.id);
    const watchlistBtnText = inWatchlist ? 'Saved in Watchlist' : 'Add to Watchlist';
    const watchlistBtnClass = inWatchlist ? 'btn btn-primary' : 'btn btn-secondary';
    const fallbackSvg = window.generateFallbackPosterSVG(movie);

    DOM.heroContent.innerHTML = `
      <div class="hero-layout-split">
        <div class="hero-info-col">
          <div class="hero-featured-pill ${movie.title === 'Scarface' ? 'main-attraction-pill' : ''}">
            <span>${movie.title === 'Scarface' ? '🔥 MAIN ATTRACTION' : '★ CINEMA SPOTLIGHT'}</span>
            <span>•</span>
            <span>${escapeHTML(movie.industry.toUpperCase())}</span>
          </div>

          <div class="hero-meta-row">
            <span class="badge badge-rating">★ ${movie.rating ? movie.rating.toFixed(1) : '9.0'}</span>
            <span class="badge badge-industry">${escapeHTML(movie.industry)}</span>
            <span class="badge badge-cert">${escapeHTML(movie.certificate || 'UA')}</span>
            <span class="badge">${movie.year}</span>
            <span class="badge">${movie.runtime} min</span>
          </div>

          <h1 class="hero-title">${escapeHTML(movie.title)}</h1>
          
          ${movie.tagline ? `<div class="hero-tagline">"${escapeHTML(movie.tagline)}"</div>` : ''}

          <p class="hero-synopsis">${escapeHTML(movie.synopsis)}</p>

          <div class="hero-credits-row">
            <div class="hero-credit-item">
              <strong>Director</strong>
              <span>${escapeHTML(movie.director)}</span>
            </div>
            <div class="hero-credit-item">
              <strong>Starring</strong>
              <span>${escapeHTML(movie.cast.slice(0, 3).join(', '))}</span>
            </div>
          </div>

          <div class="hero-actions">
            <button type="button" class="btn btn-primary" id="heroPlayTrailerBtn">
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Watch Trailer</span>
            </button>
            <button type="button" class="btn btn-secondary" id="heroDetailsBtn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>Movie Details</span>
            </button>
            <button type="button" class="${watchlistBtnClass}" id="heroWatchlistBtn">
              <svg viewBox="0 0 24 24" fill="${inWatchlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span id="heroWatchlistBtnText">${watchlistBtnText}</span>
            </button>
          </div>
        </div>

        <div class="hero-poster-preview-col">
          <div class="hero-poster-showcase-card" id="heroPosterShowcase" title="Click to view details of ${escapeHTML(movie.title)}">
            <img 
              src="${escapeHTML(movie.poster)}" 
              alt="${escapeHTML(movie.title)} Theatrical Poster" 
              onerror="if(this.src!=='${movie.onlinePoster}'){this.src='${movie.onlinePoster}';}else{this.onerror=null;this.src='${fallbackSvg}';}"
            />
            <div class="hero-poster-badge">★ ${movie.rating ? movie.rating.toFixed(1) : '9.0'}</div>
            <button type="button" class="hero-poster-play-btn" id="heroPosterCardPlayBtn" title="Play Trailer">
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Re-attach event listeners to hero action buttons
    const playBtn = document.getElementById('heroPlayTrailerBtn');
    const detailsBtn = document.getElementById('heroDetailsBtn');
    const watchBtn = document.getElementById('heroWatchlistBtn');
    const posterShowcase = document.getElementById('heroPosterShowcase');
    const posterCardPlayBtn = document.getElementById('heroPosterCardPlayBtn');

    if (posterShowcase) {
      posterShowcase.addEventListener('click', () => openMovieDetailsModal(movie));
    }
    if (posterCardPlayBtn) {
      posterCardPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openTrailerModal(movie);
      });
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => openTrailerModal(movie));
    }
    if (detailsBtn) {
      detailsBtn.addEventListener('click', () => openMovieDetailsModal(movie));
    }
    if (watchBtn) {
      watchBtn.addEventListener('click', () => {
        toggleWatchlistMovie(movie);
        const updated = state.watchlist.has(movie.id);
        const btnTextEl = document.getElementById('heroWatchlistBtnText');
        if (btnTextEl) {
          btnTextEl.textContent = updated ? 'Saved in Watchlist' : 'Add to Watchlist';
        }
        watchBtn.className = updated ? 'btn btn-primary' : 'btn btn-secondary';
        const svg = watchBtn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', updated ? 'currentColor' : 'none');
        }
      });
    }
  }

  function startHeroAutoplay() {
    stopHeroAutoplay();
    state.heroAutoTimer = setInterval(() => {
      setFeaturedHeroIndex(state.currentHeroIndex + 1);
    }, 9000);
  }

  function stopHeroAutoplay() {
    if (state.heroAutoTimer) {
      clearInterval(state.heroAutoTimer);
      state.heroAutoTimer = null;
    }
  }

  // ==========================================
  // CATALOG: FILTER, SEARCH & SORT LOGIC
  // ==========================================
  function populateGenreDropdown() {
    DOM.genreSelect.innerHTML = '';
    const genres = window.GENRES || ['All', 'Action', 'Drama', 'Sci-Fi', 'Thriller', 'Crime', 'Comedy'];
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre === 'All' ? 'All Genres' : genre;
      DOM.genreSelect.appendChild(option);
    });
  }

  function applyFiltersAndSort() {
    let results = [...state.allMovies];

    // Industry Filter
    if (state.activeIndustry !== 'All') {
      results = results.filter(m => m.industry.toLowerCase() === state.activeIndustry.toLowerCase());
    }

    // Genre Filter
    if (state.activeGenre !== 'All') {
      results = results.filter(m => m.genres && m.genres.some(g => g.toLowerCase() === state.activeGenre.toLowerCase()));
    }

    // Live Search Filter: Search by Title, Director, or Cast
    const query = state.searchQuery.trim().toLowerCase();
    if (query.length > 0) {
      results = results.filter(movie => {
        const titleMatch = movie.title.toLowerCase().includes(query) || 
                           (movie.originalTitle && movie.originalTitle.toLowerCase().includes(query));
        const directorMatch = movie.director && movie.director.toLowerCase().includes(query);
        const castMatch = movie.cast && movie.cast.some(actor => actor.toLowerCase().includes(query));
        const tagMatch = movie.tagline && movie.tagline.toLowerCase().includes(query);
        return titleMatch || directorMatch || castMatch || tagMatch;
      });
    }

    // Sort Options
    results.sort((a, b) => {
      switch (state.sortBy) {
        case 'top-rated':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return (b.year || 0) - (a.year || 0) || (b.releaseDate || '').localeCompare(a.releaseDate || '');
        case 'oldest':
          return (a.year || 0) - (b.year || 0) || (a.releaseDate || '').localeCompare(b.releaseDate || '');
        case 'az':
          return a.title.localeCompare(b.title);
        case 'runtime':
          return (b.runtime || 0) - (a.runtime || 0);
        default:
          return (b.rating || 0) - (a.rating || 0);
      }
    });

    state.filteredMovies = results;
    renderMoviesGrid();
    updateResultsMeta();
  }

  function renderMoviesGrid() {
    DOM.moviesGrid.innerHTML = '';

    if (state.filteredMovies.length === 0) {
      DOM.moviesGrid.classList.add('hidden');
      DOM.emptyState.classList.remove('hidden');
      DOM.emptyDesc.textContent = state.searchQuery 
        ? `No titles matched "${state.searchQuery}" under the selected filters.` 
        : `No films found matching the selected filters.`;
      return;
    }

    DOM.moviesGrid.classList.remove('hidden');
    DOM.emptyState.classList.add('hidden');

    const fragment = document.createDocumentFragment();

    state.filteredMovies.forEach(movie => {
      const card = createMovieCardElement(movie);
      fragment.appendChild(card);
    });

    DOM.moviesGrid.appendChild(fragment);
  }

  function createMovieCardElement(movie) {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.setAttribute('data-movie-id', movie.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${movie.title} (${movie.year}), Directed by ${movie.director}`);

    const isSaved = state.watchlist.has(movie.id);
    const posterUrl = movie.poster;
    const fallbackSvg = window.generateFallbackPosterSVG(movie);

    card.innerHTML = `
      <div class="card-media">
        <img 
          src="${escapeHTML(posterUrl)}" 
          alt="${escapeHTML(movie.title)} Poster" 
          class="card-poster" 
          loading="lazy"
          onerror="if(this.src!=='${movie.onlinePoster}'){this.src='${movie.onlinePoster}';}else{this.onerror=null;this.src='${fallbackSvg}';}"
        />
        <div class="card-rating-badge">
          <span>★</span>
          <span>${movie.rating ? movie.rating.toFixed(1) : '8.5'}</span>
        </div>
        <button 
          type="button" 
          class="card-watchlist-btn ${isSaved ? 'in-watchlist' : ''}" 
          data-movie-id="${movie.id}"
          title="${isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'}"
          aria-label="${isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'}"
        >
          <svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        <div class="card-hover-overlay">
          <div class="card-play-icon" title="Watch Trailer">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-meta-line">
          <span class="card-industry-tag">${escapeHTML(movie.industry)}</span>
          <span>${movie.year} • ${movie.certificate || 'UA'}</span>
        </div>
        <h3 class="card-title">${escapeHTML(movie.title)}</h3>
        <p class="card-director">Dir. ${escapeHTML(movie.director)}</p>
        <div class="card-genres">
          ${(movie.genres || []).slice(0, 2).map(g => `<span class="card-genre-pill">${escapeHTML(g)}</span>`).join('')}
        </div>
      </div>
    `;

    // Card Click Opens Details Modal
    card.addEventListener('click', (e) => {
      // If user clicked the bookmark button directly, do not open details modal
      if (e.target.closest('.card-watchlist-btn')) {
        e.stopPropagation();
        toggleWatchlistMovie(movie);
        return;
      }
      // If user clicked the hover play icon, open trailer modal directly
      if (e.target.closest('.card-play-icon')) {
        e.stopPropagation();
        openTrailerModal(movie);
        return;
      }
      openMovieDetailsModal(movie);
    });

    // Keyboard Access: Enter opens modal
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMovieDetailsModal(movie);
      }
    });

    return card;
  }

  function updateResultsMeta() {
    const total = state.filteredMovies.length;
    DOM.resultsCount.textContent = `Showing ${total} ${total === 1 ? 'movie' : 'movies'}`;

    // Render active filter pills
    DOM.activeFilterTags.innerHTML = '';
    const hasFilter = state.activeIndustry !== 'All' || state.activeGenre !== 'All' || state.searchQuery.trim().length > 0;

    if (state.activeIndustry !== 'All') {
      addActiveFilterTag(state.activeIndustry, () => {
        setIndustryFilter('All');
      });
    }

    if (state.activeGenre !== 'All') {
      addActiveFilterTag(state.activeGenre, () => {
        DOM.genreSelect.value = 'All';
        state.activeGenre = 'All';
        applyFiltersAndSort();
      });
    }

    if (state.searchQuery.trim().length > 0) {
      addActiveFilterTag(`"${state.searchQuery}"`, () => {
        clearSearch();
      });
    }

    DOM.resetFiltersBtn.classList.toggle('hidden', !hasFilter);
  }

  function addActiveFilterTag(text, onRemove) {
    const pill = document.createElement('span');
    pill.className = 'filter-tag-pill';
    pill.textContent = `${text} ✕`;
    pill.style.cursor = 'pointer';
    pill.title = 'Click to clear filter';
    pill.addEventListener('click', onRemove);
    DOM.activeFilterTags.appendChild(pill);
  }

  function setIndustryFilter(industry) {
    state.activeIndustry = industry;
    const pills = DOM.industryPills.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
      const match = pill.getAttribute('data-industry') === industry;
      pill.classList.toggle('active', match);
      pill.setAttribute('aria-checked', match ? 'true' : 'false');
    });
    applyFiltersAndSort();
  }

  function resetAllFilters() {
    state.activeIndustry = 'All';
    state.activeGenre = 'All';
    state.searchQuery = '';
    state.sortBy = 'top-rated';

    DOM.searchInput.value = '';
    DOM.clearSearchBtn.classList.add('hidden');
    DOM.genreSelect.value = 'All';
    DOM.sortSelect.value = 'top-rated';

    const pills = DOM.industryPills.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
      const isAll = pill.getAttribute('data-industry') === 'All';
      pill.classList.toggle('active', isAll);
      pill.setAttribute('aria-checked', isAll ? 'true' : 'false');
    });

    applyFiltersAndSort();
    showToast('Filters reset to default', 'info');
  }

  // ==========================================
  // MOVIE DETAILS MODAL
  // ==========================================
  function openMovieDetailsModal(movie) {
    if (!movie) return;
    state.activeModalMovie = movie;

    const fallbackSvg = window.generateFallbackPosterSVG(movie);
    const backdropFallback = window.generateFallbackBackdropSVG(movie);

    // Populate Modal Elements
    DOM.modalPoster.src = movie.poster;
    DOM.modalPoster.onerror = function() {
      if (this.src !== movie.onlinePoster && movie.onlinePoster) {
        this.src = movie.onlinePoster;
      } else {
        this.onerror = null;
        this.src = fallbackSvg;
      }
    };

    DOM.modalBackdropImg.style.backgroundImage = `url('${movie.backdrop || movie.poster}'), url('${movie.onlinePoster || ''}'), url('${backdropFallback}')`;

    DOM.modalMovieTitle.textContent = movie.title;
    DOM.modalOriginalTitle.textContent = movie.originalTitle || '';
    DOM.modalTagline.textContent = movie.tagline ? `"${movie.tagline}"` : '';
    DOM.modalTagline.style.display = movie.tagline ? 'block' : 'none';

    DOM.modalIndustryBadge.textContent = movie.industry;
    DOM.modalCertBadge.textContent = movie.certificate || 'UA';
    DOM.modalYearBadge.textContent = movie.year;
    DOM.modalRuntimeBadge.textContent = `${movie.runtime} min`;
    DOM.modalRatingScore.textContent = movie.rating ? movie.rating.toFixed(1) : '8.5';

    DOM.modalSynopsis.textContent = movie.synopsis;
    DOM.modalDirector.textContent = movie.director;

    // Cast Pills
    DOM.modalCastChips.innerHTML = '';
    (movie.cast || []).forEach(actor => {
      const chip = document.createElement('span');
      chip.className = 'cast-chip';
      chip.textContent = actor;
      chip.title = `Search ${actor}`;
      chip.style.cursor = 'pointer';
      chip.addEventListener('click', () => {
        closeMovieDetailsModal();
        setSearchQuery(actor);
        document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
      });
      DOM.modalCastChips.appendChild(chip);
    });

    // Genre Pills
    DOM.modalGenrePills.innerHTML = '';
    (movie.genres || []).forEach(genre => {
      const pill = document.createElement('span');
      pill.className = 'badge';
      pill.textContent = genre;
      DOM.modalGenrePills.appendChild(pill);
    });

    // Update Watchlist Button state inside modal
    updateDetailModalWatchlistButton(movie.id);

    // Populate "More Like This" recommendations
    renderRecommendations(movie);

    // Open Dialog
    DOM.movieDetailsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMovieDetailsModal() {
    DOM.movieDetailsModal.classList.add('hidden');
    state.activeModalMovie = null;
    document.body.style.overflow = '';
  }

  function renderRecommendations(currentMovie) {
    DOM.modalRecommendationsRow.innerHTML = '';

    // Find 4 similar movies matching same industry or genre, excluding current
    const recommendations = state.allMovies
      .filter(m => m.id !== currentMovie.id)
      .map(m => {
        let score = 0;
        if (m.industry === currentMovie.industry) score += 3;
        const sharedGenres = (m.genres || []).filter(g => (currentMovie.genres || []).includes(g));
        score += sharedGenres.length * 2;
        return { movie: m, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(item => item.movie);

    recommendations.forEach(rec => {
      const recCard = document.createElement('div');
      recCard.className = 'recommendation-card';
      const recFallback = window.generateFallbackPosterSVG(rec);
      recCard.innerHTML = `
        <img 
          src="${escapeHTML(rec.poster)}" 
          alt="${escapeHTML(rec.title)}" 
          class="recommendation-poster"
          onerror="if(this.src!=='${rec.onlinePoster}'){this.src='${rec.onlinePoster}';}else{this.onerror=null;this.src='${recFallback}';}"
        />
        <div class="recommendation-title">${escapeHTML(rec.title)} (${rec.year})</div>
      `;
      recCard.addEventListener('click', () => {
        openMovieDetailsModal(rec);
      });
      DOM.modalRecommendationsRow.appendChild(recCard);
    });
  }

  // ==========================================
  // TRAILER VIDEO MODAL (YouTube Embed)
  // ==========================================
  function openTrailerModal(movie) {
    if (!movie) return;
    
    // Build embedded video URL
    let embedUrl = '';
    if (movie.trailerEmbedId) {
      embedUrl = `https://www.youtube.com/embed/${movie.trailerEmbedId}?autoplay=1&rel=0&enablejsapi=1`;
    } else if (movie.trailerUrl) {
      const vidMatch = movie.trailerUrl.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
      const vidId = vidMatch ? vidMatch[1] : '';
      if (vidId) {
        embedUrl = `https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&enablejsapi=1`;
      }
    }

    // Direct YouTube search fallback if no direct ID
    const directSearchUrl = movie.trailerUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + movie.year + ' official trailer')}`;
    
    DOM.trailerTitle.textContent = `${movie.title} (${movie.year}) — Official Trailer`;
    DOM.externalTrailerLink.href = directSearchUrl;

    if (embedUrl) {
      DOM.trailerIframe.src = embedUrl;
    } else {
      // Open in new tab if embed not possible
      window.open(directSearchUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    DOM.trailerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTrailerModal() {
    DOM.trailerModal.classList.add('hidden');
    // Clear iframe src immediately to stop audio and video playback
    DOM.trailerIframe.src = '';
    if (DOM.movieDetailsModal.classList.contains('hidden')) {
      document.body.style.overflow = '';
    }
  }

  // ==========================================
  // PERSONAL WATCHLIST DRAWER
  // ==========================================
  function openWatchlistDrawer() {
    renderWatchlistDrawerItems();
    DOM.watchlistDrawer.classList.remove('hidden');
    DOM.watchlistOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeWatchlistDrawer() {
    DOM.watchlistDrawer.classList.add('hidden');
    DOM.watchlistOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function renderWatchlistDrawerItems() {
    DOM.watchlistItemsList.innerHTML = '';
    const savedIds = Array.from(state.watchlist);

    if (savedIds.length === 0) {
      DOM.watchlistItemsList.classList.add('hidden');
      DOM.watchlistEmptyState.classList.remove('hidden');
      return;
    }

    DOM.watchlistItemsList.classList.remove('hidden');
    DOM.watchlistEmptyState.classList.add('hidden');

    savedIds.forEach(id => {
      const movie = state.allMovies.find(m => m.id === id);
      if (!movie) return;

      const item = document.createElement('div');
      item.className = 'watchlist-item-card';
      const fallback = window.generateFallbackPosterSVG(movie);

      item.innerHTML = `
        <img 
          src="${escapeHTML(movie.poster)}" 
          alt="${escapeHTML(movie.title)}" 
          class="watchlist-thumb"
          onerror="if(this.src!=='${movie.onlinePoster}'){this.src='${movie.onlinePoster}';}else{this.onerror=null;this.src='${fallback}';}"
        />
        <div class="watchlist-info">
          <div class="watchlist-item-title">${escapeHTML(movie.title)}</div>
          <div class="watchlist-item-meta">
            <span>${movie.year}</span>
            <span>•</span>
            <span style="color:var(--accent-gold-light)">★ ${movie.rating ? movie.rating.toFixed(1) : '8.5'}</span>
            <span>•</span>
            <span>${escapeHTML(movie.industry)}</span>
          </div>
        </div>
        <div class="watchlist-item-actions">
          <button type="button" class="btn-remove-item" title="Remove from Watchlist" aria-label="Remove ${escapeHTML(movie.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;

      // Click title or thumbnail to inspect details
      item.querySelector('.watchlist-info').addEventListener('click', () => {
        closeWatchlistDrawer();
        openMovieDetailsModal(movie);
      });
      item.querySelector('.watchlist-thumb').addEventListener('click', () => {
        closeWatchlistDrawer();
        openMovieDetailsModal(movie);
      });

      // Remove button
      item.querySelector('.btn-remove-item').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWatchlistMovie(movie, true);
      });

      DOM.watchlistItemsList.appendChild(item);
    });
  }

  function clearAllWatchlist() {
    if (state.watchlist.size === 0) return;
    if (confirm('Are you sure you want to clear your entire personal watchlist?')) {
      state.watchlist.clear();
      saveWatchlistToStorage();
      renderWatchlistDrawerItems();
      applyFiltersAndSort();
      showToast('Watchlist cleared', 'info');
    }
  }

  // ==========================================
  // TMDB v3 API INTEGRATION & MODAL
  // ==========================================
  function openTmdbModal() {
    DOM.tmdbApiKeyInput.value = state.tmdb.apiKey || '';
    DOM.tmdbModeToggle.checked = state.tmdb.liveMode;
    DOM.tmdbStatusBox.className = 'connection-status-box hidden';
    DOM.tmdbModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTmdbModal() {
    DOM.tmdbModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  async function testTmdbApiKey(apiKey) {
    if (!apiKey || apiKey.trim().length < 10) {
      showTmdbStatus('Please enter a valid 32-character TMDB v3 API Key.', 'error');
      return false;
    }

    showTmdbStatus('Verifying API Key with TMDB...', 'loading');

    try {
      // Test request to TMDB v3 configuration endpoint
      const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${encodeURIComponent(apiKey.trim())}`);
      const data = await res.json();

      if (res.ok && data.images) {
        showTmdbStatus('Connection verified! TMDB v3 API Key is active and authorized.', 'success');
        state.tmdb.isConnected = true;
        return true;
      } else {
        const errorMsg = data.status_message || 'Invalid TMDB API Key. Please verify in your TMDB account.';
        showTmdbStatus(errorMsg, 'error');
        state.tmdb.isConnected = false;
        return false;
      }
    } catch (err) {
      showTmdbStatus('Network test blocked or offline. Key saved; local catalog will remain active when offline.', 'error');
      // If network fails (e.g. offline sandbox or offline user), save key anyway for later online usage
      return true;
    }
  }

  function showTmdbStatus(message, type) {
    DOM.tmdbStatusBox.className = `connection-status-box ${type}`;
    DOM.tmdbStatusMsg.textContent = message;
    DOM.tmdbStatusBox.classList.remove('hidden');

    if (type === 'success') {
      DOM.tmdbStatusIcon.textContent = '✓';
    } else if (type === 'error') {
      DOM.tmdbStatusIcon.textContent = '✕';
    } else {
      DOM.tmdbStatusIcon.textContent = '●';
    }
  }

  async function searchTmdbLive(query) {
    if (!state.tmdb.apiKey || !state.tmdb.liveMode) return null;
    
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${encodeURIComponent(state.tmdb.apiKey)}&query=${encodeURIComponent(query)}&include_adult=false`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      
      if (!data.results || data.results.length === 0) return null;

      // Transform TMDB results to match CineVault Movie schema
      return data.results.slice(0, 20).map(tmdbMovie => {
        const year = tmdbMovie.release_date ? parseInt(tmdbMovie.release_date.split('-')[0], 10) : 2024;
        const poster = tmdbMovie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` 
          : '';
        const backdrop = tmdbMovie.backdrop_path 
          ? `https://image.tmdb.org/t/p/original${tmdbMovie.backdrop_path}` 
          : '';

        // Infer industry from original language
        let industry = 'Hollywood';
        if (tmdbMovie.original_language === 'te') industry = 'Telugu';
        else if (tmdbMovie.original_language === 'hi') industry = 'Hindi';
        else if (['ja', 'ko', 'fr', 'es', 'pt', 'de', 'it'].includes(tmdbMovie.original_language)) industry = 'World Cinema';

        return {
          id: `tmdb-${tmdbMovie.id}`,
          title: tmdbMovie.title,
          originalTitle: tmdbMovie.original_title !== tmdbMovie.title ? tmdbMovie.original_title : '',
          year: year || 2024,
          releaseDate: tmdbMovie.release_date || '',
          industry: industry,
          genres: ['Feature', 'Cinema'],
          rating: tmdbMovie.vote_average ? Number(tmdbMovie.vote_average.toFixed(1)) : 7.5,
          runtime: 135,
          certificate: 'UA',
          director: 'TMDB Featured Director',
          cast: ['International Cast'],
          synopsis: tmdbMovie.overview || 'Synopsis coming soon on TMDB.',
          tagline: '',
          poster: poster,
          backdrop: backdrop,
          trailerUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(tmdbMovie.title + ' ' + year + ' official trailer')}`,
          trailerEmbedId: '',
          featured: false
        };
      });
    } catch (err) {
      console.warn('Live TMDB search query failed, using offline catalog:', err);
      return null;
    }
  }

  // ==========================================
  // TOAST NOTIFICATION UTILITY
  // ==========================================
  let toastTimer = null;
  function showToast(message, type = 'success') {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    DOM.toastMessage.textContent = message;
    DOM.toastIcon.textContent = type === 'success' ? '✓' : 'ℹ';
    DOM.toastNotification.classList.remove('hidden');

    toastTimer = setTimeout(() => {
      DOM.toastNotification.classList.add('hidden');
    }, 3200);
  }

  // ==========================================
  // EVENT LISTENERS & WIRING
  // ==========================================
  function bindEventListeners() {
    // Search Input with Debounce
    let searchDebounce = null;
    DOM.searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      DOM.clearSearchBtn.classList.toggle('hidden', val.length === 0);

      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(async () => {
        state.searchQuery = val;

        // If Live TMDB Mode is on and query is 2+ chars, attempt live lookup
        if (state.tmdb.liveMode && state.tmdb.apiKey && val.trim().length >= 2) {
          const liveResults = await searchTmdbLive(val.trim());
          if (liveResults && liveResults.length > 0) {
            // Merge unique live movies with local matches
            const localMatches = state.allMovies.filter(m => m.title.toLowerCase().includes(val.toLowerCase()));
            state.filteredMovies = [...localMatches, ...liveResults];
            renderMoviesGrid();
            updateResultsMeta();
            return;
          }
        }

        applyFiltersAndSort();
      }, 200);
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      clearSearch();
    });

    // Industry Filter Pills Click
    DOM.industryPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill-btn');
      if (!pill) return;
      const industry = pill.getAttribute('data-industry');
      setIndustryFilter(industry);
    });

    // Genre Select
    DOM.genreSelect.addEventListener('change', (e) => {
      state.activeGenre = e.target.value;
      applyFiltersAndSort();
    });

    // Sort Select
    DOM.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndSort();
    });

    // Reset Filters Buttons
    DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

    // Ram Charan Quick Spotlight Filter Button
    DOM.filterRamCharanQuickBtn.addEventListener('click', () => {
      setSearchQuery('Ram Charan');
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
      showToast('Showing Ram Charan’s Complete Filmography', 'info');
    });

    // Hero Navigation Arrows
    DOM.heroPrevBtn.addEventListener('click', () => {
      stopHeroAutoplay();
      setFeaturedHeroIndex(state.currentHeroIndex - 1);
      startHeroAutoplay();
    });

    DOM.heroNextBtn.addEventListener('click', () => {
      stopHeroAutoplay();
      setFeaturedHeroIndex(state.currentHeroIndex + 1);
      startHeroAutoplay();
    });

    // Pause Hero Autoplay on hover
    DOM.heroSection.addEventListener('mouseenter', stopHeroAutoplay);
    DOM.heroSection.addEventListener('mouseleave', startHeroAutoplay);

    // Movie Details Modal Events
    DOM.closeMovieDetailsBtn.addEventListener('click', closeMovieDetailsModal);
    DOM.movieDetailsModal.addEventListener('click', (e) => {
      if (e.target === DOM.movieDetailsModal) {
        closeMovieDetailsModal();
      }
    });

    // Modal Action Buttons
    DOM.modalPlayTrailerBtn.addEventListener('click', () => {
      if (state.activeModalMovie) {
        openTrailerModal(state.activeModalMovie);
      }
    });

    DOM.modalWatchlistBtn.addEventListener('click', () => {
      if (state.activeModalMovie) {
        toggleWatchlistMovie(state.activeModalMovie);
      }
    });

    DOM.modalQuickWatchlistBtn.addEventListener('click', () => {
      if (state.activeModalMovie) {
        toggleWatchlistMovie(state.activeModalMovie);
      }
    });

    DOM.modalShareBtn.addEventListener('click', () => {
      if (!state.activeModalMovie) return;
      const shareText = `Check out "${state.activeModalMovie.title}" (${state.activeModalMovie.year}) on CineVault!`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
        showToast('Movie link copied to clipboard!', 'success');
      } else {
        showToast(`Copied: ${state.activeModalMovie.title}`, 'info');
      }
    });

    // Video Trailer Modal Events
    DOM.closeTrailerBtn.addEventListener('click', closeTrailerModal);
    DOM.trailerModal.addEventListener('click', (e) => {
      if (e.target === DOM.trailerModal) {
        closeTrailerModal();
      }
    });

    // Watchlist Drawer Events
    DOM.openWatchlistBtn.addEventListener('click', openWatchlistDrawer);
    DOM.closeWatchlistBtn.addEventListener('click', closeWatchlistDrawer);
    DOM.watchlistOverlay.addEventListener('click', closeWatchlistDrawer);
    DOM.clearWatchlistBtn.addEventListener('click', clearAllWatchlist);
    DOM.exploreCatalogFromDrawerBtn.addEventListener('click', () => {
      closeWatchlistDrawer();
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    });

    // TMDB Modal Events
    DOM.openTmdbModalBtn.addEventListener('click', openTmdbModal);
    DOM.closeTmdbBtn.addEventListener('click', closeTmdbModal);
    DOM.tmdbModal.addEventListener('click', (e) => {
      if (e.target === DOM.tmdbModal) closeTmdbModal();
    });

    // Toggle API Key visibility
    DOM.toggleApiKeyVisibilityBtn.addEventListener('click', () => {
      const isPass = DOM.tmdbApiKeyInput.type === 'password';
      DOM.tmdbApiKeyInput.type = isPass ? 'text' : 'password';
    });

    // Test TMDB Connection Button
    DOM.testTmdbConnectionBtn.addEventListener('click', async () => {
      const key = DOM.tmdbApiKeyInput.value.trim();
      await testTmdbApiKey(key);
    });

    // Save TMDB Form
    DOM.tmdbKeyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const key = DOM.tmdbApiKeyInput.value.trim();
      state.tmdb.apiKey = key;
      state.tmdb.liveMode = DOM.tmdbModeToggle.checked && Boolean(key);

      saveTmdbSettingsToStorage();
      closeTmdbModal();
      showToast(state.tmdb.liveMode ? 'TMDB Live Mode Activated!' : 'Settings Saved (Offline Catalog Active)', 'success');
    });

    // Remove TMDB Key Button
    DOM.removeTmdbKeyBtn.addEventListener('click', () => {
      state.tmdb.apiKey = '';
      state.tmdb.liveMode = false;
      saveTmdbSettingsToStorage();
      closeTmdbModal();
      showToast('TMDB API Key removed', 'info');
    });

    // Enable/Disable TMDB Mode switch when typing key
    DOM.tmdbApiKeyInput.addEventListener('input', (e) => {
      const hasVal = e.target.value.trim().length >= 10;
      DOM.tmdbModeToggle.disabled = !hasVal;
      if (!hasVal) DOM.tmdbModeToggle.checked = false;
    });
  }

  function setSearchQuery(text) {
    DOM.searchInput.value = text;
    DOM.clearSearchBtn.classList.remove('hidden');
    state.searchQuery = text;
    applyFiltersAndSort();
  }

  function clearSearch() {
    DOM.searchInput.value = '';
    DOM.clearSearchBtn.classList.add('hidden');
    state.searchQuery = '';
    applyFiltersAndSort();
    DOM.searchInput.focus();
  }

  // ==========================================
  // KEYBOARD SHORTCUTS
  // ==========================================
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't intercept typing in inputs
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);

      // '/' to focus search
      if (e.key === '/' && !isInput) {
        e.preventDefault();
        DOM.searchInput.focus();
        DOM.searchInput.select();
        return;
      }

      // 'w' or 'W' to toggle Watchlist
      if ((e.key === 'w' || e.key === 'W') && !isInput) {
        e.preventDefault();
        if (DOM.watchlistDrawer.classList.contains('hidden')) {
          openWatchlistDrawer();
        } else {
          closeWatchlistDrawer();
        }
        return;
      }

      // 'Escape' closes any open modal or drawer
      if (e.key === 'Escape') {
        if (!DOM.trailerModal.classList.contains('hidden')) {
          closeTrailerModal();
        } else if (!DOM.movieDetailsModal.classList.contains('hidden')) {
          closeMovieDetailsModal();
        } else if (!DOM.watchlistDrawer.classList.contains('hidden')) {
          closeWatchlistDrawer();
        } else if (!DOM.tmdbModal.classList.contains('hidden')) {
          closeTmdbModal();
        }
      }
    });
  }

  // Utility to prevent XSS in dynamic templates
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
