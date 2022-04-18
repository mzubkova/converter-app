const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { ssr: true, displayName: true }],
    ["styled-components", { ssr: true, displayName: true }],
  ],
};
