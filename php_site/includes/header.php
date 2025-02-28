<?php
/**
 * Site Header with Navigation
 */

// Default to business segment if not set
$activeSegment = isset($activeSegment) ? $activeSegment : 'business';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($pageTitle) ? $pageTitle . ' - IT Solver' : 'IT Solver - IT Support & Solutions'; ?></title>
  <meta name="description" content="<?php echo isset($pageDescription) ? $pageDescription : 'IT Solver provides managed IT services, support plans, and technology solutions for businesses.'; ?>">
  <link rel="stylesheet" href="/css/style.css">
  <?php if (isset($additionalCss)): ?>
    <?php foreach ($additionalCss as $css): ?>
      <link rel="stylesheet" href="<?php echo $css; ?>">
    <?php endforeach; ?>
  <?php endif; ?>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuClose = document.querySelector('.mobile-menu-close');

      if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
          mobileMenu.classList.add('active');
          document.body.classList.add('menu-open');
        });
      }

      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      }

      // Add segment switcher functionality for mobile
      const mobileSegmentLinks = document.querySelectorAll('.mobile-segment .segment-link');
      const personalNavList = document.querySelector('.mobile-nav-list.personal-nav-list');
      const businessNavList = document.querySelector('.mobile-nav-list.business-nav-list');

      mobileSegmentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // Only prevent default if we're in the mobile menu
          if (mobileMenu.classList.contains('active')) {
            e.preventDefault();

            // Remove active class from all segment links
            mobileSegmentLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Toggle visibility of nav lists based on segment
            if (this.getAttribute('data-segment') === 'personal') {
              personalNavList.style.display = 'block';
              businessNavList.style.display = 'none';
            } else {
              personalNavList.style.display = 'none';
              businessNavList.style.display = 'block';
            }
          }
        });
      });
    });
  </script>
</head>
<body>
  <!-- Header-Hero Wrapper - Start -->
  <div class="header-hero-wrapper">
    <header>
      <div class="container">
        <div class="header-container">
          <!-- Logo -->
          <div class="logo">
            <a href="/">IT Solver</a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="desktop-nav">
            <?php if ($activeSegment === 'personal'): ?>
            <ul class="segment-nav personal-nav">
              <li><a href="/pages/tech-support.php">Tech Support</a></li>
              <li><a href="/pages/backup.php">Backup</a></li>
              <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
            </ul>
            <?php else: ?>
            <ul class="segment-nav business-nav">
              <li><a href="/pages/business/support-plans.php">Support Plans</a></li>
              <li><a href="/pages/business/microsoft-365.php">Microsoft 365</a></li>
              <li><a href="/pages/business/google-workspace.php">Google Workspace</a></li>
              <li><a href="/pages/business/backup.php">Backup</a></li>
              <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
              <li><a href="https://billing.itsolver.net" target="_blank">Billing</a></li>
            </ul>
            <?php endif; ?>
          </nav>

          <!-- Desktop Segment Selector -->
          <div class="segment-selector desktop-segment">
            <a href="/?segment=personal" class="segment-link <?php echo $activeSegment === 'personal' ? 'active' : ''; ?>">PERSONAL</a>
            <span class="segment-divider">|</span>
            <a href="/?segment=business" class="segment-link <?php echo $activeSegment === 'business' ? 'active' : ''; ?>">BUSINESS</a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button class="mobile-menu-toggle">☰</button>
        </div>
      </div>

      <!-- Mobile Menu (Full Screen Overlay) -->
      <div class="mobile-menu">
        <div class="mobile-menu-header">
          <button class="mobile-menu-close">✕</button>

          <!-- Mobile Segment Selector -->
          <div class="segment-selector mobile-segment">
            <a href="/?segment=personal" data-segment="personal" class="segment-link <?php echo $activeSegment === 'personal' ? 'active' : ''; ?>">PERSONAL</a>
            <span class="segment-divider">|</span>
            <a href="/?segment=business" data-segment="business" class="segment-link <?php echo $activeSegment === 'business' ? 'active' : ''; ?>">BUSINESS</a>
          </div>
        </div>

        <nav class="mobile-nav">
          <ul class="mobile-nav-list personal-nav-list" style="display: <?php echo $activeSegment === 'personal' ? 'block' : 'none'; ?>">
            <li><a href="/pages/tech-support.php">Tech Support</a></li>
            <li><a href="/pages/backup.php">Backup</a></li>
            <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
          </ul>
          <ul class="mobile-nav-list business-nav-list" style="display: <?php echo $activeSegment === 'business' ? 'block' : 'none'; ?>">
            <li><a href="/pages/business/tech-support.php">Tech Support</a></li>
            <li><a href="/pages/business/microsoft-365.php">Microsoft 365</a></li>
            <li><a href="/pages/business/google-workspace.php">Google Workspace</a></li>
            <li><a href="/pages/business/backup.php">Backup</a></li>
            <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
            <li><a href="https://billing.itsolver.net" target="_blank">Billing</a></li>
          </ul>
        </nav>
      </div>
    </header>
  <!-- The wrapper div will be closed in index.php after the hero section -->
  <main>
