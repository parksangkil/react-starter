var fs = require("fs");
var tsconfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));

var exclude = tsconfig.exclude;
var excludes = [
    "typings/globals/es6-shim",
    "typings/index.d.ts",
    "src/web",
    "src/index.tsx"
];
(function removeNativeIgnore(exclude) {
    var nativeIgnoreIndex = exclude.indexOf("src/native");
    if (nativeIgnoreIndex >= 0) {
        exclude.splice(nativeIgnoreIndex, 1);
    }
})(exclude);
for (var i = 0; i < excludes.length; i++) {
    exclude.push(excludes[i]);
}

var tsconfigNative = tsconfig;
tsconfigNative["exclude"] = exclude;

fs.writeFileSync("tsconfig.native.json", JSON.stringify(tsconfigNative));
