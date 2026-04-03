<?php
/**
 * IT Solver - Google Workspace Page
 */

// Set segment to business since this is a business-only page
$activeSegment = 'business';

// Page metadata
$pageTitle = 'Google Workspace for Business';
$pageDescription = 'Enhance your business collaboration with Google Workspace. Get secure email, cloud storage, and powerful productivity tools.';

// Include header
include '../../includes/header.php';

// Include CTA component
include '../../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>Google Workspace for Business</h1>
      <p>Modern collaboration tools for your business.</p>
    </div>
  </div>
</section>

<!-- Google Workspace Overview -->
<section class="gworkspace-overview">
  <div class="container">
    <div class="content">
      <h2>Why Choose Google Workspace?</h2>
      
      <div class="feature">
        <h3>Integrated Workspace</h3>
        <p>Tools you love, thoughtfully connected with a simple-to-use interface.</p>
      </div>
      
      <div class="feature">
        <h3>Professional Email</h3>
        <p>Business email with your domain name, powered by Gmail's reliable platform.</p>
      </div>
      
      <div class="feature">
        <h3>Cloud Storage</h3>
        <p>Secure file storage and sharing with Google Drive.</p>
      </div>
      
      <div class="feature">
        <h3>Real-time Collaboration</h3>
        <p>Work together in real-time with Docs, Sheets, Slides, and more.</p>
      </div>
    </div>
  </div>
</section>

<!-- Plans Comparison -->
<section class="plans">
  <div class="container">
    <div class="content">
      <h2>Google Workspace Plans</h2>
      
      <div class="plans-container">
        <!-- Business Starter -->
        <div class="plan-box">
          <div class="plan-header">
            <h3>Business Starter</h3>
            <div class="plan-price">$15<span>/month</span></div>
            <div class="plan-price-yearly">$150/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Business email with your domain</li>
              <li>30GB pooled storage per user</li>
              <li>100-participant video meetings</li>
              <li>Security and management controls</li>
              <li>Standard support</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/google-workspace-business-starter" class="cta">Subscribe Now</a>
        </div>
        
        <!-- Business Standard -->
        <div class="plan-box featured">
          <div class="plan-badge">Most Popular</div>
          <div class="plan-header">
            <h3>Business Standard</h3>
            <div class="plan-price">$30<span>/month</span></div>
            <div class="plan-price-yearly">$300/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Business email with your domain</li>
              <li>2TB pooled storage per user</li>
              <li>150-participant video meetings with recording</li>
              <li>Security and management controls</li>
              <li>Standard support</li>
              <li>Appointment booking pages</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/google-workspace-business-standard" class="cta">Subscribe Now</a>
        </div>
        
        <!-- Business Plus -->
        <div class="plan-box">
          <div class="plan-header">
            <h3>Business Plus</h3>
            <div class="plan-price">$45<span>/month</span></div>
            <div class="plan-price-yearly">$450/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Business email with your domain</li>
              <li>5TB pooled storage per user</li>
              <li>500-participant video meetings with recording</li>
              <li>Enhanced security and management controls</li>
              <li>Standard support</li>
              <li>Appointment booking pages</li>
              <li>eDiscovery and retention</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/google-workspace-business-plus" class="cta">Subscribe Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Migration Services -->
<section class="migration-services">
  <div class="container">
    <div class="content">
      <h2>Google Workspace Migration Services</h2>
      <p>Let us handle your migration to Google Workspace with minimal disruption to your business.</p>
      
      <div class="service-item">
        <h3>Complete Migration Package</h3>
        <p>Full migration service for your business.</p>
        <p><strong>$550 flat fee</strong></p>
      </div>
      
      <p>Our migration service includes:</p>
      <ul>
        <li>Files, Emails, Contacts & Calendars migration</li>
        <li>Unlimited mailboxes configuration</li>
        <li>User onboarding and device setup</li>
        <li>Professional project management</li>
        <li>Less than 30 days implementation time</li>
        <li>30 days post-project support</li>
      </ul>
      
      <div class="security-benefits">
        <h3>Security-First Mindset</h3>
        <p>Google started in the cloud and runs on the cloud, so they fully understand the security implications of powering your business in the cloud.</p>
        <ul>
          <li>The same infrastructure that powers Google's enterprise services</li>
          <li>Protection from dedicated security professionals</li>
          <li>Continuous innovation in security</li>
          <li>Highly secure, reliable, and compliant environment</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Ready to enhance your collaboration?', 
  'Get Google Workspace', 
  'https://shop.itsolver.net/collections/google-workspace', 
  'Choose the right Google Workspace plan for your business needs.'
);

// Include footer
include '../../includes/footer.php';
?> 