---
title: Contact | Modus Data
description: Get in touch with Dr. Arthur Jochems for AI consulting, data science projects, and enterprise AI solutions in Switzerland.
---

# Let's Build Something Great Together.

Whether you have a specific AI challenge, need strategic advice on MLOps and production deployment, or want to explore how custom AI can drive measurable impact in your organization — I’d love to hear from you.

### Get in Touch

**Dr. Arthur Jochems**  
Founder & Principal AI Engineer  
Modus Data  

**Address**  
Benkenstrasse 3  
4106 Therwil  
Switzerland  

**Email**  
[arthur@modusdata.ch](mailto:arthur@modusdata.ch)

**Phone**  
+41 76 123 45 67 *(available upon request)*

---

### What to Expect

- **Initial Response**: Within 1 business day
- **Discovery Process**: Clear scoping and technical fit assessment
- **Next Steps**: Proposal with scope, timeline, and execution plan

I work with clients who value deep technical expertise, transparency, and production-grade delivery.

Looking forward to connecting.

---

<div id="contact-form" class="lead-panel lead-panel--form">
  <h3>Share your project</h3>
  <p>Tell us what you are solving, where delivery pressure sits, and the timeline you are working within.</p>
  <div id="selected-package-badge" class="package-badge" hidden></div>
  <form class="contact-form" action="https://formspree.io/f/mbgjlebw" method="POST">
    <label>
      <span>Name</span>
      <input type="text" name="name" placeholder="Your name" required />
    </label>
    <label>
      <span>Work Email</span>
      <input type="email" name="email" placeholder="name@company.com" required />
    </label>
    <label>
      <span>Project Overview</span>
      <textarea name="project" rows="4" placeholder="Tell us about the challenge, data context, and expected outcome." required></textarea>
    </label>
    <label>
      <span>Target Timeline</span>
      <input type="text" name="timeline" placeholder="e.g. 6–8 weeks, Q4 2026" />
    </label>
    <input type="hidden" name="selected_package" id="selectedPackageInput" />
    <p style="font-size: 0.8125rem; color: #6b7280; margin-top: 8px; text-align: center;">⚡ Direct response within 24 business hours from Dr. Arthur Jochems.</p>
    <button id="submit-inquiry" type="submit" class="btn btn-primary">Submit Inquiry ↗</button>
  </form>

  <div class="email-copy-block">
    <span class="email-copy-label">Email</span>
    <div class="email-copy-row">
      <a href="mailto:arthur@modusdata.ch">arthur@modusdata.ch</a>
      <button type="button" class="copy-email-btn" data-copy-email="arthur@modusdata.ch">Copy email</button>
    </div>
  </div>
</div>

<script>
  const urlParams = new URLSearchParams(window.location.search);
  const pkg = urlParams.get('package');
  const packageNames = {
    prototype: 'AI & Data Prototype Package (CHF 15,000)',
    production: 'Enterprise Production Implementation (CHF 30,000)',
    handoff: 'Knowledge Transfer & Handoff (CHF 5,000)',
  };
  const packageName = packageNames[pkg];
  const packageInterest = document.querySelector('#selectedPackageInput');
  const packageBadge = document.querySelector('#selected-package-badge');
  const submitButton = document.querySelector('#submit-inquiry');
  const submitLabels = {
    prototype: 'Request Prototype Scoping Call ↗',
    production: 'Request Implementation Call ↗',
    handoff: 'Request Handoff Discussion ↗',
  };

  const contactForm = document.querySelector('#contact-form');

  if (packageName && packageInterest) {
    packageInterest.value = packageName;
    packageBadge.innerHTML = `<span style="color: #6b7280;">Inquiry Focus:</span><strong style="color: #111827;">${packageName}</strong><a href="/packages/" style="color: #991b1b; text-decoration: none; margin-left: 4px; font-weight: 500;">Change ↗</a>`;
    packageBadge.hidden = false;
    packageBadge.style.cssText = 'display: inline-flex; align-items: center; gap: 8px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 9999px; padding: 4px 12px; font-size: 0.875rem; margin-bottom: 16px;';
    submitButton.textContent = submitLabels[pkg];
    contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>