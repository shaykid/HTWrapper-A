# HTWrapper-A
an html page, that jolds an iframe to another site. The page have animated gif "buttons" fliating above the iframe, when butyon pressed it can replace its image or open a new url. Page parameters like iframe site, and buttons definitions are in a json file passed as parameter yo the html page
Project Title: Interactive HTML Page with Dynamic GIF Overlays
Overview
This project aims to develop an HTML page embedded with an iframe and dynamically controlled animated GIF images that overlay the iframe. The placement and behavior of these GIFs are determined by a JSON configuration file. The HTML page should handle different mouse events to alter the display and positioning of the GIF images based on user interactions.

Features
HTML Structure:
An iframe element displaying content from an external source.
Multiple animated GIF images that can overlay on the iframe.
Dynamic Configuration:
A JSON configuration file specifies the locations, initial images, and event responses of the GIF elements.
The JSON file's URL is passed as a parameter (JSONCommandFile) in the query string of the HTML page URL.
Interactive Elements:
Animated GIFs respond to mouse events (mouseover, click, mouseup) to change the image or perform other specified actions.
Parameterization:
The screen location of each GIF image is configurable and can be passed as parameters in the JSON file.
The ability to update and modify the position or image based on user interaction.
Technical Specifications
HTML/Javascript:
The main document includes script tags that dynamically read the JSON configuration from the provided URL.
Event listeners are attached to each GIF for the specified mouse events.
DOM manipulation based on events to replace images or modify attributes of the GIFs.
JSON Structure:
json
Copy code
{
  "iframe": {
    "src": "URL_to_iframe_content"
  },
  "images": [
    {
      "src": "initial_image_url.gif",
      "position": { "x": 100, "y": 200 },
      "events": {
        "mouseover": "mouseover_image_url.gif",
        "click": "click_image_url.gif",
        "mouseup": "mouseup_image_url.gif"
      }
    }
  ]
}
iframe.src: URL of the content to be displayed inside the iframe.
images: Array of objects representing each GIF.
src: URL of the initial GIF image.
position: Coordinates for positioning on the screen.
events: Object defining the images to switch to on specific mouse events.
Query Parameters:
JSONCommandFile: URL of the JSON file containing configuration data, passed as a parameter in the HTML page URL.
Implementation Steps
Setup the HTML Structure:
Create the base HTML with an iframe and placeholder divs for GIFs.
Load JSON Configuration:
Fetch the JSON configuration using the URL provided in JSONCommandFile.
Initialize Elements:
Position GIFs as per the JSON configuration.
Attach event listeners to GIFs based on defined actions in JSON.
Event Handling:
Define functions to handle events and dynamically alter GIF attributes (like src).
Testing & Validation
Ensure that the iframe loads correctly with specified content.
Validate that all GIFs appear in their specified positions.
Test mouse event interactions to confirm GIFs respond as expected.
Check the application's response to various JSON structures to handle errors or missing data gracefully.
Deployment
Host the HTML file on a web server.
Ensure the JSON file is accessible via a URL and adheres to cross-origin policies if hosted on a different domain
