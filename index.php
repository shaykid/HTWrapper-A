<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive GIF Overlay</title>
    <link rel="stylesheet" href="styles.css">
    <script type="module" src="setupPage.js"></script>
</head>
<body>
    <iframe id="mainIframe"></iframe>
    <div id="gifContainer"></div>
    <!-- Dynamically generate the URL for the JSON config -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const configUrl = 'config.php'; // URL to the PHP script that generates JSON
            import('./configLoader.js')
                .then(module => {
                    module.loadConfig(configUrl);
                });
        });
    </script>
</body>
</html>
