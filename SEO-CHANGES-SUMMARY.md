# SEO Changes Summary - Shift from "Ikigai" to Custom Merch Keywords

## Overview
This PR implements critical SEO changes to shift Google rankings from "ikigai philosophy" to custom Greek life merch keywords. All changes focus on de-emphasizing "IKIGAI" and leading with merch-focused keywords.

---

## Changes Made

### 1. **app/layout.tsx** - Global Metadata Optimization

#### Title Changes
- **Before:** `COUTURE BY IKIGAI - High Quality Custom Merch`
- **After:** `Custom Greek Life Merch & Apparel | Couture by Ikigai`
- **Template Before:** `%s | COUTURE BY IKIGAI`
- **Template After:** `%s | Custom Merch by Ikigai`

#### Description Changes
- **Before:** "Couture by Ikigai - Premium, custom-designed merchandise including hoodies, t-shirts, and more. Not normal merch."
- **After:** "Premium custom hoodies, crewnecks, and apparel for Greek life, sororities, fraternities, and university clubs. 150+ organizations trust Couture by Ikigai for bulk custom merch delivered in 2-3 weeks."

#### Keywords Array
**Replaced generic keywords with target keywords:**
- ✅ `custom greek life merch`
- ✅ `sorority hoodies`
- ✅ `fraternity sweatshirts`
- ✅ `custom college apparel`
- ✅ `bulk custom hoodies`
- ✅ `greek life merchandise`
- ✅ `custom sorority merch`
- ✅ `university club apparel`
- ✅ `custom crewnecks greek life`
- ✅ `premium custom hoodies university`

#### OpenGraph & Twitter Card Updates
- Updated all social sharing metadata to match new title and description
- Changed siteName from `COUTURE BY IKIGAI` to `Couture by Ikigai`

#### Schema Markup Addition
**Added Organization Schema with JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Couture by Ikigai",
  "url": "https://couturebyikigai.com",
  "description": "Premium custom merch for Greek life, sororities, fraternities, and university clubs.",
  "offers": {
    "@type": "AggregateOffer",
    "itemOffered": [
      {"@type": "Product", "name": "Custom Greek Life Hoodies"},
      {"@type": "Product", "name": "Custom Sorority Crewnecks"},
      {"@type": "Product", "name": "Fraternity Custom Apparel"},
      {"@type": "Product", "name": "University Club Merch"}
    ]
  }
}
```

---

### 2. **app/page.tsx** - Homepage SEO Improvements

#### H1 Tag Addition
**Added visually hidden H1 as first element:**
```tsx
<h1 className="sr-only">Custom Greek Life Merch & Apparel for Sororities, Fraternities and University Clubs</h1>
```
- Uses Tailwind's `sr-only` class (screen reader only)
- Provides semantic SEO signal without affecting visual design
- Keeps "NOT NORMAL MERCH" as visual branding

#### Image Alt Text Updates
**Desktop Hero Images (3 images):**
- **Before:** `IKIGAI Featured Collection - High quality custom merchandise`
- **After:** `Custom Greek Life Merch - Premium Hoodies and Apparel by Couture`

**Mobile Hero Image:**
- **Before:** `IKIGAI Featured Collection`
- **After:** `Custom Greek Life Merch - Premium Hoodies and Apparel by Couture`

**Arlo Mascot Image:**
- **Before:** `Arlo mascot`
- **After:** `Couture by Ikigai mascot - custom merch for university organizations`

---

### 3. **components/header.tsx** - Header Logo Alt Text

**Logo Alt Text:**
- **Before:** `CoutureByIkgai`
- **After:** `Couture by Ikigai - Custom Greek Life Merch`

---

### 4. **app/components/MobileMenu.tsx** - Mobile Menu Logo Alt Text

**Logo Alt Text:**
- **Before:** `CoutureByIkgai`
- **After:** `Couture by Ikigai - Custom Greek Life Merch`

---

## SEO Impact Analysis

### Immediate Benefits
1. **Title Tag Optimization:** Homepage title now leads with target keyword "Custom Greek Life Merch" instead of "IKIGAI"
2. **Meta Description:** Includes target keywords, social proof (150+ orgs), and clear value prop (2-3 week delivery)
3. **H1 Tag:** Provides strong semantic signal to search engines about page content
4. **Schema Markup:** Enables rich snippets in search results and clearly defines business type
5. **Image Alt Text:** All images now reinforce merch-related keywords instead of "ikigai"

### Expected Ranking Shifts
- **Current Problem:** Ranking for "ikigai" (3,500+ impressions, 0 clicks)
- **Target Keywords:** 
  - `custom greek life hoodies`
  - `sorority merch`
  - `fraternity sweatshirts`
  - `custom college apparel`
  - `bulk custom hoodies university`

### Timeline
- **Week 1-2:** Google re-indexes pages with new metadata
- **Week 3-4:** Begin seeing shifts in Search Console impressions
- **Week 5-8:** Target keywords appear in position 20-50
- **Week 9-12:** Target keywords move to position 10-20
- **Month 4+:** Competing for page 1 positions

---

## Technical Details

### Files Modified
1. `/app/layout.tsx` - Global metadata and schema markup
2. `/app/page.tsx` - H1 tag and image alt text
3. `/components/header.tsx` - Logo alt text
4. `/app/components/MobileMenu.tsx` - Mobile logo alt text

### Compatibility
- ✅ All changes are backward compatible
- ✅ No breaking changes to functionality
- ✅ Visual design unchanged (H1 is hidden with `sr-only`)
- ✅ Schema markup uses `afterInteractive` strategy (no performance impact)

### Testing Checklist
- [ ] Verify homepage renders correctly
- [ ] Check that `sr-only` H1 is not visible but present in DOM
- [ ] Test schema markup with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify all images load with new alt text
- [ ] Check social sharing previews (OpenGraph)
- [ ] Confirm no console errors

---

## Next Steps (Post-Merge)

### Immediate (Week 1)
1. Submit updated sitemap to Google Search Console
2. Request re-indexing of homepage in GSC
3. Monitor Search Console for new keyword impressions
4. Verify schema markup appears in Google Rich Results Test

### Short-term (Weeks 2-4)
1. Create robots.txt if not exists
2. Add breadcrumb schema to blog posts
3. Optimize existing blog post metadata
4. Add internal links from homepage to key content

### Medium-term (Months 2-3)
1. Build university-specific landing pages
2. Start backlink outreach campaign
3. Create comparison content (vs competitors)
4. Implement local SEO (Google Business Profile)

---

## Monitoring & Success Metrics

### Google Search Console
- **Track:** Impressions for target keywords
- **Goal:** 1,000+ impressions/month for "custom greek life merch" by Month 3
- **Monitor:** Decline in "ikigai" impressions (should drop to near zero)

### Google Analytics
- **Track:** Organic traffic to homepage
- **Goal:** 50% increase in organic traffic by Month 2
- **Monitor:** Bounce rate (should stay below 60%)

### Rankings
- **Track:** Position for top 10 target keywords
- **Goal:** At least 3 keywords in top 50 by Month 2
- **Tool:** Google Search Console or Ahrefs/SEMrush

---

## Risk Assessment

### Low Risk
- ✅ No functionality changes
- ✅ No visual design changes
- ✅ Backward compatible
- ✅ Standard SEO best practices

### Potential Concerns
- **Temporary ranking fluctuation:** Google may temporarily drop rankings while re-indexing (normal)
- **Brand recognition:** "IKIGAI" is part of domain name, so some association will remain
- **Timeline:** SEO changes take 3-6 months to show full impact

### Mitigation
- Keep "by Ikigai" in title to maintain brand continuity
- Monitor Search Console weekly for any issues
- Be patient - SEO is a long-term strategy

---

## References

### SEO Best Practices
- [Google Search Central - Title Tags](https://developers.google.com/search/docs/appearance/title-link)
- [Schema.org - Organization](https://schema.org/Organization)
- [Moz - Meta Description Best Practices](https://moz.com/learn/seo/meta-description)

### Related Documents
- `SEO-REMEDIATION-PLAN.md` - Complete 8-week SEO strategy
- `COMPETITOR-ANALYSIS.md` - Competitive intelligence
- `IMPLEMENTATION-CHECKLIST.md` - Day-by-day action plan

---

## Approval & Sign-off

**Changes Implemented:** ✅ All requested changes complete  
**Testing Status:** ⏳ Pending deployment  
**Ready to Merge:** ✅ Yes  

**Reviewed by:** _[Your name]_  
**Date:** February 25, 2026  
**PR Title:** SEO: Shift rankings from ikigai philosophy to custom merch keywords  
**Branch:** `fix/seo-merch-keywords`
