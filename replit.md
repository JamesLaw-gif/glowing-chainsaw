# Next.js Portfolio Website

## Overview
This is a bespoke bridal makeup artist website for MakeupByCarey, built with Next.js 14, TypeScript, and Tailwind CSS. The project features a responsive design specializing in Asian-inspired bridal makeup with elegant, professional sections.

## Recent Changes
- **2025-10-30**: Redesigned footer with unconventional, artistic layout for makeup artist brand
  - Asymmetric grid layout with logo and tagline on left (5 columns)
  - Navigation links in clean 3-column layout on right (7 columns)
  - Gradient background with subtle artistic blur effects
  - Social media icons with circular hover animations
  - Elegant makeup brush stroke-inspired divider
  - Scroll-triggered fade-in animations using Framer Motion
  - Clean typography with proper spacing and hierarchy
- **2025-10-30**: Increased header logo size from h-24 to h-32 for better visibility
- **2025-10-28**: Replaced Bridal Hair & Makeup service image with IMG_6728
- **2025-10-28**: Added MakeupByCarey logo to header navigation center
  - Logo positioned between left and right navigation menus in header
  - Logo clickable to scroll to top of page
  - Logo features hover scale animation
- **2025-10-28**: Updated all testimonial profile pictures with real client photos (Hoying, Nicky, Scarlet)
- **2025-10-28**: Added new image to Inquire page slideshow gallery (now 9 images)
- **2025-10-28**: Updated About section image with new professional photo
- **2025-10-28**: Optimized project by removing 151MB of unused files
  - Removed entire attached_assets folder
  - Cleaned up old testimonial images
  - Removed unused public/images files
  - Project now contains only 22 essential images
- **2025-09-29**: Added modern scroll animations and micro-interactions throughout the website using Framer Motion
  - Scroll-triggered fade/slide animations on all sections
  - Parallax effects on Hero and Celebrate sections  
  - Hover micro-interactions on buttons, cards, and navigation
  - Sticky header with adaptive colors on scroll
- **2025-09-29**: Added testimonials section with Chinese names and bridal makeup reviews after FAQ section
- **2025-09-29**: Redesigned footer to minimalist layout by removing center branding and large "M" watermark
- **2024-09-20**: Imported GitHub project and set up for Replit environment
- Configured proper Next.js app directory structure
- Set up TypeScript and Tailwind CSS configuration
- Fixed CSS compilation issues with proper Tailwind directives
- Configured development server to run on port 5000 with proper host settings for Replit proxy
- Set up deployment configuration for autoscale deployment

## Project Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Modular React components in `/components` directory
- **Layout**: App directory structure with root layout and page components
- **Fonts**: Google Fonts (Playfair Display, Inter, Dancing Script)
- **Icons**: Lucide React for iconography

## Key Features
- Responsive portfolio website design
- Animated banner with marquee effect
- Modal photo galleries
- Custom CSS variables for consistent theming
- Optimized for Replit deployment environment

## Development
- Development server runs on `http://0.0.0.0:5000`
- Uses Next.js hot reload for development
- Configured to work with Replit's proxy environment

## Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Start command: `npm start`
- Optimized for production with proper caching headers