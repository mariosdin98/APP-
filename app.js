const categories = ['For You', 'Books', 'Movies', 'Trending', 'Saved'];
const moods = ['All vibes', 'Dark', 'Cozy', 'Mind-bending', 'Romance', 'Epic'];
const moodSpotlights = [
  {
    title: 'Cosmic heartbreak',
    copy: 'Scroll σε stories που μοιάζουν με late-night obsessions.',
  },
  {
    title: 'Smart and dangerous',
    copy: 'Books και films με tension, obsession και morally grey energy.',
  },
  {
    title: 'Soft but unforgettable',
    copy: 'Για βράδια που θες κάτι τρυφερό, cinematic και λίγο heartbreaking.',
  },
];

const library = [
  {
    id: 'atlas-six',
    type: 'Book',
    title: 'The Atlas Six',
    creator: 'Olivie Blake',
    tag: '#DarkAcademia',
    accent: 'linear-gradient(135deg, #8b5cf6 0%, #312e81 55%, #0f172a 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWQ0YzV5dnVibWRsNWh6YjhsbXBqdW5jbnF2bTZmZnZubG9uN3R0eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlBO7eyXzSZkJri/giphy.gif',
    blurb: 'A secret society. Dangerous magic. Six brilliant rivals competing for one unforgettable place.',
    chips: ['Morally gray', 'Twisty', 'BookTok favorite'],
    rating: '4.8',
    length: '398 pages',
    vibe: 'Dark academia marathon',
    facts: ['BookTok viral', 'Secrets', 'Elite campus'],
    cta: 'Read sample',
    mood: ['Dark', 'Mind-bending'],
    social: { likes: 124000, comments: 8200, saves: 51000 },
  },
  {
    id: 'interstellar',
    type: 'Movie',
    title: 'Interstellar',
    creator: 'Christopher Nolan',
    tag: '#MindBlown',
    accent: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #38bdf8 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGl6ZnR2dDJ5d2Z6dDhlbW9lbTMwMHYxcnZ2N2h4enNlcHk5ZWRnNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btZ3T6y3JTmjg4w/giphy.gif',
    blurb: 'Time bends, gravity whispers, and love stretches across galaxies in this cinematic trip.',
    chips: ['Sci-fi epic', 'Space', 'Emotional'],
    rating: '9.2',
    length: '2h 49m',
    vibe: 'Epic late-night sci-fi',
    facts: ['IMAX worthy', 'Big feelings', 'Space mission'],
    cta: 'Watch trailer',
    mood: ['Mind-bending', 'Epic'],
    social: { likes: 210000, comments: 15000, saves: 92000 },
  },
  {
    id: 'tomorrow3',
    type: 'Book',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    creator: 'Gabrielle Zevin',
    tag: '#BeautifulWriting',
    accent: 'linear-gradient(135deg, #f97316 0%, #fb7185 45%, #7c3aed 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FvMml0NXl2eHcyNXJwYmEzNWprYms1ZXN3c2Q1ejMyYXk2M2ppYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ICOgUNjpvO0PC/giphy.gif',
    blurb: 'A story about friendship, ambition, game design, and the messy art of building worlds together.',
    chips: ['Character-driven', 'Bittersweet', 'Modern classic'],
    rating: '4.7',
    length: '416 pages',
    vibe: 'Creative hearts on fire',
    facts: ['Friendship saga', 'Gaming', 'Emotional payoff'],
    cta: 'Read sample',
    mood: ['Cozy', 'Romance'],
    social: { likes: 98000, comments: 5600, saves: 40000 },
  },
  {
    id: 'past-lives',
    type: 'Movie',
    title: 'Past Lives',
    creator: 'Celine Song',
    tag: '#HeartAche',
    accent: 'linear-gradient(135deg, #111827 0%, #059669 45%, #f59e0b 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9mbW0xeTFvYnh1d3M5a2oxcDJoc2x1Z2M1NDdudWhseDQ3bHRvbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26tn33aiTi1jkl6H6/giphy.gif',
    blurb: 'Quiet longing, perfect dialogue, and a story that lingers long after the credits roll.',
    chips: ['Romantic drama', 'A24 vibe', 'Tender'],
    rating: '8.9',
    length: '1h 46m',
    vibe: 'Tender heartbreak hour',
    facts: ['Soulmates?', 'Slow cinema', 'Post-film spiral'],
    cta: 'Watch trailer',
    mood: ['Romance', 'Cozy'],
    social: { likes: 87000, comments: 4200, saves: 29000 },
  },
  {
    id: 'dune-two',
    type: 'Movie',
    title: 'Dune: Part Two',
    creator: 'Denis Villeneuve',
    tag: '#DesertPower',
    accent: 'linear-gradient(135deg, #78350f 0%, #ea580c 50%, #f59e0b 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWl6djd1a3hpZXB4NWcxaGhmbTk2dnd2cXB1d3hnd2ViN3cwNWQ1YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11M8MYqPc37F4I/giphy.gif',
    blurb: 'Prophecy, revenge, giant spectacle and enough sand-coded drama for ten timelines.',
    chips: ['Epic', 'Visual feast', 'War drama'],
    rating: '9.0',
    length: '2h 46m',
    vibe: 'Massive-screen intensity',
    facts: ['Chosen one', 'Political', 'Desert opera'],
    cta: 'Watch trailer',
    mood: ['Epic'],
    social: { likes: 175000, comments: 9800, saves: 64000 },
  },
  {
    id: 'circe',
    type: 'Book',
    title: 'Circe',
    creator: 'Madeline Miller',
    tag: '#MythRetold',
    accent: 'linear-gradient(135deg, #0f172a 0%, #be123c 50%, #f59e0b 100%)',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNxeXI4M3V5dGQyNmkwOHFwdG0xYjNleTVuZG81dW9jZDJjdnJnZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT0xeJpnrWC4XWblEk/giphy.gif',
    blurb: 'A goddess exiled, a witch becoming herself, and prose that feels expensive in the best way.',
    chips: ['Mythology', 'Lyrical', 'Empowering'],
    rating: '4.9',
    length: '393 pages',
    vibe: 'Power fantasy with depth',
    facts: ['Greek myth', 'Character arc', 'Lush prose'],
    cta: 'Read sample',
    mood: ['Epic', 'Dark'],
    social: { likes: 132000, comments: 7100, saves: 58000 },
  },
];

const state = {
  category: 'For You',
  mood: 'All vibes',
  query: '',
  saved: new Set(JSON.parse(localStorage.getItem('storystream-saved') ?? '[]')),
  liked: new Set(),
};

const elements = {
  nav: document.getElementById('categoryNav'),
  moodFilters: document.getElementById('moodFilters'),
  feed: document.getElementById('feed'),
  template: document.getElementById('storyCardTemplate'),
  search: document.getElementById('searchInput'),
  progressTitle: document.getElementById('progressTitle'),
  progressBar: document.getElementById('progressBar'),
  feedLabel: document.getElementById('feedLabel'),
  savedPreview: document.getElementById('savedPreview'),
  savedCountBadge: document.getElementById('savedCountBadge'),
  statSwipes: document.getElementById('statSwipes'),
  statSaves: document.getElementById('statSaves'),
  statRate: document.getElementById('statRate'),
  spotlightTitle: document.getElementById('spotlightTitle'),
  spotlightCopy: document.getElementById('spotlightCopy'),
  randomizeBtn: document.getElementById('randomizeBtn'),
};

function formatCompact(number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(number);
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

function getFilteredItems() {
  return library.filter((item) => {
    const categoryMatch =
      state.category === 'For You' ||
      (state.category === 'Books' && item.type === 'Book') ||
      (state.category === 'Movies' && item.type === 'Movie') ||
      (state.category === 'Trending' && item.social.likes >= 120000) ||
      (state.category === 'Saved' && state.saved.has(item.id));

    const moodMatch = state.mood === 'All vibes' || item.mood.includes(state.mood);
    const haystack = `${item.title} ${item.creator} ${item.tag} ${item.chips.join(' ')} ${item.mood.join(' ')} ${item.vibe}`.toLowerCase();
    const queryMatch = haystack.includes(state.query.toLowerCase());

    return categoryMatch && moodMatch && queryMatch;
  });
}

function updateSidebar(items) {
  const totalSaves = Array.from(state.saved).length;
  const swipeEstimate = `${formatCompact(items.reduce((sum, item) => sum + item.social.likes, 0) || 84000)}+`;
  const completion = `${Math.min(99, 84 + items.length * 2)}%`;

  elements.statSwipes.textContent = swipeEstimate;
  elements.statSaves.textContent = formatCompact(totalSaves * 12000 + 430000);
  elements.statRate.textContent = completion;
  elements.savedCountBadge.textContent = `${totalSaves} saved`;

  const savedItems = library.filter((item) => state.saved.has(item.id)).slice(0, 3);
  elements.savedPreview.innerHTML = savedItems.length
    ? savedItems
        .map(
          (item) => `
            <article class="saved-chip">
              <strong>${item.title}</strong>
              <small>${item.type} • ${item.creator}</small>
            </article>
          `,
        )
        .join('')
    : '<div class="empty-state">Save titles you love and they will show up here.</div>';
}

function createActionButton(icon, label, value, active = false, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `action-btn${active ? ' is-active' : ''}`;
  button.innerHTML = `<span class="action-icon">${icon}</span><span>${value}</span>`;
  button.setAttribute('aria-label', label);
  button.addEventListener('click', onClick);
  return button;
}

function applyGif(img, url, title) {
  img.src = url;
  img.alt = `${title} animated visual`;
  img.addEventListener(
    'error',
    () => {
      img.style.display = 'none';
    },
    { once: true },
  );
}

function renderFeed() {
  const items = getFilteredItems();
  elements.feed.innerHTML = '';
  elements.feedLabel.textContent = `${state.category} • ${state.mood}`;

  if (!items.length) {
    elements.feed.innerHTML = `
      <article class="empty-feed">
        <h2>No matches yet</h2>
        <p>Try another mood, remove a filter, or search for a different vibe.</p>
      </article>
    `;
    elements.progressTitle.textContent = 'Nothing queued';
    elements.progressBar.style.width = '0%';
    updateSidebar(items);
    return;
  }

  items.forEach((item, index) => {
    const fragment = elements.template.content.cloneNode(true);
    const card = fragment.querySelector('.story-card');
    card.style.background = item.accent;
    card.dataset.id = item.id;

    applyGif(fragment.querySelector('.story-gif'), item.gif, item.title);
    applyGif(fragment.querySelector('.poster-gif'), item.gif, item.title);

    fragment.querySelector('.type-pill').textContent = item.type;
    fragment.querySelector('.match-pill').textContent = `${item.rating} ★ match`;
    fragment.querySelector('.poster-score').textContent = `${item.rating}/10 audience score`;
    fragment.querySelector('.poster-runtime').textContent = item.length;
    fragment.querySelector('.tag').textContent = item.tag;
    fragment.querySelector('h2').textContent = item.title;
    fragment.querySelector('.creator').textContent = `by / from ${item.creator}`;
    fragment.querySelector('.blurb').textContent = item.blurb;
    fragment.querySelector('.footer-vibe').textContent = item.vibe;

    const chips = fragment.querySelector('.chips');
    item.chips.forEach((chip) => {
      const span = document.createElement('span');
      span.textContent = chip;
      chips.appendChild(span);
    });

    const facts = fragment.querySelector('.story-facts');
    item.facts.forEach((fact) => {
      const node = document.createElement('div');
      node.innerHTML = `<span class="fact-label">✦</span><span>${fact}</span>`;
      facts.appendChild(node);
    });

    const primaryButton = fragment.querySelector('.primary-cta');
    primaryButton.textContent = item.cta;
    const saveButton = fragment.querySelector('.save-toggle');
    const isSaved = state.saved.has(item.id);
    saveButton.textContent = isSaved ? 'Saved ✓' : 'Save for later';
    saveButton.classList.toggle('is-active', isSaved);
    saveButton.addEventListener('click', () => toggleSave(item.id));

    const actionsRoot = fragment.querySelector('.story-actions');
    const likeCount = item.social.likes + (state.liked.has(item.id) ? 1 : 0);
    actionsRoot.appendChild(
      createActionButton('❤️', `Like ${item.title}`, formatCompact(likeCount), state.liked.has(item.id), () => toggleLike(item.id)),
    );
    actionsRoot.appendChild(
      createActionButton('💬', `Comments for ${item.title}`, formatCompact(item.social.comments), false, () => {}),
    );
    actionsRoot.appendChild(
      createActionButton('🔖', `Save ${item.title}`, formatCompact(item.social.saves + (isSaved ? 1 : 0)), isSaved, () => toggleSave(item.id)),
    );
    actionsRoot.appendChild(createActionButton('↗', `Share ${item.title}`, 'Share', false, () => shareItem(item)));

    if (index === 0) {
      elements.progressTitle.textContent = item.title;
      elements.progressBar.style.width = `${Math.max(16, Math.round(((index + 1) / items.length) * 100))}%`;
    }

    elements.feed.appendChild(fragment);
  });

  updateSidebar(items);
  observeActiveCard();
}

function toggleSave(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }

  localStorage.setItem('storystream-saved', JSON.stringify(Array.from(state.saved)));
  renderFeed();
}

function toggleLike(id) {
  if (state.liked.has(id)) {
    state.liked.delete(id);
  } else {
    state.liked.add(id);
  }
  renderFeed();
}

function shareItem(item) {
  const text = `Add ${item.title} to your StoryStream list — ${item.vibe}.`;
  navigator.clipboard?.writeText(text).catch(() => {});
}

function observeActiveCard() {
  const cards = [...elements.feed.querySelectorAll('.story-card')];
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;
      const activeId = active.target.dataset.id;
      const items = getFilteredItems();
      const activeIndex = items.findIndex((item) => item.id === activeId);
      if (activeIndex >= 0) {
        elements.progressTitle.textContent = items[activeIndex].title;
        elements.progressBar.style.width = `${Math.round(((activeIndex + 1) / items.length) * 100)}%`;
      }
    },
    { root: elements.feed, threshold: [0.35, 0.6, 0.9] },
  );

  cards.forEach((card) => observer.observe(card));
}

function setCategory(category) {
  state.category = category;
  renderControls();
  renderFeed();
}

function setMood(mood) {
  state.mood = mood;
  renderControls();
  renderFeed();
}

function renderControls() {
  renderPills(elements.nav, categories, state.category, setCategory);
  renderPills(elements.moodFilters, moods, state.mood, setMood);
}

function randomizeMood() {
  const choice = moodSpotlights[Math.floor(Math.random() * moodSpotlights.length)];
  elements.spotlightTitle.textContent = choice.title;
  elements.spotlightCopy.textContent = choice.copy;
  const nonDefaultMoods = moods.filter((mood) => mood !== 'All vibes');
  setMood(nonDefaultMoods[Math.floor(Math.random() * nonDefaultMoods.length)]);
}

elements.search.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderFeed();
});

elements.randomizeBtn.addEventListener('click', randomizeMood);

renderControls();
renderFeed();
updateSidebar(library);
