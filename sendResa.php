<?php
header('Content-Type: application/json');

// Adresse où tu veux recevoir les réservations
$TO_EMAIL = "rentyourdungeon@gmail.com";

// Adresse de l'expéditeur (ton domaine)
$FROM_EMAIL = "no-reply@tomlievre.fr"; 

// Lire les données JSON envoyées depuis React
$input = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$date = htmlspecialchars($input['date'] ?? '');
$time = htmlspecialchars($input['time'] ?? '');
$players = htmlspecialchars($input['players'] ?? '');

if (!$name || !$email || !$date || !$time || !$players) {
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires.']);
    exit;
}

// Préparer le mail
$subject = "Nouvelle réservation JDR - Rent Your Dungeon";
$body = "Nom: $name\nEmail: $email\nDate: $date\nHeure: $time\nNombre de joueurs: $players";
$headers = "From: $FROM_EMAIL\r\nReply-To: $email\r\n";

if (mail($TO_EMAIL, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Impossible d’envoyer le mail.']);
}
?>
