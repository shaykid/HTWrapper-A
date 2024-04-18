# HTWrapper-A
an html page, that jolds an iframe to another site. The page have animated gif "buttons" fliating above the iframe, when butyon pressed it can replace its image or open a new url. Page parameters like iframe site, and buttons definitions are in a json file passed as parameter yo the html page
Project Title: Interactive HTML Page with Dynamic GIF Overlays
Overview

## Overview
This project aims to develop an HTML page embedded with an iframe and dynamically controlled animated GIF images that overlay the iframe. The placement and behavior of these GIFs are determined by a JSON configuration file. The HTML page should handle different mouse events to alter the display and positioning of the GIF images based on user interactions.

## Features
### HTML Structure:
- An iframe element displaying content from an external source.
- Multiple animated GIF images that can overlay on the iframe.
### Dynamic Configuration:
A JSON configuration file specifies the locations, initial images, and event responses of the GIF elements.
The JSON file's URL is passed as a parameter (JSONCommandFile) in the query string of the HTML page URL.
### Interactive Elements:
Animated GIFs respond to mouse events (mouseover, click, mouseup) to change the image or perform other specified actions.
### Parameterization:
The screen location of each GIF image is configurable and can be passed as parameters in the JSON file.
The ability to update and modify the position or image based on user interaction.
## Technical Specifications
### HTML/Javascript:
The main document includes script tags that dynamically read the JSON configuration from the provided URL.
Event listeners are attached to each GIF for the specified mouse events.
DOM manipulation based on events to replace images or modify attributes of the GIFs.
### JSON Structure:
   ```
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
  ```
- iframe.src: URL of the content to be displayed inside the iframe.
- images: Array of objects representing each GIF.
- src: URL of the initial GIF image.
- position: Coordinates for positioning on the screen.
- events: Object defining the images to switch to on specific mouse events.

### Query Parameters:
- JSONCommandFile: URL of the JSON file containing configuration data, passed as a parameter in the HTML page URL.
### Implementation Steps
- Setup the HTML Structure:
Create the base HTML with an iframe and placeholder divs for GIFs.
- Load JSON Configuration:
Fetch the JSON configuration using the URL provided in JSONCommandFile.
- Initialize Elements:
Position GIFs as per the JSON configuration.
Attach event listeners to GIFs based on defined actions in JSON.
- Event Handling:
Define functions to handle events and dynamically alter GIF attributes (like src).
### Testing & Validation
- Ensure that the iframe loads correctly with specified content.
- Validate that all GIFs appear in their specified positions.
- Test mouse event interactions to confirm GIFs respond as expected.
- Check the application's response to various JSON structures to handle errors or missing data gracefully.
Deployment
- Host the HTML file on a web server.
- Ensure the JSON file is accessible via a URL and adheres to cross-origin policies if hosted on a different domain.


# Interactive HTML Page with GIF Overlays

This project creates an interactive HTML page featuring an `iframe` and multiple animated GIFs. The GIFs overlay the `iframe` and respond to mouse events. Configuration for the `iframe` source and GIF properties is driven by a JSON file.

## Features

- **Dynamic GIF Overlays**: Animated GIFs overlaying an `iframe` respond to mouse events.
- **Configurable via JSON**: GIF positions, initial images, and responses to events are defined in a JSON file.
- **Interactive Elements**: Each GIF changes based on specified mouse events like `mouseover`, `click`, and `mouseup`.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Web server with PHP 7.4 or higher
- Modern web browser with JavaScript and module support (e.g., latest versions of Chrome, Firefox, Safari)

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine or server:
   ```
   git clone https://github.com/your-username/interactive-html-gif-overlay.git


2. If using PHP dependencies or if your setup later requires external libraries, ensure Composer is installed and run:
```
  composer install
```
3. Host the files on a suitable web server with PHP support.

## Usage
,
Once installed, you can access the HTML page via your web server's address, for example:
http://yourserver.com/index.php

For local development, you can use PHP's built-in server:
php -S localhost:8000
And access the project at http://localhost:8000.

## Configuration
The JSON configuration file should be set up as follows (example provided):
```
{
  "iframe": {
    "src": "http://www.search.co.il"
  },
  "images": [
    {
      "src": "initial_image1.gif",
      "position": { "x": 50, "y": 50 },
      "events": {
        "click": "clicked_image1.gif"
      }
    }
    // Add more images as required
  ]
}
```
Adjust the JSON file to reflect the actual paths and image URLs as needed for your application.


