const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const config = require("./data/config.json");

client.on("ready", function () {
    console.log("Hello world!");
    console.log("I am " + client.user.tag);
});

client.on("guildMemberAdd", function (member) {
    member
        .send(
            new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Welcome!")
                .setDescription("some text, bla bla, extra bla")
                .setFooter("Send by Miez")
                .setTimestamp()
        )
        .catch();
});

client.on("message", function (message) {
    if (message.author.bot) return;
});

client.login(config.token);
