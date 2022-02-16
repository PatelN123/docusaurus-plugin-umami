### docusaurus-plugin-umami

This plugin enables you to use umami analytics on a docusaurus site

#### Install the plugin

1. Add the plugin to your project.

```
yarn add docusaurus-plugin-umami
```

or

```
npm install docusaurus-plugin-umami --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["docusaurus-plugin-umami"],
  themeConfig: {
    umami: {
      websiteid: "websiteID", // Insctructions below on how to find this
      src: "script src", // Instructions below on how to find this
    },
  }
};
```

### How to find the configutation values for umami

1. Log into Umami
2. On the top right, select profile
3. Select "websites"
4. Choose the tracking code option:
<p align="left"><img alt="settings" src="https://github.com/PatelN123/docusaurus-plugin-umami/blob/main/img/embed.png"></p>

5. The `data-website-id` value is the websiteID value - You can copy and paste this as it is. Just do **not** include the `"`
6. The value of `src` is your `src` - You can copy and paste this as it is, just do not include the `"`
