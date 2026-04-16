/**
 * Rumo Certo — Institutional Portfolio
 * Vanilla JS: Hamburger Menu | Smooth Scroll | Scroll Reveal | Header Shrink
 */

(function () {
  'use strict';

  /* ─── DOM REFERENCES ─────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('main-nav');
  const header    = document.querySelector('.site-header');
  const revealEls = document.querySelectorAll('.reveal');
  const navLinks  = document.querySelectorAll('.nav-link, .footer-link');

  /* ─── HAMBURGER MENU ─────────────────────────────── */
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }

  function toggleMenu() {
    var isOpen = mainNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mainNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ─── SMOOTH SCROLL ──────────────────────────────── */
  // CSS scroll-behavior handles it, but JS fallback for older browsers
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.addEventListener('click', function (e) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerH = header ? header.offsetHeight : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - headerH;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    }
  });

  /* ─── HEADER SHRINK ON SCROLL ────────────────────── */
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var current = window.scrollY;
      if (current > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = current;
    }, { passive: true });
  }

  /* ─── SCROLL REVEAL (IntersectionObserver) ───────── */
  if ('IntersectionObserver' in window && revealEls.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ─── ACTIVE NAV LINK (scroll spy) ──────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length && navItems.length && 'IntersectionObserver' in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navItems.forEach(function (item) {
              item.classList.remove('nav-link--active');
            });
            var id = entry.target.id;
            var match = document.querySelector('.nav-link[href="#' + id + '"]');
            if (match) match.classList.add('nav-link--active');
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  }

})();
