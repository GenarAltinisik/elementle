/**
 * Elementle Game Engine (Bilingual TR/EN, Daily + Endless Mode)
 * 100% Client-Side - Ready for GitHub Pages
 */

(function () {
  'use strict';

  // --- TRANSLATIONS DICTIONARY ---
  const I18N = {
    tr: {
      siteTitle: 'ELEME<span class="green-letter">N</span>TLE',
      modeDaily: 'Günün Elementi',
      modeEndless: 'Sonsuz Mod',
      streak: 'Seri',
      guessPlaceholder: 'Element ara veya simge yaz...',
      guessBtn: 'TAHMİN ET',
      nextElementBtn: 'Sonraki Element ➔',
      playAgainBtn: 'Tekrar Oyna ➔',
      hintTooltip: 'İpucu',
      hintPrefix: '💡 İpucu: ',
      howToPlayBtn: 'Nasıl Oynanır',
      statsBtn: 'İstatistikler',
      periodicTableBtn: 'Periyodik Tablo',
      closeBtn: 'Kapat',
      wikiBtn: '📖 Vikipedi',
      shareBtn: 'Sonuçları Paylaş',
      copiedToast: 'Sonuçlar panoya kopyalandı! 📋',
      invalidToast: 'Lütfen geçerli bir element seçin.',
      alreadyGuessedToast: 'Bu elementi zaten tahmin ettiniz!',
      winToast: 'Tebrikler! Doğru bildin! 🎉',
      loseToast: 'Hakkın bitti! Bir dahaki sefere bol şans!',
      nextDailyIn: 'Sonraki Günün Elementi: ',
      answerWas: 'Cevap:',
      howToPlayTitle: 'Nasıl Oynanır?',
      howToPlayIntro: 'Gizemli elementi <strong>8 denemede</strong> bulmaya çalışın. Her tahmininizde ipuçları renklenecektir:',
      rule1: '<strong>⬆️ / ⬇️</strong> Hedef elementin atom numarası daha YÜKSEK (⬆️) veya daha DÜŞÜK (⬇️).',
      rule2: '<strong>🟩 Yeşil Harf:</strong> Harf simgede doğru sırada yer alıyor.',
      rule3: '<strong>🟨 Sarı Harf:</strong> Harf simgede var ancak sırası farklı.',
      rule4: '<strong>⬜ Gri/Beyaz Harf:</strong> Harf gizemli elementin simgesinde yok.',
      rule5: '<strong>🟩 Yeşil Grup (Family):</strong> Tahmininiz gizemli element ile aynı kimyasal grupta!',
      rule6: '<strong>💡 İpucu Butonu:</strong> Tıkandığınızda elemente ait ilginç bir bilgiyi görün.',
      rule7: '<strong>📅 Günün Modu:</strong> Her gün gece yarısı (00:00) tüm dünya için tek bir gizemli element yenilenir.',
      rule8: '<strong>♾️ Sonsuz Mod:</strong> İstediğiniz kadar arka arkaya oynayın, kazanma serinizi yükseltin!',
      statsTitle: 'İstatistikler',
      statPlayed: 'Oynanan',
      statWinPct: 'Kazanma %',
      statCurStreak: 'Mevcut Seri',
      statMaxStreak: 'En İyi Seri',
      statDistribution: 'Tahmin Dağılımı',
      ptableTitle: 'Periyodik Tablo',
      ptableSearchPlaceholder: 'Element adı veya simge ile filtrele...',
      ptableHint: '💡 Bir elemente tıklayarak doğrudan tahmin kutusuna ekleyebilirsiniz.',
      samplePlaceholderNames: ['Oksijen', 'Altın', 'Neon', 'Demir', 'Helyum', 'Karbon', 'Gümüş', 'Çinko', 'Bakır', 'Uranyum', 'Platin', 'Azot']
    },
    en: {
      siteTitle: 'ELEME<span class="green-letter">N</span>TLE',
      modeDaily: 'Daily Element',
      modeEndless: 'Endless Mode',
      streak: 'Streak',
      guessPlaceholder: 'Search element or symbol...',
      guessBtn: 'GUESS',
      nextElementBtn: 'Next Element ➔',
      playAgainBtn: 'Play Again ➔',
      hintTooltip: 'Hint',
      hintPrefix: '💡 Hint: ',
      howToPlayBtn: 'How to Play',
      statsBtn: 'Statistics',
      periodicTableBtn: 'Periodic Table',
      closeBtn: 'Close',
      wikiBtn: '📖 Wikipedia',
      shareBtn: 'Share Results',
      copiedToast: 'Results copied to clipboard! 📋',
      invalidToast: 'Please select a valid element.',
      alreadyGuessedToast: 'You have already guessed this element!',
      winToast: 'Well done! You found it! 🎉',
      loseToast: 'Game over! Better luck next time!',
      nextDailyIn: 'Next Daily Element in: ',
      answerWas: 'Answer:',
      howToPlayTitle: 'How to Play',
      howToPlayIntro: 'Guess the mystery element in <strong>8 tries</strong>. Each guess will reveal color-coded clues:',
      rule1: '<strong>⬆️ / ⬇️</strong> Target atomic number is HIGHER (⬆️) or LOWER (⬇️).',
      rule2: '<strong>🟩 Green Letter:</strong> Correct letter in the exact position.',
      rule3: '<strong>🟨 Yellow Letter:</strong> Letter is in the symbol, but wrong position.',
      rule4: '<strong>⬜ Dim Letter:</strong> Letter does not exist in the mystery symbol.',
      rule5: '<strong>🟩 Green Family:</strong> Your guess belongs to the exact same chemical group!',
      rule6: '<strong>💡 Hint Button:</strong> Stuck? Tap for an interesting clue about the element.',
      rule7: '<strong>📅 Daily Mode:</strong> One unified element per day, refreshes at midnight.',
      rule8: '<strong>♾️ Endless Mode:</strong> Play unlimited rounds anytime and build up your win streak!',
      statsTitle: 'Statistics',
      statPlayed: 'Played',
      statWinPct: 'Win %',
      statCurStreak: 'Current Streak',
      statMaxStreak: 'Max Streak',
      statDistribution: 'Guess Distribution',
      ptableTitle: 'Periodic Table',
      ptableSearchPlaceholder: 'Filter by element name or symbol...',
      ptableHint: '💡 Click any element to place it into the guess bar.',
      samplePlaceholderNames: ['Oxygen', 'Gold', 'Neon', 'Iron', 'Helium', 'Carbon', 'Silver', 'Zinc', 'Copper', 'Uranium', 'Platinum', 'Nitrogen']
    }
  };

  // --- PSEUDO RANDOM NUMBER GENERATOR (Mulberry32) ---
  function mulberry32(seed) {
    return function () {
      var t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function getTodayDateInt() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  // --- STATE ---
  let currentLang = localStorage.getItem('elementle_lang') || (navigator.language && navigator.language.startsWith('tr') ? 'tr' : 'en');
  let currentMode = localStorage.getItem('elementle_mode') || 'daily'; // 'daily' or 'endless'

  let mysteryElement = null;
  let mysteryHintIndex = 0;
  let guessesList = [];
  let isGameOver = false;
  let guessedCorrectly = false;
  let hintRevealed = false;
  let countdownTimerInterval = null;

  // Get elements dataset reliably
  function getElements() {
    if (typeof window !== 'undefined' && window.ELEMENTS && window.ELEMENTS.length > 0) {
      return window.ELEMENTS;
    }
    if (typeof ELEMENTS !== 'undefined' && ELEMENTS.length > 0) {
      return ELEMENTS;
    }
    return [];
  }

  let elements = getElements();

  // Robust Turkish / English string normalization (handles uppercase İ, accents, diacritics)
  function normalizeStr(str) {
    if (!str) return '';
    return str
      .trim()
      .toLocaleLowerCase('tr')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  }

  // --- INITIALIZATION ---
  function init() {
    elements = getElements();
    setupDomListeners();
    initBackgroundParticles(80);
    initTypewriterPlaceholder();
    loadGameForCurrentMode();
    renderPeriodicTable();
    updateUiLanguage();
  }

  // --- DAILY & ENDLESS TARGET GENERATION ---
  function getDailyMysteryElement(dateInt) {
    const rng = mulberry32(dateInt);
    const elementIndex = Math.floor(rng() * elements.length);
    const hintIdx = Math.floor(rng() * 3);
    return {
      element: elements[elementIndex],
      hintIndex: hintIdx
    };
  }

  function getEndlessMysteryElement(excludeNum) {
    let pick;
    do {
      pick = elements[Math.floor(Math.random() * elements.length)];
    } while (excludeNum && pick.atomicNumber === excludeNum && elements.length > 1);

    const hintIdx = Math.floor(Math.random() * 3);
    return {
      element: pick,
      hintIndex: hintIdx
    };
  }

  // --- GAME STATE PERSISTENCE ---
  function loadGameForCurrentMode() {
    // Reset UI
    clearGameUi();

    if (currentMode === 'daily') {
      const todayInt = getTodayDateInt();
      const dailyObj = getDailyMysteryElement(todayInt);
      mysteryElement = dailyObj.element;
      mysteryHintIndex = dailyObj.hintIndex;

      // Check saved daily game
      const saved = JSON.parse(localStorage.getItem(`elementle_daily_${todayInt}`) || 'null');
      if (saved) {
        guessesList = saved.guessesList || [];
        isGameOver = !!saved.isGameOver;
        guessedCorrectly = !!saved.guessedCorrectly;
        hintRevealed = !!saved.hintRevealed;
      } else {
        guessesList = [];
        isGameOver = false;
        guessedCorrectly = false;
        hintRevealed = false;
      }
    } else {
      // Endless mode
      const saved = JSON.parse(localStorage.getItem('elementle_endless_session') || 'null');
      if (saved && saved.mysteryAtomicNumber) {
        mysteryElement = elements.find(e => e.atomicNumber === saved.mysteryAtomicNumber) || elements[0];
        mysteryHintIndex = saved.mysteryHintIndex || 0;
        guessesList = saved.guessesList || [];
        isGameOver = !!saved.isGameOver;
        guessedCorrectly = !!saved.guessedCorrectly;
        hintRevealed = !!saved.hintRevealed;
      } else {
        const endlessObj = getEndlessMysteryElement();
        mysteryElement = endlessObj.element;
        mysteryHintIndex = endlessObj.hintIndex;
        guessesList = [];
        isGameOver = false;
        guessedCorrectly = false;
        hintRevealed = false;
        saveEndlessState();
      }
    }

    // Render grid
    renderGrid(false);

    // If hint was already open, restore it
    if (hintRevealed) {
      renderHintBox(true);
    }

    // If game was already over, display results
    if (isGameOver) {
      displayResults();
    } else {
      enableInput(true);
    }

    updateModeTabsUi();
  }

  function saveCurrentState() {
    if (currentMode === 'daily') {
      const todayInt = getTodayDateInt();
      localStorage.setItem(`elementle_daily_${todayInt}`, JSON.stringify({
        guessesList,
        isGameOver,
        guessedCorrectly,
        hintRevealed
      }));
    } else {
      saveEndlessState();
    }
  }

  function saveEndlessState() {
    localStorage.setItem('elementle_endless_session', JSON.stringify({
      mysteryAtomicNumber: mysteryElement ? mysteryElement.atomicNumber : null,
      mysteryHintIndex,
      guessesList,
      isGameOver,
      guessedCorrectly,
      hintRevealed
    }));
  }

  function startNewEndlessRound() {
    const prevNum = mysteryElement ? mysteryElement.atomicNumber : null;
    const endlessObj = getEndlessMysteryElement(prevNum);
    mysteryElement = endlessObj.element;
    mysteryHintIndex = endlessObj.hintIndex;
    guessesList = [];
    isGameOver = false;
    guessedCorrectly = false;
    hintRevealed = false;
    saveEndlessState();

    clearGameUi();
    renderGrid(false);
    enableInput(true);
    updateModeTabsUi();
  }

  // --- STATS MANAGEMENT ---
  function getStatsKey() {
    return currentMode === 'daily' ? 'elementle_stats_daily' : 'elementle_stats_endless';
  }

  function getStats(mode) {
    const key = mode === 'daily' ? 'elementle_stats_daily' : 'elementle_stats_endless';
    const def = {
      played: 0,
      wins: 0,
      currentStreak: 0,
      maxStreak: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 'X': 0 }
    };
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return Object.assign({}, def, data);
    } catch (e) {
      return def;
    }
  }

  function recordGameResult(won, attempts) {
    const stats = getStats(currentMode);
    stats.played += 1;

    if (won) {
      stats.wins += 1;
      stats.currentStreak += 1;
      if (stats.currentStreak > stats.maxStreak) {
        stats.maxStreak = stats.currentStreak;
      }
      stats.distribution[attempts] = (stats.distribution[attempts] || 0) + 1;
    } else {
      stats.currentStreak = 0;
      stats.distribution['X'] = (stats.distribution['X'] || 0) + 1;
    }

    localStorage.setItem(getStatsKey(), JSON.stringify(stats));
    updateModeTabsUi();
  }

  // --- GUESS PROCESSING ---
  function processGuess(inputVal) {
    if (elements.length === 0) {
      elements = getElements();
    }
    if (isGameOver || !mysteryElement) return;

    const rawVal = (inputVal || '').trim();
    if (!rawVal) {
      shakeInput();
      return;
    }

    const normVal = normalizeStr(rawVal);

    // Match element by Turkish name, English name, or chemical symbol
    const found = elements.find(el => {
      return normalizeStr(el.nameEn) === normVal ||
             normalizeStr(el.nameTr) === normVal ||
             normalizeStr(el.symbol) === normVal;
    });

    if (!found) {
      showToast(I18N[currentLang].invalidToast);
      shakeInput();
      return;
    }

    // Check duplicate guess
    const already = guessesList.some(g => g.atomicNumber === found.atomicNumber);
    if (already) {
      showToast(I18N[currentLang].alreadyGuessedToast);
      shakeInput();
      return;
    }

    // Add guess
    guessesList.push({
      atomicNumber: found.atomicNumber,
      symbol: found.symbol,
      nameEn: found.nameEn,
      nameTr: found.nameTr,
      familyEn: found.familyEn,
      familyTr: found.familyTr,
      familyKey: found.familyKey
    });

    const guessIndex = guessesList.length - 1;
    const isWin = found.atomicNumber === mysteryElement.atomicNumber;
    const isExhausted = guessesList.length >= 8;

    // Render newly guessed card with animation
    renderGrid(true, guessIndex);

    // Clear input
    const inputEl = document.querySelector('.js-guess-input');
    if (inputEl) {
      inputEl.value = '';
      updateClearBtn();
    }
    removeAutocomplete();

    // Check game termination
    if (isWin) {
      isGameOver = true;
      guessedCorrectly = true;
      saveCurrentState();
      recordGameResult(true, guessesList.length);

      triggerConfetti();
      showToast(I18N[currentLang].winToast);
      displayResults();
    } else if (isExhausted) {
      isGameOver = true;
      guessedCorrectly = false;
      saveCurrentState();
      recordGameResult(false, 8);

      showToast(I18N[currentLang].loseToast);
      displayResults();
    } else {
      saveCurrentState();
    }
  }

  // --- GRID & CARD RENDERING ---
  function renderGrid(animateNew, newIndex) {
    const grid = document.querySelector('.element-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const gameOver = isGameOver || guessedCorrectly || guessesList.length >= 8;
    let nextSlotMarked = false;

    for (let i = 0; i < 8; i++) {
      const slotDiv = document.createElement('div');
      slotDiv.className = 'element';

      const guessed = guessesList[i];
      if (guessed) {
        slotDiv.classList.add('guessed-element');

        const isMatch = guessed.atomicNumber === mysteryElement.atomicNumber;
        const isHigher = guessed.atomicNumber < mysteryElement.atomicNumber;
        const atomicSignal = isMatch ? '🎉' : isHigher ? '⬆️' : '⬇️';
        const familyMatches = guessed.familyKey === mysteryElement.familyKey;

        if (isMatch) {
          slotDiv.classList.add('correct-card');
        }

        const isNewlyAnimated = animateNew && i === newIndex;
        if (isNewlyAnimated) {
          slotDiv.classList.add('card-flip');
        }

        // 1. Atomic Number + Signal
        const numSpan = document.createElement('span');
        numSpan.className = 'atomic-number';
        if (isMatch) numSpan.classList.add('green');

        const signalHtml = `<span class="atomic-signal">${atomicSignal}</span>`;

        if (isNewlyAnimated) {
          numSpan.innerHTML = `0 ${signalHtml}`;
          animateCounter(numSpan, guessed.atomicNumber, signalHtml);
        } else {
          numSpan.innerHTML = `${guessed.atomicNumber} ${signalHtml}`;
        }
        slotDiv.appendChild(numSpan);

        // 2. Symbol with Wordle Coloring
        const symSpan = document.createElement('span');
        symSpan.className = 'symbol';
        renderLetterColors(symSpan, guessed.symbol, mysteryElement.symbol);
        slotDiv.appendChild(symSpan);

        // 3. Name
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = currentLang === 'tr' ? guessed.nameTr : guessed.nameEn;
        if (isMatch) nameSpan.classList.add('green');
        slotDiv.appendChild(nameSpan);

        // 4. Family
        const famSpan = document.createElement('span');
        famSpan.className = 'family';
        famSpan.textContent = currentLang === 'tr' ? guessed.familyTr : guessed.familyEn;
        if (familyMatches) {
          famSpan.classList.add('green');
          if (isNewlyAnimated) famSpan.classList.add('family-flash');
        }
        slotDiv.appendChild(famSpan);

      } else {
        // Empty slot
        slotDiv.classList.add('shimmer');
        const slotNum = document.createElement('span');
        slotNum.className = 'element-slot-number';
        slotNum.textContent = i + 1;
        slotDiv.appendChild(slotNum);

        if (!nextSlotMarked && !gameOver) {
          slotDiv.classList.add('next-slot');
          nextSlotMarked = true;
        }
      }

      grid.appendChild(slotDiv);
    }
  }

  // Symbol letter coloring matching Wordle logic
  function renderLetterColors(container, guessedSym, mysterySym) {
    const guessedChars = guessedSym.split('');
    const mysteryChars = mysterySym.toLowerCase().split('');

    guessedChars.forEach((ch, idx) => {
      const span = document.createElement('span');
      span.textContent = ch;
      const lower = ch.toLowerCase();

      if (mysteryChars[idx] && lower === mysteryChars[idx]) {
        span.style.color = '#62a55c'; // Exact position green
      } else if (mysteryChars.includes(lower)) {
        span.style.color = '#b59f3b'; // Wrong position yellow
      } else {
        span.style.color = 'rgba(255, 255, 255, 0.7)'; // Not in symbol
      }
      container.appendChild(span);
    });
  }

  // Smooth rolling counter animation from 0 to target
  function animateCounter(container, target, signalHtml) {
    const duration = 900;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      container.innerHTML = `${current} ${signalHtml}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        container.innerHTML = `${target} ${signalHtml}`;
        const sig = container.querySelector('.atomic-signal');
        if (sig) sig.classList.add('signal-bounce');
      }
    }
    requestAnimationFrame(step);
  }

  // --- RESULTS & SHARING ---
  function displayResults() {
    enableInput(false);

    const revealContainer = document.querySelector('.js-reveal-answer');
    const actionsContainer = document.querySelector('.js-results-actions');
    if (!revealContainer || !actionsContainer) return;

    const t = I18N[currentLang];
    const mysteryName = currentLang === 'tr' ? mysteryElement.nameTr : mysteryElement.nameEn;
    const mysteryFam = currentLang === 'tr' ? mysteryElement.familyTr : mysteryElement.familyEn;

    // 1. Reveal answer card (if not won)
    if (!guessedCorrectly) {
      revealContainer.innerHTML = `
        <div class="reveal-answer">
          <div class="reveal-answer-badge">
            <span class="reveal-answer-badge-symbol">${mysteryElement.symbol}</span>
            <span class="reveal-answer-badge-num">${mysteryElement.atomicNumber}</span>
          </div>
          <div>
            <div class="reveal-answer-name">${mysteryName}</div>
            <div class="reveal-answer-label">${mysteryFam}</div>
          </div>
        </div>
      `;
    } else {
      revealContainer.innerHTML = '';
    }

    // 2. Action buttons (Wikipedia, Share, Next Element / Play Again)
    const wikiUrl = currentLang === 'tr'
      ? `https://tr.wikipedia.org/wiki/${encodeURIComponent(mysteryElement.nameTr)}`
      : `https://en.wikipedia.org/wiki/${encodeURIComponent(mysteryElement.nameEn)}`;

    let actionsHtml = `
      <a class="wiki-button" href="${wikiUrl}" target="_blank" rel="noopener noreferrer">
        ${t.wikiBtn}
      </a>
      <button class="share-button js-btn-share" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor"><path d="M648-96q-50 0-85-35t-35-85q0-9 4-29L295-390q-16 14-36.05 22-20.04 8-42.95 8-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 43 8t36 22l237-145q-2-7-3-13.81-1-6.81-1-15.19 0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-43-8t-36-22L332-509q2 7 3 13.81 1 6.81 1 15.19 0 8.38-1 15.19-1 6.81-3 13.81l237 145q16-14 36.05-22 20.04-8 42.95-8 50 0 85 35t35 85q0 50-35 85t-85 35Zm0-72q20.4 0 34.2-13.8Q696-195.6 696-216q0-20.4-13.8-34.2Q668.4-264 648-264q-20.4 0-34.2 13.8Q600-236.4 600-216q0 20.4 13.8 34.2Q627.6-168 648-168ZM216-432q20.4 0 34.2-13.8Q264-459.6 264-480q0-20.4-13.8-34.2Q236.4-528 216-528q-20.4 0-34.2 13.8Q168-500.4 168-480q0 20.4 13.8 34.2Q195.6-432 216-432Zm432-264q20.4 0 34.2-13.8Q696-723.6 696-744q0-20.4-13.8-34.2Q668.4-792 648-792q-20.4 0-34.2 13.8Q600-764.4 600-744q0 20.4 13.8 34.2Q627.6-696 648-696Z"/></svg>
        ${t.shareBtn}
      </button>
    `;

    if (currentMode === 'endless') {
      actionsHtml += `
        <button class="next-game-btn js-btn-next-endless" type="button">
          ${t.nextElementBtn}
        </button>
      `;
    }

    actionsContainer.innerHTML = actionsHtml;

    // Attach click events
    const shareBtn = actionsContainer.querySelector('.js-btn-share');
    if (shareBtn) shareBtn.addEventListener('click', shareResults);

    const nextEndlessBtn = actionsContainer.querySelector('.js-btn-next-endless');
    if (nextEndlessBtn) nextEndlessBtn.addEventListener('click', startNewEndlessRound);

    // 3. Countdown timer for Daily Mode
    const timebox = document.querySelector('.timebox');
    if (currentMode === 'daily') {
      if (timebox) timebox.style.display = 'flex';
      updateCountdown();
      if (countdownTimerInterval) clearInterval(countdownTimerInterval);
      countdownTimerInterval = setInterval(updateCountdown, 1000);
    } else {
      if (timebox) timebox.style.display = 'none';
      if (countdownTimerInterval) clearInterval(countdownTimerInterval);
    }
  }

  function shareResults() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const modeLabel = currentMode === 'daily' ? `Daily ${todayStr}` : `Endless (#${getStats('endless').currentStreak})`;
    let text = `#Elementle 🧪 ${modeLabel}\n\n`;

    guessesList.forEach(g => {
      let line = '';
      if (g.atomicNumber < mysteryElement.atomicNumber) {
        line += '⬆️';
      } else if (g.atomicNumber > mysteryElement.atomicNumber) {
        line += '⬇️';
      } else {
        line += '🎉';
      }

      const mysterySym = mysteryElement.symbol.toLowerCase();
      const guessedSym = g.symbol.toLowerCase();

      for (let i = 0; i < guessedSym.length; i++) {
        const gc = guessedSym.charAt(i);
        const mc = mysterySym.charAt(i);
        if (gc === mc) {
          line += '🟩';
        } else if (mysterySym.includes(gc)) {
          line += '🟨';
        } else {
          line += '⬜';
        }
      }

      // Pad 1-letter symbols with matching block
      if (guessedSym.length === 1) {
        line += g.atomicNumber === mysteryElement.atomicNumber ? '🟩' : '⬜';
      }

      text += `${line}\n`;
    });

    const score = guessedCorrectly ? `${guessesList.length}/8` : 'X/8';
    text += `\n${score}\n${window.location.href.split('?')[0]}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(I18N[currentLang].copiedToast);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast(I18N[currentLang].copiedToast);
    } catch (e) {
      console.warn('Copy failed', e);
    }
    document.body.removeChild(ta);
  }

  function updateCountdown() {
    const timebox = document.querySelector('.timebox');
    if (!timebox || currentMode !== 'daily') return;

    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const diff = Math.max(0, nextMidnight - now);

    const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    timebox.innerHTML = `
      <p>
        <span>${I18N[currentLang].nextDailyIn}</span>
        <span class="countdown-digits">${h}:${m}:${s}</span>
      </p>
    `;

    // Refresh automatically at midnight
    if (diff <= 1000) {
      setTimeout(() => window.location.reload(), 1500);
    }
  }

  function clearGameUi() {
    const reveal = document.querySelector('.js-reveal-answer');
    if (reveal) reveal.innerHTML = '';
    const actions = document.querySelector('.js-results-actions');
    if (actions) actions.innerHTML = '';
    const hintBox = document.querySelector('.js-hint-container');
    if (hintBox) {
      hintBox.innerHTML = '';
      hintBox.classList.remove('hint-visible');
    }
    const timebox = document.querySelector('.timebox');
    if (timebox) timebox.style.display = 'none';
    if (countdownTimerInterval) {
      clearInterval(countdownTimerInterval);
      countdownTimerInterval = null;
    }
  }

  function enableInput(enable) {
    const inputEl = document.querySelector('.js-guess-input');
    const guessBtn = document.querySelector('.js-guess-button');
    if (inputEl) inputEl.disabled = !enable;
    if (guessBtn) guessBtn.disabled = !enable;
    if (enable && inputEl) {
      setTimeout(() => inputEl.focus(), 100);
    }
  }

  function shakeInput() {
    const inputEl = document.querySelector('.js-guess-input');
    if (!inputEl) return;
    inputEl.classList.remove('shake', 'glow-red');
    void inputEl.offsetWidth;
    inputEl.classList.add('shake', 'glow-red');
    setTimeout(() => {
      inputEl.classList.remove('shake', 'glow-red');
    }, 600);
  }

  // --- HINT LOGIC ---
  function toggleHint() {
    if (!mysteryElement) return;
    const hintBox = document.querySelector('.js-hint-container');
    if (!hintBox) return;

    if (hintBox.classList.contains('hint-visible')) {
      hintBox.classList.remove('hint-visible');
      hintRevealed = false;
      saveCurrentState();
    } else {
      renderHintBox(true);
      hintRevealed = true;
      saveCurrentState();
    }
  }

  function renderHintBox(visible) {
    const hintBox = document.querySelector('.js-hint-container');
    if (!hintBox || !mysteryElement) return;

    const hints = currentLang === 'tr' ? mysteryElement.hintsTr : mysteryElement.hintsEn;
    const hintText = (hints && hints[mysteryHintIndex]) || (hints && hints[0]) || '';

    hintBox.innerHTML = `${I18N[currentLang].hintPrefix}${hintText}`;
    if (visible) {
      hintBox.classList.add('hint-visible');
    } else {
      hintBox.classList.remove('hint-visible');
    }
  }

  // --- AUTOCOMPLETE LOGIC ---
  let acIndex = -1;

  function onInputChange() {
    const inputEl = document.querySelector('.js-guess-input');
    if (!inputEl) return;
    const rawVal = inputEl.value.trim();
    updateClearBtn();

    if (!rawVal) {
      removeAutocomplete();
      return;
    }

    if (elements.length === 0) elements = getElements();
    const normVal = normalizeStr(rawVal);

    const matches = elements.filter(el => {
      const nameTr = normalizeStr(el.nameTr);
      const nameEn = normalizeStr(el.nameEn);
      const sym = normalizeStr(el.symbol);
      return nameTr.startsWith(normVal) || nameEn.startsWith(normVal) ||
             sym.startsWith(normVal) || nameTr.includes(normVal) || nameEn.includes(normVal);
    }).sort((a, b) => {
      const curA = normalizeStr(currentLang === 'tr' ? a.nameTr : a.nameEn);
      const curB = normalizeStr(currentLang === 'tr' ? b.nameTr : b.nameEn);
      const aStarts = curA.startsWith(normVal) || normalizeStr(a.symbol) === normVal;
      const bStarts = curB.startsWith(normVal) || normalizeStr(b.symbol) === normVal;
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return (currentLang === 'tr' ? a.nameTr : a.nameEn).localeCompare(currentLang === 'tr' ? b.nameTr : b.nameEn);
    }).slice(0, 8);

    renderAutocompleteDropdown(matches, rawVal);
  }

  function renderAutocompleteDropdown(matches, query) {
    removeAutocomplete();
    if (!matches.length) return;

    const wrapper = document.querySelector('.js-autocomplete-wrapper');
    if (!wrapper) return;

    const ul = document.createElement('ul');
    ul.className = 'autocomplete-list';
    acIndex = -1;

    matches.forEach(el => {
      const name = currentLang === 'tr' ? el.nameTr : el.nameEn;
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';

      // Highlight match in name if possible
      const lower = name.toLowerCase();
      const pos = lower.indexOf(query);
      let nameHtml = name;
      if (pos >= 0) {
        const before = name.substring(0, pos);
        const match = name.substring(pos, pos + query.length);
        const after = name.substring(pos + query.length);
        nameHtml = `${before}<span class="ac-match">${match}</span>${after}`;
      }

      btn.innerHTML = `
        <span class="ac-name">${nameHtml}</span>
        <span class="ac-symbol-badge">${el.symbol} (${el.atomicNumber})</span>
      `;

      btn.addEventListener('click', () => {
        selectAutocomplete(name);
      });

      li.appendChild(btn);
      ul.appendChild(li);
    });

    wrapper.appendChild(ul);
  }

  function selectAutocomplete(name) {
    const inputEl = document.querySelector('.js-guess-input');
    if (inputEl) {
      inputEl.value = name;
      updateClearBtn();
      removeAutocomplete();
      processGuess(name);
    }
  }

  function removeAutocomplete() {
    const list = document.querySelector('.autocomplete-list');
    if (list) list.remove();
    acIndex = -1;
  }

  function updateClearBtn() {
    const inputEl = document.querySelector('.js-guess-input');
    const clearBtn = document.querySelector('.js-input-clear');
    if (inputEl && clearBtn) {
      clearBtn.classList.toggle('visible', inputEl.value.length > 0);
    }
  }

  // --- TYPEWRITER PLACEHOLDER ANIMATION ---
  function initTypewriterPlaceholder() {
    const inputEl = document.querySelector('.js-guess-input');
    if (!inputEl) return;

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer = null;

    function tick() {
      if (inputEl.disabled || document.activeElement === inputEl || inputEl.value) {
        inputEl.setAttribute('placeholder', I18N[currentLang].guessPlaceholder);
        timer = setTimeout(tick, 1000);
        return;
      }

      const list = I18N[currentLang].samplePlaceholderNames;
      const word = list[wordIdx % list.length];

      if (!isDeleting) {
        charIdx++;
        inputEl.setAttribute('placeholder', word.slice(0, charIdx) + '|');
        if (charIdx === word.length) {
          isDeleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 120);
      } else {
        charIdx--;
        inputEl.setAttribute('placeholder', word.slice(0, charIdx) + '|');
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % list.length;
          timer = setTimeout(tick, 600);
          return;
        }
        timer = setTimeout(tick, 60);
      }
    }

    inputEl.addEventListener('focus', () => {
      clearTimeout(timer);
      inputEl.setAttribute('placeholder', I18N[currentLang].guessPlaceholder);
    });

    inputEl.addEventListener('blur', () => {
      clearTimeout(timer);
      timer = setTimeout(tick, 800);
    });

    setTimeout(tick, 1200);
  }

  // --- BACKGROUND PARTICLES ---
  function initBackgroundParticles(count) {
    const container = document.querySelector('.bg-particles');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      const size = (2 + Math.random() * 5).toFixed(1) + 'px';
      p.style.width = size;
      p.style.height = size;
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (16 + Math.random() * 22).toFixed(1) + 's';
      p.style.animationDelay = '-' + (Math.random() * 30).toFixed(1) + 's';
      container.appendChild(p);
    }
  }

  // --- CONFETTI ---
  function triggerConfetti() {
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 160,
        spread: 180,
        origin: { y: 0.6 }
      });
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(msg) {
    const old = document.querySelector('.popup');
    if (old) old.remove();

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = msg;
    document.body.appendChild(popup);

    requestAnimationFrame(() => {
      popup.classList.add('popup-visible');
      setTimeout(() => {
        popup.classList.remove('popup-visible');
        popup.classList.add('popup-exit');
        popup.addEventListener('transitionend', () => popup.remove(), { once: true });
      }, 2400);
    });
  }

  // --- MODAL DIALOGS ---
  function openModal(modalId) {
    const overlay = document.querySelector(modalId);
    if (!overlay) return;
    overlay.classList.add('show');
    document.body.classList.add('modal-open');

    if (modalId === '#modal-stats') {
      renderStatsModal();
    }
  }

  function closeModal() {
    document.querySelectorAll('.overlay').forEach(el => el.classList.remove('show'));
    document.body.classList.remove('modal-open');
  }

  // --- STATS MODAL RENDERING ---
  function renderStatsModal() {
    const body = document.querySelector('.js-stats-modal-body');
    if (!body) return;

    const t = I18N[currentLang];
    const dailyStats = getStats('daily');
    const endlessStats = getStats('endless');
    const activeStats = currentMode === 'daily' ? dailyStats : endlessStats;

    const winPct = activeStats.played > 0
      ? Math.round((activeStats.wins / activeStats.played) * 100)
      : 0;

    let maxDistVal = 1;
    for (let k in activeStats.distribution) {
      if (activeStats.distribution[k] > maxDistVal) maxDistVal = activeStats.distribution[k];
    }

    let distHtml = '';
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', 'X'];
    keys.forEach(k => {
      const count = activeStats.distribution[k] || 0;
      const pct = Math.max(8, Math.round((count / maxDistVal) * 100));
      distHtml += `
        <div class="distribution-row">
          <span class="dist-num">${k}</span>
          <div class="dist-bar-track">
            <div class="dist-bar-fill" style="width: ${count > 0 ? pct : 0}%">
              ${count > 0 ? count : ''}
            </div>
          </div>
        </div>
      `;
    });

    body.innerHTML = `
      <div class="stats-mode-tabs">
        <button class="stats-tab-btn ${currentMode === 'daily' ? 'active' : ''}" data-mode="daily">
          📅 ${t.modeDaily}
        </button>
        <button class="stats-tab-btn ${currentMode === 'endless' ? 'active' : ''}" data-mode="endless">
          ♾️ ${t.modeEndless}
        </button>
      </div>

      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-value">${activeStats.played}</span>
          <span class="stat-label">${t.statPlayed}</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${winPct}%</span>
          <span class="stat-label">${t.statWinPct}</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${activeStats.currentStreak}</span>
          <span class="stat-label">${t.statCurStreak}</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${activeStats.maxStreak}</span>
          <span class="stat-label">${t.statMaxStreak}</span>
        </div>
      </div>

      <div class="distribution-section">
        <h4 class="distribution-title">${t.statDistribution}</h4>
        ${distHtml}
      </div>
    `;

    // Modal tabs click
    body.querySelectorAll('.stats-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.getAttribute('data-mode');
        switchMode(mode);
        renderStatsModal();
      });
    });
  }

  function getElementGridPosition(atomicNumber) {
    if (atomicNumber === 1) return { col: 1, row: 2 };
    if (atomicNumber === 2) return { col: 18, row: 2 };

    if (atomicNumber >= 3 && atomicNumber <= 4) return { col: atomicNumber - 2, row: 3 };
    if (atomicNumber >= 5 && atomicNumber <= 10) return { col: atomicNumber + 8, row: 3 };

    if (atomicNumber >= 11 && atomicNumber <= 12) return { col: atomicNumber - 10, row: 4 };
    if (atomicNumber >= 13 && atomicNumber <= 18) return { col: atomicNumber, row: 4 };

    if (atomicNumber >= 19 && atomicNumber <= 36) return { col: atomicNumber - 18, row: 5 };

    if (atomicNumber >= 37 && atomicNumber <= 54) return { col: atomicNumber - 36, row: 6 };

    // Period 6:
    if (atomicNumber === 55) return { col: 1, row: 7 };
    if (atomicNumber === 56) return { col: 2, row: 7 };
    if (atomicNumber >= 57 && atomicNumber <= 71) {
      return { col: (atomicNumber - 57) + 3, row: 10 };
    }
    if (atomicNumber >= 72 && atomicNumber <= 86) {
      return { col: (atomicNumber - 72) + 4, row: 7 };
    }

    // Period 7:
    if (atomicNumber === 87) return { col: 1, row: 8 };
    if (atomicNumber === 88) return { col: 2, row: 8 };
    if (atomicNumber >= 89 && atomicNumber <= 103) {
      return { col: (atomicNumber - 89) + 3, row: 11 };
    }
    if (atomicNumber >= 104 && atomicNumber <= 118) {
      return { col: (atomicNumber - 104) + 4, row: 8 };
    }

    return { col: 1, row: 2 };
  }

  // --- PERIODIC TABLE MODAL ---
  function renderPeriodicTable(filterQuery) {
    const grid = document.querySelector('.js-ptable-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Add group numbers 1 to 18
    for (let g = 1; g <= 18; g++) {
      const gSpan = document.createElement('div');
      gSpan.className = 'ptable-group-num';
      gSpan.style.gridColumn = String(g);
      gSpan.style.gridRow = '1';
      gSpan.textContent = g;
      grid.appendChild(gSpan);
    }

    // Placeholders for Lanthanides and Actinides in main table
    const lanthPlaceholder = document.createElement('div');
    lanthPlaceholder.className = 'ptable-cell family-lanthanide';
    lanthPlaceholder.style.gridColumn = '3';
    lanthPlaceholder.style.gridRow = '7';
    lanthPlaceholder.style.borderStyle = 'dashed';
    lanthPlaceholder.innerHTML = `
      <span class="ptable-cell-num">57-71</span>
      <span class="ptable-cell-sym" style="font-size:1.1rem">*</span>
      <span class="ptable-cell-name">La-Lu</span>
    `;
    grid.appendChild(lanthPlaceholder);

    const actPlaceholder = document.createElement('div');
    actPlaceholder.className = 'ptable-cell family-actinide';
    actPlaceholder.style.gridColumn = '3';
    actPlaceholder.style.gridRow = '8';
    actPlaceholder.style.borderStyle = 'dashed';
    actPlaceholder.innerHTML = `
      <span class="ptable-cell-num">89-103</span>
      <span class="ptable-cell-sym" style="font-size:1.1rem">**</span>
      <span class="ptable-cell-name">Ac-Lr</span>
    `;
    grid.appendChild(actPlaceholder);

    // Row indicator labels
    const lanthLabel = document.createElement('div');
    lanthLabel.style.gridColumn = '2';
    lanthLabel.style.gridRow = '10';
    lanthLabel.style.display = 'flex';
    lanthLabel.style.alignItems = 'center';
    lanthLabel.style.justifyContent = 'center';
    lanthLabel.style.fontSize = '0.9rem';
    lanthLabel.style.color = 'rgba(255,255,255,0.6)';
    lanthLabel.textContent = '*';
    grid.appendChild(lanthLabel);

    const actLabel = document.createElement('div');
    actLabel.style.gridColumn = '2';
    actLabel.style.gridRow = '11';
    actLabel.style.display = 'flex';
    actLabel.style.alignItems = 'center';
    actLabel.style.justifyContent = 'center';
    actLabel.style.fontSize = '0.9rem';
    actLabel.style.color = 'rgba(255,255,255,0.6)';
    actLabel.textContent = '**';
    grid.appendChild(actLabel);

    const q = (filterQuery || '').trim().toLowerCase();

    elements.forEach(el => {
      const name = currentLang === 'tr' ? el.nameTr : el.nameEn;
      const matches = !q ||
        name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.atomicNumber) === q;

      const pos = getElementGridPosition(el.atomicNumber);
      const cell = document.createElement('div');
      cell.className = `ptable-cell family-${el.familyKey}`;
      cell.style.gridColumn = String(pos.col);
      cell.style.gridRow = String(pos.row);

      if (!matches) {
        cell.style.opacity = '0.15';
        cell.style.filter = 'grayscale(0.8)';
      }

      cell.innerHTML = `
        <span class="ptable-cell-num">${el.atomicNumber}</span>
        <span class="ptable-cell-sym">${el.symbol}</span>
        <span class="ptable-cell-name">${name}</span>
      `;

      cell.title = `${el.atomicNumber}. ${name} (${el.symbol}) - ${currentLang === 'tr' ? el.familyTr : el.familyEn}`;

      cell.addEventListener('click', () => {
        const inputEl = document.querySelector('.js-guess-input');
        if (inputEl && !isGameOver) {
          inputEl.value = name;
          updateClearBtn();
          closeModal();
          inputEl.focus();
        }
      });

      grid.appendChild(cell);
    });

    // Update legend bilingual labels
    renderPeriodicLegend();
  }

  function renderPeriodicLegend() {
    const ptableLegend = document.querySelector('.ptable-legend');
    if (!ptableLegend) return;
    const families = [
      { key: 'nonmetal', color: '#37903e', tr: 'Ametal', en: 'Nonmetal' },
      { key: 'noble-gas', color: '#a879e6', tr: 'Soygaz', en: 'Noble Gas' },
      { key: 'alkali-metal', color: '#e88771', tr: 'Alkali Metal', en: 'Alkali Metal' },
      { key: 'alkaline-earth', color: '#deb859', tr: 'Toprak Alkali', en: 'Alkaline Earth' },
      { key: 'metalloid', color: '#94c058', tr: 'Yarı Metal', en: 'Metalloid' },
      { key: 'halogen', color: '#38c7be', tr: 'Halojen', en: 'Halogen' },
      { key: 'metal', color: '#85add0', tr: 'Diğer Metal', en: 'Metal' },
      { key: 'transition-metal', color: '#418eff', tr: 'Geçiş Metali', en: 'Transition Metal' },
      { key: 'lanthanide', color: '#df9bc6', tr: 'Lantanit', en: 'Lanthanide' },
      { key: 'actinide', color: '#bf9891', tr: 'Aktinit', en: 'Actinide' }
    ];
    ptableLegend.innerHTML = families.map(f => `
      <div class="legend-item">
        <span class="legend-color-box" style="background:${f.color}"></span>
        ${currentLang === 'tr' ? f.tr : f.en}
      </div>
    `).join('');
  }

  // --- LANGUAGE SWITCHER ---
  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('elementle_lang', lang);
    updateUiLanguage();
    renderGrid(false);
    if (hintRevealed) renderHintBox(true);
    if (isGameOver) displayResults();
    renderPeriodicTable();
  }

  function updateUiLanguage() {
    const t = I18N[currentLang];

    // Language toggle badge
    const langBadge = document.querySelector('.js-lang-label');
    if (langBadge) {
      langBadge.textContent = currentLang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN';
    }

    // Site logo text
    const titleEl = document.querySelector('.js-nav-title');
    if (titleEl) titleEl.innerHTML = t.siteTitle;

    // Mode tabs
    const dailyTab = document.querySelector('.js-tab-daily');
    if (dailyTab) dailyTab.innerHTML = `📅 ${t.modeDaily}`;

    const endlessTab = document.querySelector('.js-tab-endless');
    if (endlessTab) endlessTab.innerHTML = `♾️ ${t.modeEndless}`;

    // Guess button
    const guessBtn = document.querySelector('.js-guess-button');
    if (guessBtn) guessBtn.textContent = t.guessBtn;

    // Hint button tooltip
    const hintBtn = document.querySelector('.js-hint-button');
    if (hintBtn) hintBtn.setAttribute('title', t.hintTooltip);

    // Modal headers & texts
    const howTitle = document.querySelector('.js-modal-how-title');
    if (howTitle) howTitle.textContent = t.howToPlayTitle;

    const statsTitle = document.querySelector('.js-modal-stats-title');
    if (statsTitle) statsTitle.textContent = t.statsTitle;

    const ptableTitle = document.querySelector('.js-modal-ptable-title');
    if (ptableTitle) ptableTitle.textContent = t.ptableTitle;

    const ptableInput = document.querySelector('.js-ptable-search');
    if (ptableInput) ptableInput.setAttribute('placeholder', t.ptableSearchPlaceholder);

    const ptableHint = document.querySelector('.js-ptable-hint');
    if (ptableHint) ptableHint.textContent = t.ptableHint;

    // How to play rules
    const howBody = document.querySelector('.js-how-to-play-body');
    if (howBody) {
      howBody.innerHTML = `
        <p class="help-rule-item">${t.howToPlayIntro}</p>
        <div class="help-rule-item">
          <span class="help-rule-icon">⬆️</span>
          <span>${t.rule1}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">🟩</span>
          <span>${t.rule2}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">🟨</span>
          <span>${t.rule3}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">⬜</span>
          <span>${t.rule4}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">🧪</span>
          <span>${t.rule5}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">💡</span>
          <span>${t.rule6}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">📅</span>
          <span>${t.rule7}</span>
        </div>
        <div class="help-rule-item">
          <span class="help-rule-icon">♾️</span>
          <span>${t.rule8}</span>
        </div>
      `;
    }

    updateModeTabsUi();
  }

  // --- MODE SWITCHER ---
  function switchMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;
    localStorage.setItem('elementle_mode', mode);
    loadGameForCurrentMode();
  }

  function updateModeTabsUi() {
    const dailyTab = document.querySelector('.js-tab-daily');
    const endlessTab = document.querySelector('.js-tab-endless');

    if (dailyTab) dailyTab.classList.toggle('active', currentMode === 'daily');
    if (endlessTab) {
      endlessTab.classList.toggle('active', currentMode === 'endless');
      const endlessStats = getStats('endless');
      const streakText = endlessStats.currentStreak > 0
        ? ` <span class="mode-streak-badge">${endlessStats.currentStreak} 🔥</span>`
        : '';
      endlessTab.innerHTML = `♾️ ${I18N[currentLang].modeEndless}${streakText}`;
    }
  }

  // --- DOM EVENT LISTENERS ---
  function setupDomListeners() {
    // Guess button & form
    const form = document.querySelector('.js-guess-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEl = document.querySelector('.js-guess-input');
        if (inputEl) processGuess(inputEl.value);
      });
    }

    const guessBtn = document.querySelector('.js-guess-button');
    if (guessBtn) {
      guessBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputEl = document.querySelector('.js-guess-input');
        if (inputEl) processGuess(inputEl.value);
      });
    }

    // Input changes & key events
    const inputEl = document.querySelector('.js-guess-input');
    if (inputEl) {
      inputEl.addEventListener('input', onInputChange);

      inputEl.addEventListener('keydown', (e) => {
        const list = document.querySelector('.autocomplete-list');
        if (!list) return;
        const btns = list.querySelectorAll('button');
        if (!btns.length) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          acIndex = (acIndex + 1) % btns.length;
          updateAcSelection(btns);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          acIndex = (acIndex - 1 + btns.length) % btns.length;
          updateAcSelection(btns);
        } else if (e.key === 'Enter' && acIndex >= 0) {
          e.preventDefault();
          btns[acIndex].click();
        } else if (e.key === 'Escape') {
          removeAutocomplete();
        }
      });
    }

    // Clear button
    const clearBtn = document.querySelector('.js-input-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (inputEl) {
          inputEl.value = '';
          updateClearBtn();
          removeAutocomplete();
          inputEl.focus();
        }
      });
    }

    // Click outside to close autocomplete
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.js-autocomplete-wrapper')) {
        removeAutocomplete();
      }
    });

    // Hint button
    const hintBtn = document.querySelector('.js-hint-button');
    if (hintBtn) {
      hintBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleHint();
      });
    }

    // Mode tabs
    const dailyTab = document.querySelector('.js-tab-daily');
    if (dailyTab) {
      dailyTab.addEventListener('click', () => switchMode('daily'));
    }

    const endlessTab = document.querySelector('.js-tab-endless');
    if (endlessTab) {
      endlessTab.addEventListener('click', () => switchMode('endless'));
    }

    // Language toggle
    const langBtn = document.querySelector('.js-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        switchLanguage(currentLang === 'tr' ? 'en' : 'tr');
      });
    }

    // Modal triggers
    const howBtn = document.querySelector('.js-btn-how-to-play');
    if (howBtn) howBtn.addEventListener('click', () => openModal('#modal-how-to-play'));

    const statsBtn = document.querySelector('.js-btn-stats');
    if (statsBtn) statsBtn.addEventListener('click', () => openModal('#modal-stats'));

    const ptableBtn = document.querySelector('.js-btn-ptable');
    if (ptableBtn) ptableBtn.addEventListener('click', () => openModal('#modal-ptable'));

    // Modal close buttons
    document.querySelectorAll('.js-modal-close').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    // Close on overlay backdrop click
    document.querySelectorAll('.overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Periodic table filter input
    const ptableSearch = document.querySelector('.js-ptable-search');
    if (ptableSearch) {
      ptableSearch.addEventListener('input', (e) => {
        renderPeriodicTable(e.target.value);
      });
    }
  }

  function updateAcSelection(btns) {
    btns.forEach((b, i) => {
      b.classList.toggle('ac-active', i === acIndex);
      if (i === acIndex) b.scrollIntoView({ block: 'nearest' });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
