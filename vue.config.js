module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/scss/main.scss";
        `
      }
    }
  }
};