var fs = require("fs");
var tsconfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));

var exclude = [
    "typings/globals/es6-shim",
    "typings/index.d.ts",
    "node_modules",
    "app",
    "app-native",
    "tools",
    "src/web",
    "src/index.tsx"
];

var tsconfigNative = tsconfig;
tsconfigNative["exclude"] = exclude;

fs.writeFileSync("tsconfig.native.json", JSON.stringify(tsconfigNative));
