const Command = require('../../utils/command');

module.exports = class Flip extends Command{

    static match (message){
        return message.content.startsWith('!flip');
    }

    static action (message){
        let result = Math.floor(Math.random() * Math.floor(2));
        if (result === 1){message.reply("C'est face !");}
        else {message.reply("C'est pile !")}
    }
};

