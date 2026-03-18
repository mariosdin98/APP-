const categories = ['For You', 'Books', 'Movies', 'Trending', 'Saved'];
const actions = [
  { icon: '❤️', stat: 'likes' },
  { icon: '💬', stat: 'comments' },
  { icon: '🔖', stat: 'saves' },
  { icon: '↗', stat: 'share' },
];

const feed = [
  {
    type: 'Book',
    title: 'The Atlas Six',
    creator: 'Olivie Blake',
    tag: '#DarkAcademia',
    accent: 'linear-gradient(135deg, #8b5cf6 0%, #312e81 55%, #0f172a 100%)',
    blurb: 'A secret society. Dangerous magic. Six brilliant rivals competing for one unforgettable place.',
    stats: { likes: '124K', comments: '8.2K', saves: '51K', share: 'Share' },
    chips: ['Morally gray', 'Twisty', 'BookTok favorite'],
    rating: '4.8',
    length: '398 pages',
  },
  {
    type: 'Movie',
    title: 'Interstellar',
    creator: 'Christopher Nolan',
    tag: '#MindBlown',
    accent: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #38bdf8 100%)',
    blurb: 'Time bends, gravity whispers, and love stretches across galaxies in this cinematic trip.',
    stats: { likes: '210K', comments: '15K', saves: '92K', share: 'Share' },
    chips: ['Sci-fi epic', 'Space', 'Emotional'],
    rating: '9.2',
    length: '2h 49m',
  },
  {
    type: 'Book',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    creator: 'Gabrielle Zevin',
    tag: '#BeautifulWriting',
    accent: 'linear-gradient(135deg, #f97316 0%, #fb7185 45%, #7c3aed 100%)',
    blurb: 'A story about friendship, ambition, game design, and the messy art of building worlds together.',
    stats: { likes: '98K', comments: '5.6K', saves: '40K', share: 'Share' },
    chips: ['Character-driven', 'Bittersweet', 'Modern classic'],
    rating: '4.7',
    length: '416 pages',
  },
  {
    type: 'Movie',
    title: 'Past Lives',
    creator: 'Celine Song',
    tag: '#HeartAche',
    accent: 'linear-gradient(135deg, #111827 0%, #059669 45%, #f59e0b 100%)',
    blurb: 'Quiet longing, perfect dialogue, and a story that lingers long after the credits roll.',
    stats: { likes: '87K', comments: '4.2K', saves: '29K', share: 'Share' },
    chips: ['Romantic drama', 'A24 vibe', 'Tender'],
    rating: '8.9',
    length: '1h 46m',
  },
];

const nav = document.getElementById('categoryNav');
const feedRoot = document.getElementById('feed');

categories.forEach((category, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = category;
  if (index === 0) button.classList.add('active');
  nav.appendChild(button);
});

feed.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'story-card';
  card.style.background = item.accent;

  card.innerHTML = `
    <div class="overlay"></div>
    <div class="story-meta">
      <span class="type-pill">${item.type}</span>
      <span class="match-pill">${item.rating} ★ match</span>
    </div>
    <div class="story-content">
      <div class="story-copy">
        <p class="tag">${item.tag}</p>
        <h2>${item.title}</h2>
        <p class="creator">by / from ${item.creator}</p>
        <p class="blurb">${item.blurb}</p>
        <div class="chips">${item.chips.map((chip) => `<span>${chip}</span>`).join('')}</div>
        <div class="cta-row">
          <button type="button">${item.type === 'Movie' ? 'Watch trailer' : 'Read sample'}</button>
          <button type="button" class="secondary">Save for later</button>
        </div>
      </div>
      <div class="story-actions">
        ${actions
          .map(
            (action) => `
              <button type="button" class="action-btn">
                <span class="action-icon">${action.icon}</span>
                <span>${item.stats[action.stat]}</span>
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
    <div class="story-footer">
      <div>
        <span class="footer-label">Length</span>
        <strong>${item.length}</strong>
      </div>
      <div>
        <span class="footer-label">Community verdict</span>
        <strong>Worth the hype</strong>
      </div>
    </div>
  `;

  feedRoot.appendChild(card);
});
