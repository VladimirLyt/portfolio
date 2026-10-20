(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const labels = { web: 'Веб', app: 'Приложение', identity: 'Айдентика', experiment: 'Эксперимент' };
  const archiveProjects = projects.filter(project => project.archive !== false);
  const dialog = document.querySelector('#project-dialog');
  const pages = [...document.querySelectorAll('[data-page]')];
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#portfolio-nav');
  function closeMenu() {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Открыть меню');
  }
  menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.portfolio-header')) closeMenu(); });
  let opener = null;
  let currentPage = '';

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function artwork(project) {
    const container = el('div', `artwork art-${project.artwork}`);
    if (project.image) {
      container.classList.add('has-image');
      const img = el('img');
      img.src = project.image;
      img.alt = `${project.title} — ${project.subtitle}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      if (project.imageWidth && project.imageHeight) {
        img.width = project.imageWidth;
        img.height = project.imageHeight;
        container.style.setProperty('--image-ratio', `${project.imageWidth} / ${project.imageHeight}`);
      }
      container.append(img);
      return container;
    }
    // Декоративные макеты на CSS; заменяются вашими изображениями.
    container.setAttribute('aria-hidden', 'true');
    const sheet = el('div', 'art-sheet');
    const copy = {
      forma: ['FORMA®', 'Spaces for\na slower life.', 'ARCHITECTURE & INTERIORS / 2026'],
      objects: ['objects', 'of everyday', 'LESS, BUT MEANINGFUL.'],
      offscript: ['OFF\nSCRIPT', 'Culture beyond the ordinary.', 'INDEPENDENT JOURNAL — ISSUE 01'],
      bloom: ['bloom', 'Studies in repetition', 'EXPERIMENT NO. 004'],
      type: ['Aa', 'MAKE\nSOME\nNOISE.', 'TYPE EXPLORATIONS / 01'],
      still: ['still.', 'a moment to yourself', 'SLOW COFFEE. GOOD DAYS.'],
      orbit: ['orbit', 'Everything is connected.', 'A STUDY OF MOVEMENT'],
      index: ['INDEX↗', 'Ideas.\nPeople.\nCulture.', 'YOUR DAILY DOSE OF SOMETHING NEW.'],
      field: ['field\nnotes', 'Collected along the way.', 'COLOUR STUDIES / 009']
    }[project.artwork] || [project.title, project.subtitle, 'PROJECT'];
    sheet.append(el('span', 'art-brand', copy[0]), el('div', 'art-shape'), el('strong', 'art-title', copy[1]), el('span', 'art-foot', copy[2]));
    container.append(sheet);
    return container;
  }

  function card(project, featured = false) {
    const article = el('article', `project-card ${project.size}${project.sections ? ' case-card' : ''}`);
    const button = el('button', 'project-open');
    button.type = 'button';
    button.setAttribute('aria-label', `Открыть проект ${project.title}`);
    button.setAttribute('aria-haspopup', 'dialog');
    button.append(artwork(project), el('span', 'card-open-icon', '↗'));
    button.addEventListener('click', () => openProject(project, button));
    const info = el('div', 'card-info');
    const names = el('div');
    names.append(el('h3', '', project.title), el('p', '', project.subtitle));
    info.append(names, el('span', 'card-category', featured ? project.year : labels[project.category]));
    article.append(button, info);
    return article;
  }

  function openProject(project, button) {
    opener = button;
    dialog.classList.toggle('is-case', Boolean(project.sections?.length));
    document.querySelector('#modal-art').replaceChildren(artwork(project));
    document.querySelector('#modal-title').textContent = project.title;
    document.querySelector('#modal-meta').textContent = `${labels[project.category]} / ${project.year}`;
    document.querySelector('#modal-description').textContent = project.description;
    document.querySelector('#modal-tags').replaceChildren(...project.tags.map(tag => el('span', '', tag)));
    document.querySelector('.modal-demo').hidden = project.demo === false;
    renderCase(project);
    dialog.showModal();
    document.body.classList.add('modal-is-open');
    dialog.scrollTop = 0;
  }

  function renderCase(project) {
    const content = document.querySelector('#modal-case');
    content.replaceChildren();
    content.hidden = !project.sections?.length;
    if (content.hidden) return;
    if (project.facts?.length) {
      const facts = el('dl', 'case-facts');
      for (const [label, value] of project.facts) {
        const fact = el('div');
        fact.append(el('dt', '', label), el('dd', '', value));
        facts.append(fact);
      }
      content.append(facts);
    }
    project.sections.forEach((section, index) => {
      const block = el('section', 'case-section');
      const heading = el('div', 'case-section-heading');
      heading.append(el('span', 'eyebrow', String(index + 1).padStart(2, '0')), el('h3', '', section.title));
      block.append(heading);
      if (section.text) block.append(el('p', 'case-section-text', section.text));
      const gallery = el('div', `case-gallery${section.layout === 'grid' ? ' case-gallery-grid' : ''}`);
      for (const image of section.images || []) {
        const figure = el('figure', 'case-figure');
        const link = el('a', 'case-image-link');
        link.href = project.assetBase + image.file;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `${image.alt} — открыть оригинал в новой вкладке`);
        const img = el('img');
        img.src = link.getAttribute('href');
        img.alt = image.alt;
        img.loading = 'lazy';
        img.decoding = 'async';
        if (image.width && image.height) {
          img.width = image.width;
          img.height = image.height;
        }
        link.append(img);
        figure.append(link);
        gallery.append(figure);
      }
      block.append(gallery);
      content.append(block);
    });
    const end = el('div', 'case-end');
    end.append(el('span', 'eyebrow', 'Спасибо за просмотр'));
    const close = el('button', 'pill', 'Вернуться к работам ↗');
    close.type = 'button';
    close.addEventListener('click', () => dialog.close());
    end.append(close);
    content.append(end);
  }

  function renderArchive(filter = 'all') {
    const filtered = archiveProjects.filter(p => filter === 'all' || p.category === filter);
    document.querySelector('#archive-grid').replaceChildren(...filtered.map(p => card(p)));
    document.querySelector('#results-count').textContent = `Показано: ${filtered.length} / ${archiveProjects.length}`;
  }

  function route() {
    const hash = location.hash.slice(1);
    const page = ['about', 'archive'].includes(hash) ? hash : 'home';
    document.documentElement.classList.toggle('snap-projects', page === 'home');
    pages.forEach(node => { node.hidden = node.dataset.page !== page; });
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === page) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = `${{ home: 'Портфолио', about: 'Обо мне', archive: 'Архив' }[page]} — дизайн и эксперименты`;
    if (dialog.open) dialog.close();
    if (hash === 'selected') document.querySelector('#selected').scrollIntoView({ behavior: 'instant' });
    else if (page !== currentPage || hash === 'home') window.scrollTo({ top: 0, behavior: 'instant' });
    currentPage = page;
  }

  // Pin only cards that fit the viewport, so all content stays reachable on short screens.
  const projectPanels = [...document.querySelectorAll('.project-panel')];
  const resizeProjects = new ResizeObserver(() => {
    projectPanels.forEach(panel => {
      const offset = parseFloat(getComputedStyle(panel).getPropertyValue('--pin-top')) || 0;
      panel.classList.toggle('is-too-tall', panel.offsetHeight + offset + 12 > window.innerHeight);
    });
  });
  projectPanels.forEach(panel => resizeProjects.observe(panel));
  let stackFrame = 0;
  window.addEventListener('scroll', () => {
    if (stackFrame) return;
    stackFrame = requestAnimationFrame(() => {
      projectPanels.forEach((panel, index) => {
        const previous = projectPanels[index - 1];
        panel.classList.toggle('is-overlapping', Boolean(previous) &&
          !panel.classList.contains('is-too-tall') &&
          panel.getBoundingClientRect().top < previous.getBoundingClientRect().bottom - 2);
      });
      stackFrame = 0;
    });
  }, { passive: true });
  window.addEventListener('resize', () => projectPanels.forEach(panel => {
    const offset = parseFloat(getComputedStyle(panel).getPropertyValue('--pin-top')) || 0;
    panel.classList.toggle('is-too-tall', panel.offsetHeight + offset + 12 > window.innerHeight);
  }));
  document.querySelector('#archive-count').textContent = String(archiveProjects.length).padStart(2, '0');
  document.querySelector('#total-count').textContent = archiveProjects.length;
  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      renderArchive(button.dataset.filter);
    });
  });
  document.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-is-open');
    if (opener?.isConnected && opener.getClientRects().length) opener.focus({ preventScroll: true });
  });
  window.addEventListener('hashchange', route);
  renderArchive();
  route();
})();
