const Command = require('../../utils/command');
const Discord = require('discord.js');

module.exports = class Flip extends Command{

    static match (message){
        return message.content.startsWith('!flip');
    }

    static action (message){
        let answer;
        let result = Math.floor(Math.random() * Math.floor(2));
        if (result === 1){ answer = "C'est face !"; }
        else { answer = "C'est pile !"; }

        const embed = new Discord.MessageEmbed()
            .setColor('18EEDA')
            .setTitle("Pile ou face")
            .addField('Résultat', `\`\`\`\n` + answer + `\`\`\``)
        message.reply(embed);
    }
};

