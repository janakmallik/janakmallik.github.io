<?php
session_start();

// Define the path to the file where session data will be stored
$file_path = 'active_users.json';
$timeout_duration = 300; // 5 minutes

// Get the session ID
$session_id = session_id();

// Read the current session data from the file
$session_data = [];
if (file_exists($file_path)) {
    $session_data = json_decode(file_get_contents($file_path), true);
}

// Update the session data with the current session ID and timestamp
$session_data[$session_id] = time();

// Remove expired sessions
foreach ($session_data as $key => $timestamp) {
    if ($timestamp < (time() - $timeout_duration)) {
        unset($session_data[$key]);
    }
}

// Save the updated session data back to the file
file_put_contents($file_path, json_encode($session_data));

// Get the count of active users
$active_users = count($session_data);

echo json_encode(['active_users' => $active_users]);
?>
