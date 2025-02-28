<?php
/**
 * IT Solver - Business Backup Solutions Page
 */

// Handle segment parameter
$activeSegment = 'business';

// Page metadata
$pageTitle = 'Business Backup Solutions';
$pageDescription = 'Secure and reliable backup solutions for your business data. Protect your important files with IT Solver.';

// Include header
include '../includes/header.php';

// Include CTA component
include '../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>Business Backup Solutions</h1>
      <p>Protect your business data with secure and reliable backup solutions.</p>
    </div>
  </div>
</section>

<!-- Backup Solutions -->
<section class="backup-solutions">
  <div class="container">
    <div class="content">
      <h2>Why Backup Is Essential for Your Business</h2>

      <div class="feature">
        <h3>Data Loss Prevention</h3>
        <p>Protect against accidental deletion, hardware failure, theft, or ransomware attacks.</p>
      </div>

      <div class="feature">
        <h3>Peace of Mind</h3>
        <p>Know that your important business files are safely stored and can be recovered when needed.</p>
      </div>

      <div class="feature">
        <h3>Business Continuity</h3>
        <p>Minimize downtime and ensure your business can continue operating even after data loss.</p>
      </div>

      <div class="feature">
        <h3>Compliance</h3>
        <p>Meet regulatory requirements for data retention and protection.</p>
      </div>
    </div>
  </div>
</section>

<!-- Backup Solutions -->
<section class="backup-options">
  <div class="container">
    <div class="content">
      <h2>Our Business Backup Solutions</h2>

      <div class="service-item">
        <h3>☁️ Cloud Backup for Microsoft 365 & Google Workspace</h3>
        <p>Protect your business emails, documents, and collaboration data with our comprehensive cloud backup solution.</p>
        <p><strong>Starting at $17/month per user</strong></p>
      </div>

      <div class="service-item">
        <h3>💻 Workstation Backup</h3>
        <p>Secure backup for all files on your business workstations, with file history and deletion recovery.</p>
        <p><strong>$30/month per workstation</strong></p>
      </div>

      <div class="service-item">
        <h3>🖥️ Server Backup</h3>
        <p>Comprehensive backup solution for your business servers, ensuring your critical data is protected and can be quickly restored.</p>
        <p><strong>$50/month per server</strong></p>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="how-it-works">
  <div class="container">
    <div class="content">
      <h2>How Our Business Backup Service Works</h2>

      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Initial Setup</h3>
          <p>We'll configure your backup solution to protect your most important business data.</p>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <h3>Automatic Backups</h3>
          <p>Your data is automatically backed up according to your schedule.</p>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <h3>Monitoring & Verification</h3>
          <p>We regularly check your backups to ensure they're working correctly.</p>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <h3>Easy Restoration</h3>
          <p>When you need to recover data, we make the process simple and fast to minimize business disruption.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Protect your business data today',
  'Buy Business Backup Solution',
  'https://shop.itsolver.net/products/backup-solutions',
  'Choose the right backup solution for your business needs.'
);

// Include footer
include '../includes/footer.php';
?>
