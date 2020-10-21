const Command = require('../../utils/command');

module.exports = class Roll extends Command{

    static match (message){
        return message.content.startsWith('!roll');
    }

    static action (message){
        let args = message.content.split(' ');
        args.shift();
        let result =  Math.floor(Math.random() * Math.floor(args)) + 1;
        message.reply("Lancement d'un dé à " + args + " face\nEt c'est " + "**" + result + "**" + " !");
    }
};

