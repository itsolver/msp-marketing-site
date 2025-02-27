# IT Solver - Simple PHP Website

A clean and modern marketing website for IT Solver, built with vanilla PHP and JavaScript. This site replaces the previous Jekyll-based implementation with a simpler, more maintainable solution.

## Features

- Clean, responsive design
- Fast loading times
- Simple PHP templating with includes
- Contact form with validation
- Support plan pricing tables
- Modern JavaScript functionality
- No complex build process or dependencies

## Project Structure

```
php_site/
│
├── css/               # CSS stylesheets
│   └── style.css      # Main stylesheet
│
├── includes/          # PHP include files
│   ├── header.php     # Site header with navigation
│   └── footer.php     # Site footer
│
├── js/                # JavaScript files
│   └── main.js        # Main JavaScript functionality
│
├── images/            # Image assets
│
├── pages/             # Individual page templates
│   ├── about.php
│   ├── contact.php
│   ├── process_contact.php
│   ├── support-plans.php
│   └── [other pages]
│
└── index.php          # Homepage
```

## Running Locally

This site uses PHP's built-in server for local development:

```bash
# Navigate to the php_site directory
cd php_site

# Start PHP's built-in server
php -S localhost:8000
```

Then visit http://localhost:8000 in your web browser.

## Deployment

Since this is a simple PHP site, it can be deployed to any hosting provider that supports PHP:

1. Upload all files to your web hosting via FTP or your hosting control panel
2. Ensure the server meets the minimum requirements (PHP 7.4+ recommended)
3. No build process is required!

## Future Enhancements

- Add a simple blog system
- Implement a database for storing contact form submissions
- Create an admin panel for content management
- Add more interactive elements and animations 