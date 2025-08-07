module.exports = cfg => {
  cfg.addPassthroughCopy("static");
  return { dir: { input: "src", output: "_site" } };
};
