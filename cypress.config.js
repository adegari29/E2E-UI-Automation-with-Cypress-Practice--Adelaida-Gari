const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: 'cypress/videos',  
  video: true,
  videoUploadOnPasses: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});


