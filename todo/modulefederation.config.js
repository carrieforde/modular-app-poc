const deps = require("./package.json").dependencies;

module.exports = {
  name: "todo",
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

