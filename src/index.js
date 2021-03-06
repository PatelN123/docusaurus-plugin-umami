const path = require("path");

module.exports = function(context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { umami } = themeConfig || {};

  if (!umami) {
    throw new Error(
      `Nayan Patel - Umami plugin: You need to specify 'umami' object in 'themeConfig'`
    );
  }

  const {
    websiteid,
    src
  } = umami;

  if (!websiteid) {
    throw new Error(
      "Nayan Patel - Umami plugin: The websiteid is missing"
    );
  }

  if (!src) {
    throw new Error(
      "Nayan Patel - Umami plugin: The script src is missing"
    );
  }

  return {
    name: "docusaurus-plugin-umami",

    injectHtmlTags() {
      console.log("Nayan Patel - Plugin umami adding...");
      return {
        headTags: [
          {
            tagName:  "script",
            attributes: {
              async: true,
              defer: true,
              'data-website-id': websiteid,
              src: src,
            },
          }
        ]
      };
    }
  };
};
