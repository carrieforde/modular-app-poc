const deps = require("./package.json").dependencies;

module.exports = {
  name: "todo",
  remotes: {
    host: "host@http://localhost:3000/remoteEntry.js"
  },
  exposes: {
    "./components": "./src/components"
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: deps['react-router-dom']
    },
    redux: {
      singleton: true,
      eager: true,
      requiredVersion: deps.redux
    }
  },
};

