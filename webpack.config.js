const path = require("path");
module.exports = {
  entry: {
    main: path.resolve(
      "./assets/scripts",
      "index.js"
      // "./assets/scripts",
      // "BudgetTracker.js"
    ),
  },
  output: {
    path: path.resolve("./assets/scripts", "dist"),
    filename: "bundle.js",
  },
  mode: "development",
};
