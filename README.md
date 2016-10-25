# Viaplay test assignment

## Author

The test assignmetn has been completed by Mykhailo Matiiasevych (michael@inspace.org.ua)

## Release notes

The application provides movie details page with playable trailer (if applicable). Movie data is fetched from the [API](https://content.viaplay.se)

## How to run

```
git clone https://github.com/LostInSpace/viaplay.git
npm install
npm start
```

Application will be available on
 
 - (http://localhost:3000) Server side version
 - (http://localhost:3001) BrowserSync proxy with HMR, React Hot Transform 
 
## Description
 
  I've decide to use [React Starter Kit](https://www.reactstarterkit.com/) as a template project, so some implementation comes from it directly.
  The Assignment is done as server side (Node.js) application. Reasons:
  
  - Sending api keys to client may cause security issues.
  - API responses too big and bloated with unnecessary information, better to parse them on server.
  
  Server side solution make React application easier, because there is no reason to use FLUX, so that application is stateless and scalable without any issues. 
    
  There are dummy implementations of other pages, like Category, Section and Root that may be extended to achieve full functional application.
  
  Product page receives data from Content API, then search movieDB for available trailers and include it on the page if available. All trailers served by YouTube.
  Top menu is building using API response.
  Navigation URLs the same as for Content API, except 'pc-se' part.
  
### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /core/                  # Core framework and utility functions
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /views/                 # Express.js views for index and error pages
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /pageRouter.js          # Router implementation for detecting component
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```

## Things NOT done

 - No tests - components, api.js, routers and i18n.js should be well tested. 
 - Unused devDependecies in package.json
 - eslint is not configured properly
