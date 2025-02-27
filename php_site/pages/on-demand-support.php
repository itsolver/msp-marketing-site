<?php
/**
 * IT Solver - On-Demand Support Page
 */

// Handle segment parameter
$activeSegment = isset($_GET['segment']) && $_GET['segment'] === 'personal' ? 'personal' : 'business';

// Page metadata
$pageTitle = 'On-Demand IT Support';
$pageDescription = 'Get expert IT support when you need it with our On-Demand Support service. Fixed-rate pricing with no hidden fees.';

// Include header
include '../includes/header.php';

// Include CTA component
include '../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>On-Demand IT Support</h1>
      <p>Expert support for your technology issues, available when you need it most.</p>
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
        <p>Schedule your support session online or give us a call. We'll respond quickly to get you the help you need.</p>
      </div>
      
      <div class="service-item">
        <h3>2. Explain Your Issue</h3>
        <p>Tell us what's happening, and our experts will work to understand and diagnose the problem.</p>
      </div>
      
      <div class="service-item">
        <h3>3. Get Expert Support</h3>
        <p>Our technicians will resolve your issue remotely or in person, depending on what's needed.</p>
      </div>
      
      <div class="service-item">
        <h3>4. Problem Solved</h3>
        <p>We'll make sure your issue is completely resolved and provide any follow-up support needed.</p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="pricing">
  <div class="container">
    <div class="content">
      <h2>Simple, Transparent Pricing</h2>
      
      <div class="pricing-box">
        <div class="price">$330</div>
        <div class="price-description">per incident</div>
        <ul class="price-features">
          <li>Expert support for a single, critical issue</li>
          <li>Transparent fixed rate - no hidden fees</li>
          <li>Up to 2 hours of dedicated support</li>
          <li>Option to extend at $165/hr if needed</li>
          <li>30-day follow-up coverage</li>
          <li>Detailed issue resolution report</li>
        </ul>
        <a href="https://shop.itsolver.net/products/on-demand-support" class="cta">Buy Now</a>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Ready to get started?', 
  'Purchase Support', 
  'https://shop.itsolver.net/products/on-demand-support', 
  'Get immediate help with your technology issues for a simple fixed rate.'
);

// Include footer
include '../includes/footer.php';
?> 