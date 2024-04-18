<?php
// Headers to serve JSON correctly
header('Content-Type: application/json');

// Example data array which should be dynamically generated based on application logic
$data = [
    "iframe" => [
        "src" => "http://www.search.co.il"
    ],
    "images" => [
        ["src" => "initial_image1.gif", "position" => ["x" => 50, "y" => 50], "events" => ["click" => "clicked_image1.gif"]],
        ["src" => "initial_image2.gif", "position" => ["x" => 150, "y" => 50], "events" => ["click" => "clicked_image2.gif"]],
        // Add more images as needed
    ]
];

// Encode the data array to JSON and print it
echo json_encode($data);
?>
