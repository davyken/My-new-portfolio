# Portfolio Refactoring Plan - orashus.com Style

## Information Gathered from Analysis:
- Current tech stack: React 18, React Router, Bootstrap 5, react-helmet-async, typewriter-effect
- Existing content: Name "Davy", email davykennang552@gmail.com, 3+ years experience
- Current structure: Multi-page (Home, About, Portfolio, Contact)
- Current styling: Dark theme with light theme toggle, custom cursor, border frames

## Plan: Convert to Single-Page Layout with orashus.com Style

### Files to Edit:
1. **src/content_option.js** - Update with new structure (years of experience variable, new section descriptions)
2. **src/app/App.css** - Add new CSS variables for orashus.com style, update global styles
3. **src/pages/home/index.js** - Rebuild as single-page with all sections
4. **src/pages/home/style.css** - Add new styles for all sections
5. **src/header/index.js** - Update navigation for single-page smooth scroll
6. **src/index.css** - Clean up if needed

### Section Implementation Plan:
1. **Hero Section** - Simple greeting, name "Davy", nickname "Code Artisan", CTA buttons (Email Me, View Resume), "X+ years coding experience"
2. **Services Section** - 4 service cards with title and description
3. **Skill Set Section** - Grid/list with key skills (Frontend, Backend, Databases, DevOps)
4. **Work Experience Section** - Timeline with company, description, 3 bullet points each
5. **Languages & Tools Section** - Icons/badges grid for tech stack
6. **Personal Projects Section** - 3-6 project cards with name, description, tech stack, link

### Followup Steps:
1. Test responsive behavior on mobile/tablet/desktop
2. Verify smooth scrolling works
3. Check accessibility (semantic tags, alt text, heading hierarchy)

