# Overview

Tomboan is a cultural and educational tourism web application that showcases the heritage site of Situs Petirtaan Ngawonggo. The platform presents Indonesian cultural wisdom through the philosophy of "Asah, Asih, Asuh" (Sharpen, Love, Nurture) and features educational content, traditional cuisine, heritage information, and contact functionality. Built as a modern React application with a Node.js/Express backend, it includes multilingual support (Indonesian/English) and implements a contact form for visitor inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application built with React 18 and TypeScript
- **Styling**: TailwindCSS with shadcn/ui component library for consistent design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: Custom language context for Indonesian/English support
- **Component Structure**: Modular components for Hero, About, Heritage, Education, Food, Gallery, Founder, Contact, and Footer sections

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Shared schema definitions between client and server
- **Current Implementation**: In-memory storage for development
- **Production Ready**: PostgreSQL schema defined with Neon database integration

## Key Features
- **Contact System**: Form submission with validation for visitor inquiries
- **Heritage Content**: Rich cultural and historical information presentation
- **Educational Programs**: Information about cultural education initiatives
- **Traditional Cuisine**: Showcase of local food and zero-waste practices
- **Gallery**: Visual content presentation
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Express server with Vite middleware integration
- **Asset Management**: Static asset serving with proper routing
- **Code Quality**: TypeScript for type safety across the entire stack

# External Dependencies

## Core Technologies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **State Management**: TanStack Query for server state and caching
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **Component Library**: Radix UI primitives with shadcn/ui components

## Backend Dependencies
- **Web Framework**: Express.js for server implementation
- **Database**: Drizzle ORM with PostgreSQL (Neon serverless)
- **Validation**: Zod for schema validation
- **Build Tools**: ESBuild for server bundling, TSX for development

## Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support across client and server
- **Development**: Replit-specific plugins for runtime error handling
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## UI and Styling
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts integration (Poppins, Inter, Geist Mono)
- **Animations**: Class Variance Authority for component variants
- **Date Handling**: date-fns for date formatting and manipulation

## Production Considerations
- **Database**: PostgreSQL with Neon serverless for scalability
- **Asset Optimization**: Vite production builds with code splitting
- **Error Monitoring**: Runtime error overlay for development
- **Performance**: Query caching and optimized bundle sizes