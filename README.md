# Rss-feed
A simple Rss feed widget with independent XML parser

# Instructions
Just open app.html in any browser with allow-cross-origin configuration

# File Structure
- app.html: application page
- README.md: this file
- app-src/: source folder

    - js/
        - utils/
            - rssXmlParser.js: rss xml file parser utility. Has no dependencies on external libraries
            - cookie.js: browser cookie support
        - control/
            - appCtrl.js: main application control and starting point of the application flow
            - regCtrl.js: registration page control
            - rssFeedCtrl.js: rss feed page control
        - view/
            - baseView.js: base view class. All other view classes must inherit from it
            - registrationView.js: registration page view class
            - rssFeedView.js: rss feed page view class
            - templates.js: precompiled and concatenated templates
            - registrationTemplate.handlebars: registration page html template
            - rssFeedTemplate.handlebars: rss feed page html template
        - model/
            - rssFeedModel.js: rss feed data model class
        - libs/
            - handlebars.runtime-v4.0.10.js
            - jquery-3.2.1.min.js
            - slick.min.js: carousel widget code
    - css/
        - libs/
            - slick.css: carousel widget css
            - app.css: application css
    - res/
        - images/
- test/
    -> data/: testing files
    - xmltest.html: runs unit testing on the rss xml parser utility class
    - xmlTest.js: rss xml parser unit test code


