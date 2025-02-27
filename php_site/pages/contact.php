<?php
// Set page-specific variables
$page_title = "Contact Us - IT Solver";
$page_description = "Get in touch with IT Solver for all your IT support needs. We provide managed IT services for businesses on the Gold Coast.";

// Include the header
include '../includes/header.php';
?>

<section class="page-header">
    <div class="container">
        <h1>Contact Us</h1>
        <p>Have a question or need assistance? Get in touch with our team.</p>
    </div>
</section>

<section class="contact-info">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-details">
                <h2>Contact Information</h2>
                <p>We're here to help with all your IT support needs.</p>
                
                <div class="contact-item">
                    <strong>Email:</strong>
                    <a href="mailto:support@itsolver.net">support@itsolver.net</a>
                </div>
                
                <div class="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:+61756010517">+61 7 5601 0517</a>
                </div>
                
                <div class="contact-item">
                    <strong>Address:</strong>
                    <p>Gold Coast, Queensland, Australia</p>
                </div>
                
                <div class="contact-item">
                    <strong>Business Hours:</strong>
                    <p>Monday to Friday: 8:30 AM - 5:30 PM</p>
                </div>
            </div>
            
            <div class="contact-form-container">
                <h2>Send us a Message</h2>
                <?php
                // Check if form was submitted and show success message
                if (isset($_GET['sent']) && $_GET['sent'] == 'true') {
                    echo '<div class="success-message">Thank you for your message! We\'ll get back to you shortly.</div>';
                }
                ?>
                <form action="process_contact.php" method="post" class="contact-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone (optional)</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php
// Include the footer
include '../includes/footer.php';
?> 