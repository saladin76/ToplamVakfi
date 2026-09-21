/* @ds-bundle: {"format":4,"namespace":"DesignSystem_d0075d","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CertificateCard","sourcePath":"components/cards/CertificateCard.jsx"},{"name":"FundCard","sourcePath":"components/cards/FundCard.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"DonationPanel","sourcePath":"components/donation/DonationPanel.jsx"},{"name":"ReelCard","sourcePath":"components/media/ReelCard.jsx"},{"name":"StoryCircle","sourcePath":"components/media/StoryCircle.jsx"},{"name":"StatMetric","sourcePath":"components/trust/StatMetric.jsx"},{"name":"TrustList","sourcePath":"components/trust/TrustList.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"32224ec861c6","components/buttons/Button.jsx":"b5ab22bf0496","components/cards/CertificateCard.jsx":"225e2a18d8f6","components/cards/FundCard.jsx":"b3e5d7fdbf81","components/cards/ProjectCard.jsx":"45dd4646fc0e","components/donation/DonationPanel.jsx":"f30d66e34037","components/media/ReelCard.jsx":"4cb8d761bc87","components/media/StoryCircle.jsx":"7c7e64faaa37","components/trust/StatMetric.jsx":"83f4fc5499e4","components/trust/TrustList.jsx":"587d42413181","ui_kits/website/Chrome.jsx":"c45a22a53750","ui_kits/website/Home.jsx":"6324a1792f4d","ui_kits/website/ProjectDetail.jsx":"35f21ef828fe","ui_kits/website/Screens.jsx":"76bc0330dca0","ui_kits/website/data.js":"e6bac72dbcd5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d0075d = window.DesignSystem_d0075d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label used for project categories (Gaza / Al-Quds / Waqf / Zakat),
 * the "Official Minber" tag over project images, and status pills.
 */
function Badge({
  children,
  tone = "gold",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    gold: {
      fg: "var(--gold)",
      bg: "rgba(201,138,43,.12)",
      bd: "rgba(201,138,43,.32)"
    },
    red: {
      fg: "var(--red)",
      bg: "rgba(179,71,50,.10)",
      bd: "rgba(179,71,50,.30)"
    },
    green: {
      fg: "var(--green)",
      bg: "rgba(85,107,47,.12)",
      bd: "rgba(85,107,47,.30)"
    },
    deep: {
      fg: "var(--deep)",
      bg: "rgba(2,34,34,.06)",
      bd: "var(--border)"
    },
    onImage: {
      fg: "var(--red)",
      bg: "rgba(255,253,248,.92)",
      bd: "transparent"
    }
  };
  const t = tones[tone] || tones.gold;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    borderRadius: "var(--r)",
    padding: "7px 10px",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: ".01em",
    color: solid ? "#fff" : t.fg,
    background: solid ? t.fg : t.bg,
    border: `1px solid ${solid ? t.fg : t.bd}`,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Minber-i Aksa button.
 * The brand's action language: heavy weight (900), 8px radius, ~46px tall.
 * Primary = red (#b34732) with a soft red glow — used for EVERY main donate CTA.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      minHeight: 40,
      padding: "8px 14px",
      fontSize: 13
    },
    md: {
      minHeight: 46,
      padding: "12px 18px",
      fontSize: 15
    },
    lg: {
      minHeight: 54,
      padding: "15px 26px",
      fontSize: 16
    }
  };
  const variants = {
    // main donate / conversion action
    primary: {
      background: "var(--red)",
      color: "#fff",
      border: "1px solid var(--red)",
      boxShadow: "var(--shadow-cta)"
    },
    // gold accent action (secondary emphasis, e.g. Calculate Zakat cross-links)
    gold: {
      background: "var(--gold)",
      color: "#fff",
      border: "1px solid var(--gold)",
      boxShadow: "0 12px 24px rgba(201,138,43,.22)"
    },
    // support / continuity action (recurring, zakat rails)
    support: {
      background: "var(--green)",
      color: "#fff",
      border: "1px solid var(--green)",
      boxShadow: "0 12px 24px rgba(85,107,47,.20)"
    },
    // light: white with hairline border — the standard secondary
    light: {
      background: "#fff",
      color: "var(--deep)",
      border: "1px solid var(--border)"
    },
    // outline: transparent, for use ON dark/photo surfaces
    outline: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,.34)"
    },
    // ghost text link
    ghost: {
      background: "transparent",
      color: "var(--red)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: full ? "100%" : undefined,
    borderRadius: "var(--r)",
    fontFamily: "inherit",
    fontWeight: 900,
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform .15s ease, filter .15s ease, background .15s ease",
    textDecoration: "none",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: base,
    "aria-disabled": disabled || undefined,
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translateY(1px)"),
    onMouseUp: e => e.currentTarget.style.transform = "translateY(0)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/CertificateCard.jsx
try { (() => {
/**
 * Certificate / receipt preview card — an official, warm ivory surface with a
 * faint 45° gold ornament wash. Carries the mark, a document label and a
 * reference note. Used in the Certificates / Proof section and the wallet.
 */
function CertificateCard({
  label,
  holder = "Minber-i Aksa",
  note = "to be verified",
  logo,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignContent: "center",
      gap: 12,
      minHeight: 190,
      padding: 24,
      borderRadius: "var(--r)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow)",
      background: "linear-gradient(135deg, rgba(255,253,248,.98), rgba(247,242,234,.94))," + "repeating-linear-gradient(45deg, transparent 0 10px, rgba(201,138,43,.08) 10px 11px)",
      ...style
    }
  }, logo && /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      height: 34,
      width: "auto",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontWeight: 800,
      fontSize: 13
    }
  }, label), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 20,
      color: "var(--deep)"
    }
  }, holder), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, note));
}
Object.assign(__ds_scope, { CertificateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CertificateCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FundCard.jsx
try { (() => {
/**
 * Compact tile for an ongoing fund (Gaza Emergency, Al-Quds Waqf, Zakat…).
 * Content sits at the bottom. On dark surfaces pass tone="dark".
 */
function FundCard({
  title,
  note = "to be verified",
  href = "#",
  tone = "light",
  style = {}
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "grid",
      alignContent: "end",
      gap: 6,
      minHeight: 132,
      padding: 24,
      borderRadius: "var(--r)",
      border: `1px solid ${dark ? "rgba(255,255,255,.18)" : "var(--border)"}`,
      background: dark ? "rgba(255,255,255,.08)" : "#fff",
      boxShadow: dark ? "none" : "var(--shadow)",
      color: dark ? "#fff" : "var(--deep)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("small", {
    style: {
      color: dark ? "rgba(255,255,255,.7)" : "var(--muted)"
    }
  }, note));
}
Object.assign(__ds_scope, { FundCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FundCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
/**
 * The core campaign card: real field image, category + "Official Minber" tag,
 * short title/description, a red→gold progress bar and a raised/goal/donors
 * metric row. Figures should carry a "to be verified" note until confirmed.
 */
function ProjectCard({
  image,
  category = "Gaza",
  title,
  text,
  raised,
  goal,
  donors,
  note = "Official website data — to be verified",
  href = "#",
  donateHref = "#",
  featured = false,
  official = true,
  style = {}
}) {
  const pct = goal ? Math.min(raised / goal * 100, 100) : 0;
  const fmt = n => "$" + Number(n || 0).toLocaleString();
  const wrap = {
    display: featured ? "grid" : "block",
    gridTemplateColumns: featured ? "minmax(0,.95fr) minmax(0,1.05fr)" : undefined,
    gridColumn: featured ? "span 2" : undefined,
    background: "#fff",
    border: "1px solid var(--border)",
    borderRadius: "var(--r)",
    boxShadow: "var(--shadow)",
    overflow: "hidden",
    ...style
  };
  const imgWrap = {
    position: "relative",
    minHeight: featured ? "100%" : 210,
    background: "var(--deep)"
  };
  return /*#__PURE__*/React.createElement("article", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: imgWrap
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      minHeight: featured ? 300 : 210
    }
  }), official && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      insetInlineStart: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "onImage"
  }, "Official Minber"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 13,
      padding: 20,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-eyebrow",
    style: {
      margin: 0,
      color: "var(--gold)",
      fontWeight: 900,
      fontSize: 13,
      textTransform: "uppercase"
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      lineHeight: 1.15,
      color: "var(--deep)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--muted)",
      lineHeight: 1.5
    }
  }, text), goal != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 9,
      borderRadius: 999,
      background: "#f1ded7",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: `${pct}%`,
      background: "linear-gradient(90deg, var(--red), var(--gold))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      color: "var(--muted)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--deep)",
      fontSize: 16
    }
  }, fmt(raised)), "Raised"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      color: "var(--muted)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--deep)",
      fontSize: 16
    }
  }, fmt(goal)), "Goal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      color: "var(--muted)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--deep)",
      fontSize: 16
    }
  }, donors), "Donors"))), note && /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: donateHref
  }, "Give Now"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "light",
    href: href
  }, "View Impact"))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/donation/DonationPanel.jsx
try { (() => {
/**
 * Quick-donation panel — the primary conversion element. Choose an intention,
 * a frequency and an amount in one step, then donate securely. First chip in a
 * group reads as selected (deep for intention/amount, gold for frequency),
 * matching the production panel; selection is interactive.
 */
function DonationPanel({
  eyebrow = "Quick donation",
  title = "Choose your intention and amount in one step",
  intentions = ["Zakat", "Waqf", "Gaza", "Al-Aqsa", "Where Needed", "Recurring"],
  frequencies = ["One-time", "Monthly", "Every Friday"],
  amounts = [100, 250, 500, 1000],
  currency = "$",
  donateHref = "#",
  note = "Secure payment · receipt · impact updates. Live exchange rates to be verified.",
  style = {}
}) {
  const [intent, setIntent] = React.useState(intentions[0]);
  const [freq, setFreq] = React.useState(frequencies[0]);
  const [amount, setAmount] = React.useState(amounts[0]);
  const [custom, setCustom] = React.useState("");
  const chip = (active, accent) => ({
    minHeight: 44,
    borderRadius: "var(--r)",
    border: `1px solid ${active ? accent || "var(--deep)" : "var(--border)"}`,
    background: active ? accent || "var(--deep)" : "#fff",
    color: active ? "#fff" : "var(--deep)",
    fontWeight: 900,
    cursor: "pointer",
    padding: "0 10px",
    transition: "all .12s ease"
  });
  const grid3 = {
    display: "grid",
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
    gap: 8,
    marginTop: 14
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--r)",
      background: "#fff",
      boxShadow: "var(--shadow)",
      padding: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--gold)",
      fontWeight: 900,
      fontSize: 13,
      textTransform: "uppercase"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "6px 0 0",
      fontSize: "clamp(24px,3vw,34px)",
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, intentions.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    style: chip(intent === it),
    onClick: () => setIntent(it)
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, frequencies.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    style: chip(freq === f, "var(--gold)"),
    onClick: () => setFreq(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...grid3
    }
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    style: chip(amount === a && !custom),
    onClick: () => {
      setAmount(a);
      setCustom("");
    }
  }, currency, " ", a)), /*#__PURE__*/React.createElement("input", {
    placeholder: "Custom",
    value: custom,
    onChange: e => setCustom(e.target.value),
    style: {
      minHeight: 44,
      border: "1px solid var(--border)",
      borderRadius: "var(--r)",
      background: "#fff",
      padding: "0 12px",
      gridColumn: "span 2"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: donateHref
  }, "Donate Securely"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "light",
    href: donateHref
  }, "Add to Giving Basket")), note && /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      marginTop: 12,
      color: "var(--muted)"
    }
  }, note));
}
Object.assign(__ds_scope, { DonationPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/donation/DonationPanel.jsx", error: String((e && e.message) || e) }); }

// components/media/ReelCard.jsx
try { (() => {
/**
 * Vertical 9:16 impact reel card — poster image, dark base, a play glyph and
 * a short caption pinned to the bottom. Used in the "Impact Reels" rail.
 */
function ReelCard({
  title,
  image,
  href = "#",
  badge,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: "relative",
      display: "block",
      aspectRatio: "9 / 16",
      borderRadius: "var(--r)",
      overflow: "hidden",
      background: "var(--deep)",
      boxShadow: "var(--shadow)",
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(2,34,34,.78), transparent 55%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      insetInlineEnd: 14,
      display: "grid",
      placeItems: "center",
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "rgba(255,253,248,.92)",
      color: "var(--red)"
    },
    "aria-hidden": "true"
  }, "\u25B6"), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      insetInlineStart: 14,
      borderRadius: "var(--r)",
      background: "rgba(255,253,248,.92)",
      color: "var(--red)",
      padding: "6px 9px",
      fontSize: 11,
      fontWeight: 900
    }
  }, badge), /*#__PURE__*/React.createElement("b", {
    style: {
      position: "absolute",
      insetInline: 16,
      bottom: 16,
      color: "#fff",
      fontSize: 15,
      lineHeight: 1.25
    }
  }, title));
}
Object.assign(__ds_scope, { ReelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ReelCard.jsx", error: String((e && e.message) || e) }); }

// components/media/StoryCircle.jsx
try { (() => {
/**
 * Instagram-style story entry used in the homepage story rail. Gold ring,
 * red→gold gradient bubble, short label and a micro "field update" caption.
 * Horizontal-scrolls on mobile.
 */
function StoryCircle({
  label,
  image,
  caption = "field update",
  index,
  href = "#",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "grid",
      minWidth: 118,
      gap: 5,
      justifyItems: "center",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 64,
      height: 64,
      borderRadius: "50%",
      border: "3px solid var(--gold)",
      background: image ? `center/cover url(${image})` : "linear-gradient(135deg, var(--red), var(--gold))",
      color: "#fff",
      fontWeight: 900
    }
  }, !image && (index != null ? index : (label || "•").slice(0, 1))), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 14
    }
  }, label), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { StoryCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/StoryCircle.jsx", error: String((e && e.message) || e) }); }

// components/trust/StatMetric.jsx
try { (() => {
/**
 * A single big impact stat. Large figure (deep or red), small caption below.
 * Show a clear placeholder ("—" / "to be verified") when data is unconfirmed —
 * the brand never invents impact numbers.
 */
function StatMetric({
  value = "—",
  label,
  tone = "deep",
  verified = true,
  style = {}
}) {
  const color = tone === "red" ? "var(--red)" : tone === "gold" ? "var(--gold)" : "var(--deep)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: "clamp(30px,4vw,44px)",
      lineHeight: 1,
      color,
      fontWeight: 900
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontSize: 14
    }
  }, label), !verified && /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--gold)",
      fontWeight: 800
    }
  }, "to be verified"));
}
Object.assign(__ds_scope, { StatMetric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/StatMetric.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustList.jsx
try { (() => {
/**
 * Proof-path list. Each row has the brand's gold inline-start rule on a sand
 * background — used for "every intention has its own proof path", trust points
 * and update timelines.
 */
function TrustList({
  eyebrow,
  title,
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "grid",
      gap: 12,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--gold)",
      fontWeight: 900,
      fontSize: 13,
      textTransform: "uppercase"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontSize: "clamp(24px,3vw,34px)",
      lineHeight: 1.1
    }
  }, title), items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      borderInlineStart: "4px solid var(--gold)",
      borderRadius: "var(--r)",
      background: "var(--sand)",
      padding: "12px 14px",
      fontWeight: 800,
      color: "var(--deep)"
    }
  }, item)));
}
Object.assign(__ds_scope, { TrustList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Header, emergency bar, stories rail, footer
const {
  Button: KButton
} = window.DesignSystem_d0075d;
function Emergency() {
  return /*#__PURE__*/React.createElement("div", {
    className: "emergency"
  }, /*#__PURE__*/React.createElement("span", null, "Urgent appeal for Gaza \u2014 families need food today."), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.__go("checkout")
  }, "Donate now \u2192"));
}
function Header({
  page
}) {
  const K = window.KIT;
  const map = {
    Projects: "home",
    Zakat: "zakat",
    Waqf: "waqf",
    Recurring: "recurring",
    Achievements: "home",
    Knowledge: "home"
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement(Emergency, null), /*#__PURE__*/React.createElement("div", {
    className: "utility"
  }, /*#__PURE__*/React.createElement("a", null, "Become a Partner"), /*#__PURE__*/React.createElement("a", null, "Volunteer with Us"), /*#__PURE__*/React.createElement("a", null, "Explore Partner Projects")), /*#__PURE__*/React.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: () => window.__go("home"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: K.brand.logo,
    alt: "Minber-i Aksa"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, K.brand.name), /*#__PURE__*/React.createElement("small", null, K.brand.slogan))), /*#__PURE__*/React.createElement("nav", {
    className: "knav"
  }, K.nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    className: page === map[item] && item === "Projects" ? "active" : "",
    onClick: () => window.__go(map[item])
  }, item))), /*#__PURE__*/React.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: "en",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "English"), /*#__PURE__*/React.createElement("option", {
    value: "ar"
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"), /*#__PURE__*/React.createElement("option", {
    value: "tr"
  }, "T\xFCrk\xE7e")), /*#__PURE__*/React.createElement("select", {
    defaultValue: "USD $",
    "aria-label": "Currency"
  }, /*#__PURE__*/React.createElement("option", null, "USD $"), /*#__PURE__*/React.createElement("option", null, "EUR \u20AC"), /*#__PURE__*/React.createElement("option", null, "TRY \u20BA"), /*#__PURE__*/React.createElement("option", null, "SAR \u0631\u064A\u0627\u0644")), /*#__PURE__*/React.createElement("a", {
    className: "basket",
    onClick: () => window.__go("checkout")
  }, "Basket"), /*#__PURE__*/React.createElement(KButton, {
    variant: "primary",
    onClick: () => window.__go("checkout")
  }, "Donate Now"))));
}
function Stories() {
  const {
    StoryCircle
  } = window.DesignSystem_d0075d;
  const K = window.KIT;
  return /*#__PURE__*/React.createElement("section", {
    className: "stories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container storyRow"
  }, K.stories.map((s, i) => /*#__PURE__*/React.createElement(StoryCircle, {
    key: s,
    label: s,
    index: i + 1,
    href: "#"
  }))));
}
function Footer() {
  const K = window.KIT;
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container footer"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: K.brand.logo,
    alt: "Minber-i Aksa",
    style: {
      width: "auto",
      height: 56
    }
  }), /*#__PURE__*/React.createElement("p", null, K.brand.name), /*#__PURE__*/React.createElement("small", null, K.brand.address)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Donate"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.__go("home")
  }, "Projects"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.__go("zakat")
  }, "Zakat"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.__go("waqf")
  }, "Waqf"), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.__go("recurring")
  }, "Recurring")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Trust"), /*#__PURE__*/React.createElement("a", null, "Achievements"), /*#__PURE__*/React.createElement("a", null, "Bank accounts"), /*#__PURE__*/React.createElement("a", null, "Knowledge")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${K.brand.email}`
  }, K.brand.email), K.brand.phones.map(p => /*#__PURE__*/React.createElement("span", {
    key: p
  }, p)))));
}
Object.assign(window, {
  Header,
  Footer,
  Stories
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage
function Home() {
  const K = window.KIT;
  const {
    Button,
    ProjectCard,
    DonationPanel,
    TrustList,
    ReelCard,
    FundCard,
    CertificateCard
  } = window.DesignSystem_d0075d;
  const go = window.__go;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: K.projects[0].image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "heroText"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Official multilingual impact platform"), /*#__PURE__*/React.createElement("h1", null, "Give for Al-Quds. Follow the impact."), /*#__PURE__*/React.createElement("span", null, "Choose Zakat, Waqf, emergency aid or recurring giving \u2014 then receive receipts, updates and certificates when applicable."), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("checkout")
  }, "Donate Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => go("home")
  }, "Projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("recurring")
  }, "Recurring")), /*#__PURE__*/React.createElement("div", {
    className: "proof"
  }, /*#__PURE__*/React.createElement("b", null, "Instant receipt"), /*#__PURE__*/React.createElement("b", null, "Waqf certificate"), /*#__PURE__*/React.createElement("b", null, "Impact updates")))), /*#__PURE__*/React.createElement(Stories, null), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container split"
  }, /*#__PURE__*/React.createElement(DonationPanel, {
    donateHref: "#"
  }), /*#__PURE__*/React.createElement(TrustList, {
    eyebrow: "Donor trust",
    title: "Every intention has its own proof path",
    items: ["Zakat: separated receipt and distribution policy", "Waqf: certificate and donor dedication", "Projects: photos, updates and reports", "Checkout: multi-item giving basket"]
  }))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Official Minber Projects"), /*#__PURE__*/React.createElement("h2", null, "Real projects with official images and figures"), /*#__PURE__*/React.createElement("p", null, "The first campaign is visually stronger; all figures are marked for verification before live payment launch.")), /*#__PURE__*/React.createElement("div", {
    className: "projects"
  }, K.projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: e => {
      if (e.target.tagName !== "A" || e.target.textContent.includes("View")) go("project:" + p.slug);
    },
    style: {
      cursor: "pointer",
      display: "contents"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
    featured: i === 0,
    href: "#",
    donateHref: "#"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "band sand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Minber Funds"), /*#__PURE__*/React.createElement("h2", null, "Ongoing funds for repeat giving"), /*#__PURE__*/React.createElement("p", null, "Fund structure is ready and must be connected to verified CMS records.")), /*#__PURE__*/React.createElement("div", {
    className: "funds"
  }, K.funds.map(f => /*#__PURE__*/React.createElement(FundCard, {
    key: f,
    title: f
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gateways"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Zakat"), /*#__PURE__*/React.createElement("h2", null, "Zakat for Palestine \u2014 calculate and give with confidence"), /*#__PURE__*/React.createElement("p", null, "Calculator, intention checkbox, eligible recipients and a separated zakat receipt."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("zakat")
  }, "Calculate Zakat")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Waqf"), /*#__PURE__*/React.createElement("h2", null, "Al-Quds Waqf \u2014 a lasting impact"), /*#__PURE__*/React.createElement("p", null, "Waqf meter, dedication by name and a shareable certificate experience."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("waqf")
  }, "Create Waqf")))), /*#__PURE__*/React.createElement("section", {
    className: "recurring"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: "var(--gold)"
    }
  }, "Recurring Giving"), /*#__PURE__*/React.createElement("h2", null, "A small repeated gift can become a lasting impact habit"), /*#__PURE__*/React.createElement("p", null, "Daily, every Friday or monthly. Pause or cancel any time from the donor account.")), /*#__PURE__*/React.createElement("div", {
    className: "plans"
  }, ["Daily", "Every Friday", "Monthly"].map(p => /*#__PURE__*/React.createElement(FundCard, {
    key: p,
    title: p,
    note: "impact calculator",
    tone: "dark",
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Impact Reels"), /*#__PURE__*/React.createElement("h2", null, "See the impact in 30 seconds"), /*#__PURE__*/React.createElement("p", null, "Vertical video cards with poster images, linked to their projects.")), /*#__PURE__*/React.createElement("div", {
    className: "reels"
  }, K.videos.map(v => /*#__PURE__*/React.createElement(ReelCard, {
    key: v.title,
    title: v.title,
    image: v.image,
    badge: "Reel",
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "band sand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container certificates"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Proof and trust"), /*#__PURE__*/React.createElement("h2", null, "Certificates and receipts"), /*#__PURE__*/React.createElement("p", null, "Legal copy and certificate IDs remain to be verified.")), K.certificates.map(c => /*#__PURE__*/React.createElement(CertificateCard, {
    key: c,
    label: c,
    logo: "../../assets/logo-mark.png"
  })))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectDetail.jsx
try { (() => {
// Project detail
function ProjectDetail({
  slug
}) {
  const K = window.KIT;
  const {
    DonationPanel,
    ReelCard,
    Button,
    Badge
  } = window.DesignSystem_d0075d;
  const p = K.projects.find(x => x.slug === slug) || K.projects[0];
  const fmt = n => "$" + Number(n).toLocaleString();
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "detailHero"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: "var(--gold)"
    }
  }, "Official Minber \xB7 ", p.category), /*#__PURE__*/React.createElement("h1", null, p.title), /*#__PURE__*/React.createElement("p", null, p.text), /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, /*#__PURE__*/React.createElement("span", null, fmt(p.raised), " raised"), /*#__PURE__*/React.createElement("span", null, fmt(p.goal), " goal"), /*#__PURE__*/React.createElement("span", null, p.donors, " donors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => window.__go("checkout")
  }, "Give Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => window.__go("home")
  }, "Back to projects")))), /*#__PURE__*/React.createElement("div", {
    className: "container detailBody"
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h2", null, "Project story"), /*#__PURE__*/React.createElement("p", null, p.text, " Every contribution is logged with a receipt, and field updates are published to the donor wallet as distribution happens on the ground."), /*#__PURE__*/React.createElement("h2", null, "Updates and proof"), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("span", null, "Latest field update \u2014 to be verified"), /*#__PURE__*/React.createElement("span", null, "Receipt available after payment"), /*#__PURE__*/React.createElement("span", null, "Related projects respect zakat and waqf separation")), /*#__PURE__*/React.createElement("h2", null, "Impact reels"), /*#__PURE__*/React.createElement("div", {
    className: "reels"
  }, K.videos.slice(0, 3).map(v => /*#__PURE__*/React.createElement(ReelCard, {
    key: v.title,
    title: v.title,
    image: v.image,
    href: "#"
  })))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(DonationPanel, {
    eyebrow: "Give to this project",
    title: "Choose amount and frequency",
    donateHref: "#"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gift"
  }, /*#__PURE__*/React.createElement("b", null, "Gift this donation"), /*#__PURE__*/React.createElement("input", {
    className: "kinput",
    placeholder: "Recipient name"
  }), /*#__PURE__*/React.createElement("input", {
    className: "kinput",
    placeholder: "Recipient email"
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Short message"
  })))));
}
Object.assign(window, {
  ProjectDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
// Zakat, Waqf, Recurring, Checkout, Outcome screens
function Simple({
  eyebrow,
  title,
  text
}) {
  const {
    Button
  } = window.DesignSystem_d0075d;
  return /*#__PURE__*/React.createElement("section", {
    className: "simple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, text), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => window.__go("checkout")
  }, "Start Now")));
}
function Zakat() {
  const {
    Button
  } = window.DesignSystem_d0075d;
  const rows = ["Cash and savings", "Gold and silver", "Investments and trade", "Receivables", "Short-term liabilities"];
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Simple, {
    eyebrow: "Zakat",
    title: "Pay your zakat to Palestine with confidence",
    text: "Calculator, intention checkbox, eligible recipients and a separated zakat receipt."
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Calculate \xB7 Trust \xB7 Pay \xB7 Document"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "6px 0 0",
      fontSize: 30
    }
  }, "Zakat calculator"), rows.map(r => /*#__PURE__*/React.createElement("label", {
    key: r
  }, r, /*#__PURE__*/React.createElement("input", {
    className: "kinput",
    defaultValue: "0"
  })))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontWeight: 700
    }
  }, "Zakatable wealth"), /*#__PURE__*/React.createElement("b", null, "$5,000"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontWeight: 700
    }
  }, "Zakat = wealth \xD7 2.5%"), /*#__PURE__*/React.createElement("b", null, "$125.00"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      width: 18,
      height: 18
    }
  }), " I intend this amount as zakat"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: () => window.__go("checkout")
  }, "Pay Zakat Now"), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, "Nisab values and scholar review to be verified.")))));
}
function Waqf() {
  const {
    Button
  } = window.DesignSystem_d0075d;
  const [m, setM] = React.useState("1 meter");
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Simple, {
    eyebrow: "Waqf",
    title: "Create a lasting waqf in Al-Quds",
    text: "Waqf meter, dedication name, certificate and impact updates. Use Al-Quds, never Jerusalem."
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "waqf"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Interactive waqf meter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "6px 0 0",
      fontSize: 30
    }
  }, "Create your waqf"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, "One waqf meter is 1,500 USD. The Al-Aqsa compound is 144,000 m\xB2 \u2014 every meter is a tangible, lasting share."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/waqf-meter-3d.png",
    alt: "Al-Quds waqf meter \u2014 $1,500 per m\xB2",
    style: {
      width: "100%",
      height: "auto",
      margin: "6px 0 4px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, ["1 meter", "3 meters", "10 meters"].map(x => /*#__PURE__*/React.createElement("button", {
    key: x,
    className: m === x ? "active" : "",
    onClick: () => setM(x)
  }, x))), /*#__PURE__*/React.createElement("input", {
    className: "kinput",
    defaultValue: "Donor name",
    style: {
      marginTop: 12,
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cert-tughra.png",
    alt: "",
    style: {
      height: 40,
      width: "auto",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cert-title-meter.png",
    alt: "\u0645\u062A\u0631 \u0648\u0642\u0641\u064A",
    style: {
      height: 54,
      width: "auto",
      margin: "-4px auto 4px"
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--deep)",
      fontSize: 20
    }
  }, "Donor name"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      lineHeight: 1.6,
      margin: 0
    }
  }, "Contributed to a waqf serving Al-Quds, its people and Al-Aqsa visitors."), /*#__PURE__*/React.createElement("strong", null, "$1,500"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: () => window.__go("checkout")
  }, "Start Waqf"), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, "Certificate no. WQF-XXXX \u2014 to be verified.")))));
}
function Recurring() {
  const {
    FundCard,
    Button,
    TrustList
  } = window.DesignSystem_d0075d;
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Simple, {
    eyebrow: "Recurring Giving",
    title: "Become a steady supporter for Al-Quds and Gaza",
    text: "Daily, every Friday or monthly. Manage, pause or cancel any time from your donor account."
  }), /*#__PURE__*/React.createElement("div", {
    className: "container band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plans",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(FundCard, {
    title: "Daily \xB7 $10 / $25 / $50",
    note: "impact calculator"
  }), /*#__PURE__*/React.createElement(FundCard, {
    title: "Every Friday \xB7 $50 / $100",
    note: "Friday giving"
  }), /*#__PURE__*/React.createElement(FundCard, {
    title: "Monthly \xB7 $250 / $500",
    note: "steady support"
  })), /*#__PURE__*/React.createElement(TrustList, {
    eyebrow: "You stay in control",
    title: "Manage your giving any time",
    items: ["Pause anytime", "Cancel anytime", "Update the amount", "Retry a failed payment", "Receipts saved to your wallet"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => window.__go("checkout")
  }, "Activate Recurring Giving"))));
}
function Checkout() {
  const {
    Button
  } = window.DesignSystem_d0075d;
  const steps = ["Basket", "Donor details", "Payment", "Confirmation"];
  return /*#__PURE__*/React.createElement("section", {
    className: "page band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Secure Checkout"), /*#__PURE__*/React.createElement("h2", null, "Review your giving basket before payment"), /*#__PURE__*/React.createElement("p", null, "Each intention is a separate line so zakat, waqf and sadaqah stay distinct.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: i === 0 ? "var(--red)" : "var(--muted)",
      border: "1px solid var(--border)",
      borderRadius: 999,
      padding: "6px 12px",
      background: "#fff"
    }
  }, i + 1, ". ", s))), /*#__PURE__*/React.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/React.createElement("div", null, ["Full name", "Email", "Phone", "Country"].map(l => /*#__PURE__*/React.createElement("label", {
    key: l
  }, l, /*#__PURE__*/React.createElement("input", {
    className: "kinput"
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: 18,
      height: 18
    }
  }), " Donate anonymously")), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("h3", null, "Basket summary"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "Zakat"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, "$250")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "Waqf share"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15
    }
  }, "$100")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "Impact delivery support"), /*#__PURE__*/React.createElement("span", null, "optional")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)",
      margin: "6px 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--deep)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, "Total"), /*#__PURE__*/React.createElement("b", null, "$350")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: () => window.__go("success")
  }, "Complete payment"), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--muted)"
    }
  }, "Payment gateway, bank data and live FX to be verified.")))));
}
function Outcome({
  success
}) {
  const {
    Button
  } = window.DesignSystem_d0075d;
  return /*#__PURE__*/React.createElement("section", {
    className: "outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      justifySelf: "center"
    }
  }, success ? "Success" : "Payment failed"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "8px auto 14px"
    }
  }, success ? "Your donation was received" : "Payment was not completed"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 18,
      lineHeight: 1.6
    }
  }, success ? "We'll email your receipt, and your certificate and impact updates will appear in your donor wallet." : "No amount was charged. Your basket is saved — you can review it and try again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginTop: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => window.__go("home")
  }, success ? "Follow the impact" : "Try again"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => window.__go("home")
  }, "Back to home"))));
}
Object.assign(window, {
  Zakat,
  Waqf,
  Recurring,
  Checkout,
  Outcome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Minber-i Aksa website UI kit — shared demo data (mirrors production content)
window.KIT = {
  brand: {
    name: "Minbar al-Aqsâ Association",
    slogan: "Be a platform for Al-Quds",
    logo: "../../assets/logo-horizontal.png",
    email: "info@minberiaksa.org",
    address: "Haseki Sultan Mah. Turgut Özal Millet Cad. No:55 Daire:4 Fatih/İstanbul",
    phones: ["+90 539 843 60 50", "+90 537 368 64 62", "+90 533 487 41 96"]
  },
  nav: ["Projects", "Zakat", "Waqf", "Recurring", "Achievements", "Knowledge"],
  stories: ["Gaza", "Al-Aqsa", "Friday", "Waqf", "Zakat", "Reports", "Field Team"],
  projects: [{
    slug: "hot-meals-campaign",
    category: "Gaza",
    title: "One Million Meals Campaign for Gaza",
    text: "An official ongoing campaign delivering ready meals to vulnerable families in Gaza.",
    image: "https://minberiaksa.org/uploads/opt-REOUfxILZhMUGUrWJWUG_1774345471529.png",
    raised: 239090,
    goal: 1000000,
    donors: 4097
  }, {
    slug: "food-basket",
    category: "Gaza",
    title: "Food Basket Project in Gaza",
    text: "Food baskets designed to cover a family's basic needs for 10 days.",
    image: "https://minberiaksa.org/uploads/opt-oCrOI2T8SlFrRvAlmF62_1770545116670.jpg",
    raised: 7579,
    goal: 30000,
    donors: 149
  }, {
    slug: "quds-restoration",
    category: "Al-Quds",
    title: "Urgent Restoration in Al-Quds",
    text: "Restoring an old home near Al-Aqsa so a family in Al-Quds can remain safely housed.",
    image: "https://minberiaksa.org/uploads/opt-AFgF1E4JRoVKyG9bBY8l_1759992492490.png",
    raised: 2604,
    goal: 60000,
    donors: 80
  }],
  funds: ["Gaza Emergency Fund", "Al-Quds Waqf Fund", "Zakat for Palestine Fund", "Al-Aqsa Support Fund", "Where Most Needed Fund"],
  videos: [{
    title: "I Am Al-Quds",
    image: "https://minberiaksa.org/uploads/Rt6OgGa2scfshirIXoSU_1777909478057.png"
  }, {
    title: "Al-Quds Is Our Red Line",
    image: "https://minberiaksa.org/uploads/vg-kudus-bizim-kirmizi-cizgimiz.png"
  }, {
    title: "A Message for Al-Aqsa",
    image: "https://minberiaksa.org/uploads/video-kudus-minberi-aksa.png"
  }],
  certificates: ["Donation receipt", "Waqf certificate", "Thank-you certificate", "Field report"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CertificateCard = __ds_scope.CertificateCard;

__ds_ns.FundCard = __ds_scope.FundCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.DonationPanel = __ds_scope.DonationPanel;

__ds_ns.ReelCard = __ds_scope.ReelCard;

__ds_ns.StoryCircle = __ds_scope.StoryCircle;

__ds_ns.StatMetric = __ds_scope.StatMetric;

__ds_ns.TrustList = __ds_scope.TrustList;

})();
