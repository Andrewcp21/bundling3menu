# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kinonramekins Bundling Promo page - a promotional landing page for online baking class bundles. Users can either select pre-made bundles or customize their own bundle by picking 3 courses to get a 15% discount.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Next.js 16** with App Router and React Compiler
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety

### Key Files

- `app/page.tsx` - Main landing page with two sections: pre-made bundles and custom bundle selector
- `app/data/courses.ts` - Course catalog, bundle definitions, WhatsApp number, and discount config
- `app/components/BundleCard.tsx` - Pre-made bundle card component with WhatsApp order button
- `app/components/CustomBundleSelector.tsx` - Interactive component for selecting 3 courses with category filtering

### Data Flow

1. User selects a pre-made bundle OR picks 3 courses in custom selector
2. Clicking order button opens WhatsApp with pre-filled message containing:
   - For pre-made: bundle name and price
   - For custom: list of selected courses and discounted total

### Configuration

All configurable values are in `app/data/courses.ts`:
- `WHATSAPP_NUMBER` - Contact number for orders
- `CUSTOM_DISCOUNT_PERCENT` - Discount for custom bundles (currently 15%)
- `bundles` array - Pre-made bundle definitions with prices
- `courses` array - Full course catalog

### Styling

Brand colors (defined in `globals.css`):
- Background: `#4a3728` (dark brown)
- Card background: `#f5f0eb` (cream)
- Gold accent: `#c9943a`
- Red accent: `#8b2635`

### Images

Product images are in `public/images/products/` (copied from main kinonramekins-web project).
