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
include '../../includes/header.php';

// Include CTA component
include '../../includes/cta.php';
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

<!-- Stripe Pricing Table -->
<section class="plans">
  <div class="container">
    <div class="content">
      <h2>Choose Your Support Plan</h2>

      <p>
        If your business is setup with Google Workspace or Microsoft 365, you have taken a
        crucial step in streamlining your business.
      </p>
      <p>
        This also means your organisation is eligible for Support Plans by IT Solver.
      </p>
      <p>
        We understand the needs of cloud-based businesses so we can support you
        through any technical challenge.
      </p>
      <p>
        Whether you are solo or up to 50 employees, when you run into something you
        don't understand, IT Solver has the expertise to walk you through it.
      </p>

      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table pricing-table-id="prctbl_0MVQkDGwvziWDQizVeR7eCkq" publishable-key="pk_live_VJ3u45huMiamA3vibzwz4zCU"></stripe-pricing-table>

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
      <h2>Support Plans FAQ</h2>

      <div class="faq-item">
        <h3>I only want to pay for what I use. Do you offer on-demand or pay-as-you-go technical support services?</h3>
        <p>Yes, at our company, we understand the value of flexible, tailored services. We offer a one-time, pay-as-you-go, On-Demand Support option. You only pay for the support you need, when you need it. <a href="https://book.stripe.com/3cs8zC99Jgf3aHK005">Book our On-Demand Support</a>.</p>
      </div>

      <div class="faq-item">
        <h3>What is a Support Plan?</h3>
        <p>A Support Plan is a monthly subscription that provides you with access to IT Solver's team of experts. We can help you with any technical issue you may have with your computer, network, software, hardware, mobile devices and more.</p>
      </div>

      <div class="faq-item">
        <h3>What kind of things will you do?</h3>
        <p>Lot's of things! Check out the full list of requests we can handle in the "Included Requests" section below.</p>
      </div>

      <div class="faq-item">
        <h3>What kind of things won't you do under this support plan?</h3>
        <p>Any big adds, moves or changes like moving equipment, installing networks, migrating data, working on servers and hardware repairs. Check out the exclusions list at the bottom of this page. We do have a dedicated team for projects and hardware repairs. <a href="https://itsolver.net/contact/">Contact us</a> if you need this kind of work.</p>
      </div>

      <div class="faq-item">
        <h3>How does it work?</h3>
        <p>Once you have signed up, email or phone in your request. Or join a live chat on our website. We'll get on it and email you back when it is complete or if we have any questions.</p>
      </div>

      <div class="faq-item">
        <h3>How do I buy and pay?</h3>
        <p>Choose plan above and complete the sign up form. Payment details will be requested when we call you shortly. We accept Visa and Mastercard.</p>
      </div>

      <div class="faq-item">
        <h3>What is the payment plan?</h3>
        <p>We offer a flexible payment plan. You are billed monthly. For more information on pricing, <a href="https://itsolver.net/contact/">contact sales</a>.</p>
      </div>

      <div class="faq-item">
        <h3>Where is on-site support available?</h3>
        <p>99% of issues are quickly fixable over the internet, if it requires on-site, premium support plan customers receive a free call out in Redlands and surrounding suburbs.</p>
      </div>

      <div class="faq-item">
        <h3>What priority is given to a request?</h3>
        <p>High: Product/service is unusable.<br />
           Normal: Use of product/service is significantly affected.<br />
           Low: All other questions and bug reports</p>
      </div>

      <div class="faq-item">
        <h3>Do you offer email accounts?</h3>
        <p>Yes. You may purchase <a href="../google-workspace.php">Google Workspace</a> or <a href="../microsoft-365.php">Microsoft 365</a> email accounts separately.</p>
      </div>

      <div class="faq-item">
        <h3>What isn't included?</h3>
        <p>Data migration is not included and is billed separately. Please refer to our list of Support Plan inclusions and exclusions below for more details.</p>
      </div>

      <div class="faq-item">
        <h3>Have more questions?</h3>
        <p><a href="https://itsolver.net/contact/">Contact us</a>.</p>
      </div>

      <div class="faq-item">
        <h3>What's included in the support plans?</h3>
        <p>Our support plans include troubleshooting, cloud services management, security, email support, software assistance, operating system maintenance, and website/domain management. For a detailed list of inclusions, please see the "Included Requests" section below.</p>
      </div>

      <div class="faq-item">
        <h3>What's not included in the support plans?</h3>
        <p>Support plans exclude major hardware/software changes, custom development, content creation, physical hardware service, web design, data migration, formal training, and project management. These services are available at our hourly rates. See the "Excluded Requests" section below for details.</p>
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

<!-- Included Requests Section -->
<section class="included-requests">
  <div class="container">
    <div class="content">
      <h2 id="included">Included Requests</h2>
      <div class="requests">
        <ul class="included">
          <h3>General Support</h3>
          <li>Troubleshooting software issues</li>
          <li>Operating system updates and maintenance</li>
          <li>Software installation and configuration</li>
          <li>Email setup and troubleshooting</li>
          <li>Printer setup and troubleshooting</li>
          <li>Mobile device setup and troubleshooting</li>
          <li>Network connectivity issues</li>
          <li>Password resets and account management</li>
          <li>Data backup and recovery assistance</li>
          <li>Security software installation and updates</li>
        </ul>

        <ul class="included">
          <h3>Cloud Services</h3>
          <li>Google Workspace administration</li>
          <li>Microsoft 365 administration</li>
          <li>Cloud storage setup and management</li>
          <li>Email migration assistance (small scale)</li>
          <li>User account management</li>
          <li>Security settings configuration</li>
          <li>Shared calendars and resources setup</li>
          <li>Mobile device management</li>
          <li>Document sharing and collaboration setup</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Excluded Requests Section -->
<section class="excluded-requests">
  <div class="container">
    <div class="content">
      <h2 id="excluded">Excluded Requests</h2>
      <dl id="excluded" class="requests">
        <div>
          <dt>Hardware Services</dt>
          <dd>Physical repairs of computers, printers, or other devices</dd>
          <dd>Hardware upgrades or replacements</dd>
          <dd>Server hardware installation or maintenance</dd>
          <dd>Network cabling and infrastructure</dd>
        </div>

        <div>
          <dt>Major Projects</dt>
          <dd>Office relocations</dd>
          <dd>Large-scale data migrations</dd>
          <dd>Server migrations or major upgrades</dd>
          <dd>Network redesign or major changes</dd>
          <dd>Custom software development</dd>
          <dd>Website design or development</dd>
        </div>

        <div>
          <dt>Training and Documentation</dt>
          <dd>Formal training sessions</dd>
          <dd>Creating custom documentation</dd>
          <dd>Creating business processes</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

<!-- Supported Technologies Section -->
<section class="supported-technologies">
  <div class="container">
    <div class="content">
      <h2 id="platforms">Supported Technologies</h2>
      <dl class="platforms">
        <div>
          <dt>Operating Systems</dt>
          <dd>Windows 10 & 11</dd>
          <dd>macOS (current and previous two versions)</dd>
          <dd>iOS and iPadOS</dd>
          <dd>Android</dd>
        </div>

        <div>
          <dt>Cloud Services</dt>
          <dd>Google Workspace</dd>
          <dd>Microsoft 365</dd>
          <dd>Dropbox</dd>
          <dd>OneDrive</dd>
          <dd>Google Drive</dd>
        </div>

        <div>
          <dt>Software</dt>
          <dd>Microsoft Office Suite</dd>
          <dd>Google Workspace apps</dd>
          <dd>Common business applications</dd>
          <dd>Standard web browsers</dd>
          <dd>Email clients</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="content">
      <h2>For More Information</h2>
      <p>Please review IT Solver's <a href="https://itsolver.net/legal">Terms and Conditions</a> for further details on IT Solver support offerings.</p>
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
include '../../includes/footer.php';
?>
