import devConfig from "./development";
import prodConfig from "./production";
let appConfig;
if (process.env.NODE_ENV === "development") {
  appConfig = devConfig;
} else {
  appConfig = prodConfig;
}

export default appConfig;
