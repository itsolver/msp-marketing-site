<?php
// Prevent direct access to this file
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Redirect to the contact page if accessed directly
    header('Location: contact.php');
    exit;
}

// Get form data and sanitize inputs
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    // Redirect back to form with error
    header('Location: contact.php?error=missing_fields');
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Redirect back to form with error
    header('Location: contact.php?error=invalid_email');
    exit;
}

// In a real-world scenario, you would:
// 1. Save to database
// 2. Send email notification
// 3. Log the submission

// For this example, we'll just simulate saving the message
// You can replace this with actual database operations or email sending

// Example of sending an email (uncomment to use)
/*
$to = "support@itsolver.net";
$subject = "Contact Form: " . $subject;
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: $phone\n\n";
$email_content .= "Message:\n$message\n";

$headers = "From: $name <$email>";
mail($to, $subject, $email_content, $headers);
*/

// Simulate processing (could be a database operation)
// In a real-world application, you'd save to a database here
$success = true; // Simulate successful processing

// Check if processing was successful
if ($success) {
    // Redirect to contact page with success message
    header('Location: contact.php?sent=true');
} else {
    // Redirect back to form with error
    header('Location: contact.php?error=processing');
}
exit;
?> 