const Command = require('../../utils/command');
const Discord = require('discord.js');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

module.exports = class Roll extends Command{

    static match (message){
        return message.content.startsWith('!r ');
    }

    static action (message){
        let args = message.content.split(' ');
        args.shift();
        let str = args[0];
        let cpt = 0;
        let answer = "";
        let finalAnswer = "";
        let value = 0;

        const calc = str.split("+")
        let chars;

        let nb_dice;
        let size_dice;

        for (let i = 0; i < calc.length; i++) {
            chars = calc[i].split('d');
            if (chars.length < 2){
                message.reply("Mauvaise utilisation de la commande !");
                return;
            }
            nb_dice = chars[0]
            size_dice = chars[1];
            if(nb_dice === "") nb_dice = 1;
            if (size_dice === "")  size_dice = 1;

            answer += "(";
            for (let i = 1; i <= nb_dice; i++) {
                value = getRandomInt(size_dice);
                answer += value + " + ";
                cpt += value;
            }
            answer = answer.substring(0, answer.length - 3);
            answer += ") + ";
        }

        if (calc.length > 1 || nb_dice > 1){
            finalAnswer = answer.substring(0, answer.length - 3);
            finalAnswer += " = " + cpt;
        }
        else finalAnswer = answer.substring(1, answer.length - 4);

        if (finalAnswer.length > 1024 && finalAnswer.length < 1940){
            message.channel.send("Ca faisait beaucoup donc je te le mets en dur\nRésultat = " + finalAnswer);
        }
        else if (finalAnswer.length > 2000) {
            message.channel.send("Ca faisait beaucoup donc je te le mets en dur\nRésultat = " + cpt);
        }
        else {
            const embed = new Discord.MessageEmbed()
                .setColor(0xfffff)
                .setTitle('Lancer de dé')
                .addField('Lancé', `\`\`\`\n${args[0]}\`\`\``)
                .addField('Résultat', `\`\`\`\n${finalAnswer}\`\`\``)

            message.reply(embed);
        }
    }
};

