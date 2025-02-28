<?php
/**
 * IT Solver - Homepage with Starlink-inspired design
 */

// Handle segment parameter
$activeSegment = isset($_GET['segment']) && $_GET['segment'] === 'personal' ? 'personal' : 'business';

// Page metadata
$pageTitle = 'IT Support & Solutions for ' . ($activeSegment === 'personal' ? 'Home & Personal' : 'Businesses');
$pageDescription = 'IT Solver provides ' . ($activeSegment === 'personal' ? 'personal IT support and solutions for home users' : 'managed IT services, support plans, and technology solutions for businesses') . '.';

// Include header
include 'includes/header.php';
?>

<div class="header-hero-wrapper" style="background-image: url('/images/ITSOLVER-LOWRES-1.jpg');">

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <?php if ($activeSegment === 'personal'): ?>
        <h1>STARLINK FOR HOME</h1>
        <p>Reliable high-speed internet for homes, starting at $139/mo.</p>
      <?php else: ?>
        <h1>STARLINK FOR BUSINESSES</h1>
        <p>Reliable high-speed internet for businesses, starting at $176/mo.</p>
      <?php endif; ?>

      <div class="price-info">
        <div>Flat HP Kit now available for <span class="price">$2,699</span> <span class="sale-price">$2,749</span> until 2/28.</div>
        <div class="price-note">Schedule a consultation or view our buyer's guide.</div>
      </div>

      <div class="action-links">
        <a href="/pages/consultation.php">Schedule a consultation</a>
        <span class="action-sep">or</span>
        <a href="/pages/buyers-guide.php">buyer's guide</a>
      </div>

      <div class="address-form">
        <div class="address-form-row">
          <div class="address-input">
            <label for="service-address">SERVICE ADDRESS</label>
            <input type="text" id="service-address" placeholder="TYPE AND SELECT">
          </div>
          <button class="order-now-btn">ORDER NOW</button>
        </div>
      </div>
    </div>
  </div>
</section>

</div><!-- Close header-hero-wrapper -->

<!-- Features Section -->
<section class="services">
  <div class="container">
    <div class="hero-features">
      <div class="hero-feature">
        <div class="hero-feature-icon">🌐</div>
        <h3>Global Coverage</h3>
        <p>Reliable internet service wherever you need it with our global satellite network.</p>
      </div>

      <div class="hero-feature">
        <div class="hero-feature-icon">⚡</div>
        <h3>High Performance</h3>
        <p>Up to 150Mbps download speeds for seamless video conferencing and cloud services.</p>
      </div>

      <div class="hero-feature">
        <div class="hero-feature-icon">🔌</div>
        <h3>Easy Setup</h3>
        <p>Simple self-installation with minimal technical knowledge required.</p>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-us">
  <div class="container">
    <div class="content">
      <h2>Why Choose IT Solver?</h2>

      <div class="feature">
        <h3>Fast Response Times</h3>
        <p>We respond to critical issues within 15 minutes, with most problems resolved remotely within the hour.</p>
      </div>

      <div class="feature">
        <h3><?php echo $activeSegment === 'personal' ? 'Clear, Upfront Pricing' : 'Fixed Monthly Pricing'; ?></h3>
        <p><?php echo $activeSegment === 'personal' ? 'No surprise bills or hidden fees. We provide clear pricing before any work begins.' : 'Predictable IT costs with no surprise bills or hidden fees. Pay one flat rate for all your IT needs.'; ?></p>
      </div>

      <div class="feature">
        <h3>Proactive Approach</h3>
        <p>We identify and fix issues before they impact <?php echo $activeSegment === 'personal' ? 'your daily life' : 'your business'; ?>, reducing downtime and frustration.</p>
      </div>

      <div class="feature">
        <h3>Plain English Communication</h3>
        <p>No technical jargon or confusing explanations. We speak your language and keep you informed.</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonial Section -->
<section class="testimonial">
  <div class="container">
    <div class="content">
      <h2>What Our Clients Say</h2>

      <?php if ($activeSegment === 'personal'): ?>
      <div class="testimonial-item">
        <p>"Angus was amazing, incredibly fast service and fixed our sons computer same day. Incredibly helpful and knowledgeable. Will 100% be back!"</p>
        <div class="testimonial-author">
          <p><strong>Sandy McCristal</strong></p>
          <p>Brisbane, QLD</p>
        </div>
      </div>
      <?php else: ?>
      <div class="testimonial-item">
        <p>"Angus is always happy and helpful. He has managed to work with a professional and knowledgeable attitude, while still explaining things in terms that are understandable to me. I thank him for his patience and support in helping us upgrade our computer system and related work practices."</p>
        <div class="testimonial-author">
          <p><strong>Chris Rice</strong></p>
          <p>Statewide Roofing</p>
        </div>
      </div>
      <?php endif; ?>
    </div>
  </div>
</section>

<?php
// Include CTA component
include 'includes/cta.php';

// Render CTA with segment-specific content
if ($activeSegment === 'personal') {
  renderCTA(
    'Ready to solve your tech problems?',
    'Get Support Now',
    '/pages/tech-support.php',
    'Get immediate help with your technology issues for a simple fixed rate.'
  );
} else {
  renderCTA(
    'Ready to solve your IT challenges?',
    'Choose a Support Plan',
    '/pages/business/support-plans.php',
    'Select the right IT support plan to keep your business running smoothly.'
  );
}

// Include footer
include 'includes/footer.php';
?>
