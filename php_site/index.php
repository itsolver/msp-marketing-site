<?php
/**
 * IT Solver - Homepage
 */

// Handle segment parameter
$activeSegment = isset($_GET['segment']) && $_GET['segment'] === 'personal' ? 'personal' : 'business';

// Page metadata
$pageTitle = 'IT Support & Solutions for ' . ($activeSegment === 'personal' ? 'Home & Personal' : 'Businesses');
$pageDescription = 'IT Solver provides ' . ($activeSegment === 'personal' ? 'personal IT support and solutions for home users' : 'managed IT services, support plans, and technology solutions for businesses') . '.';

// Include header
include 'includes/header.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <?php if ($activeSegment === 'personal'): ?>
        <h1>IT Support That Actually Solves Your Problems</h1>
        <p>We provide reliable IT solutions for your home and personal technology needs, so you can focus on what matters most.</p>
      <?php else: ?>
        <h1>IT Support That Actually Solves Business Problems</h1>
        <p>We provide reliable IT solutions that keep your business running smoothly, so you can focus on what matters most.</p>
      <?php endif; ?>

      <div class="cta-container">
        <a href="<?php echo $activeSegment === 'personal' ? '/pages/on-demand-support.php' : '/pages/business/support-plans.php'; ?>" class="cta"><?php echo $activeSegment === 'personal' ? 'Get Support Now' : 'View Support Plans'; ?></a>
        <a href="/contact" class="cta secondary">Schedule Consultation</a>
      </div>

      <!-- Hero Features -->
      <div class="hero-features">
        <div class="hero-feature">
          <h3>Expert Support</h3>
          <p>On-demand help for immediate fixes or ongoing managed support.</p>
        </div>
        <div class="hero-feature">
          <h3>Cloud Solutions</h3>
          <p>Seamless migration to modern cloud services for better productivity.</p>
        </div>
        <div class="hero-feature">
          <h3>Security Focus</h3>
          <p>Keep your business protected with proactive security measures.</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div><!-- Close header-hero-wrapper -->

<!-- Services Section -->
<section class="services">
  <div class="container">
    <div class="content">
      <h2>How We Help</h2>

      <?php if ($activeSegment === 'personal'): ?>
      <!-- Personal Services -->
      <div class="service-item">
        <h3>🛠️ On-Demand Support</h3>
        <p>Expert IT support when you need it, with a simple fixed-rate fee. No technical problem is too big or small for our team.</p>
      </div>

      <div class="service-item">
        <h3>💾 Backup Solutions</h3>
        <p>Protect your precious photos, documents, and digital memories with secure and reliable backup solutions.</p>
      </div>

      <div class="service-item">
        <h3>🔒 Security & Privacy</h3>
        <p>Keep your personal information safe with our security solutions and privacy protection services.</p>
      </div>

      <div class="service-item">
        <h3>🛒 Tech Shop</h3>
        <p>Quality technology products with expert setup and support included. Shop with confidence knowing we're here to help.</p>
      </div>

      <?php else: ?>
      <!-- Business Services -->
      <div class="service-item">
        <h3>🖥️ Managed IT Services</h3>
        <p>Comprehensive IT management and support for your entire business, with proactive monitoring and maintenance to prevent issues before they happen.</p>
      </div>

      <div class="service-item">
        <h3>☁️ Cloud Solutions</h3>
        <p>Secure and reliable cloud services including Microsoft 365 and Google Workspace implementation, migration, and ongoing support.</p>
      </div>

      <div class="service-item">
        <h3>🔒 Cybersecurity</h3>
        <p>Protect your business with comprehensive security solutions including threat detection, prevention, and employee training.</p>
      </div>

      <div class="service-item">
        <h3>🛠️ IT Support Plans</h3>
        <p>Flexible support options tailored to your business needs, from on-demand assistance to full managed services.</p>
      </div>
      <?php endif; ?>
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
    'Buy On-Demand Support',
    '/pages/on-demand-support.php',
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
