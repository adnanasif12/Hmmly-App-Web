/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import type { HomeContent, Lang } from '@/content/types';
import { PLAY_URL } from '@/lib/site';
import { FaqList } from './FaqList';
import { LangSwitch } from './LangSwitch';

export function Home({ lang, c }: { lang: Lang; c: HomeContent }) {
  const { t, img, facts, steps, stories, rules, skills, safety, dlSteps, faqs } = c;
  const page = 'home';
  const bodyFont = lang === 'bn' ? "'Hind Siliguri', 'Inter', system-ui, sans-serif" : "'Inter', 'Hind Siliguri', system-ui, sans-serif";
  return (
<div lang={lang} style={{ fontFamily: bodyFont, color: "#111111", background: "#FFF6E0", minWidth: "0", overflowX: "clip" }}>

<header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(255,251,240,0.94)", backdropFilter: "blur(8px)", borderBottom: "2px solid #111111" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
<a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#111111" }}>
<svg width="44" height="44" viewBox="0 0 120 120" aria-hidden="true" style={{ overflow: "visible" }}><ellipse cx="38" cy="60" rx="20" ry="12" transform="rotate(-28 38 60)" fill="#fff" stroke="#111" strokeWidth="3"/><ellipse cx="82" cy="60" rx="20" ry="12" transform="rotate(28 82 60)" fill="#fff" stroke="#111" strokeWidth="3"/><ellipse cx="60" cy="82" rx="19" ry="22" fill="#FFB82E" stroke="#111" strokeWidth="3"/><path d="M44 78 Q60 84 76 78 M45 90 Q60 96 75 90" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><path d="M52 30 Q46 14 34 14 M68 30 Q74 14 86 14" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="33" cy="14" r="5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="87" cy="14" r="5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="60" cy="46" r="20" fill="#111"/><circle cx="52" cy="44" r="6.5" fill="#fff"/><circle cx="68" cy="44" r="6.5" fill="#fff"/><circle cx="53.5" cy="45" r="3.2" fill="#111"/><circle cx="69.5" cy="45" r="3.2" fill="#111"/><path d="M53 51 Q60 58 67 51" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></svg>
<span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fontSize: "26px", letterSpacing: "-0.02em" }}>Hmmly</span>
</a>
<nav className="hm-navlinks" aria-label={t.navLabel} style={{ gap: "6px", marginLeft: "12px", flexWrap: "wrap" }}>
<a href="#how" style={{ padding: "10px 14px", borderRadius: "999px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>{t.navHow}</a>
<a href="#stories" style={{ padding: "10px 14px", borderRadius: "999px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>{t.navStories}</a>
<a href="#parents" style={{ padding: "10px 14px", borderRadius: "999px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>{t.navParents}</a>
<a href="#safety" style={{ padding: "10px 14px", borderRadius: "999px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>{t.navSafety}</a>
<a href={`/${lang}/blog/`} style={{ padding: "10px 14px", borderRadius: "999px", textDecoration: "none", color: "#111111", fontWeight: "600", fontSize: "15px" }}>{t.navBlog}</a>
</nav>
<div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
<div role="group" aria-label="Language / ভাষা" style={{ display: "flex", padding: "4px", gap: "4px", border: "2px solid #111111", borderRadius: "999px", background: "#FFFFFF" }}>
<LangSwitch lang={lang} page={page} />
</div>
<a href="#download" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", background: "#111111", color: "#FFF6E0", textDecoration: "none", fontWeight: "700", fontSize: "15px", boxShadow: "0 4px 0 #E96B45" }}>{t.navDownload}</a>
</div>
</div>
</header>

<section id="top" style={{ position: "relative", background: "linear-gradient(180deg, #52C3F4 0%, #9EE0FF 34%, #D8F3FF 58%, #FFF3C4 82%, #FFE0A3 100%)", overflow: "hidden" }}>
<div aria-hidden="true" className="hm-drift hm-cloud" style={{ position: "absolute", top: "22px", left: "3%", width: "130px" }}><svg width="130" height="57" viewBox="-4 -14 82 36" style={{ display: "block", overflow: "visible" }}><path d="M0 20 Q-2 4 14 4 Q20 -10 38 -4 Q52 -12 60 4 Q76 4 74 20 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round"/></svg></div>
<div aria-hidden="true" className="hm-drift hm-cloud" style={{ position: "absolute", top: "140px", right: "8%", width: "100px", animationDelay: "-4s" }}><svg width="100" height="44" viewBox="-4 -14 82 36" style={{ display: "block", overflow: "visible" }}><path d="M0 20 Q-2 4 14 4 Q20 -10 38 -4 Q52 -12 60 4 Q76 4 74 20 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round"/></svg></div>
<div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "64px 20px 40px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
<div className="hm-loadl" style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
<span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "#FFB82E", border: "2px solid #111111", fontWeight: "700", fontSize: "14px" }}>{t.eyebrow}</span>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700", fontSize: "clamp(44px, 6.4vw, 84px)", lineHeight: "1.02", letterSpacing: "-0.03em", textWrap: "balance" }}>{t.heroTitleA} <span style={{ position: "relative", whiteSpace: "nowrap", color: "#B8462A" }}>{t.heroTitleB}</span></h1>
<p style={{ margin: "0", fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: "1.6", maxWidth: "34em", color: "#111111" }}>{t.heroSub}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
<a href={PLAY_URL} style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "60px", padding: "0 26px", borderRadius: "22px", background: "#E96B45", color: "#FFFFFF", border: "2.5px solid #111111", boxShadow: "0 5px 0 #111111", textDecoration: "none", fontWeight: "700", fontSize: "18px" }}>
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5v17l14-8.5z" fill="#FFFFFF" stroke="#111111" strokeWidth="1.6" strokeLinejoin="round"/></svg>
<span>{t.ctaAndroid}</span>
</a>
<a href="#how" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 22px", borderRadius: "22px", background: "#FFFFFF", color: "#111111", border: "2.5px solid #111111", boxShadow: "0 5px 0 #111111", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>{t.ctaHow}</a>
</div>
<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", padding: "14px", border: "2.5px solid #111111", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 5px 0 #111111", alignSelf: "flex-start", maxWidth: "100%", boxSizing: "border-box" }}>
<img loading="lazy" decoding="async" src={"/images/qr-play.svg"} alt={t.qrAlt} style={{ width: "96px", height: "96px", display: "block", flex: "none" }}/>
<div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0", maxWidth: "260px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "18px" }}>{t.qrTitle}</b>
<span style={{ fontSize: "14px", lineHeight: "1.5", color: "#62625C" }}>{t.qrSub}</span>
</div>
</div>
<p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: "#2F5E47" }}>{t.trust}</p>
</div>
<div className="hm-loadr" style={{ flex: "1 1 380px", minWidth: "0", position: "relative", display: "flex", justifyContent: "center", padding: "20px 0 30px" }}>
<div aria-hidden="true" style={{ position: "absolute", top: "10px", left: "50%", width: "360px", height: "360px", marginLeft: "-180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,214,90,0.85), rgba(255,184,46,0) 68%)" }} className="hm-glow"></div>
<div style={{ position: "relative", width: "290px", maxWidth: "78vw", border: "10px solid #111111", borderRadius: "46px", overflow: "hidden", background: "#111111", boxShadow: "0 10px 0 rgba(17,17,17,0.9), 0 30px 60px rgba(17,17,17,0.18)", transform: "rotate(-3deg)" }}>
<img loading="lazy" decoding="async" src={img.home} alt={t.altHome} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1 / 2" }}/>
</div>
<div className="hm-bob hm-herojonu" aria-hidden="true" style={{ position: "absolute", top: "-34px", right: "-2%", width: "180px" }}>
<svg width="180" height="180" viewBox="0 0 120 120" style={{ overflow: "visible", width: "100%", height: "auto" }}><defs><radialGradient id="jgHero"><stop offset="0" stopColor="#FFB82E" stopOpacity=".95"/><stop offset=".45" stopColor="#FFB82E" stopOpacity=".35"/><stop offset="1" stopColor="#FFB82E" stopOpacity="0"/></radialGradient></defs><circle cx="60" cy="80" r="58" fill="url(#jgHero)"/><g className="hm-wl"><ellipse cx="38" cy="60" rx="20" ry="12" transform="rotate(-28 38 60)" fill="#fff" fillOpacity=".92" stroke="#111" strokeWidth="2.4"/></g><g className="hm-wr"><ellipse cx="82" cy="60" rx="20" ry="12" transform="rotate(28 82 60)" fill="#fff" fillOpacity=".92" stroke="#111" strokeWidth="2.4"/></g><ellipse cx="60" cy="82" rx="19" ry="22" fill="#FFB82E" stroke="#111" strokeWidth="2.6"/><path d="M44 78 Q60 84 76 78 M45 90 Q60 96 75 90" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round"/><path d="M52 30 Q46 14 34 14" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><circle cx="33" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><path d="M68 30 Q74 14 86 14" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><circle cx="87" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="60" cy="46" r="20" fill="#111"/><circle cx="52" cy="44" r="6.5" fill="#fff"/><circle cx="68" cy="44" r="6.5" fill="#fff"/><circle cx="53.5" cy="45" r="3.2" fill="#111"/><circle cx="69.5" cy="45" r="3.2" fill="#111"/><circle cx="54.6" cy="43.6" r="1.1" fill="#fff"/><circle cx="70.6" cy="43.6" r="1.1" fill="#fff"/><circle cx="45" cy="53" r="3" fill="#E96B45"/><circle cx="75" cy="53" r="3" fill="#E96B45"/><path d="M53 51 Q60 58 67 51" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></svg>
</div>
<div aria-hidden="true" style={{ position: "absolute", bottom: "40px", left: "2%", padding: "10px 14px", background: "#FFFFFF", border: "2.5px solid #111111", borderRadius: "18px", boxShadow: "0 4px 0 #111111", fontFamily: "'Caveat', 'Atma', cursive", fontSize: "24px", fontWeight: "700", transform: "rotate(-6deg)" }}>{t.pingNote}</div>
</div>
</div>
<svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }}><path d="M0 70 Q180 10 360 55 T720 50 T1080 45 T1440 40 V120 H0Z" fill="#BBE88C" stroke="#111111" strokeWidth="3"/><path d="M0 95 Q240 60 480 88 T960 82 T1440 78 V120 H0Z" fill="#7ED68B" stroke="#111111" strokeWidth="3"/></svg>
</section>

<section aria-label={t.factsLabel} style={{ background: "#3FBF68", borderBottom: "3px solid #111111" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px 20px 36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
{facts.map((f, _i) => (<Fragment key={_i}>
<div className={f.side} style={{ padding: "18px 20px", background: "#FFFBF0", border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111", display: "flex", flexDirection: "column", gap: "4px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "34px", lineHeight: "1.1" }}>{f.big}</b>
<span style={{ fontSize: "15px", color: "#62625C" }}>{f.small}</span>
</div>
</Fragment>))}
</div>
</section>

<section id="how" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 20px 40px" }}>
<div className="hm-inl" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "28px", fontWeight: "700", color: "#B8462A" }}>{t.howKicker}</span>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: "1.08", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.howTitle}</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#62625C" }}>{t.howSub}</p>
</div>
<div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
{steps.map((s, _i) => (<Fragment key={_i}>
<article className={s.side} style={{ background: "#FFFFFF", border: "2.5px solid #111111", borderRadius: "30px", boxShadow: "0 6px 0 #111111", overflow: "hidden", display: "flex", flexDirection: "column" }}>
<div style={{ background: `${s.tint}`, borderBottom: "2.5px solid #111111", padding: "26px 0 0", display: "flex", justifyContent: "center", height: "300px", boxSizing: "border-box", overflow: "hidden" }}>
<div style={{ width: "190px", border: "7px solid #111111", borderBottom: "0", borderRadius: "32px 32px 0 0", overflow: "hidden", background: "#111111" }}>
<img loading="lazy" decoding="async" src={s.img} alt={s.alt} style={{ display: "block", width: "100%", height: "auto" }}/>
</div>
</div>
<div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "10px" }}>
<span style={{ alignSelf: "flex-start", width: "40px", height: "40px", borderRadius: "50%", background: "#111111", color: "#FFB82E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700", fontSize: "18px" }}>{s.n}</span>
<h3 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "22px", lineHeight: "1.2" }}>{s.title}</h3>
<p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.6", color: "#62625C" }}>{s.body}</p>
</div>
</article>
</Fragment>))}
</div>
</section>

<section id="stories" style={{ padding: "72px 0 80px", background: "linear-gradient(180deg, #CFEAFB 0%, #EAF6EC 40%, #CDEBCB 100%)", borderTop: "3px solid #111111" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
<div className="hm-inl" style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "28px", fontWeight: "700", color: "#B8462A" }}>{t.storiesKicker}</span>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: "1.08", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.storiesTitle}</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#62625C" }}>{t.storiesSub}</p>
<ol style={{ listStyle: "none", margin: "14px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
{stories.map((st, _i) => (<Fragment key={_i}>
<li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 16px", padding: "14px 18px", background: "#FFFFFF", border: "2.5px solid #111111", borderRadius: "22px", boxShadow: "0 4px 0 #111111" }}>
<span style={{ flex: "none", width: "48px", height: "48px", borderRadius: "16px", background: `${st.color}`, border: "2.5px solid #111111", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700", fontSize: "20px" }}>{st.n}</span>
<div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", flex: "1 1 180px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "18px" }}>{st.title}</b>
<span style={{ fontSize: "14px", color: "#62625C" }}>{st.need}</span>
</div>
<span style={{ flex: "none", padding: "6px 12px", borderRadius: "999px", background: "#DDEFE4", color: "#2F5E47", fontSize: "13px", fontWeight: "700" }}>{st.skill}</span>
</li>
</Fragment>))}
</ol>
<p style={{ margin: "6px 0 0", fontSize: "15px", fontWeight: "600", color: "#2F5E47" }}>{t.storiesMore}</p>
</div>
<div className="hm-inr" style={{ flex: "1 1 320px", minWidth: "0", display: "flex", justifyContent: "center" }}>
<div style={{ width: "280px", maxWidth: "76vw", border: "10px solid #111111", borderRadius: "46px", overflow: "hidden", background: "#111111", boxShadow: "0 10px 0 rgba(17,17,17,0.9)", transform: "rotate(3deg)" }}>
<img loading="lazy" decoding="async" src={img.path} alt={t.altPath} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1 / 2" }}/>
</div>
</div>
</div>
</section>

<section aria-labelledby="friendsTitle" style={{ background: "#FFFBF0", borderTop: "3px solid #111111", borderBottom: "3px solid #111111", padding: "80px 0" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
<h2 id="friendsTitle" className="hm-inu" style={{ margin: "0 0 36px", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", letterSpacing: "-0.02em", textAlign: "center" }}>{t.friendsTitle}</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "820px", margin: "0 auto" }}>
<article className="hm-inl" style={{ background: "#FFF0C2", border: "2.5px solid #111111", borderRadius: "30px", boxShadow: "0 6px 0 #111111", padding: "26px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
<svg className="hm-bob" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" style={{ overflow: "visible" }}><defs><radialGradient id="jgFriend"><stop offset="0" stopColor="#FFB82E" stopOpacity=".9"/><stop offset="1" stopColor="#FFB82E" stopOpacity="0"/></radialGradient></defs><circle cx="60" cy="80" r="54" fill="url(#jgFriend)"/><ellipse cx="38" cy="60" rx="20" ry="12" transform="rotate(-28 38 60)" fill="#fff" stroke="#111" strokeWidth="2.4"/><ellipse cx="82" cy="60" rx="20" ry="12" transform="rotate(28 82 60)" fill="#fff" stroke="#111" strokeWidth="2.4"/><ellipse cx="60" cy="82" rx="19" ry="22" fill="#FFB82E" stroke="#111" strokeWidth="2.6"/><path d="M44 78 Q60 84 76 78 M45 90 Q60 96 75 90" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round"/><path d="M52 30 Q46 14 34 14 M68 30 Q74 14 86 14" stroke="#111" strokeWidth="2.6" fill="none" strokeLinecap="round"/><circle cx="33" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="87" cy="14" r="4.5" fill="#E96B45" stroke="#111" strokeWidth="2"/><circle cx="60" cy="46" r="20" fill="#111"/><circle cx="52" cy="44" r="6.5" fill="#fff"/><circle cx="68" cy="44" r="6.5" fill="#fff"/><circle cx="53.5" cy="45" r="3.2" fill="#111"/><circle cx="69.5" cy="45" r="3.2" fill="#111"/><circle cx="45" cy="53" r="3" fill="#E96B45"/><circle cx="75" cy="53" r="3" fill="#E96B45"/><path d="M53 51 Q60 58 67 51" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round"/></svg>
<h3 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "26px" }}>{t.jonuName}</h3>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#62625C" }}>{t.jonuBody}</p>
</article>
<article className="hm-inu" style={{ background: "#FFE0D4", border: "2.5px solid #111111", borderRadius: "30px", boxShadow: "0 6px 0 #111111", padding: "26px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
<div className="hm-crawl" style={{ width: "150px", height: "120px" }}><svg width="150" height="120" viewBox="-40 -34 80 52" aria-hidden="true" style={{ overflow: "visible" }}><g className="hm-body"><path d="M-30 12 Q-34 0 -24 -4 Q-20 -6 -18 2 L18 2 Q30 2 30 12 Z" fill="#B7D9C5" stroke="#111" strokeWidth="2.2" strokeLinejoin="round"/></g><g className="hm-feel"><path d="M-26 -4 L-30 -16 M-20 -4 L-20 -17" stroke="#111" strokeWidth="2" strokeLinecap="round"/><circle cx="-30" cy="-17" r="2.6" fill="#111"/><circle cx="-20" cy="-18" r="2.6" fill="#111"/></g><circle cx="-25" cy="3" r="1.6" fill="#E96B45"/><circle cx="4" cy="-8" r="16" fill="#E96B45" stroke="#111" strokeWidth="2.2"/><path d="M4 -8 m0 0 a4 4 0 1 1 4 4 a8 8 0 1 1 -8 -8 a12 12 0 1 1 12 12" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
<h3 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "26px" }}>{t.pipiName}</h3>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#62625C" }}>{t.pipiBody}</p>
</article>
</div>
</div>
</section>

<section id="parents" style={{ padding: "88px 0 72px", background: "linear-gradient(180deg, #CBE9FB 0%, #F4F6E4 38%, #FFE8C4 100%)" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
<div className="hm-inl" style={{ flex: "1 1 320px", minWidth: "0", display: "flex", justifyContent: "center", order: "0" }}>
<div style={{ width: "280px", maxWidth: "76vw", border: "10px solid #111111", borderRadius: "46px", overflow: "hidden", background: "#111111", boxShadow: "0 10px 0 rgba(17,17,17,0.9)", transform: "rotate(-3deg)" }}>
<img loading="lazy" decoding="async" src={img.ideas} alt={t.altProgress} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1 / 2" }}/>
</div>
</div>
<div className="hm-inr" style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "28px", fontWeight: "700", color: "#B8462A" }}>{t.parentsKicker}</span>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: "1.08", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.parentsTitle}</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#62625C" }}>{t.parentsSub}</p>
<div style={{ marginTop: "10px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
{rules.map((r, _i) => (<Fragment key={_i}>
<div className={r.side} style={{ padding: "20px", background: `${r.tint}`, border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111", display: "flex", flexDirection: "column", gap: "8px" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "19px" }}>{r.title}</b>
<span style={{ fontSize: "15px", lineHeight: "1.55", color: "#62625C" }}>{r.body}</span>
</div>
</Fragment>))}
</div>
<div style={{ marginTop: "8px", display: "flex", gap: "14px", alignItems: "flex-start", padding: "18px 20px", border: "2.5px dashed #111111", borderRadius: "24px", background: "#FFFBF0" }}>
<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" style={{ flex: "none" }}><circle cx="20" cy="20" r="19" fill="#fff" stroke="#111" strokeWidth="1.6"/><path d="M8 24 Q20 40 32 24 Q26 30 20 29 Q14 30 8 24z" fill="#fff" stroke="#111" strokeWidth="1.4"/><circle cx="14.5" cy="17" r="4" fill="none" stroke="#111" strokeWidth="1.6"/><circle cx="25.5" cy="17" r="4" fill="none" stroke="#111" strokeWidth="1.6"/><path d="M18.5 17h3" stroke="#111" strokeWidth="1.6"/><circle cx="14.5" cy="17" r="1.2" fill="#111"/><circle cx="25.5" cy="17" r="1.2" fill="#111"/><path d="M10 9 Q20 2 30 9" stroke="#111" strokeWidth="1.6" fill="none"/></svg>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6" }}><b>{t.anyoneTitle}</b> {t.anyoneBody}</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="skillsTitle" style={{ background: "linear-gradient(180deg, #19172B 0%, #111111 100%)", color: "#FFF6E0", padding: "80px 0" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "18px" }}>
<h2 id="skillsTitle" className="hm-inl" style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", letterSpacing: "-0.02em", textWrap: "balance", maxWidth: "760px" }}>{t.skillsTitle}</h2>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#A9A9A1", maxWidth: "640px" }}>{t.skillsSub}</p>
<ul className="hm-inr" style={{ listStyle: "none", margin: "14px 0 0", padding: "0", display: "flex", flexWrap: "wrap", gap: "12px" }}>
{skills.map((k, _i) => (<Fragment key={_i}>
<li style={{ padding: "12px 18px", borderRadius: "999px", border: "2px solid #FFB82E", color: "#FFF0C2", fontWeight: "600", fontSize: "16px" }}>{k}</li>
</Fragment>))}
</ul>
</div>
</section>

<section id="safety" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 20px 72px" }}>
<div className="hm-inl" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px" }}>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "28px", fontWeight: "700", color: "#B8462A" }}>{t.safetyKicker}</span>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: "1.08", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.safetyTitle}</h2>
</div>
<div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
{safety.map((sf, _i) => (<Fragment key={_i}>
<div className={sf.side} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", background: "#FFFFFF", border: "2.5px solid #111111", borderRadius: "24px", boxShadow: "0 5px 0 #111111" }}>
<span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "12px", background: "#B7D9C5", border: "2px solid #111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
</span>
<div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
<b style={{ fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "18px" }}>{sf.title}</b>
<span style={{ fontSize: "15px", lineHeight: "1.55", color: "#62625C" }}>{sf.body}</span>
</div>
</div>
</Fragment>))}
</div>
</section>

<section id="download" style={{ padding: "20px 20px 88px" }}>
<div className="hm-inu" style={{ maxWidth: "1160px", margin: "0 auto", background: "linear-gradient(135deg, #FFD05A 0%, #FFB82E 45%, #F58A52 100%)", border: "3px solid #111111", borderRadius: "40px", boxShadow: "0 8px 0 #111111", padding: "clamp(28px, 5vw, 64px)", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", position: "relative", overflow: "hidden" }}>
<div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px", position: "relative" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(34px, 4.6vw, 58px)", lineHeight: "1.05", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.dlTitle}</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#111111" }}>{t.dlSub}</p>
<ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
{dlSteps.map((d, _i) => (<Fragment key={_i}>
<li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "17px", fontWeight: "600" }}><span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: "#111111", color: "#FFB82E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontWeight: "700" }}>{d.n}</span><span>{d.text}</span></li>
</Fragment>))}
</ol>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginTop: "6px" }}>
<a href={PLAY_URL} style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "60px", padding: "0 26px", borderRadius: "22px", background: "#111111", color: "#FFF6E0", border: "2.5px solid #111111", boxShadow: "0 5px 0 #E96B45", textDecoration: "none", fontWeight: "700", fontSize: "18px" }}>
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5v17l14-8.5z" fill="#FFB82E"/></svg>
<span>{t.ctaAndroid}</span>
</a>
<span style={{ fontSize: "15px", fontWeight: "600" }}>{t.dlPlatforms}</span>
</div>
</div>
<div style={{ flex: "0 1 300px", minWidth: "0", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", position: "relative" }}>
<div style={{ background: "#FFFFFF", border: "3px solid #111111", borderRadius: "32px", boxShadow: "0 6px 0 #111111", padding: "22px", transform: "rotate(2deg)" }}>
<img loading="lazy" decoding="async" src={"/images/qr-play.svg"} alt={t.qrAlt} style={{ display: "block", width: "220px", maxWidth: "60vw", height: "auto", aspectRatio: "1 / 1" }}/>
</div>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "26px", fontWeight: "700" }}>{t.qrHand}</span>
</div>
</div>
</section>

<section aria-labelledby="blogTeaser" style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 20px 72px" }}>
<a className="hm-inl" href={`/${lang}/blog/`} style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", padding: "clamp(22px, 4vw, 40px)", background: "#FFFFFF", border: "3px solid #111111", borderRadius: "36px", boxShadow: "0 7px 0 #111111", textDecoration: "none", color: "#111111" }}>
<div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
<span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#B7D9C5", border: "2px solid #111111", fontWeight: "700", fontSize: "13px" }}>{t.blogKicker}</span>
<h2 id="blogTeaser" style={{ margin: "0", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: "1.12", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.blogTitle}</h2>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#62625C" }}>{t.blogSub}</p>
</div>
<span style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "56px", padding: "0 24px", borderRadius: "20px", background: "#E96B45", color: "#FFFFFF", border: "2.5px solid #111111", boxShadow: "0 5px 0 #111111", fontWeight: "700", fontSize: "17px" }}>{t.blogCta}<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
</a>
</section>

<section aria-labelledby="faqTitle" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 20px 88px" }}>
<h2 id="faqTitle" className="hm-inl" style={{ margin: "0 0 24px", fontFamily: "'Space Grotesk', 'Hind Siliguri', sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", letterSpacing: "-0.02em" }}>{t.faqTitle}</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<FaqList items={faqs} />
</div>
</section>

<footer style={{ background: "#111111", color: "#FFF6E0", padding: "48px 20px" }}>
<div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
<b style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "26px" }}>Hmmly</b>
<span style={{ fontFamily: "'Caveat', 'Atma', cursive", fontSize: "22px", color: "#FFB82E" }}>{t.tagline}</span>
</div>
<nav aria-label={t.footerLabel} style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
<a href={`/${lang}/privacy/`} style={{ color: "#FFF6E0", fontSize: "15px", padding: "10px 0" }}>{t.fPrivacy}</a>
<a href="#faqTitle" style={{ color: "#FFF6E0", fontSize: "15px", padding: "10px 0" }}>{t.fFaq}</a>
<a href="#download" style={{ color: "#FFF6E0", fontSize: "15px", padding: "10px 0" }}>{t.navDownload}</a>
<a href={`/${lang}/contact/`} style={{ color: "#FFF6E0", fontSize: "15px", padding: "10px 0" }}>{t.fContact}</a>
<a href={`/${lang}/delete-account/`} style={{ color: "#FFF6E0", fontSize: "15px", padding: "10px 0" }}>{t.fDelete}</a>
</nav>
<span style={{ width: "100%", fontSize: "13px", color: "#A9A9A1" }}>{t.copyright}</span>
</div>
</footer>

</div>
  );
}
