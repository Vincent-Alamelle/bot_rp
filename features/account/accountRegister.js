const Command = require('../../utils/command');
const db = require('../../utils/db');


module.exports = class AccountRegister extends Command{

    static match (message){
        return message.content.startsWith('!register');
    }

    static action (message){
        //Connection to the server's db
        let con = db.dbConnection();

        //Keeping the author's id and his username
        let discord_id = message.author.id;
        let username = message.author.username;

        //Verifying if the user's discord_id already exist in db
        con.query("SELECT discord_id FROM users WHERE discord_id = ?", [discord_id], function (err, result) {
            if (err) throw err;

            //If the user is already registered
            if (result.length > 0) {
                message.reply("Vous êtes déjà inscrit !");
            }

            //If the user isn't already registered - Sql request to add the new user in the db using his discord_id
            else {
                // let values = [[discord_id, username]];
                // let sql = "INSERT INTO users (discord_id, username) VALUES ?";
                let sql = "INSERT INTO " + " users (discord_id, username) VALUES ('" + discord_id + "','" + username + "')";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Number of records inserted: " + result.affectedRows);
                    message.reply("inscription réussie")
                });
            }
        });
    }
};

