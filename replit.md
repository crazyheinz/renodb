# Overview

RenoDB is a professional renovation services website for a contractor based in Gent, Belgium. The project is a full-stack web application built to showcase renovation services including painting, electrical work, carpentry, plumbing, and general handyman services. The site emphasizes trust-building through professional presentation, customer testimonials, and a verified 4.94/5 Ringtwice rating with 63 reviews.

# User Preferences

Preferred communication style: Simple, everyday language.

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