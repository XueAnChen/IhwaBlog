module.exports = {
  theme:"antdocs",
  title: "Ihwa的博客",
  description: "Ihwa的技术博客站",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://www.baidu.com",
    editLinks: false,
  },
};