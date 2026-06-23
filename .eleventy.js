module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("readableDate", (d) => {
    if (!d) return "";
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addShortcode("clip", (src, alt) =>
    `<video src="/assets/videos/${src}" autoplay loop muted playsinline aria-label="${alt}"></video>`
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
