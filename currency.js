// Site-wide currency display switcher.
// Base currency is USD. Rates are indicative and must be approved/updated by the foundation.
(function () {
  var RATES = { USD: 1, EUR: 0.92, TRY: 34.2 };
  var SYMBOL = { USD: '$', EUR: '€', TRY: '₺' };
  var KEY = 'tv_currency';
  var AMOUNT_RE = /([$€₺])\s?(\d[\d,]*(?:\.\d+)?)/g;

  function current() {
    var c = localStorage.getItem(KEY);
    return RATES[c] ? c : 'USD';
  }

  function fmt(usd, cur) {
    var v = usd * RATES[cur];
    var rounded = v >= 100 ? Math.round(v) : Math.round(v * 100) / 100;
    return SYMBOL[cur] + rounded.toLocaleString('en-US');
  }

  // Collect text nodes holding a currency amount, caching their USD baseline.
  function collect(root) {
    var out = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.indexOf('$') < 0 && n.nodeValue.indexOf('€') < 0 && n.nodeValue.indexOf('₺') < 0) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || p.isContentEditable) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-no-currency]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) out.push(node);
    return out;
  }

  var nodes = null;

  function apply(cur) {
    if (!nodes) {
      nodes = collect(document.body).map(function (n) {
        return { node: n, base: n.nodeValue };
      });
    }
    nodes.forEach(function (rec) {
      rec.node.nodeValue = rec.base.replace(AMOUNT_RE, function (_m, _sym, num) {
        var usd = Number(String(num).replace(/,/g, ''));
        if (!isFinite(usd)) return _m;
        return fmt(usd, cur);
      });
    });
    // Standalone symbol holders (donation widget, cards) marked explicitly.
    document.querySelectorAll('[data-currency-symbol]').forEach(function (el) {
      el.textContent = SYMBOL[cur];
    });
    document.documentElement.setAttribute('data-currency', cur);
  }

  window.tvCurrency = {
    get: current,
    rates: RATES,
    rate: function (c) { return RATES[c || current()]; },
    symbol: function (c) { return SYMBOL[c || current()]; },
    format: function (usd, c) { return fmt(usd, c || current()); },
    fromUsd: function (usd, c) {
      var v = usd * RATES[c || current()];
      return v >= 100 ? Math.round(v) : Math.round(v * 100) / 100;
    },
    toUsd: function (local, c) { return local / RATES[c || current()]; },
    set: function (cur) {
      if (!RATES[cur]) return;
      localStorage.setItem(KEY, cur);
      apply(cur);
      window.dispatchEvent(new CustomEvent('tv:currency', { detail: { currency: cur } }));
    },
    refresh: function () {
      // Re-scan for amounts added to the DOM since boot WITHOUT re-reading
      // already-converted text as a new baseline.
      var known = nodes ? nodes.map(function (r) { return r.node; }) : [];
      var fresh = collect(document.body).filter(function (n) { return known.indexOf(n) < 0; });
      if (!nodes) nodes = [];
      fresh.forEach(function (n) { nodes.push({ node: n, base: n.nodeValue }); });
      apply(current());
    }
  };

  function boot() {
    // First visit: infer currency from the browser locale/region, then remember the choice.
    if (!localStorage.getItem(KEY)) {
      var locales = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).join(',');
      var tz = '';
      try { tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || ''); } catch (e) {}
      var hay = (locales + ',' + tz).toLowerCase();
      var guess = null;
      if (/(-|_)tr\b|istanbul|europe\/istanbul|\btr\b/.test(hay)) guess = 'TRY';
      else if (/(-|_)(de|fr|es|it|nl|be|at|pt|ie|fi|gr|sk|si|lv|lt|ee|cy|mt|lu)\b|europe\//.test(hay)) guess = 'EUR';
      if (guess && RATES[guess]) localStorage.setItem(KEY, guess);
    }
    var cur = current();
    if (cur !== 'USD') apply(cur);
    document.documentElement.setAttribute('data-currency', cur);
  }

  // Language suggestion — offers, never forces. The site is Arabic-first.
  window.tvSuggestLanguage = function () {
    var LANGS = { tr: 'Türkçe', en: 'English', sq: 'Shqip', ar: 'العربية' };
    if (localStorage.getItem('tv_lang')) return null;
    if (localStorage.getItem('tv_lang_dismissed') === '1') return null;
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).slice(0, 2).toLowerCase();
      if (code === 'ar') return null;
      if (LANGS[code]) return { code: code, name: LANGS[code] };
    }
    return null;
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
