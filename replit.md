# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built for Youssef Darwish, a creative full-stack developer specializing in Odoo ERP, Salesforce Apex, and React.js development. The application features a responsive, multilingual design with dark/light theme support, interactive sections showcasing skills and experience, and a contact form for potential clients and employers.

The website serves as a professional showcase highlighting expertise in ERP systems, CRM platforms, and modern web development, with particular emphasis on AI-assisted development and cloud deployment strategies.

## User Preferences

Preferred communication style: Simple, everyday language.
Contact form integration: Messages should be sent directly to WhatsApp (+966532441566) instead of email
Resume download: Users should be able to download an HTML/CSS creative resume file
Language-specific resumes: Resume files are now dynamically served based on current language selection (Arabic, English, Hindi, French)
Multi-language support: Website is 100% compatible with all supported languages including Arabic RTL support

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming, shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management, React Context for theme and language preferences
- **Internationalization**: Custom language provider supporting English, Arabic, Hindi, and French with RTL support for Arabic
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessibility and consistency

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints following conventional HTTP methods
- **Development Server**: Vite integration for hot module replacement and fast development builds
- **Build Process**: esbuild for production builds with platform-specific optimizations

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud database hosting
- **Session Storage**: connect-pg-simple for PostgreSQL-backed session management
- **Validation**: Zod schemas for runtime type validation and API request/response validation

### Theming and Styling
- **Design System**: Custom CSS variables for consistent theming across light and dark modes
- **Component Variants**: Class-variance-authority for systematic component styling variations
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: Custom CSS animations and Tailwind animation utilities for enhanced user experience

### Form Handling and Validation
- **Forms**: React Hook Form with Hookform resolvers for efficient form state management
- **Validation**: Zod schemas integrated with Drizzle for consistent validation across client and server
- **User Feedback**: Toast notifications for form submission feedback and error handling

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting with automatic scaling
- **Drizzle ORM**: Type-safe database operations with migration support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Feather-inspired icon library for consistent iconography
- **React Icons**: Additional icon libraries for brand and social media icons

### Development and Build Tools
- **Vite**: Fast build tool with hot module replacement for development
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking for improved code quality
- **Replit Plugins**: Development environment integration for Replit platform

### Utility Libraries
- **clsx & tailwind-merge**: Conditional CSS class management
- **date-fns**: Modern date utility library for date formatting and manipulation
- **nanoid**: Secure URL-friendly unique ID generation
- **Wouter**: Minimalist routing library for React applications

### Development Dependencies
- **TanStack Query**: Powerful data synchronization for server state management
- **React Hook Form**: Performant forms with easy validation
- **Embla Carousel**: Touch-friendly carousel component for project showcases