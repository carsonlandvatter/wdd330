# Alps Ski Resort

A multi-page ski resort website built with vanilla HTML, CSS, and JavaScript, bundled with Vite.

## Pages

- **Home** (`index.html`) - Hero image, call-to-action, events list, and a snow animation toggle
- **Weather** (`weather.html`) - Live weather cards powered by a weather API
- **Passes** (`passes.html`) - Season, day, and night pass options with add-to-cart functionality
- **Gallery** (`gallery.html`) - Photo gallery with image attributions
- **Cart** (`cart.html`) - Shopping cart for purchasing passes

## Tech Stack

- HTML, CSS, JavaScript (ES modules)
- [Vite](https://vitejs.dev/) for dev server and production builds
- Responsive design with mobile-first approach and a 768px breakpoint for larger screens

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
index.html              # Home page
weather.html            # Weather page
passes.html             # Passes page
gallery.html            # Gallery page
cart.html               # Cart page
src/
  main.js               # Main entry point
  scripts/
    gallery.js           # Gallery functionality
    modules.js           # Shared utilities
    passes.js            # Pass selection and cart logic
    snow.js              # Snow animation
    weather.js           # Weather API integration
  styles/
    styles.css           # Base styles (mobile-first)
    larger.css           # Responsive styles (768px+)
  images/                # Site images and assets
```
