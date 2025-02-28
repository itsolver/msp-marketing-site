<?php
/**
 * IT Solver - Personal Backup Solutions Page
 */

// Handle segment parameter
$activeSegment = 'personal';

// Page metadata
$pageTitle = 'Personal Backup Solutions';
$pageDescription = 'Secure and reliable backup solutions for your personal data. Protect your important files with IT Solver.';

// Include header
include '../includes/header.php';

// Include CTA component
include '../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>Personal Backup Solutions</h1>
      <p>Protect your personal data with secure and reliable backup solutions.</p>
    </div>
  </div>
</section>

<!-- Backup Solutions -->
<section class="backup-solutions">
  <div class="container">
    <div class="content">
      <h2>Why Backup Is Essential for Your Personal Data</h2>

      <div class="feature">
        <h3>Data Loss Prevention</h3>
        <p>Protect against accidental deletion, hardware failure, theft, or ransomware attacks that could wipe out your precious memories and documents.</p>
      </div>

      <div class="feature">
        <h3>Peace of Mind</h3>
        <p>Know that your important personal files, photos, and memories are safely stored and can be recovered when needed.</p>
      </div>

      <div class="feature">
        <h3>Project Continuity</h3>
        <p>Ensure your personal projects can continue uninterrupted even after unexpected data loss.</p>
      </div>

      <div class="feature">
        <h3>Personal Record Keeping</h3>
        <p>Maintain your personal records securely and access them whenever you need them.</p>
      </div>
    </div>
  </div>
</section>

<!-- Backup Solution -->
<section class="backup-options">
  <div class="container">
    <div class="content">
      <h2>Our Personal Backup Solution</h2>

      <div class="service-item featured">
        <h3>💾 Cloud Backup and Recovery Plus</h3>
        <p>Our comprehensive backup solution for PC and Mac computers and external drives.</p>
        <p><strong>$30/month (incl. GST)</strong></p>

        <div class="feature-list">
          <div class="feature-item">
            <h4>Automatic Backups</h4>
            <p>Set-and-forget backups for computers & external drives</p>
          </div>

          <div class="feature-item">
            <h4>Unlimited Everything</h4>
            <p>Unlimited backup, file size, and speed</p>
          </div>

          <div class="feature-item">
            <h4>Enhanced Security</h4>
            <p>Always secure and encrypted</p>
          </div>

          <div class="feature-item">
            <h4>Rapid Restoration</h4>
            <p>Download files for free or have them shipped on an external drive</p>
          </div>

          <div class="feature-item">
            <h4>External Drive Support</h4>
            <p>Automatically back up all your attached external drives at no additional fee</p>
          </div>

          <div class="feature-item">
            <h4>Extended Version History</h4>
            <p>Restore old versions up to 30 days, one year, or forever</p>
          </div>

          <div class="feature-item">
            <h4>Instant Notifications</h4>
            <p>Be notified of your backup status</p>
          </div>

          <div class="feature-item">
            <h4>Human Assistance</h4>
            <p>Includes expert help with recovering your files when you need it most</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="how-it-works">
  <div class="container">
    <div class="content">
      <h2>How Our Personal Backup Service Works</h2>

      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Initial Setup</h3>
          <p>We'll help you configure your backup solution to protect your most important personal data.</p>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <h3>Automatic Backups</h3>
          <p>Your data is automatically backed up in the background without disrupting your daily activities.</p>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <h3>Monitoring & Verification</h3>
          <p>We regularly check your backups to ensure they're working correctly.</p>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <h3>Easy Restoration</h3>
          <p>When you need to recover data, we walk you through the process or handle it for you to make it stress-free.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Protect your personal data today',
  'Buy Personal Backup Solution',
  'https://shop.itsolver.net/products/backup-solutions',
  'Choose the right backup solution for your personal needs.'
);

// Include footer
include '../includes/footer.php';
?>
