/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import type { BlogContent, Lang } from '@/content/types';
import { PLAY_URL } from '@/lib/site';
import { LangSwitch } from './LangSwitch';

export function Blog({ lang, c }: { lang: Lang; c: BlogContent }) {
  const { t, img, sections } = c;
  const page = 'blog';
  const bodyFont = lang === 'bn' ? "'Hind Siliguri', 'Inter', system-ui, sans-serif" : "'Inter', 'Hind Siliguri', system-ui, sans-serif";
  return (
<div id="blog" lang={lang} style={{ fontFamily: bodyFont, color: "#111111", background: "#FFF6E0", minWidth: "0", overflowX: "clip" }}>

<header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(255,251,240,0.94)", backdropFilter: "blur(8px)", borderBottom: "2px solid #111111" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
<a href={`/${lang}/`} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#111111" }}>
<svg width="44" height="44" viewBox="0 0 120 120" aria-hidden="true" style={{ overflow: "visible" }}><ellipse cx="38" cy="60" rx="20" ry="12" transform="rotate(-28 38 60)" fill="#fff" stroke="#111" strokeWidth="3"/><ellipse cx="82" cy="60" rx="20" ry="12" transform="rotate(28 82 60)" fill="#fff" stroke="#111" strokeWidth="3"/><ellipse cx="60" cy="82" rx="19" ry="22" fill="#FFB82E" stroke="#111" strokeWidth="3"/><path d="M44 78 Q60 84 76 78 M45 90 Q60 96 75 90" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><path d="M52 30 Q46 14 34 14 M68 30 Q74 14 86 14" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="33" cy="14" r="5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="87" cy="14" r="5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="60" cy="46" r="20" fill="#111"/><circle cx="52" cy="44" r="6.5" fill="#fff"/><circle cx="68" cy="44" r="6.5" fill="#fff"/><circle cx="53.5" cy="45" r="3.2" fill="#111"/><circle cx="69.5" cy="45" r="3.2" fill="#111"/><path d="M53 51 Q60 58 67 51" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></svg>
<span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "26px", letterSpacing: "-0.02em" }}>Hmmly</span>
</a>
<a href={`/${lang}/`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "0 12px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>
<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
<span>{t.back}</span>
</a>
<div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
<div role="group" aria-label="Language / ভাষা" style={{ display: "flex", padding: "4px", gap: "4px", border: "2px solid #111111", borderRadius: "999px", background: "#FFFFFF" }}>
<LangSwitch lang={lang} page={page} />
</div>
<a href="#blog-get" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", background: "#111111", color: "#FFF6E0", textDecoration: "none", fontWeight: "700", fontSize: "15px", boxShadow: "0 4px 0 #E96B45" }}>{t.download}</a>
</div>
</div>
</header>

<section style={{ background: "linear-gradient(180deg, #52C3F4 0%, #9EE0FF 34%, #D8F3FF 58%, #FFF3C4 82%, #FFE0A3 100%)", borderBottom: "3px solid #111111" }}>
<div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 20px 48px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
<div className="hm-loadl" style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
<span style={{ alignSelf: "flex-start", padding: "8px 14px", borderRadius: "999px", background: "#FFB82E", border: "2px solid #111111", fontWeight: "700", fontSize: "14px" }}>{t.kicker}</span>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.06", letterSpacing: "-0.03em", textWrap: "balance" }}>{t.title}</h1>
<p style={{ margin: "0", fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: "1.6", color: "#111111", maxWidth: "36em" }}>{t.dek}</p>
<span style={{ fontSize: "14px", fontWeight: "600", color: "#2F5E47" }}>{t.meta}</span>
</div>
<div className="hm-loadr" style={{ flex: "0 1 220px", minWidth: "0", display: "flex", justifyContent: "center", margin: "0 auto" }}>
<svg className="hm-bob" width="200" height="200" viewBox="0 0 120 120" aria-hidden="true" style={{ overflow: "visible" }}><defs><radialGradient id="jgBlog"><stop offset="0" stopColor="#FFB82E" stopOpacity=".95"/><stop offset=".45" stopColor="#FFB82E" stopOpacity=".35"/><stop offset="1" stopColor="#FFB82E" stopOpacity="0"/></radialGradient></defs><circle cx="60" cy="80" r="58" fill="url(#jgBlog)"/><ellipse cx="38" cy="60" rx="20" ry="12" transform="rotate(-28 38 60)" fill="#fff" stroke="#111" strokeWidth="2.4"/><ellipse cx="82" cy="60" rx="20" ry="12" transform="rotate(28 82 60)" fill="#fff" stroke="#111" strokeWidth="2.4"/><ellipse cx="60" cy="82" rx="19" ry="22" fill="#FFB82E" stroke="#111" strokeWidth="2.6"/><path d="M44 78 Q60 84 76 78 M45 90 Q60 96 75 90" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round"/><path d="M52 30 Q46 14 34 14 M68 30 Q74 14 86 14" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><circle cx="33" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="87" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="60" cy="46" r="20" fill="#111"/><circle cx="52" cy="44" r="6.5" fill="#fff"/><circle cx="68" cy="44" r="6.5" fill="#fff"/><circle cx="53.5" cy="45" r="3.2" fill="#111"/><circle cx="69.5" cy="45" r="3.2" fill="#111"/><circle cx="45" cy="53" r="3" fill="#E96B45"/><circle cx="75" cy="53" r="3" fill="#E96B45"/><path d="M53 51 Q60 58 67 51" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></svg>
</div>
</div>
</section>

<div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px 40px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
<aside className="hm-inl" style={{ flex: "1 1 240px", minWidth: "0", background: "#FFFFFF", border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111", padding: "20px" }}>
<b style={{ display: "block", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "17px", marginBottom: "8px" }}>{t.toc}</b>
<ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
{sections.map((s, _i) => (<Fragment key={_i}>
<li><a href={`#${s.id}`} style={{ display: "flex", gap: "10px", padding: "8px 6px", borderRadius: "10px", textDecoration: "none", color: "#111111", fontSize: "15px", lineHeight: "1.4" }}><span style={{ flex: "none", width: "22px", fontWeight: "700", color: "#B8462A" }}>{s.n}</span><span>{s.h}</span></a></li>
</Fragment>))}
</ol>
</aside>

<article style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "56px" }}>
{sections.map((s, _i) => (<Fragment key={_i}>
<section id={s.id} className={s.side} style={{ display: "flex", flexDirection: "column", gap: "16px", scrollMarginTop: "90px" }}>
<div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "30px", fontWeight: "700", color: "#B8462A" }}>{s.n}</span>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", lineHeight: "1.15", letterSpacing: "-0.02em", textWrap: "balance" }}>{s.h}</h2>
</div>
{s.paras.map((p, _i) => (<Fragment key={_i}>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.75", color: "#111111", maxWidth: "40em" }}>{p}</p>
</Fragment>))}
{s.cards.length > 0 && (<>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px", marginTop: "4px" }}>
{s.cards.map((c, _i) => (<Fragment key={_i}>
<div className={c.side} style={{ padding: "20px", background: `${c.tint}`, border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111", display: "flex", flexDirection: "column", gap: "8px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "19px", lineHeight: "1.25" }}>{c.b}</b>
<span style={{ fontSize: "15.5px", lineHeight: "1.6", color: "#111111" }}>{c.text}</span>
</div>
</Fragment>))}
</div>
</>)}
{s.list.length > 0 && (<>
<ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "42em" }}>
{s.list.map((li, _i) => (<Fragment key={_i}>
<li style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 16px", background: "#FFFFFF", border: "2px solid #111111", borderRadius: "18px" }}>
<span aria-hidden="true" style={{ flex: "none", width: "28px", height: "28px", marginTop: "2px", borderRadius: "50%", background: "#B7D9C5", border: "2px solid #111111", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#111111" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
<span style={{ fontSize: "16.5px", lineHeight: "1.65" }}><b>{li.b}</b> {li.text}</span>
</li>
</Fragment>))}
</ul>
</>)}
{s.steps.length > 0 && (<>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
<ol style={{ flex: "1 1 340px", minWidth: "0", margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
{s.steps.map((st, _i) => (<Fragment key={_i}>
<li style={{ display: "flex", gap: "16px", paddingBottom: "20px" }}>
<div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
<span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#111111", color: "#FFB82E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700", fontSize: "17px" }}>{st.n}</span>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0", paddingTop: "6px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "18px" }}>{st.b}</b>
<span style={{ fontSize: "16px", lineHeight: "1.65", color: "#111111" }}>{st.text}</span>
</div>
</li>
</Fragment>))}
</ol>
<div style={{ flex: "0 1 220px", minWidth: "0", margin: "0 auto", width: "220px", border: "8px solid #111111", borderRadius: "38px", overflow: "hidden", background: "#111111", boxShadow: "0 8px 0 rgba(17,17,17,0.9)", transform: "rotate(2deg)" }}>
<img loading="lazy" decoding="async" src={img.story} alt={t.altStory} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1 / 2" }}/>
</div>
</div>
</>)}
{s.quote && (<>
<blockquote style={{ margin: "4px 0 0", padding: "22px 24px", background: "#FFF0C2", border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "21px", lineHeight: "1.45", fontWeight: "600", maxWidth: "38em" }}>{s.quote}</blockquote>
</>)}
{s.note && (<>
<p style={{ margin: "0", padding: "16px 18px", border: "2px dashed #111111", borderRadius: "18px", background: "#FFFBF0", fontSize: "15.5px", lineHeight: "1.6", maxWidth: "42em" }}>{s.note}</p>
</>)}
</section>
</Fragment>))}
</article>
</div>

<section id="blog-get" style={{ padding: "24px 20px 88px" }}>
<div className="hm-inu" style={{ maxWidth: "1060px", margin: "0 auto", background: "linear-gradient(135deg, #FFD05A 0%, #FFB82E 45%, #F58A52 100%)", border: "3px solid #111111", borderRadius: "40px", boxShadow: "0 8px 0 #111111", padding: "clamp(28px, 5vw, 56px)", display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "center" }}>
<div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.ctaTitle}</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#111111" }}>{t.ctaSub}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
<a href={PLAY_URL} style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "60px", padding: "0 26px", borderRadius: "22px", background: "#111111", color: "#FFF6E0", border: "2.5px solid #111111", boxShadow: "0 5px 0 #E96B45", textDecoration: "none", fontWeight: "700", fontSize: "18px" }}>
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5v17l14-8.5z" fill="#FFB82E"/></svg>
<span>{t.android}</span>
</a>
<a href={`/${lang}/`} style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 20px", borderRadius: "22px", background: "#FFFFFF", color: "#111111", border: "2.5px solid #111111", boxShadow: "0 5px 0 #111111", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>{t.backHome}</a>
</div>
</div>
<div style={{ flex: "0 1 240px", minWidth: "0", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
<div style={{ background: "#FFFFFF", border: "3px solid #111111", borderRadius: "28px", boxShadow: "0 6px 0 #111111", padding: "18px", transform: "rotate(-2deg)" }}>
<img loading="lazy" decoding="async" src={"/images/qr-play.svg"} alt={t.qrAlt} style={{ display: "block", width: "180px", maxWidth: "56vw", height: "auto", aspectRatio: "1 / 1" }}/>
</div>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "24px", fontWeight: "700" }}>{t.qrHand}</span>
</div>
</div>
</section>

<footer style={{ background: "#111111", color: "#FFF6E0", padding: "40px 20px" }}>
<div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "22px", color: "#FFB82E" }}>{t.tagline}</span>
<nav aria-label={t.footerLabel} style={{ display: "flex", gap: "20px" }}><a href={`/${lang}/privacy/`} style={{ color: "#FFF6E0", fontSize: "15px" }}>{t.fPrivacy}</a><a href={`/${lang}/contact/`} style={{ color: "#FFF6E0", fontSize: "15px" }}>{t.fContact}</a></nav>
<span style={{ fontSize: "13px", color: "#A9A9A1" }}>{t.copyright}</span>
</div>
</footer>

</div>
  );
}
