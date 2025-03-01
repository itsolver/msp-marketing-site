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
<section class="hero" id="order-now">
  <div class="hero-container">
    <div class="text-container">
      <div class="text-wrapper">
        <h1 class="text-headline">TECHNOLOGY MADE SIMPLE</h1>
        <h2 class="text-subheading">Support at home and business</h2>
        <?php if (isset($videoButton) && $videoButton): ?>
        <div>
          <a class="video-button" tabindex="0">
            <span class="video-button-text">Watch Now</span>
            <span class="video-icon">play_circle_outline</span>
          </a>
        </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="service-plan-card-container">
      <div class="hero-service-plan-card-container" id="personal-hero-card">
        <p class="service-card-title">personal</p>
        <p class="service-card-subtitle">Support for home</p>
        <p class="service-card-description"><strong>$330</strong></p>
        <div class="service-card-call-to-action">
          <a href="https://book.stripe.com/3cs8zC99Jgf3aHK005" class="primary-action-button">Order Now</a>
          <a href="/pages/tech-support.php" class="secondary-action-button">Learn More</a>
        </div>
      </div>

      <div class="hero-service-plan-card-container" id="business-hero-card">
        <p class="service-card-title">BUSINESS</p>
        <p class="service-card-subtitle">Systems Health Check and ongoing support for businesses anywhere in the world</p>
        <p class="service-card-description"><strong>$330</strong></p>
        <div class="service-card-call-to-action">
          <a href="https://book.stripe.com/dR617a4TtaUJ8zC28b" class="primary-action-button">Order Now</a>
          <a href="/pages/business/tech-support.php" class="secondary-action-button">Learn More</a>
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
        <div class="hero-feature-icon">🖥️</div>
        <h3>Expert Support</h3>
        <p>On-demand help for immediate fixes or ongoing managed support.</p>
      </div>

      <div class="hero-feature">
        <div class="hero-feature-icon">☁️</div>
        <h3>Cloud Solutions</h3>
        <p>Seamless migration to modern cloud services for better productivity.</p>
      </div>

      <div class="hero-feature">
        <div class="hero-feature-icon">🔒</div>
        <h3>Security Focus</h3>
        <p>Keep your technology protected with proactive security measures.</p>
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
    'Ready to enhance your tech experience?',
    'Get Support Now',
    '/pages/tech-support.php',
    'Get expert technology assistance for a simple fixed rate that keeps you moving forward.'
  );
} else {
  renderCTA(
    'Ready to elevate your IT infrastructure?',
    'Choose a Support Plan',
    '/pages/business/support-plans.php',
    'Select the right IT support plan to keep your business growing and thriving.'
  );
}

// Include footer
include 'includes/footer.php';
?>
