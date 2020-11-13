const Command = require('../../utils/command');
const Discord = require('discord.js');
const math = require('mathjs');

module.exports = class Calculator extends Command{

    static match (message){
        return message.content.startsWith('!c ');
    }

    static action (message){
        let args = message.content.split(' ');
        args.shift();

        if (!args[0]) return message.channel.send("Erreur dans l'écriture du calcul !");

        let resp;
        try {
            resp = math.evaluate(args[0]);
        }catch (e){
            console.log(resp);
            return message.channel.send("Erreur dans l'écriture du calcul");
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0xfffff)
            .setTitle('Calculatrice')
            .addField('Calcul', `\`\`\`\n${args[0]}\`\`\``)
            .addField('Résultat', `\`\`\`\n${resp}\`\`\``)
        message.channel.send(embed);
    }
};

