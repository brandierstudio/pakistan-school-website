# 🏫 Pakistan School Website — Aram Bagh Campus, Karachi (Est. 2026)

A complete, premium, production-quality, responsive website designed and developed for **Pakistan School** located at **Aram Bagh, Karachi** (adjacent to Saima Trade Tower near Pakistan Chowk).

---

## 🌟 Key Highlights & Design System

1. **Official Brand Emblem Integration**:
   - Features the official **Pakistan School 2026** logo with the Islamic Arch, Pakistan Crescent & Star, and the open book on the *Rehal* (Quran stand).
   - Bespoke educational color palette:
     - **Primary Navy:** `#0D274D`
     - **Royal Blue:** `#1E5E9E`
     - **National Green:** `#006633`
     - **Sky Blue:** `#64B5F6`
     - **Clean Neutral Canvas:** `#FFFFFF` / `#F8FAFC`

2. **Centralized Configuration (`assets/js/config.js`)**:
   - All critical details (School Name, Tagline, Phone, Email, Office Hours, Curriculum, Fees, Faculty, FAQs, Social Media links) are located in `assets/js/config.js`.
   - Any user can update or customize the school information in this single file without touching the HTML markup.

3. **10 Dedicated, Fully Interconnected Pages**:
   - `index.html` — Master Homepage with all 22 required sections, Bento Grid, and Dual CTAs.
   - `about.html` — Institutional Heritage, Vision, Mission, Philosophy & Values.
   - `academics.html` — Early Years, Primary, Middle, Secondary (Matric & Cambridge O-Level tracks).
   - `admissions.html` — Age eligibility matrix, Document checklist, Fee structure, and Interactive Online Application form with validation.
   - `facilities.html` — Air-conditioned Smart Classrooms, Science Labs, IT/Robotics, Library, Security.
   - `faculty.html` — Leadership and faculty directory with interactive department filtering.
   - `student-life.html` — Clubs, Robotics Society, Qirat Circle, Debates, Sports, and Pastoral Care.
   - `news.html` — Grand Opening ceremony details, Notices, and Academic Calendar.
   - `gallery.html` — Filterable photo gallery with an interactive modal lightbox.
   - `resources.html` — Parent Portal gateway, Student LMS, Uniform specifications, and Handbooks.
   - `contact.html` — Campus address, interactive Google Maps embed, Department lines, Inquiry form, and direct WhatsApp CTA.

4. **Interactive Features Included**:
   - **Audience Pathing Switcher**: "I am a: Prospective Parent / Current Family / Career Educator".
   - **Campus Tour Scheduling Modal**: Instant booking popup with validation.
   - **Download Prospectus Modal**: Instant digital guide delivery popup.
   - **Interactive Lightbox**: Full-screen view for gallery images with keyboard escape support.
   - **FAQ Accordion**: Smooth collapsible questions.
   - **Online Admissions Submission**: Client-side validation with reference number generation.
   - **Toast Notification System**: Elegant feedback toasts for user actions.
   - **Floating WhatsApp Button**: Direct 1-click messaging for admissions inquiries.

---

## 🚀 How to View & Run the Website

### Option 1: Direct Double-Click (Zero Setup)
Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari). All navigation links, modals, icons, and styles work immediately offline or online.

### Option 2: Local HTTP Server (Optional)
If you prefer running a local server:
```bash
# Using Python:
python -m http.server 8080

# Or using npx:
npx serve
```
Then visit `http://localhost:8080` in your web browser.

---

## 📁 File Structure

```
pakistan-school/
├── index.html              # Master Homepage
├── about.html              # About the School & History
├── academics.html          # Curriculum & Programs
├── admissions.html         # Admissions & Application Form
├── facilities.html         # Campus Facilities
├── faculty.html            # Faculty Directory (Filterable)
├── student-life.html       # Student Life & Clubs
├── news.html               # News, Events & Grand Opening
├── gallery.html            # Photo Gallery with Lightbox
├── resources.html          # Parent & Student Portal Gateway
├── contact.html            # Contact & Interactive Map
├── README.md               # Documentation
└── assets/
    ├── css/
    │   └── style.css       # Custom design system & animations
    ├── js/
    │   ├── config.js       # Centralized editable configuration
    │   └── main.js         # Interactive application scripts
    └── images/
        ├── logo.png                # Transparent Pakistan School brand emblem
        ├── campus-building-real.jpg # Actual campus facade & street location on Aram Bagh Rd
        ├── nursery-class.jpg       # Actual primary & nursery classroom photo
        ├── hifz-class.jpg          # Actual Tahfeez-ul-Quran classroom with students & rehals
        ├── qari-nasir.jpg          # Qari Nasir Sahab full portrait
        └── qari-nasir-half.jpg     # Qari Nasir Sahab waist-up framed portrait
```

---
*Developed as a premier production-grade school website for Pakistan School, Aram Bagh, Karachi (Est. 2026).*
