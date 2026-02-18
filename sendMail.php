<?php
header('Content-Type: application/json');

// Clé secrète reCAPTCHA
$SECRET_KEY = "6LdWa80rAAAAALjYfIK348qmPuONJXhZ_SW4fpJv"; // clé secrète
$TO_EMAIL = "lelievre.tom2004@gmail.com";
$FROM_EMAIL = "no-reply@tomlievre.fr"; // Adresse sur ton domaine

// Lire les données JSON envoyées depuis React
$input = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');
$captcha = $input['captcha'] ?? '';

if (!$name || !$email || !$message || !$captcha) {
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires.']);
    exit;
}

// Vérification reCAPTCHA
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$SECRET_KEY&response=$captcha");
$captcha_success = json_decode($verify);

if (!$captcha_success->success) {
    echo json_encode(['success' => false, 'message' => 'Échec du captcha.']);
    exit;
}

// Préparer le mail
$subject = "Nouveau message depuis le portfolio";
$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $FROM_EMAIL\r\nReply-To: $email\r\n";

if (mail($TO_EMAIL, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Impossible d’envoyer le mail.']);
}
?>
