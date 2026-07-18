/* Vivine's Kitchen — small progressive-enhancement helpers.
   No dependencies. Everything degrades gracefully without JS. */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      var use = toggle.querySelector('use');
      if (use) use.setAttribute('href', open ? '#i-close' : '#i-menu');
    });
    // Close the menu when a link is chosen (mobile)
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        var use = toggle.querySelector('use');
        if (use) use.setAttribute('href', '#i-menu');
      }
    });
  }

  /* ---- Current year in footer ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Highlight today's row in the hours table ---- */
  var todayRow = document.querySelector('#hours tr[data-day="' + new Date().getDay() + '"]');
  if (todayRow) todayRow.classList.add('is-today');

  /* ---- Reveal-on-scroll: draws the signature chalk underline in ---- */
  var reveals = document.querySelectorAll('[data-reveal], .reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Contact form ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    var fields = form.querySelectorAll('[data-validate]');

    function showError(field, on) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.toggle('invalid', on);
      field.setAttribute('aria-invalid', String(on));
    }

    function validateField(field) {
      var val = field.value.trim();
      var ok = true;
      if (field.hasAttribute('required') && !val) ok = false;
      if (ok && field.type === 'email' && val) {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }
      if (ok && field.dataset.validate === 'contact' && val) {
        // accept a phone (>=6 digits) OR an email
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || (val.replace(/\D/g, '').length >= 6);
      }
      showError(field, !ok);
      return ok;
    }

    fields.forEach(function (f) {
      f.addEventListener('blur', function () { validateField(f); });
      f.addEventListener('input', function () {
        if (f.closest('.field').classList.contains('invalid')) validateField(f);
      });
    });

    function setStatus(kind, msg) {
      if (!status) return;
      status.className = 'form-status show form-status--' + kind;
      var use = status.querySelector('use');
      if (use) use.setAttribute('href', kind === 'ok' ? '#i-check' : '#i-alert');
      var text = status.querySelector('.form-status__text');
      if (text) text.innerHTML = msg;
      status.setAttribute('role', kind === 'ok' ? 'status' : 'alert');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allOk = true;
      fields.forEach(function (f) { if (!validateField(f)) allOk = false; });
      if (!allOk) {
        setStatus('err', 'Please check the highlighted fields and try again.');
        var firstBad = form.querySelector('.field.invalid [data-validate]');
        if (firstBad) firstBad.focus();
        return;
      }

      var name = (form.elements['name'].value || '').trim();
      var contact = (form.elements['contact'].value || '').trim();
      var message = (form.elements['message'].value || '').trim();

      var endpoint = form.getAttribute('data-endpoint');
      var hasRealEndpoint = endpoint && endpoint.indexOf('your-form-id') === -1;

      if (hasRealEndpoint) {
        // Owner has wired a Formspree-style endpoint — POST as email.
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; }
        setStatus('ok', 'Sending your message&hellip;');
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        }).then(function (r) {
          if (r.ok) {
            form.reset();
            setStatus('ok', 'Thank you, ' + escapeHtml(name) + '! Your message is on its way. We’ll be in touch.');
          } else {
            throw new Error('bad status');
          }
        }).catch(function () {
          setStatus('err', 'Something went wrong sending that. Please <a href="tel:+13459477435">call us on +1&nbsp;345-947-7435</a> instead.');
        }).finally(function () {
          if (btn) btn.disabled = false;
        });
        return;
      }

      // Default channel: hand off to WhatsApp with a prefilled message.
      var text = 'Hi Vivine’s Kitchen! I’m ' + name +
        '. ' + message + ' (Reach me: ' + contact + ')';
      var wa = 'https://wa.me/13459477435?text=' + encodeURIComponent(text);
      setStatus('ok', 'Thanks, ' + escapeHtml(name) +
        '! Opening WhatsApp to send your note. If it doesn’t open, ' +
        '<a href="' + wa + '" target="_blank" rel="noopener">tap here</a> or ' +
        '<a href="tel:+13459477435">call +1&nbsp;345-947-7435</a>.');
      window.open(wa, '_blank', 'noopener');
      form.reset();
    });

    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }
  }
})();
