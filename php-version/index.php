<?php
/**
 * RenoDB - Professionele Renovatiediensten in Gent
 * Version: 2.0 (PHP Edition)
 */

// Error reporting (uitzetten in productie)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Basis configuratie
$site_title = "RenoDB - Uw Specialist in Hoogwaardige Renovaties in Gent";
$current_year = date('Y');
?>

<?php include 'includes/header.php'; ?>

<!-- Hero Section -->
<?php include 'includes/hero.php'; ?>

<!-- Services Section -->
<?php include 'includes/services.php'; ?>

<!-- Contact Section -->
<?php include 'includes/contact.php'; ?>

<!-- Footer -->
<?php include 'includes/footer.php'; ?>
