  </main>
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-links">
          <h4>Services</h4>
          <a href="/pages/managed-it.php">Managed IT</a>
          <a href="/pages/cloud-services.php">Cloud Services</a>
          <a href="/pages/cybersecurity.php">Cybersecurity</a>
          <a href="/pages/support-plans.php">Support Plans</a>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <a href="/pages/about.php">About Us</a>
          <a href="/pages/team.php">Our Team</a>
          <a href="/pages/testimonials.php">Testimonials</a>
          <a href="/pages/contact.php">Contact</a>
        </div>
        <div class="footer-links">
          <h4>Resources</h4>
          <a href="/pages/blog.php">Blog</a>
          <a href="/pages/faq.php">FAQ</a>
          <a href="/pages/support.php">Support</a>
          <a href="/pages/privacy.php">Privacy Policy</a>
        </div>
        <div class="footer-links">
          <h4>Connect</h4>
          <a href="mailto:info@itsolver.net">info@itsolver.net</a>
          <a href="tel:+61755041234">+61 7 5504 1234</a>
          <div class="social-links">
            <a href="https://linkedin.com/company/itsolver" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/itsolver" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; <?php echo date('Y'); ?> IT Solver. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <script src="/js/main.js"></script>
  <?php if (isset($additionalScripts)): ?>
    <?php foreach ($additionalScripts as $script): ?>
      <script src="<?php echo $script; ?>"></script>
    <?php endforeach; ?>
  <?php endif; ?>
</body>
</html> 