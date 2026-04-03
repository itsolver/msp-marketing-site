<?php
/**
 * IT Solver - Personal On-Demand Support Page
 */

// Handle segment parameter
$activeSegment = 'personal';

// Page metadata
$pageTitle = 'Personal On-Demand IT Support';
$pageDescription = 'Get expert IT support for your personal devices when you need it with our On-Demand Personal Support service. Fixed-rate pricing with no hidden fees.';

// Include header
include '../includes/header.php';

// Include CTA component
include '../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>Personal On-Demand IT Support</h1>
      <p>Expert support for your personal technology, available when you need it most.</p>
    </div>
  </div>
</section>

<!-- On-Demand Support Details -->
<section class="on-demand-details">
  <div class="container">
    <div class="content">
      <h2>How It Works</h2>

      <div class="service-item">
        <h3>1. Book a Session</h3>
        <p>Schedule your support session online or give us a call. We'll respond quickly to solve your personal tech problems.</p>
      </div>

      <div class="service-item">
        <h3>2. Explain Your Issue</h3>
        <p>Tell us what's happening with your personal device or system, and our tech experts will work to understand the problem.</p>
      </div>

      <div class="service-item">
        <h3>3. Get Friendly Support</h3>
        <p>Our patient technology specialists will resolve your issue remotely or in your home, making sure you understand each step of the process.</p>
      </div>

      <div class="service-item">
        <h3>4. Back to Normal Life</h3>
        <p>We'll make sure your issue is completely resolved and provide easy-to-follow guidance to prevent future problems.</p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="pricing">
  <div class="container">
    <div class="content">
      <h2>Personal Support Pricing</h2>

      <div class="pricing-box">
        <div class="price">$330</div>
        <div class="price-description">per incident</div>
        <ul class="price-features">
          <li>Expert support for a single personal tech issue</li>
          <li>Transparent fixed rate - no hidden fees</li>
          <li>Up to 2 hours of dedicated, patient support</li>
          <li>Option to extend at $165/hr if needed</li>
          <li>30-day follow-up coverage</li>
          <li>Jargon-free explanations of fixes</li>
          <li>Personalized tips to avoid future problems</li>
        </ul>
        <a href="https://book.stripe.com/3cs8zC99Jgf3aHK005" class="cta">Buy Now</a>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Ready to fix your tech problems?',
  'Purchase Personal Support',
  'https://book.stripe.com/3cs8zC99Jgf3aHK005',
  'Get immediate help with your personal technology issues for a simple fixed rate.'
);

// Include footer
include '../includes/footer.php';
?>
