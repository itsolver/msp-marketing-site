<?php
/**
 * IT Solver - Microsoft 365 Page
 */

// Set segment to business since this is a business-only page
$activeSegment = 'business';

// Page metadata
$pageTitle = 'Microsoft 365 for Business';
$pageDescription = 'Boost your business productivity with Microsoft 365. Get secure email, cloud storage, and the latest Office applications.';

// Include header
include '../../includes/header.php';

// Include CTA component
include '../../includes/cta.php';
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="content">
      <h1>Microsoft 365 for Business</h1>
      <p>Powerful productivity tools for your business.</p>
    </div>
  </div>
</section>

<!-- Microsoft 365 Overview -->
<section class="m365-overview">
  <div class="container">
    <div class="content">
      <h2>Why Choose Microsoft 365?</h2>
      
      <div class="feature">
        <h3>Complete Productivity Suite</h3>
        <p>Get the latest versions of Word, Excel, PowerPoint, and more, installed on multiple devices.</p>
      </div>
      
      <div class="feature">
        <h3>Professional Email</h3>
        <p>Business-class email with your custom domain name, shared calendars, and 50GB of mailbox storage.</p>
      </div>
      
      <div class="feature">
        <h3>Cloud Storage</h3>
        <p>1TB of OneDrive storage per user for file sharing and collaboration.</p>
      </div>
      
      <div class="feature">
        <h3>Teams Collaboration</h3>
        <p>Chat, meet, call, and collaborate from anywhere with Microsoft Teams.</p>
      </div>
    </div>
  </div>
</section>

<!-- Plans Comparison -->
<section class="plans">
  <div class="container">
    <div class="content">
      <h2>Microsoft 365 Plans</h2>
      
      <div class="plans-container">
        <!-- Business Basic -->
        <div class="plan-box">
          <div class="plan-header">
            <h3>Business Basic</h3>
            <div class="plan-price">$13.10<span>/month</span></div>
            <div class="plan-price-yearly">$131/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Web and mobile versions of Office apps</li>
              <li>Email and calendaring</li>
              <li>1TB cloud storage per user</li>
              <li>Teams for online meetings</li>
              <li>Standard security</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/microsoft-365-business-basic" class="cta">Subscribe Now</a>
        </div>
        
        <!-- Business Standard -->
        <div class="plan-box featured">
          <div class="plan-badge">Most Popular</div>
          <div class="plan-header">
            <h3>Business Standard</h3>
            <div class="plan-price">$27.20<span>/month</span></div>
            <div class="plan-price-yearly">$272.10/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Desktop, web, and mobile versions of Office apps</li>
              <li>Email and calendaring</li>
              <li>1TB cloud storage per user</li>
              <li>Teams for online meetings</li>
              <li>Standard security</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/microsoft-365-business-standard" class="cta">Subscribe Now</a>
        </div>
        
        <!-- Business Premium -->
        <div class="plan-box">
          <div class="plan-header">
            <h3>Business Premium</h3>
            <div class="plan-price">$47.90<span>/month</span></div>
            <div class="plan-price-yearly">$478.80/year</div>
          </div>
          <div class="plan-features">
            <ul>
              <li>Everything in Business Standard</li>
              <li>Advanced security features</li>
              <li>Device management</li>
              <li>Cyber threat protection</li>
              <li>Information protection</li>
            </ul>
          </div>
          <a href="https://shop.itsolver.net/products/microsoft-365-business-premium" class="cta">Subscribe Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Migration Services -->
<section class="migration-services">
  <div class="container">
    <div class="content">
      <h2>Microsoft 365 Migration Services</h2>
      <p>Let us handle your migration to Microsoft 365 with minimal disruption to your business.</p>
      
      <div class="service-item">
        <h3>Fresh Setup</h3>
        <p>New Microsoft 365 setup with no user data migration.</p>
        <p><strong>$550 flat fee</strong></p>
      </div>
      
      <div class="service-item">
        <h3>User Migration</h3>
        <p>Complete migration of emails, files, contacts, and calendars.</p>
        <p><strong>$330 per user</strong></p>
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
    </div>
  </div>
</section>

<?php
// Render CTA
renderCTA(
  'Ready to boost your productivity?', 
  'Get Microsoft 365', 
  'https://shop.itsolver.net/collections/microsoft-365', 
  'Choose the right Microsoft 365 plan for your business needs.'
);

// Include footer
include '../../includes/footer.php';
?> 