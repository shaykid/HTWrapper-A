// configLoader.js

/**
 * Fetches the JSON configuration from the URL provided in the 'JSONCommandFile' query parameter.
 * Calls setupPage to initialize elements based on the configuration.
 */
function loadConfig() {
    const queryParams = new URLSearchParams(window.location.search);
    const jsonUrl = queryParams.get('JSONCommandFile');

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(config => {
            setupPage(config);
        })
        .catch(error => console.error('Error loading the configuration:', error));
}

// Exports the function to be accessible by other modules
export { loadConfig };
