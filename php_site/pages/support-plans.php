<?php
// Set page-specific variables
$page_title = "Support Plans - IT Solver";
$page_description = "Choose from our range of IT support plans designed to keep your business running smoothly. Flexible options to suit businesses of all sizes.";

// Include the header
include '../includes/header.php';
?>

<section class="page-header">
    <div class="container">
        <h1>Support Plans</h1>
        <p>Choose the right level of support for your business needs.</p>
    </div>
</section>

<section class="pricing">
    <div class="container">
        <div class="pricing-intro">
            <h2>Flexible IT Support Plans</h2>
            <p>We offer a range of support plans to suit businesses of all sizes. All plans include our expert support and quick response times.</p>
        </div>
        
        <div class="pricing-grid">
            <!-- Basic Plan -->
            <div class="pricing-card">
                <div class="pricing-header">
                    <h3>Essential</h3>
                    <div class="price">
                        <span class="amount">$99</span>
                        <span class="period">/month</span>
                    </div>
                    <p>For small businesses needing basic IT support</p>
                </div>
                
                <div class="pricing-features">
                    <ul>
                        <li>✓ Remote IT support</li>
                        <li>✓ Email support</li>
                        <li>✓ Business hours coverage</li>
                        <li>✓ Phone support</li>
                        <li>✓ 8-hour response time</li>
                        <li>✗ After-hours support</li>
                        <li>✗ Proactive monitoring</li>
                        <li>✗ Quarterly IT review</li>
                    </ul>
                </div>
                
                <div class="pricing-footer">
                    <a href="support-plan-requests.php?plan=essential" class="btn">Get Started</a>
                </div>
            </div>
            
            <!-- Standard Plan -->
            <div class="pricing-card featured">
                <div class="pricing-header">
                    <h3>Professional</h3>
                    <div class="price">
                        <span class="amount">$199</span>
                        <span class="period">/month</span>
                    </div>
                    <p>For growing businesses with more advanced IT needs</p>
                </div>
                
                <div class="pricing-features">
                    <ul>
                        <li>✓ Remote IT support</li>
                        <li>✓ Email support</li>
                        <li>✓ Business hours coverage</li>
                        <li>✓ Phone support</li>
                        <li>✓ 4-hour response time</li>
                        <li>✓ Limited after-hours support</li>
                        <li>✓ Proactive monitoring</li>
                        <li>✗ Quarterly IT review</li>
                    </ul>
                </div>
                
                <div class="pricing-footer">
                    <a href="support-plan-requests.php?plan=professional" class="btn">Get Started</a>
                </div>
            </div>
            
            <!-- Premium Plan -->
            <div class="pricing-card">
                <div class="pricing-header">
                    <h3>Enterprise</h3>
                    <div class="price">
                        <span class="amount">$349</span>
                        <span class="period">/month</span>
                    </div>
                    <p>For businesses requiring comprehensive IT management</p>
                </div>
                
                <div class="pricing-features">
                    <ul>
                        <li>✓ Remote IT support</li>
                        <li>✓ Email support</li>
                        <li>✓ Business hours coverage</li>
                        <li>✓ Phone support</li>
                        <li>✓ 2-hour response time</li>
                        <li>✓ 24/7 after-hours support</li>
                        <li>✓ Proactive monitoring</li>
                        <li>✓ Quarterly IT review</li>
                    </ul>
                </div>
                
                <div class="pricing-footer">
                    <a href="support-plan-requests.php?plan=enterprise" class="btn">Get Started</a>
                </div>
            </div>
        </div>
        
        <div class="custom-plan">
            <h3>Need a Custom Solution?</h3>
            <p>We can create a tailored IT support plan to meet your specific business requirements.</p>
            <a href="contact.php" class="btn">Contact Us</a>
        </div>
    </div>
</section>

<section class="faq">
    <div class="container">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-item">
            <h3>What's included in remote IT support?</h3>
            <p>Our remote IT support covers troubleshooting, software issues, email problems, internet connectivity issues, and most technical problems that can be resolved without an on-site visit.</p>
        </div>
        
        <div class="faq-item">
            <h3>How quickly will you respond to our IT issues?</h3>
            <p>Response times vary by plan level, ranging from 8 hours for our Essential plan to just 2 hours for our Enterprise plan. Critical issues are always prioritized.</p>
        </div>
        
        <div class="faq-item">
            <h3>Can we change plans if our needs change?</h3>
            <p>Absolutely! You can upgrade or downgrade your plan at any time with 30 days' notice.</p>
        </div>
        
        <div class="faq-item">
            <h3>Is hardware covered in the support plans?</h3>
            <p>Hardware troubleshooting is included, but replacement parts and new equipment are billed separately. We provide discounted rates on hardware for our support plan customers.</p>
        </div>
    </div>
</section>

<?php
// Include the footer
include '../includes/footer.php';
?> 