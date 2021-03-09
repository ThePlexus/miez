const { Client } = require("discord.js");
const client = new Client();
const config = require("./data/config.json");

client.on("ready", function () {
    console.log("Hello world!");
    console.log("I am " + client.user.tag);
});

client.on("message", function (message) {
    if (message.author.bot) return;
});

client.login(config.token);
