# IT Solver - Minimalist PHP Marketing Site

A clean, modern, and fast-loading marketing website for IT Solver, built with vanilla PHP and JavaScript. This site embraces a minimalist "just enough" design philosophy inspired by sites like RemoteOK and Nomads, prioritizing speed, clarity, and user experience.

## Design Philosophy

- **Minimalist, Single-Column Layout** - Content focuses on a centered column with ample whitespace
- **Bold, Sparse Typography** - Large headings with comfortable spacing and readable body text
- **Limited Color Palette** - One accent color against a neutral background for clear CTAs and highlights
- **Mobile-First Responsive Design** - Clean experience across all devices
- **Performance-Focused** - Lightweight code with minimal dependencies for fast load times
- **Direct, Scannable Copy** - Clear, concise language that gets straight to the point

## Features

- Clean, single-column responsive design with generous whitespace
- Fast loading times with minimal JavaScript overhead
- Simple PHP templating with modular includes
- Prominent, consistent CTAs throughout the site
- Straightforward contact forms with validation
- Visually distinct support plan pricing tables
- Subtle personal elements (team avatars, testimonials) for authenticity
- Slim header with floating navigation and footer-based secondary links
- No complex build process or dependencies

## Project Structure

```
php_site/
│
├── css/                # CSS stylesheets
│   ├── style.css       # Main stylesheet
│   └── variables.css   # Design tokens (colors, spacing, typography)
│
├── includes/           # PHP include files
│   ├── header.php      # Slim site header with navigation
│   ├── footer.php      # Footer with secondary links
│   └── cta.php         # Reusable call-to-action component
│
├── js/                 # Minimal JavaScript files
│   └── main.js         # Core functionality (navigation, form validation)
│
├── images/             # Optimized image assets
│   ├── logos/          # SVGs for IT Solver, M365, and Google Workspace logos only
│   └── avatars/        # Team/client avatars (if used)
│
├── pages/              # Individual page templates
│   ├── about.php
│   ├── contact.php
│   ├── process_contact.php
│   ├── support-plans.php
│   └── [other pages]
│
└── index.php           # Homepage with prominent main CTA
```

## Design Elements

### Typography & Spacing
- Sans-serif fonts for headings and body text
- Consistent spacing based on 8px increments
- High contrast for readability with ample line height

### Color System
- Primary brand color used sparingly for CTAs and highlights
- White/light background with subtle section dividers
- Neutral text colors with proper contrast ratios

### Icons & Visual Elements
- Emojis used as a lightweight alternative to traditional icons throughout the site
- SVGs limited to essential brand logos only (IT Solver, Microsoft 365, Google Workspace)
- Minimal use of images to maintain fast loading times

### Components
- Bold, single-action CTAs repeated strategically
- Modular sections with clear visual separation
- Minimal form fields with clear labels and validation

## Running Locally

This site uses PHP's built-in server for local development:

```bash
# Navigate to the php_site directory
cd php_site

# Start PHP's built-in server
php -S 0.0.0.0:8000
```

Then visit http://localhost:8000 in your web browser.

## Deployment

Since this is a simple PHP site, it can be deployed to any hosting provider that supports PHP:

1. Upload all files to your web hosting via FTP or your hosting control panel
2. Ensure the server meets the minimum requirements (PHP 7.4+ recommended)
3. No build process is required!

## Design Implementation Tips

- Keep all UI elements consistent with the minimal aesthetic
- Maintain generous whitespace around content blocks
- Use the accent color only for important actions or highlights
- Ensure all text is highly readable on all devices
- Test loading performance regularly to maintain speed

## Future Enhancements

- Add a simple blog system with the same minimalist design approach
- Implement a lightweight database for storing contact form submissions
- Create a minimal admin panel for content management
- Add subtle micro-interactions for improved user experience
- Develop a dark mode option while maintaining the minimalist aesthetic 