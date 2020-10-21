const Discord = require('discord.js');
const bot = new Discord.Client;

const Flip = require('./features/others/flip');

bot.on("message", function (message) {
    Flip.parse(message);
});

bot.login('NzU5ODAxMzE4MDA0MzU5MjE4.X3CyHg.S6QHN9m2ld5X8txj9sHnSEDgnVc');