<?php
/**
 * Reusable Call-to-Action Component
 * 
 * Usage:
 * include 'includes/cta.php';
 * renderCTA('Contact us today', 'Get started', '/contact.php');
 */

function renderCTA($heading = 'Ready to get started?', $buttonText = 'Contact Us', $buttonLink = '/pages/contact.php', $description = 'Let us help you solve your IT challenges.') {
?>
<div class="cta-section">
  <div class="container">
    <div class="content">
      <h2><?php echo $heading; ?></h2>
      <?php if ($description): ?>
        <p><?php echo $description; ?></p>
      <?php endif; ?>
      <a href="<?php echo $buttonLink; ?>" class="cta"><?php echo $buttonText; ?></a>
    </div>
  </div>
</div>
<?php
}
?> 