/* Big Tree BBQ — light progressive enhancement.
   Cayman has no DST (always UTC-5), so open/closed is computed against a
   fixed -5 offset rather than the visitor's local clock. */
(function () {
  'use strict';

  // Opt in to scroll-reveal only when JS is alive (CSS gates the hidden
  // state on html.js, so a script failure leaves all content visible).
  document.documentElement.classList.add('js');

  // ---- Opening hours (America/Cayman, UTC-5). day 0=Sun … 6=Sat ----
  var HOURS = { 0: [11, 18], 2: [11, 18], 3: [11, 18], 4: [11, 18], 5: [11, 18] }; // Mon(1) & Sat(6) closed
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function caymanNow() {
    var now = new Date();
    // shift UTC time to fixed -5 offset
    var utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcMs - 5 * 3600000);
  }

  function computeStatus() {
    var d = caymanNow();
    var day = d.getDay();
    var hour = d.getHours() + d.getMinutes() / 60;
    var today = HOURS[day];
    if (today && hour >= today[0] && hour < today[1]) {
      return { open: true, text: 'Open now · until 6pm' };
    }
    if (today && hour < today[0]) {
      return { open: false, text: 'Opens today at 11am' };
    }
    // find next open day within a week
    for (var i = 1; i <= 7; i++) {
      var nd = (day + i) % 7;
      if (HOURS[nd]) {
        var label = (i === 1) ? 'tomorrow' : DAYS[nd];
        return { open: false, text: 'Closed · opens ' + label + ' 11am' };
      }
    }
    return { open: false, text: 'Closed' };
  }

  function paintStatus(chipId, textId) {
    var chip = document.getElementById(chipId);
    var txt = document.getElementById(textId);
    if (!chip || !txt) return;
    var s = computeStatus();
    chip.classList.remove('open', 'closed');
    chip.classList.add(s.open ? 'open' : 'closed');
    txt.textContent = s.text;
  }

  // ---- Stars ----
  var STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.4l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.8l1.1-6.5L2.6 9.2l6.5-.9L12 2.4z"/></svg>';
  function paintStars() {
    document.querySelectorAll('.stars').forEach(function (el) {
      var n = 5;
      var html = '';
      for (var i = 0; i < n; i++) html += STAR;
      el.innerHTML = html;
    });
  }

  // ---- Mobile nav ----
  function initNav() {
    var btn = document.getElementById('hamburger');
    var links = document.getElementById('navlinks');
    if (!btn || !links) return;
    function close() { links.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Open menu'); }
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  // ---- Highlight today's row in the hours table ----
  function markToday() {
    var day = caymanNow().getDay();
    document.querySelectorAll('#hours-body tr').forEach(function (tr) {
      var d = parseInt(tr.getAttribute('data-day'), 10);
      if (d === day) tr.classList.add('today');
      if (!HOURS[d]) tr.classList.add('closed');
    });
  }

  // ---- Scroll reveal ----
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    paintStars();
    paintStatus('hero-status', 'hero-status-text');
    paintStatus('visit-status', 'visit-status-text');
    markToday();
    initNav();
    initReveal();
    var y = document.getElementById('year');
    if (y) y.textContent = String(caymanNow().getFullYear());
  });
})();
