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
      const mainNav = document.querySelector('.main-nav');

      if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
          mainNav.classList.toggle('mobile-menu-open');
        });
      }
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

          <!-- Main Navigation -->
          <nav class="main-nav">
            <button class="mobile-menu-toggle">☰</button>

            <!-- Segment Navigation -->
            <?php if ($activeSegment === 'personal'): ?>
            <ul class="segment-nav personal-nav">
              <li><a href="/pages/tech-support.php">Tech Support</a></li>
              <li><a href="/pages/backup.php?segment=personal">Backup</a></li>
              <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
            </ul>

            <?php else: ?>
            <ul class="segment-nav business-nav">
              <li><a href="/pages/business/tech-support.php">Tech Support</a></li>
              <li><a href="/pages/business/microsoft-365.php">Microsoft 365</a></li>
              <li><a href="/pages/business/google-workspace.php">Google Workspace</a></li>
              <li><a href="/pages/backup.php?segment=business">Backup</a></li>
              <li><a href="https://shop.itsolver.net" target="_blank">Shop</a></li>
              <li><a href="https://billing.itsolver.net" target="_blank">Billing</a></li>
            </ul>
            <?php endif; ?>
          </nav>

          <!-- Segment Selector -->
          <div class="segment-selector">
            <a href="/?segment=personal" class="segment-link <?php echo $activeSegment === 'personal' ? 'active' : ''; ?>">PERSONAL</a>
            <span class="segment-divider">|</span>
            <a href="/?segment=business" class="segment-link <?php echo $activeSegment === 'business' ? 'active' : ''; ?>">BUSINESS</a>
          </div>
        </div>
      </div>
    </header>
  <!-- The wrapper div will be closed in index.php after the hero section -->
  <main>
