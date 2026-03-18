const STORAGE_KEYS = {
  users: 'storystream-users',
  session: 'storystream-session',
  library: 'storystream-library',
};

const categories = ['For You', 'Books', 'Movies', 'Trending', 'Saved', 'My Uploads'];

const seededLibrary = [
  ['Movie','Interstellar','Christopher Nolan','Sci-Fi','Epic late-night sci-fi','Time bends, gravity whispers, and love stretches across galaxies.','https://media.giphy.com/media/3o7btZ3T6y3JTmjg4w/giphy.gif'],
  ['Movie','Dune: Part Two','Denis Villeneuve','Sci-Fi','Massive-screen intensity','Prophecy, revenge and desert opera on the biggest scale.','https://media.giphy.com/media/11M8MYqPc37F4I/giphy.gif'],
  ['Movie','Past Lives','Celine Song','Romance','Tender heartbreak hour','Quiet longing and dialogue that stays with you.','https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif'],
  ['Movie','Spider-Man: Into the Spider-Verse','Bob Persichetti','Animation','Kinetic multiverse joy','Stylish, emotional and endlessly rewatchable.','https://media.giphy.com/media/QVP7DawXZitKYg3AX5/giphy.gif'],
  ['Movie','Parasite','Bong Joon-ho','Thriller','Sharp and socially explosive','A class satire thriller that twists every ten minutes.','https://media.giphy.com/media/JQFuCdFbQAbNaawknQ/giphy.gif'],
  ['Movie','Your Name','Makoto Shinkai','Anime','Dreamy emotional spectacle','Body swapping, fate and stunning skies.','https://media.giphy.com/media/l0HlGdXFWYbKv5rby/giphy.gif'],
  ['Movie','The Dark Knight','Christopher Nolan','Action','Chaos with philosophy','Comic-book cinema with real weight.','https://media.giphy.com/media/l0NwGpoOVLTAyUJSo/giphy.gif'],
  ['Movie','Get Out','Jordan Peele','Horror','Uncomfortable in the best way','Smart horror with social bite.','https://media.giphy.com/media/xUA7bdpLxQhsSQdyog/giphy.gif'],
  ['Movie','La La Land','Damien Chazelle','Musical','Bittersweet neon romance','Jazz, ambition and heartbreak in color.','https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif'],
  ['Movie','The Godfather','Francis Ford Coppola','Crime','Classic power game','Family, power and one of cinema’s greatest worlds.','https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif'],
  ['Movie','Whiplash','Damien Chazelle','Drama','Pressure-cooker obsession','Talent, abuse and perfectionism at maximum volume.','https://media.giphy.com/media/l41Yh18f5TbiWHE0o/giphy.gif'],
  ['Movie','The Grand Budapest Hotel','Wes Anderson','Comedy','Symmetrical comfort chaos','Playful style with melancholy under the surface.','https://media.giphy.com/media/26gsobowozGM9umBi/giphy.gif'],
  ['Book','The Atlas Six','Olivie Blake','Fantasy','Dark academia marathon','A secret society and six dangerous magical rivals.','https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif'],
  ['Book','Circe','Madeline Miller','Fantasy','Power fantasy with depth','A goddess, a witch, and prose that feels expensive.','https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif'],
  ['Book','Tomorrow, and Tomorrow, and Tomorrow','Gabrielle Zevin','Contemporary','Creative hearts on fire','Friendship, ambition and game design across years.','https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif'],
  ['Book','Pride and Prejudice','Jane Austen','Classic','Flirty sharp classic','Chemistry, wit and perfect reread energy.','https://media.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif'],
  ['Book','Project Hail Mary','Andy Weir','Sci-Fi','Geeky survival high','Science problems, humor and a huge emotional core.','https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'],
  ['Book','The Song of Achilles','Madeline Miller','Romance','Beautiful devastation','Myth retelling with maximum emotional damage.','https://media.giphy.com/media/xT9IgrnJM5v6kJCVwY/giphy.gif'],
  ['Book','Rebecca','Daphne du Maurier','Gothic','Elegant dread spiral','A mansion, a marriage and a haunting presence.','https://media.giphy.com/media/l0MYAs5E2oIDCq9So/giphy.gif'],
  ['Book','The Seven Husbands of Evelyn Hugo','Taylor Jenkins Reid','Historical','Glossy emotional scandal','Old Hollywood secrets and a huge reveal.','https://media.giphy.com/media/l0MYRzcWP7JLkSC4w/giphy.gif'],
  ['Book','Babel','R. F. Kuang','Dark Academia','Smart and furious','Translation, empire and revolution in Oxford.','https://media.giphy.com/media/3orieUe6ejxSFxYCXe/giphy.gif'],
  ['Book','It','Stephen King','Horror','Nightmare marathon','Childhood trauma meets cosmic terror.','https://media.giphy.com/media/xT9IgvEOwRzUcZDRiU/giphy.gif'],
  ['Book','The Hobbit','J. R. R. Tolkien','Adventure','Comfort quest mode','A cozy quest that opens into epic fantasy.','https://media.giphy.com/media/8Xu2IkvLsjyLe/giphy.gif'],
  ['Book','Normal People','Sally Rooney','Romance','Intimate emotional realism','Connection, silence and painful tenderness.','https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif'],
].map(([type,title,creator,genre,vibe,blurb,gif], index) => ({
  id: `${type}-${index}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  type,
  title,
  creator,
  genre,
  vibe,
  blurb,
  gif,
  rating: (4.2 + (index % 8) * 0.1).toFixed(1),
  length: type === 'Movie' ? `${1 + (index % 3)}h ${30 + (index % 20)}m` : `${280 + index * 12} pages`,
  chips: [genre, type === 'Movie' ? 'Watchlist' : 'Bookshelf', index % 2 === 0 ? 'Trending' : 'Cult favorite'],
  facts: [genre, vibe, index % 2 === 0 ? 'Highly shareable' : 'Critic favorite'],
  cta: type === 'Movie' ? 'Watch trailer' : 'Read sample',
  social: { likes: 65000 + index * 4300, comments: 1800 + index * 230, saves: 9000 + index * 1500 },
  owner: 'StoryStream Seed',
  createdBy: 'seed',
}));

const state = {
  mode: 'login',
  session: null,
  category: 'For You',
  genre: 'All genres',
  query: '',
  liked: new Set(),
};

const elements = {
  authScreen: document.getElementById('authScreen'),
  appShell: document.getElementById('appShell'),
  authMessage: document.getElementById('authMessage'),
  loginTab: document.getElementById('loginTab'),
  registerTab: document.getElementById('registerTab'),
  loginForm: document.getElementById('loginForm'),
  registerForm: document.getElementById('registerForm'),
  logoutBtn: document.getElementById('logoutBtn'),
  welcomeName: document.getElementById('welcomeName'),
  welcomeMeta: document.getElementById('welcomeMeta'),
  profileInitial: document.getElementById('profileInitial'),
  statItems: document.getElementById('statItems'),
  statGenres: document.getElementById('statGenres'),
  statSaved: document.getElementById('statSaved'),
  savedCountBadge: document.getElementById('savedCountBadge'),
  savedPreview: document.getElementById('savedPreview'),
  addItemForm: document.getElementById('addItemForm'),
  nav: document.getElementById('categoryNav'),
  genreFilters: document.getElementById('genreFilters'),
  feed: document.getElementById('feed'),
  template: document.getElementById('storyCardTemplate'),
  search: document.getElementById('searchInput'),
  progressTitle: document.getElementById('progressTitle'),
  progressBar: document.getElementById('progressBar'),
  feedLabel: document.getElementById('feedLabel'),
  databaseSummary: document.getElementById('databaseSummary'),
  openDatabaseBtn: document.getElementById('openDatabaseBtn'),
  closeDrawerBtn: document.getElementById('closeDrawerBtn'),
  databaseDrawer: document.getElementById('databaseDrawer'),
  databaseList: document.getElementById('databaseList'),
};

function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedDatabase() {
  const existingUsers = loadJSON(STORAGE_KEYS.users, []);
  if (!existingUsers.length) {
    saveJSON(STORAGE_KEYS.users, [
      { id: 'demo-user', username: 'Demo User', email: 'demo@storystream.app', password: 'demo1234', saved: [], uploads: [] },
    ]);
  }

  const existingLibrary = loadJSON(STORAGE_KEYS.library, []);
  if (!existingLibrary.length) {
    saveJSON(STORAGE_KEYS.library, seededLibrary);
  }
}

function getUsers() {
  return loadJSON(STORAGE_KEYS.users, []);
}

function getLibrary() {
  return loadJSON(STORAGE_KEYS.library, []);
}

function updateUsers(users) {
  saveJSON(STORAGE_KEYS.users, users);
}

function updateLibrary(items) {
  saveJSON(STORAGE_KEYS.library, items);
}

function formatCompact(number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(number);
}

function getCurrentUser() {
  return getUsers().find((user) => user.id === state.session?.userId) ?? null;
}

function getSavedIds() {
  return new Set(getCurrentUser()?.saved ?? []);
}

function getGenres() {
  const genres = new Set(getLibrary().map((item) => item.genre));
  return ['All genres', ...Array.from(genres).sort()];
}

function renderPills(root, items, activeValue, onClick) {
  root.innerHTML = '';
  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item;
    button.className = item === activeValue ? 'active' : '';
    button.addEventListener('click', () => onClick(item));
    root.appendChild(button);
  });
}

function setAuthMode(mode) {
  state.mode = mode;
  elements.loginTab.classList.toggle('active', mode === 'login');
  elements.registerTab.classList.toggle('active', mode === 'register');
  elements.loginForm.classList.toggle('hidden', mode !== 'login');
  elements.registerForm.classList.toggle('hidden', mode !== 'register');
  elements.authMessage.textContent = '';
}

function login(email, password) {
  const user = getUsers().find((entry) => entry.email === email && entry.password === password);
  if (!user) {
    elements.authMessage.textContent = 'Wrong email or password.';
    return;
  }
  state.session = { userId: user.id };
  saveJSON(STORAGE_KEYS.session, state.session);
  bootApp();
}

function register(username, email, password) {
  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    elements.authMessage.textContent = 'Account already exists with that email.';
    return;
  }
  const user = {
    id: `user-${crypto.randomUUID?.() ?? Date.now()}`,
    username,
    email,
    password,
    saved: [],
    uploads: [],
  };
  users.push(user);
  updateUsers(users);
  state.session = { userId: user.id };
  saveJSON(STORAGE_KEYS.session, state.session);
  bootApp();
}

function logout() {
  state.session = null;
  localStorage.removeItem(STORAGE_KEYS.session);
  elements.appShell.classList.add('hidden');
  elements.authScreen.classList.remove('hidden');
}

function getFilteredItems() {
  const library = getLibrary();
  const savedIds = getSavedIds();
  const currentUser = getCurrentUser();

  return library.filter((item) => {
    const categoryMatch =
      state.category === 'For You' ||
      (state.category === 'Books' && item.type === 'Book') ||
      (state.category === 'Movies' && item.type === 'Movie') ||
      (state.category === 'Trending' && item.social.likes >= 90000) ||
      (state.category === 'Saved' && savedIds.has(item.id)) ||
      (state.category === 'My Uploads' && item.createdBy === currentUser?.id);

    const genreMatch = state.genre === 'All genres' || item.genre === state.genre;
    const haystack = `${item.title} ${item.creator} ${item.genre} ${item.vibe} ${item.blurb} ${item.chips.join(' ')}`.toLowerCase();
    const queryMatch = haystack.includes(state.query.toLowerCase());
    return categoryMatch && genreMatch && queryMatch;
  });
}

function updateUserInStore(nextUser) {
  const users = getUsers().map((user) => (user.id === nextUser.id ? nextUser : user));
  updateUsers(users);
}

function toggleSave(id) {
  const user = getCurrentUser();
  if (!user) return;
  const saved = new Set(user.saved);
  if (saved.has(id)) saved.delete(id); else saved.add(id);
  user.saved = Array.from(saved);
  updateUserInStore(user);
  renderApp();
}

function toggleLike(id) {
  if (state.liked.has(id)) state.liked.delete(id); else state.liked.add(id);
  renderFeed();
}

function shareItem(item) {
  const text = `Check out ${item.title} on StoryStream — ${item.genre} / ${item.vibe}.`;
  navigator.clipboard?.writeText(text).catch(() => {});
}

function applyGif(img, url, title) {
  img.src = url;
  img.alt = `${title} animated visual`;
  img.addEventListener('error', () => { img.style.display = 'none'; }, { once: true });
}

function createActionButton(icon, label, value, active, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `action-btn${active ? ' is-active' : ''}`;
  button.innerHTML = `<span class="action-icon">${icon}</span><span>${value}</span>`;
  button.setAttribute('aria-label', label);
  button.addEventListener('click', onClick);
  return button;
}

function renderFeed() {
  const items = getFilteredItems();
  const savedIds = getSavedIds();
  elements.feed.innerHTML = '';
  elements.feedLabel.textContent = `${state.category} • ${state.genre}`;

  if (!items.length) {
    elements.feed.innerHTML = '<article class="empty-state">No titles match these filters yet.</article>';
    elements.progressTitle.textContent = 'No result';
    elements.progressBar.style.width = '0%';
    return;
  }

  items.forEach((item, index) => {
    const fragment = elements.template.content.cloneNode(true);
    const card = fragment.querySelector('.story-card');
    card.dataset.id = item.id;
    card.style.background = `linear-gradient(135deg, rgba(15,23,42,0.55), rgba(15,23,42,0.18))`;

    applyGif(fragment.querySelector('.story-gif'), item.gif, item.title);
    applyGif(fragment.querySelector('.poster-gif'), item.gif, item.title);

    fragment.querySelector('.type-pill').textContent = item.type;
    fragment.querySelector('.match-pill').textContent = `${item.rating} ★ match`;
    fragment.querySelector('.poster-score').textContent = item.genre;
    fragment.querySelector('.poster-runtime').textContent = item.length;
    fragment.querySelector('.tag').textContent = `#${item.genre.replace(/\s+/g, '')}`;
    fragment.querySelector('h2').textContent = item.title;
    fragment.querySelector('.creator').textContent = `by / from ${item.creator}`;
    fragment.querySelector('.blurb').textContent = item.blurb;
    fragment.querySelector('.footer-vibe').textContent = item.vibe;
    fragment.querySelector('.footer-owner').textContent = item.owner;
    fragment.querySelector('.primary-cta').textContent = item.cta;

    const chips = fragment.querySelector('.chips');
    item.chips.forEach((chip) => {
      const span = document.createElement('span');
      span.textContent = chip;
      chips.appendChild(span);
    });

    const facts = fragment.querySelector('.story-facts');
    item.facts.forEach((fact) => {
      const node = document.createElement('div');
      node.textContent = fact;
      facts.appendChild(node);
    });

    const isSaved = savedIds.has(item.id);
    const saveButton = fragment.querySelector('.save-toggle');
    saveButton.textContent = isSaved ? 'Saved ✓' : 'Save for later';
    saveButton.classList.toggle('is-active', isSaved);
    saveButton.addEventListener('click', () => toggleSave(item.id));

    const actionsRoot = fragment.querySelector('.story-actions');
    actionsRoot.appendChild(createActionButton('❤️', `Like ${item.title}`, formatCompact(item.social.likes + (state.liked.has(item.id) ? 1 : 0)), state.liked.has(item.id), () => toggleLike(item.id)));
    actionsRoot.appendChild(createActionButton('💬', `Comments for ${item.title}`, formatCompact(item.social.comments), false, () => {}));
    actionsRoot.appendChild(createActionButton('🔖', `Save ${item.title}`, formatCompact(item.social.saves + (isSaved ? 1 : 0)), isSaved, () => toggleSave(item.id)));
    actionsRoot.appendChild(createActionButton('↗', `Share ${item.title}`, 'Share', false, () => shareItem(item)));

    if (index === 0) {
      elements.progressTitle.textContent = item.title;
      elements.progressBar.style.width = `${Math.max(14, Math.round(((index + 1) / items.length) * 100))}%`;
    }

    elements.feed.appendChild(fragment);
  });

  observeActiveCard(items);
}

function observeActiveCard(items) {
  const cards = [...elements.feed.querySelectorAll('.story-card')];
  if (!cards.length) return;
  const observer = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    const activeIndex = items.findIndex((item) => item.id === active.target.dataset.id);
    if (activeIndex >= 0) {
      elements.progressTitle.textContent = items[activeIndex].title;
      elements.progressBar.style.width = `${Math.round(((activeIndex + 1) / items.length) * 100)}%`;
    }
  }, { root: elements.feed, threshold: [0.35, 0.6, 0.9] });
  cards.forEach((card) => observer.observe(card));
}

function renderSidebar() {
  const library = getLibrary();
  const user = getCurrentUser();
  const savedItems = library.filter((item) => user.saved.includes(item.id));
  const genres = new Set(library.map((item) => item.genre));

  elements.welcomeName.textContent = user.username;
  elements.profileInitial.textContent = user.username.charAt(0).toUpperCase();
  elements.welcomeMeta.textContent = `${user.saved.length} saved • ${user.uploads.length} custom entries`;
  elements.statItems.textContent = `${library.length}`;
  elements.statGenres.textContent = `${genres.size}`;
  elements.statSaved.textContent = `${user.saved.length}`;
  elements.savedCountBadge.textContent = `${user.saved.length} saved`;
  elements.databaseSummary.textContent = `${library.length} titles across ${genres.size} genres`;

  elements.savedPreview.innerHTML = savedItems.length
    ? savedItems.slice(0, 4).map((item) => `<article class="saved-chip"><strong>${item.title}</strong><small>${item.type} • ${item.genre}</small></article>`).join('')
    : '<div class="empty-state">Save books and movies to build your personal list.</div>';
}

function renderDatabaseDrawer() {
  const library = getLibrary();
  elements.databaseList.innerHTML = library
    .map((item) => `<article class="database-item"><strong>${item.title}</strong><small>${item.type} • ${item.genre} • ${item.creator} • added by ${item.owner}</small></article>`)
    .join('');
}

function renderControls() {
  renderPills(elements.nav, categories, state.category, (category) => { state.category = category; renderApp(); });
  renderPills(elements.genreFilters, getGenres(), state.genre, (genre) => { state.genre = genre; renderApp(); });
}

function renderApp() {
  renderControls();
  renderSidebar();
  renderFeed();
  renderDatabaseDrawer();
}

function addItem(formData) {
  const user = getCurrentUser();
  const library = getLibrary();
  const title = formData.get('title').trim();
  const creator = formData.get('creator').trim();
  const genre = formData.get('genre').trim();
  const blurb = formData.get('blurb').trim();
  const type = formData.get('type');

  const item = {
    id: `custom-${Date.now()}`,
    type,
    title,
    creator,
    genre,
    vibe: `${genre} discovery mode`,
    blurb,
    gif: type === 'Movie' ? 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' : 'https://media.giphy.com/media/8Xu2IkvLsjyLe/giphy.gif',
    rating: '4.6',
    length: type === 'Movie' ? '2h 00m' : '320 pages',
    chips: [genre, 'User added', type],
    facts: [genre, 'Fresh entry', 'Community ready'],
    cta: type === 'Movie' ? 'Watch trailer' : 'Read sample',
    social: { likes: 1200, comments: 60, saves: 240 },
    owner: user.username,
    createdBy: user.id,
  };

  library.unshift(item);
  updateLibrary(library);
  user.uploads.unshift(item.id);
  updateUserInStore(user);
  elements.addItemForm.reset();
  state.category = 'My Uploads';
  renderApp();
}

function bootApp() {
  const user = getCurrentUser();
  if (!user) {
    logout();
    return;
  }
  elements.authScreen.classList.add('hidden');
  elements.appShell.classList.remove('hidden');
  renderApp();
}

seedDatabase();
state.session = loadJSON(STORAGE_KEYS.session, null);
if (state.session) bootApp();

setAuthMode('login');

elements.loginTab.addEventListener('click', () => setAuthMode('login'));

elements.registerTab.addEventListener('click', () => setAuthMode('register'));

elements.loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  login(formData.get('email').trim(), formData.get('password').trim());
});

elements.registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  register(formData.get('username').trim(), formData.get('email').trim(), formData.get('password').trim());
});

elements.logoutBtn.addEventListener('click', logout);

elements.search.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderFeed();
});

elements.addItemForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(new FormData(event.currentTarget));
});

elements.openDatabaseBtn.addEventListener('click', () => {
  elements.databaseDrawer.classList.remove('hidden');
});

elements.closeDrawerBtn.addEventListener('click', () => {
  elements.databaseDrawer.classList.add('hidden');
});
