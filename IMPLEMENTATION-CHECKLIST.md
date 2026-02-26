# SEO Remediation Implementation Checklist

## WEEK 1: FOUNDATION (Highest Impact)

### Day 1: Homepage Metadata
- [ ] Update `/app/layout.tsx` metadata
  - [ ] Change title from "COUTURE BY IKIGAI" to "Custom Greek Life Hoodies & Sorority Merch | Couture"
  - [ ] Rewrite description to focus on Greek life, remove "Ikigai"
  - [ ] Update keywords array with target keywords
  - [ ] Update OpenGraph title and description
  - [ ] Update Twitter card metadata
- [ ] Test changes in Google Search Console preview tool
- [ ] Deploy to production

### Day 2: Homepage H1 & Content
- [ ] Add SEO-optimized H1 to `/app/page.tsx`
  - Option A: Hidden semantic H1 (sr-only)
  - Option B: Visible section with H1 (recommended)
- [ ] Add keyword-rich introductory paragraph
- [ ] Keep "NOT NORMAL MERCH" as visual branding
- [ ] Test rendering (ensure server-side)
- [ ] Deploy to production

### Day 3: Schema Markup
- [ ] Create `/components/schema/OrganizationSchema.tsx`
- [ ] Create `/components/schema/ProductSchema.tsx`
- [ ] Create `/components/schema/ArticleSchema.tsx`
- [ ] Add OrganizationSchema to `/app/layout.tsx`
- [ ] Test schema with Google Rich Results Test
- [ ] Deploy to production

### Day 4: Technical SEO
- [ ] Create `/app/robots.ts`
- [ ] Update `/app/sitemap.ts` to include university pages
- [ ] Add breadcrumbs component (`/components/Breadcrumbs.tsx`)
- [ ] Add breadcrumbs to layout
- [ ] Test sitemap.xml generation
- [ ] Deploy to production

### Day 5: Universities Hub
- [ ] Create `/app/universities/page.tsx` index page
- [ ] Add metadata with target keywords
- [ ] List all existing university pages
- [ ] Add internal links from homepage to universities page
- [ ] Deploy to production

**Week 1 Success Metrics:**
- [ ] Homepage title no longer contains "IKIGAI" first
- [ ] H1 tag contains "Custom Greek Life Hoodies"
- [ ] Schema markup validates in Google Rich Results Test
- [ ] Sitemap includes all pages
- [ ] Breadcrumbs appear on all pages

---

## WEEK 2: CONTENT & INTERNAL LINKING

### Day 6-7: Internal Linking Structure
- [ ] Create `/components/RelatedPosts.tsx` component
- [ ] Add related posts to all existing blog posts (15 posts)
- [ ] Add internal links from homepage to:
  - [ ] Top 3 blog posts
  - [ ] Universities page
  - [ ] Top 3 products
- [ ] Add "Trusted by Greek Life" section to homepage with university links
- [ ] Deploy to production

### Day 8-9: Blog Post Optimization
- [ ] Update all blog post metadata (15 posts)
  - [ ] Ensure title includes target keyword
  - [ ] Rewrite descriptions with keyword + CTA
  - [ ] Add keywords array
- [ ] Add ArticleSchema to all blog posts
- [ ] Add 3-5 internal links per post
- [ ] Add RelatedPosts component to all posts
- [ ] Deploy to production

### Day 10: Image Optimization
- [ ] Update alt text on homepage images
  - [ ] Hero images: Include "Greek life" or "sorority"
  - [ ] Product images: Include product name + use case
- [ ] Update alt text on product pages (9 products)
- [ ] Update alt text on blog posts (15 posts)
- [ ] Deploy to production

**Week 2 Success Metrics:**
- [ ] Every blog post has 3+ internal links
- [ ] Every blog post has RelatedPosts section
- [ ] Homepage has links to universities and blog
- [ ] All images have keyword-rich alt text

---

## WEEK 3: CONTENT PRODUCTION & BACKLINKS

### Day 11: First Blog Post
- [ ] Write "Couture vs CustomInk: Which is Better for Greek Life?"
  - [ ] 2,000+ words
  - [ ] Include comparison table
  - [ ] Add internal links to products, universities
  - [ ] Add ArticleSchema
  - [ ] Add RelatedPosts
- [ ] Deploy to production
- [ ] Share on social media

### Day 12: Second Blog Post
- [ ] Write "Couture vs RushOrderTees: Quality Comparison for Sororities"
  - [ ] 2,000+ words
  - [ ] Focus on quality vs speed angle
  - [ ] Include internal links
  - [ ] Add schema and related posts
- [ ] Deploy to production

### Day 13: Third Blog Post
- [ ] Write "Why Heavyweight Fabric Matters for Greek Life Merch"
  - [ ] 1,500+ words
  - [ ] Educational, not salesy
  - [ ] Include internal links to products
  - [ ] Add schema and related posts
- [ ] Deploy to production

### Day 14-15: University Landing Pages (5 pages)
- [ ] Create USC Sororities page
- [ ] Create USC Fraternities page
- [ ] Create Berkeley Cultural Orgs page
- [ ] Create Northwestern Fraternities page
- [ ] Create NYU Clubs page
- [ ] Add all to sitemap
- [ ] Add to universities index page
- [ ] Deploy to production

### Day 16-17: Backlink Outreach (10 emails)
- [ ] Research university publication contacts
  - [ ] Michigan Daily
  - [ ] Daily Bruin (UCLA)
  - [ ] Daily Trojan (USC)
  - [ ] Daily Cal (Berkeley)
  - [ ] Daily Northwestern
- [ ] Write personalized pitches (student founder angle)
- [ ] Send outreach emails
- [ ] Track in spreadsheet

**Week 3 Success Metrics:**
- [ ] 3 new blog posts published
- [ ] 5 new university pages live
- [ ] 10 backlink outreach emails sent
- [ ] Sitemap updated with new pages

---

## WEEK 4: SCALING & LOCAL SEO

### Day 18-20: Blog Posts (3 posts)
- [ ] Monday: "Best Custom Merch Companies for Sororities (2026 Review)"
- [ ] Wednesday: "Michigan Fraternity Merch: A Complete Ordering Guide"
- [ ] Friday: "The Real Cost of Cheap Custom Hoodies"

### Day 21-25: University Landing Pages (5 pages)
- [ ] Boston University Sororities
- [ ] Penn State Fraternities (if not exists)
- [ ] UCLA Sororities
- [ ] UChicago Clubs
- [ ] Berkeley Fraternities

### Day 26-27: Google Business Profile
- [ ] Create/claim Google Business Profile
- [ ] Business name: "Couture - Custom Greek Life Apparel"
- [ ] Add categories: Custom T-Shirt Store, Screen Printing Shop
- [ ] Write keyword-rich description (300 words)
- [ ] Upload 10+ photos (products, team, customers)
- [ ] Create first GBP post

### Day 28: Backlink Outreach Round 2
- [ ] Follow up on Week 3 outreach (if no response)
- [ ] Send 10 new outreach emails
  - [ ] Target Greek life blogs
  - [ ] Target university entrepreneurship blogs
  - [ ] Target local business directories

**Week 4 Success Metrics:**
- [ ] 3 more blog posts published (6 total new)
- [ ] 5 more university pages (10 total new)
- [ ] Google Business Profile live and optimized
- [ ] 20 total backlink outreach emails sent

---

## ONGOING TASKS (Weeks 5-8)

### Weekly Content Production
**Every Monday:**
- [ ] Publish blog post (comparison or buying guide)
- [ ] Create 1 university landing page
- [ ] Update sitemap

**Every Wednesday:**
- [ ] Publish blog post (educational/how-to)
- [ ] Create 1 university landing page
- [ ] Post to Google Business Profile

**Every Friday:**
- [ ] Publish blog post (university-specific or trend)
- [ ] Create 1 university landing page
- [ ] Send 5 backlink outreach emails

### Weekly Monitoring
**Every Sunday:**
- [ ] Check Google Search Console
  - [ ] Review new queries
  - [ ] Check ranking changes
  - [ ] Identify new keyword opportunities
- [ ] Review Google Analytics
  - [ ] Organic traffic trends
  - [ ] Top landing pages
  - [ ] Conversion rate from organic
- [ ] Update tracking spreadsheet

### Monthly Tasks
**First Monday of Month:**
- [ ] Competitor analysis update
  - [ ] Check competitor rankings
  - [ ] Review new competitor content
  - [ ] Identify new keyword opportunities
- [ ] Backlink audit
  - [ ] Check new backlinks acquired
  - [ ] Disavow any spammy links
  - [ ] Identify new backlink opportunities
- [ ] Content performance review
  - [ ] Top performing posts
  - [ ] Underperforming posts to optimize
  - [ ] New content ideas based on data

---

## AUTOMATION SETUP (OpenClaw)

### One-Time Setup Tasks
- [ ] Configure OpenClaw with GitHub access
- [ ] Set up automated blog post generation
  - [ ] Create blog post template
  - [ ] Set up keyword rotation
  - [ ] Configure publishing schedule (Mon/Wed/Fri 9am)
- [ ] Set up automated university page generation
  - [ ] Create university page template
  - [ ] Set up university × org type matrix
  - [ ] Configure publishing schedule (Mon-Fri)
- [ ] Set up automated sitemap updates
  - [ ] Scan for new pages daily
  - [ ] Auto-update sitemap.ts
  - [ ] Auto-commit and push
- [ ] Set up automated backlink outreach
  - [ ] Create email templates
  - [ ] Set up contact list
  - [ ] Configure sending schedule (5 per week)

### Recurring Automation Tasks
- [ ] Daily: Monitor Reddit/forums for merch questions
- [ ] Daily: Check Google Search Console for new opportunities
- [ ] Weekly: Generate SEO performance report
- [ ] Weekly: Update Google Business Profile
- [ ] Monthly: Generate competitor analysis report
- [ ] Monthly: Generate backlink audit report

---

## PRIORITY FIXES (Do First)

### Critical (Do This Week):
1. [ ] Homepage metadata update (removes "IKIGAI" from title)
2. [ ] Add keyword-rich H1 to homepage
3. [ ] Implement Organization schema markup
4. [ ] Create robots.txt

### High Priority (Do Week 2):
5. [ ] Add internal linking structure
6. [ ] Optimize existing blog posts
7. [ ] Update all image alt text
8. [ ] Add breadcrumbs

### Medium Priority (Do Week 3-4):
9. [ ] Create universities index page
10. [ ] Start new blog content production
11. [ ] Create first 10 university landing pages
12. [ ] Start backlink outreach

---

## TRACKING SPREADSHEET SETUP

### Create Google Sheet with Tabs:

**Tab 1: Keyword Rankings**
| Keyword | Current Rank | Week 1 | Week 2 | Week 3 | Week 4 | Target Rank |
|---------|--------------|--------|--------|--------|--------|-------------|
| custom greek life hoodies | Not ranking | | | | | Page 1 |
| sorority merch | Not ranking | | | | | Page 2 |
| fraternity sweatshirts | Not ranking | | | | | Page 2 |

**Tab 2: Backlink Tracker**
| Date | Target Site | Contact | Status | Link Acquired | DR | Notes |
|------|-------------|---------|--------|---------------|----|----|
| 2/24 | Michigan Daily | editor@michigandaily.com | Sent | | 65 | Student founder angle |

**Tab 3: Content Calendar**
| Date | Type | Title | Target Keyword | Status | URL |
|------|------|-------|----------------|--------|-----|
| 2/26 | Blog | Couture vs CustomInk | custom greek life hoodies | Published | /blog/... |

**Tab 4: University Pages**
| University | Org Type | Status | URL | Date Published |
|------------|----------|--------|-----|----------------|
| USC | Sororities | Live | /universities/usc-sororities | 2/24/26 |

**Tab 5: Weekly Metrics**
| Week | Organic Traffic | New Backlinks | New Pages | Top Keyword Rank |
|------|----------------|---------------|-----------|------------------|
| Week 1 | | | | |

---

## SUCCESS CHECKPOINTS

### End of Week 1:
- [ ] "IKIGAI" removed from homepage title
- [ ] Schema markup implemented and validated
- [ ] Robots.txt and sitemap optimized
- [ ] Breadcrumbs added to all pages

### End of Week 2:
- [ ] All existing content optimized with internal links
- [ ] All images have keyword-rich alt text
- [ ] Universities hub page created
- [ ] Homepage has links to key content

### End of Week 4:
- [ ] 6+ new blog posts published
- [ ] 10+ new university pages created
- [ ] 20+ backlink outreach emails sent
- [ ] Google Business Profile optimized
- [ ] Ranking for at least 1 target keyword (page 3+)

### End of Week 8:
- [ ] 24+ new blog posts published
- [ ] 40+ new university pages created
- [ ] 50+ backlink outreach emails sent
- [ ] 10+ backlinks acquired
- [ ] Ranking for 5+ target keywords (page 2-3)
- [ ] Organic traffic increased 150%+

---

## TROUBLESHOOTING

### If rankings don't improve after 4 weeks:
1. Check Google Search Console for indexing issues
2. Verify schema markup is valid
3. Review content quality (not keyword-stuffed)
4. Check for technical SEO issues (page speed, mobile-friendliness)
5. Increase backlink outreach efforts

### If backlink outreach has low response rate:
1. Personalize emails more
2. Offer more value (free merch, exclusive data)
3. Try different angles (student founder, trends, data)
4. Target different publications
5. Follow up once after 1 week

### If automated content seems low quality:
1. Add human review step before publishing
2. Require unique examples and data points
3. Vary writing style and structure
4. Add customer quotes and testimonials
5. Include more specific university references

---

## NOTES & REMINDERS

- **Don't keyword stuff** - Keep density natural (1-2%)
- **Focus on user intent** - Write for humans, optimize for search
- **Quality over quantity** - 1 great backlink > 10 mediocre ones
- **Be patient** - SEO takes 3-6 months to show significant results
- **Monitor competitors** - Adjust strategy based on what they're doing
- **Test and iterate** - Use data to inform decisions

**Most Important:** Consistency is key. Stick to the content schedule and don't give up after a few weeks.
