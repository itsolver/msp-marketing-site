  </main>
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-links">
          <h4>Residential</h4>
          <a href="/pages/on-demand-support.php">On-Demand Support</a>
          <a href="/pages/backup.php">Backup</a>
          <a href="https://shop.itsolver.net" target="_blank">Shop</a>
        </div>
        <div class="footer-links">
          <h4>Business</h4>
          <a href="/pages/on-demand-support.php">On-Demand Support</a>
          <a href="/pages/support-plans.php">Support Plans</a>
          <a href="/pages/microsoft-365.php">Microsoft 365</a>
          <a href="/pages/google-workspace.php">Google Workspace</a>
          <a href="/pages/backup.php">Backup</a>
          <a href="https://itsolver.net" target="_blank">Shop</a>
          <a href="https://billing.itsolver.net" target="_blank">Billing</a>
        </div>
        <div class="footer-links">
          <h4>Pages</h4>
          <a href="/pages/about.php">About Us</a>
          <a href="/pages/privacy.php">Privacy Policy</a>
          <a href="/pages/terms.php">Terms of Service</a>
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