const Discord = require('discord.js');
const bot = new Discord.Client;

const Flip = require('./features/others/flip');
const Roll = require('./features/others/roll');
const AccountRegister = require('./features/account/accountRegister');
const Calculator = require('./features/others/calculator');


bot.on("message", function (message) {
    Flip.parse(message);
    Roll.parse(message);
    AccountRegister.parse(message);
    Calculator.parse(message);
});

bot.login('NzU5ODAxMzE4MDA0MzU5MjE4.X3CyHg.S6QHN9m2ld5X8txj9sHnSEDgnVc');