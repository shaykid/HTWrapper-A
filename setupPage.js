// setupPage.js
import { loadConfig } from './configLoader.js';

/**
 * Sets up the iframe source and the GIF overlays based on the provided JSON configuration.
 * @param {Object} config - The JSON object containing configuration data.
 */
function setupPage(config) {
    // Set the iframe source
    const iframe = document.getElementById('mainIframe');
    iframe.src = config.iframe.src;

    // Setup GIF images
    const gifContainer = document.getElementById('gifContainer');
    config.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.style.top = `${img.position.y}px`;
        imgElement.style.left = `${img.position.x}px`;
        imgElement.style.position = 'absolute'; // Make sure the position is absolute
        imgElement.classList.add('gif');

        // Attach event listeners based on config
        Object.entries(img.events).forEach(([eventName, imageUrl]) => {
            imgElement.addEventListener(eventName, () => imgElement.src = imageUrl);
        });

        gifContainer.appendChild(imgElement);
    });
}

// Ensure setupPage is called when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadConfig);

// Export setupPage for testing or when included in other modules
export { setupPage };
