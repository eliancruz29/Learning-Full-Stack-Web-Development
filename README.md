# Full-Stack-Web-Development
Instruction to prepare the project for being able to be used:

1: To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.

2: Install Bower as a global node module. To do this, type the following at the command prompt: (npm install -g bower). Bower is a tool that help you to install the FrameWorks and libraries that you will need, but in this project these ones are installed.

3: At the command prompt, type the following to install Gulp command-line interface (CLI) globally: (npm install -g gulp).
Next install Gulp to use within your project. To do this, go to the conFusion folder and type the following at the prompt: (npm install gulp --save-dev).
Install all the Gulp plugins that you will need for this exercise. To do this, type the following at the command prompt: (npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev).

4: Use Bower to install angular-route by typing the following at the command prompt: (bower install angular-route -S).

5: Use Bower to install angular-ui-router by typing the following at the command prompt: (bower install angular-ui-router -S).

6: json-server is a node module, and hence can be installed globally by typing the following at the command prompt: (npm install json-server -g).

7: First, you will install the Angular ngResource module in your conFusion project by typing the following at the command prompt when you are in the conFusion folder: (bower install angular-resource -S).

8: First, set up Jasmine core to be available for use within your project: (npm install jasmine-core --save-dev).
Then, set up the Karma command line tools globally as follows: (npm install karma-cli -g).
Then set up karma-jasmine plugin to make use of Jasmine with Karma: (npm install karma-jasmine --save-dev).
In order to set up browser environments to carry out the tests, set up PhantomJS, and Karma launchers for PhantomJS and Chrome as follows: (npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev). You can also set up for Firefox, IE and Safari if you use these browsers.

Setting up Angular Mocks

You should also install the ngMock module as follows: (bower install angular-mocks -S).

9: Set up the protractor tool globally for use in e2e testing: (npm install protractor -g).
The above also installs webdriver-manager. Then, update your web drivers by typing: (webdriver-manager update).

NOTE: if you want to skip some of the steps we mention above install the following tools and read the documentation for these tools.

10(Optional): npm install yo -g

11(Optional): npm install generator-angular -g


-- For run the unit test:

Move back to the test folder and then type the following at the prompt to execute the test: (karma start karma.conf.js)
All the tests should successfully complete. You can edit some of the test values to cause some of the tests to fail.

-- For run the End to End test:

Make sure that you are running the json-server to serve up the REST API for accessing the JSON data by your Angular application.
move to the folder named json-server. and type the following at the command prompt to start the server: (json-server --watch db.json).
you need to start a server to serve up the Angular application. Fortunately, Gulp is already set up to do that. Make sure you are in the conFusion folder. At the command prompt, type: (gulp watch).
This will start the server and serve the page at http://localhost:3001/. Make sure about the port number (3001) where your server is serving up the web page.

move back to the test folder. At the command prompt, type the following to execute the e2e tests: (protractor protractor.conf.js)
All the tests should pass successfully. You can modify some of the inputs to the text to see them fail.

-- For run the Application:

Make sure that you are running the json-server to serve up the REST API for accessing the JSON data by your Angular application.
move to the folder named json-server. and type the following at the command prompt to start the server: (json-server --watch db.json).
you need to start a server to serve up the Angular application. Fortunately, Gulp is already set up to do that. Make sure you are in the conFusion folder. At the command prompt, type: (gulp watch).
