Webpack and Vue.js frontend to serve the webpage for kuberos

![The kuberos UI](kuberos.png)

## Structure
The frontend code, javascript and vue components, are inside the sub folder `src`.
main.js : The application entrypoint
kuberos.vue: The root component that creates custom elements, which can be reused in HTML
webpack.config.js: webpack build config file. This is used to start the app entrypoint and then build a dependency graph 
of the whole application, pulling those dependencies into one or more bundles that can be included in our application. 

The Frontend can be run with the Node Package manager. All the npm packages are defined in `package.json`

## Usage

To install the packages do
```
$ npm install
```

To run the app in the development mode,
```
npm run dev
```
This will run the webpack-dev-server locally on port 8080 and you can visit the page http://localhost:8080/

For the production 
```
npm run build
```

Check the main ../README.md for building the docker image and to deploy in kubernetes
