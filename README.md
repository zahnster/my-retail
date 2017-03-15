# myRetail Case Study

This is a case study for myRetail.


## Technology Choices

This project is a React app, built on top of Create React App (https://github.com/facebookincubator/create-react-app), in order to provide a configured webpack setup with es6 support, eslint, hot reloading, sass, and built in testing through jest.

This project is not currently ejected from create-react-app, although it easily could be if customizations to the build stack become necessary.

This project is built with modern browsers in mind, and is expected to work in IE9+. This is in line with React's support table (as well as Microsoft's).

A 'mobile first' UI approach has been taken with this interface, with responsive breakpoints for phones, tablets, and the desktop.


### Open-Source Dependencies

On top of React, this project utilizes the following OSS projects:
 * React Helmet, for document head content management.
 * MomentJS, for easy date formatting.
 * Modernizr, for <picture> tag support.


## Code Structure and Organization

Following modern web engineering practices, this project relies heavily on a Component-based structure for its UI elements. 

Each Component is meant to be a completely independent chunk of code, capable of being mixed and matched in any configuration. Each component is also responsible for managing its own style and appearance, and CSS files are imported through their respective JS component files, and ultimately combined by webpack into a single final build file.

With regards to nested style configurations / style overrides, a parent component *may* override a subcomponents style, however all declarations *must* be scoped to the component container. This will provide the correct CSS weight to override the child's own declarations.


## Code Style and Syntax

Coding style on this project is inspired by and largely follows the Airbnb style guide (https://github.com/airbnb/javascript), although there are a few exceptions.


## Installation

Clone or download this project and run 'npm install' to install all necessary dependencies.


## Running Development Server

Once installed, the development server can be run with 'npm start'. By default, the development server will be http://localhost:3000/, although another port may be chosen if 3000 is not available.


## Testing

Unit testing is done through jest. Each component has its own Test file, and code coverage is expected to be at 100%.

Run tests with the command 'npm test'. A code coverage report can be generated by running 'npm test -- --coverage'.

More information about testing through the Create React App setup can be found here: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests


## Continuous Integration


## Production Build and Deployment


## Other Notes, Thoughts and Next Steps
