const { defineConfig } = require("cypress")

module.exports = defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    env: {
        username: "jansmit",
        password: "FtkyH$UEfRtxq@r72CR3S9MsYr",
    },
})
