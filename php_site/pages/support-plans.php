<?php
/**
 * IT Solver - Support Plans Page
 */

// Set segment to business since this is a business-only page
$activeSegment = 'business';

// Page metadata
$pageTitle = 'IT Support Plans for Businesses';
$pageDescription = 'Choose from our flexible IT support plans designed to keep your business running smoothly with proactive maintenance and responsive support.';

// Include header
include '../includes/header.php';

// Include CTA component
include '../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>IT Support Plans</h1>
      <p>Comprehensive IT support tailored to your business needs.</p>
    </div>
  </div>
</section>

<!-- Plans Comparison -->
<section class="plans">
  <div class="container">
    <div class="content">
      <h2>Choose Your Support Plan</h2>
      
      <div class="plans-container">
        <!-- Essential Plan -->
        <div class="plan-box">
          <div class="plan-header">
            <h3>Essential Plan</h3>
            <div class="plan-price">$275<span>/month</span></div>
            <div class="plan-price-yearly">$2,750/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>All you can eat buffet in IT support</li>
              <li>Outsourced admin tasks for Google Workspace or Microsoft 365</li>
              <li>Best practices for modern security</li>
              <li>Dedicated technical assistant who speaks your language</li>
              <li>Assistance with internet, email, storage, mobility and security</li>
              <li>Domain Name management</li>
              <li>Get expert answers to tech questions</li>
              <li>Submit requests via email</li>
              <li>Emergency requests via phone</li>
              <li>Mon-Fri 9am-5pm support</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/essential-support-plan" class="cta">Subscribe Now</a>
        </div>
        
        <!-- Premium Plan -->
        <div class="plan-box featured">
          <div class="plan-badge">Most Popular</div>
          <div class="plan-header">
            <h3>Premium Plan</h3>
            <div class="plan-price">$550<span>/month</span></div>
            <div class="plan-price-yearly">$5,500/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Everything in Essential Plan, plus...</li>
              <li>Dedicated support agent a phone call away</li>
              <li>Device Management to standardize your devices and protect your Intellectual Property</li>
              <li>Monitoring devices for threats (requires Defender for Business)</li>
              <li>7 days a week 7am-7pm support</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/premium-support-plan" class="cta">Subscribe Now</a>
        </div>
      </div>
      
      <div class="plan-note">
        <p>Additional services available at $165/hour during business hours or $275/hour after hours.</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="faq">
  <div class="container">
    <div class="content">
      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-item">
        <h3>What's included in the support plans?</h3>
        <p>Our support plans include troubleshooting, cloud services management, security, email support, software assistance, operating system maintenance, and website/domain management. For a detailed list of inclusions, please contact us.</p>
      </div>
      
      <div class="faq-item">
        <h3>What's not included in the support plans?</h3>
        <p>Support plans exclude major hardware/software changes, custom development, content creation, physical hardware service, web design, data migration, formal training, and project management. These services are available at our hourly rates.</p>
      </div>
      
      <div class="faq-item">
        <h3>How quickly will you respond to support requests?</h3>
        <p>For Essential Plan customers, we respond to urgent issues within 30 minutes during business hours. Premium Plan customers receive responses within 15 minutes, 7 days a week from 7am-7pm.</p>
      </div>
      
      <div class="faq-item">
        <h3>Can I upgrade or downgrade my plan?</h3>
        <p>Yes, you can change your plan at any time. Monthly plans can be upgraded or downgraded for the next billing cycle. Annual plans can be upgraded immediately with prorated charges.</p>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Ready to get started?', 
  'Choose Your Plan', 
  'https://shop.itsolver.net/collections/support-plans', 
  'Select the right support plan to keep your business running smoothly.'
);

// Include footer
include '../includes/footer.php';
?> 