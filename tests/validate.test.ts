import { describe, expect, it } from 'vitest';
import { checkContact, throttle, toE164 } from '../src/lib/validate';
import { blogEN } from '../src/content/blog.en';
import { blogBN } from '../src/content/blog.bn';
import { homeEN } from '../src/content/home.en';
import { homeBN } from '../src/content/home.bn';
import { COPY, homeLd, ldString, urlOf } from '../src/lib/seo';

describe('checkContact', () => {
  it('accepts a normal message and trims it', () => {
    const r = checkContact({ name: '  Rina ', email: 'rina@example.com ', message: ' hi ' });
    expect(r).toEqual({ ok: true, value: { name: 'Rina', email: 'rina@example.com', message: 'hi' } });
  });
  it('requires every field', () => {
    expect(checkContact({ name: '', email: 'a@b.co', message: 'x' })).toEqual({ ok: false, reason: 'required' });
    expect(checkContact({ name: 'a', email: 'a@b.co', message: '   ' })).toEqual({ ok: false, reason: 'required' });
  });
  it('rejects bad emails', () => {
    for (const e of ['nope', 'a@b', 'a b@c.com', '@x.com']) expect(checkContact({ name: 'a', email: e, message: 'x' })).toEqual({ ok: false, reason: 'email' });
  });
  it('cuts overlong text to the limits the Firestore rules enforce', () => {
    const r = checkContact({ name: 'n'.repeat(500), email: 'a@b.co', message: 'm'.repeat(9000) });
    expect(r.ok && r.value.name.length).toBe(80);
    expect(r.ok && r.value.message.length).toBe(2000);
  });
});

describe('toE164', () => {
  it('turns Bangladeshi local numbers into +880', () => expect(toE164('01712 345678')).toBe('+8801712345678'));
  it('keeps full numbers', () => expect(toE164('+44 7700 900123')).toBe('+447700900123'));
  it('understands 00 prefix and Bangla digits', () => {
    expect(toE164('008801712345678')).toBe('+8801712345678');
    expect(toE164('০১৭১২৩৪৫৬৭৮')).toBe('+8801712345678');
  });
  it('rejects junk', () => { expect(toE164('')).toBeNull(); expect(toE164('abc')).toBeNull(); expect(toE164('+12')).toBeNull(); });
});

describe('throttle', () => {
  it('allows one send per window', () => {
    let t = 0; const s = { get: () => t, set: (n: number) => { t = n; } };
    expect(throttle(s, 1000, 5000)).toBe(true);
    expect(throttle(s, 1000, 5500)).toBe(false);
    expect(throttle(s, 1000, 6100)).toBe(true);
  });
});

describe('content', () => {
  it('has the same structure in English and Bangla', () => {
    expect(Object.keys(homeBN.t).sort()).toEqual(Object.keys(homeEN.t).sort());
    expect(Object.keys(blogBN.t).sort()).toEqual(Object.keys(blogEN.t).sort());
    expect(homeBN.faqs.length).toBe(homeEN.faqs.length);
    expect(homeBN.steps.length).toBe(homeEN.steps.length);
    expect(homeBN.stories.length).toBe(homeEN.stories.length);
    expect(blogBN.sections.map((s) => s.id)).toEqual(blogEN.sections.map((s) => s.id));
  });
  it('never carries inline image data', () => {
    expect(JSON.stringify([homeEN, homeBN, blogEN, blogBN])).not.toContain('data:image');
  });
});

describe('seo', () => {
  it('has titles and descriptions of sensible length', () => {
    for (const l of ['en', 'bn'] as const) for (const [k, v] of Object.entries(COPY[l])) {
      expect(v.title.length, `${l} ${k} title`).toBeLessThanOrEqual(80);
      expect(v.description.length, `${l} ${k} description`).toBeGreaterThan(40);
      expect(v.description.length, `${l} ${k} description`).toBeLessThanOrEqual(240);
    }
  });
  it('builds absolute urls with trailing slash', () => expect(urlOf('bn', 'blog')).toMatch(/^https:\/\/.+\/bn\/blog\/$/));
  it('FAQ JSON-LD lists every question', () => {
    const g = homeLd('en', homeEN)['@graph'].find((x) => x['@type'] === 'FAQPage') as { mainEntity: unknown[] };
    expect(g.mainEntity.length).toBe(homeEN.faqs.length);
  });
  it('escapes "<" in JSON-LD', () => expect(ldString({ a: '</script>' })).not.toContain('</script>'));
});
