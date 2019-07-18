const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log("The Bot Is Now Online");
    bot.user.setActivity("!help | www.silli1337.xyz");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (message.content.startsWith("gay")) {
        message.channel.send("no u")
    }

    if (message.content.startsWith('homo')) {
        message.channel.send("no u")
    }

    if (message.content.startsWith('your mom gay')) {
        message.channel.send("no u")
    }

    if (message.content.startsWith('!help')) {
      const member = message.mentions.members.first()
      message.author.send("Commands: \n!kick @username (kicks mentioned user from the server.\n!info (information about the bot)")
      message.channel.send(":grey_exclamation:  Check your private messages.")
  }

    if(!message.content.startsWith(prefix))return;

    const bootAuthor = "Silli";
    const bootName = "Avance";
    const websiteName = " https://silli1337.xyz"


    if(message.content.startsWith("!info")){
        let botembed = new Discord.RichEmbed()
        .setColor("#ffee00")
        .addField(" Bot Name", bootName)
        .addField(" Bot Creator", bootAuthor)
        .addField(" Bot Prefix", botconfig.prefix)
        .addField(" Website", websiteName);

        return message.channel.send(botembed);
    }

        if (message.content.startsWith('!kick')) {
          const member = message.mentions.members.first()
      
          if (!member) {
            return message.reply(
              `:x: Who are you trying to kick? You must mention a user, fool.`
            )
          }
      
          if (!member.kickable) {
            return message.reply(`:x: I can't kick this user.`)
          }
      
          return member
            .kick()
            .then(() => message.reply(`${member.user.tag} :heavy_check_mark: Got kicked! `))
            .catch(error => message.reply(`:x: An error occured please message the author of this bot, 000#7979!`))
        }
       

});

client.login(process.env.BOT_TOKEN);
