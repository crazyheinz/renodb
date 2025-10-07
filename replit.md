# Overview

RenoDB is a professional renovation services website for a contractor based in Gent, Belgium. The project is a full-stack web application built to showcase renovation services including painting, electrical work, carpentry, plumbing, and general handyman services. The site emphasizes trust-building through professional presentation, customer testimonials, and a verified 4.94/5 Ringtwice rating with 63 reviews.

The website is fully optimized for search engines and AI chatbot discovery with comprehensive meta tags, structured data, and semantic HTML.

**IMPORTANT: This project is deployed as a STATIC website to GitHub Pages at renodb.be (custom domain).**

# User Preferences

Preferred communication style: Simple, everyday language.

# Deployment Setup (CRITICAL - READ THIS!)

## GitHub Pages Deployment to renodb.be

**The website is hosted on GitHub Pages with custom domain renodb.be**

### How Deployment Works:
1. **Source Code**: Full-stack app in Replit (React + Express + Vite)
2. **Build Process**: Static files generated via `build-static.sh` script
3. **Output**: Static files placed in `docs/` folder
4. **Hosting**: GitHub Pages serves `docs/` folder at renodb.be
5. **Updates**: Must rebuild and push `docs/` folder to update live site

### Build & Deploy Process:
```bash
# 1. Build static site (creates/updates docs/ folder)
bash build-static.sh

# OR manually:
npm run build
mkdir -p docs
cp -r dist/public/* docs/
touch docs/.nojekyll

# 2. Pull any remote changes first (IMPORTANT!)
git pull origin main --no-edit

# 3. Commit and push to GitHub
git add docs/
git commit -m "Update website: [description]"
git push origin main

# 4. Wait ~2 minutes for GitHub Pages to update
```

### Key Files:
- **build-static.sh**: Automated build script for static deployment
- **docs/**: Static website folder (served by GitHub Pages)
- **README-DEPLOYMENT.md**: Full deployment instructions
- **CNAME**: Custom domain configuration (renodb.be)

### GitHub Repository:
- URL: https://github.com/crazyheinz/renodb
- Branch: main
- Pages Source: `/docs` folder
- Custom Domain: renodb.be (configured via CNAME)

### Important Notes:
- **Never push dist/ folder** (it's in .gitignore)
- **Always push docs/ folder** (this is what GitHub Pages serves)
- **Source code changes don't auto-update live site** - must rebuild and push docs/
- Development server (`npm run dev`) is different from production build

# Recent Changes

## UI Improvements (October 7, 2025)
- **Logo Enhancement**: Increased logo size in Header (h-20 → h-24) and Footer (h-8 → h-12)
- **Hero Simplification**: Removed statistics grid (4.94/5, 63 klanten, Ringtwice score) and services preview chips
- **Contact Priority**: Reordered contact methods - WhatsApp now primary (with "Aanbevolen" badge), Ringtwice secondary
- **Reviews Cleanup**: Removed detailed statistics (Kwaliteit 4.8, Communicatie 4.8, etc.) and repeat customers badge
- **Streamlined Layout**: Cleaner, more focused user experience with less visual clutter

## SEO and Accessibility Optimizations (October 2025)
- **Comprehensive Meta Tags**: Added complete SEO meta tags including title, description, keywords, canonical URL, Open Graph tags, Twitter Cards, and geo-location tags
- **Structured Data**: Implemented JSON-LD LocalBusiness schema with full business information, services catalog, ratings, and contact details
- **Search Engine Files**: Created robots.txt, sitemap.xml endpoints for optimal search engine crawling
- **AI Chatbot Discovery**: Added ai.txt file with business instructions for AI agents (ChatGPT, Claude, etc.) to improve discoverability via chatbots
- **Semantic HTML**: Enhanced all components with proper semantic HTML5 elements and ARIA labels for improved accessibility
- **Social Media Optimization**: Added Open Graph and Twitter Card meta tags with images for better social sharing previews

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Styling**: Tailwind CSS with custom design tokens and dark/light theme support
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component architecture with sections for Header, Hero, Services, Reviews, Gallery, Contact, and Footer

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development Setup**: Hot module replacement with Vite integration in development
- **Storage Interface**: Abstracted storage interface with in-memory implementation for development

## Data Storage Solutions
- **Database**: PostgreSQL configured through Neon Database serverless
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Schema**: Basic user table with id, username, and password fields
- **Session Storage**: PostgreSQL session store (connect-pg-simple) configured

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL store
- **User Schema**: Basic user authentication structure in place but not actively used
- **Current State**: Authentication infrastructure prepared but not implemented in the UI

## Design System
- **Typography**: Inter font family from Google Fonts
- **Color Scheme**: Professional blue primary colors with support for dark/light themes
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Theme System**: Context-based theme provider with system preference detection

## Content Management
- **Static Assets**: Images stored in attached_assets directory
- **Mock Data**: Placeholder content for reviews and gallery items marked for replacement
- **Design Guidelines**: Documented approach inspired by professional service platforms

## SEO and Accessibility
- **Meta Tags**: Comprehensive SEO meta tags in index.html including title, description, keywords, canonical URL, robots directives
- **Open Graph**: Full Open Graph implementation with og:title, og:description, og:image, og:url, og:locale for social media sharing
- **Twitter Cards**: Twitter Card meta tags for enhanced Twitter sharing with summary_large_image card type
- **Geo Tags**: Geographic meta tags for local SEO (Gent, Belgium location)
- **Structured Data**: JSON-LD LocalBusiness schema with:
  - Business information (RenoDB, Hannes)
  - Contact details (phone: +32474968138)
  - Address (Gent, Oost-Vlaanderen, Belgium)
  - Ratings (4.94/5 with 63 reviews)
  - Services catalog (Schilderwerk, Elektriciteit, Schrijnwerk, Loodgieterij, Kluswerk)
- **Semantic HTML**: All components use proper semantic HTML5 elements with ARIA labels and roles
- **Search Engine Optimization**:
  - `/robots.txt`: Allows all crawlers including AI bots (ChatGPT, Claude, GPTBot, anthropic-ai, Google-Extended)
  - `/sitemap.xml`: Dynamic sitemap with homepage URL, lastmod, changefreq, priority
  - `/ai.txt`: AI agent instructions for chatbot discovery with full business context

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with TypeScript support
- **Vite**: Build tool and development server
- **Express.js**: Backend server framework
- **Drizzle ORM**: Database ORM with PostgreSQL adapter

## Database Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Connection**: @neondatabase/serverless for database connectivity

## UI Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant API for component styling

## Development Tools
- **TypeScript**: Type safety across the full stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS plugin

## Third-Party Services
- **Ringtwice**: External review platform integration (Belgium-based service platform)
- **WhatsApp**: Direct messaging integration for customer contact
- **Google Fonts**: Inter font family hosting

## Query and Form Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type inference

The application follows a modern full-stack architecture with clear separation of concerns, focusing on performance, accessibility, and professional presentation for the renovation services business.