//Zer0 Bot's script starts here

console.log("Loading modules... (1/2)")
const Discord = require('discord.js');
console.log("Loading modules... (2/2)")
const config = require('./config.json');

client = new Discord.Client;

//The </help> command is pretty long so I decided to divide it by pieces.
const purge = "**</purge> [Amount of messages]** : Clears an amount of messages"
const kick = "**</kick> [Member]** : Kicks mentionned user"
const ban = "**</ban> [Member]** : Bans mentionned user"
const ping = "**</ping>** : Gateway connexion speed"
const invitee = "**</invite>** : Invite ZetaBot in your guild"
const supporte = "**</support>** : Join the support guild"

const help = new Discord.MessageEmbed()
    .setTitle("Zero 1.0")
    .setDescription(`${purge} \n ${kick} \n ${ban} \n ${ping} \n ${invitee} \n ${supporte}`)
    .setColor('8a92ff')
    .setFooter('Zero 1.0 by Zero_#4214')

//The </help> command embed ends here

const invite = new Discord.MessageEmbed()
    .setTitle("Invite ZetaBot in your guild")
    .setColor('8a92ff')
    .setDescription('You can invite ZetaBot [here](https://discord.com/api/oauth2/authorize?client_id=796429026091728947&permissions=-1&scope=bot)!')
    .setFooter('Zero 1.0 by Zero_#4214')

const support = new Discord.MessageEmbed()
    .setTitle('Support guild')
    .setColor('8a92ff')
    .setDescription('Problems using Zero? Join the [support guild](https://discord.gg/pwEXKBYmP2)!')
    .setFooter('Zero 1.0 by Zero_#4214')

console.log('Loading...')

client.on('ready', async () => {
    console.log(`Client ready. Logged in as ${client.user.tag}.`);
    client.user.setStatus("dnd");
    setTimeout(() => {
        client.user.setActivity("</help>", {type:"WATCHING"});
    }, 100)
});

console.log('Loading commands...')

client.on('message', message => {

    if(message.content === "</help>") {
        message.channel.send(help);
    }
});

client.on('message', message => {
  if(message.content === "</invite>") {
    message.channel.send(invite)
  }
})

client.on('message', message => {
  if(message.content === "</support>") {
    message.channel.send(support);
  }
})

client.on('message', message => {
    if (message.content.startsWith('</kick>')) {
        if(message.member.hasPermission("KICK_MEMBERS")) {
            const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick(null)
              .then(() => {
                message.channel.send(`**✅ Successfully kicked ${user.tag}**`);
              })
              .catch(err => {
                message.channel.send('**❌ I have not enough permissions to kick this member!**');
                console.error(err);
              });
          } else {
            message.channel.send("**❌ That user isn't in this guild!**");
          }
        } else {
          message.channel.send("**❌ You didn't mention the user to kick!**");
    }}else{
      message.channel.send("**❌ You must have the permission to kick the members!**")
    }}
})

client.on('message', message => {
    if(message.content.startsWith("</ban>")) {
        if(message.member.hasPermission("KICK_MEMBERS")) {
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: null,
          })
          .then(() => {
            message.channel.send(`**✅ Successfully banned ${user.tag}**`);
          })
          .catch(err => {
            message.channel.send('**❌ I don\'t have enough permissions to ban this member!**');
          });
      } else {
        message.channel.send("**❌ That user isn't in this guild!**");
      }
    } else {
      message.channel.send("**❌ You didn't mention the user to ban!**");
    }
        }
    }
});

client.on('message', message => {
  if(message.content === "</ping>") {
    
    message.channel.send('Ping...').then(sent => {
      sent.edit(`Pong! (${sent.createdTimestamp - message.createdTimestamp} ms)`);
  });
  }
})

client.on('message', message => {

    if(message.content.startsWith("</purge>")) {
        message.delete();
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            let args = message.content.trim().split(/ +/g);

            if (args[1]) {
                if(!isNaN(args[1]) &&  args[1] >= 1 && args[1] <= 99){
                    message.channel.bulkDelete(args[1]);
                    message.channel.send(`✅ You deleted ${args[1]} message(s)!`);
                    setTimeout(() => {
                      message.channel.bulkDelete(1)
                    }, 3500);
                }else{
                  if(!isNaN(args[1]) &&  args[1] >= 1 && args[1] >> 99 && args[1] <= 198){
                    message.channel.bulkDelete(args[1] - 99);
                    message.channel.bulkDelete(99)
                    message.channel.send(`✅ You deleted ${args[1]} message(s)!`);
                    setTimeout(() => {
                      message.channel.bulkDelete(1)
                    }, 3500);
                }else{
                  if(!isNaN(args[1]) &&  args[1] >= 1 && args[1] >> 198 && args[1] <= 297){
                    message.channel.bulkDelete(args[1] - 198);
                    message.channel.bulkDelete(99)
                    message.channel.bulkDelete(99)
                    message.channel.send(`✅ You deleted ${args[1]} message(s)!`);
                    setTimeout(() => {
                      message.channel.bulkDelete(1)
                    }, 3500);
                }else{
                  if(!isNaN(args[1]) &&  args[1] >= 1 && args[1] >> 297 && args[1] <= 300){
                    message.channel.bulkDelete(args[1] - 297);
                    message.channel.bulkDelete(99)
                    message.channel.bulkDelete(99)
                    message.channel.bulkDelete(99)
                    message.channel.send(`✅ You deleted ${args[1]} message(s)!`);
                    setTimeout(() => {
                      message.channel.bulkDelete(1)
                    }, 3500);
                }else{
                  message.channel.send('**❌ You must type an amount of messages between 1 and 300!**')
                  setTimeout(() => {
                    message.bulkDelete(1)
                  }, 3500);
                }}}}
            }else{
                message.channel.send('**❌ You must type an amount of messages to delete!**');
            }
        }else{
            message.channel.send('**❌ You must have the permission to manage messages**');
        }
    }
});

console.log('Logging in...')
client.login(config.token);
console.log('Client connected.')