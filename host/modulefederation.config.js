const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",
  exposes: {
    "./services": "./src/services",
    "./redux": "./src/redux",
    "./Initialized": "./src/components"
  },
  remotes: {
    todo: "todo@http://localhost:3002/remoteEntry.js",
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

