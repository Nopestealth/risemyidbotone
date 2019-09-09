const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', "📛 Sans Papier 📛");
    member.addRole(role);
});

client.on('message', message => {
    let prefix = "!"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (message.channel.id === `620571966193270784`) {
        if (cmd === `${prefix}changernom`) {
            message.delete(1000);

            let cName = args.join(" ").slice(0);
            if (!cName) return message.author.send(`Vous n'avez pas entrer votre nouveau "Prénom Nom"`)

            message.member.setNickname(cName)
            message.member.addRole(`619610703367503886`);
            message.member.removeRole(`620571484209020950`);
            message.author.send('Pseudonyme changé !');

        }
        else
        {
            message.delete(0)
            message.author.send(`Vous ne pouvez pas utiliser une autre commande que !changernom`)
        }
    }
    else
    {
        message.delete(0);
    }

    if (cmd === `${prefix}clear`) {
        if (message.member.roles.get('620250341807489044')) {
            message.delete(1500);
            const amount = parseInt(args[0]);
            if (!amount) return message.author.send(`Vous n'avez pas précisé le nombre de messages à supprimer. **Utilisation :** ?clear **[Montant]**`);
          
            message.channel.bulkDelete(amount)
        }
        else
        {
            message.delete(1500);
            message.author.send(`Tu n'as pas la permission pour utiliser cette commande.`);
        }
    }

    if (cmd === `${prefix}kick`) {
        if (message.member.roles.get('620250341807489044')) {
            message.delete(1500);
            let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);
            let sRaison = args.join(" ").slice(22);
            if (!sRaison) return message.author.send(`Vous n'avez pas entrer une raison pour expulser ce joueur.`)

            let kickEmbed = new Discord.RichEmbed()
            .setTitle("~Kick~")
            .setColor("#e56b00")
            .setAuthor('RiseMyID', 'https://i.imgur.com/vC0rDiy.png')
            .setThumbnail('https://i.imgur.com/vC0rDiy.png')
            .addField("Utilisateur Exlue", `${sUser}`)
            .addField("Exlue par", `${message.author.username}`)
            .addField("Raison", sRaison)
            .setFooter('RideMyID | $aide', 'https://i.imgur.com/vC0rDiy.png')
          
            let logsChannel = message.guild.channels.find(`name`, "logs");
      
            if (message.member.roles.get('620250341807489044')) {
                message.guild.member(sUser).kick(sRaison);  
                logsChannel.send(kickEmbed);
            }
        }
        else
        {
            message.delete(1500);
            message.author.send(`Tu n'as pas la permission pour utiliser cette commande.`);
        }
    }

    if (cmd === `${prefix}ban`) {
        if (message.member.roles.get('620250341807489044')) {
            message.delete(1500);
            let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);
            let sRaison = args.join(" ").slice(22);
            if (!sRaison) return message.author.send(`Vous n'avez pas entrer une raison pour bannir ce joueur.`)

            let banEmbed = new Discord.RichEmbed()
            .setTitle("~Ban~")
            .setColor("#720ab8")
            .setAuthor('RiseMyID', 'https://i.imgur.com/vC0rDiy.png')
            .setThumbnail('https://i.imgur.com/vC0rDiy.png')
            .addField("Utilisateur Banni", `${sUser}`)
            .addField("Banni par", `${message.author.username}`)
            .addField("Raison", sRaison)
            .setFooter('RideMyID | $aide', 'https://i.imgur.com/vC0rDiy.png')
            let logsChannel = message.guild.channels.find(`name`, "logs");
      
            if (message.member.roles.get('620250341807489044')) {
                message.guild.member(sUser).ban(sRaison);  
                logsChannel.send(banEmbed);
            }
        }
        else
        {
            message.delete(1500);
            message.author.send(`Tu n'as pas la permission pour utiliser cette commande.`);
        }
    }

    if (cmd === `${prefix}proposition`) {
        if (message.channel.id === `619612688049242112`) {
            message.delete(0);
            let sProposition = args.join(" ").slice(0);
            if (!sProposition) return message.author.send(`Vous n'avez précisé aucune proposition, merci d'en entrer une.`)

            let propositionEmbed = new Discord.RichEmbed()
            .setTitle(`Proposition - ${message.author.username}`)
            .setThumbnail("https://i.imgur.com/vC0rDiy.png")
            .setColor("#720ab8")
            .addField('Idée de', `${message.author.username}`)
            .addField('Proposition', `${sProposition}`)

            message.channel.send(propositionEmbed)
            .then(function (message) {
                message.react(`✅`)
                message.react(`❌`)
            });
        }
        else
        {
            message.delete(0);
            message.author.send(`Tu n'es pas dans le bon channel.`)
        }
    }

    if (cmd === `${prefix}atweet`) {
        message.delete(0);
        if (message.channel.id === `619612695880269856`) {
            let aMessage = args.join(" ").slice(0);
            if (!aMessage) return message.author.send(`Vous n'avez pas entrer de message à écrire en anonyme.`)

            let darknetChannel = message.guild.channels.find(`name`, "📱-darknet");

            darknetChannel.send(aMessage)
        }
    }
    });

client.login('NjE5OTAwMzY1ODIzMDE2OTg1.XXYzBg.3hPDZnlPXGBbfGDTXz2MIC7R8U8');
