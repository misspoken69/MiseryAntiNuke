// Made by Misspoken#1122. Don't skid this shit. :)

// Packages 
const Discord = require('discord.js'); 
const antinuke = new Discord.Client(); 
const clc = require('cli-color'); 
const pretty = require('pretty-ms');
const config = require('./config.json'); 
const prefix = 'm!';
const keepAlive = require('./server.js');

antinuke.on("ready", async () => {
  antinuke.user.setPresence({
    status: "idle",
    activity: {
      name: "Misery On Top",
      type: "PLAYING"
    }
  })
});

// Logs
antinuke.on("ready", async () => {
  console.clear()
  console.log("███╗░░░███╗██╗░██████╗███████╗██████╗░██╗░░░██╗")
  console.log("████╗░████║██║██╔════╝██╔════╝██╔══██╗╚██╗░██╔╝")
  console.log("██╔████╔██║██║╚█████╗░█████╗░░██████╔╝░╚████╔╝░")
  console.log("██║╚██╔╝██║██║░╚═══██╗██╔══╝░░██╔══██╗░░╚██╔╝░░")
  console.log("██║░╚═╝░██║██║██████╔╝███████╗██║░░██║░░░██║░░░")
  console.log("╚═╝░░░░░╚═╝╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░")
  console.log("—————————————————————————————————————————————————————")
  console.log("[-] Thanks for using Misery Anti-Nuke!")
  console.log("[-] If you like it, maybe leave a star and follow?")
  console.log("[-] It would help a lot considering I am making more!")
  console.log("[-] This was made by Misspoken so don't skid this shit.")
  console.log("—————————————————————————————————————————————————————")
})

// Server Join Message
antinuke.on('guildCreate', guild => {


  const guildmsg1 = new Discord.MessageEmbed()
  .setTitle('⌗     ：𝘔𝘐𝘚𝘌𝘙𝘠 𝘈𝘕𝘛𝘐-𝘕𝘜𝘒𝘌 𝘍𝘌𝘈𝘛𝘜𝘙𝘌𝘚')
  .setDescription('People that are not whitelisted in `config.json` will be against if they do any of the following.')
  .addField('Channels', '> Creation - Bans the member and deletes the channel.\n> Deletion - Bans the member and restores the channel.')
  .addField('Roles', '> Creation - Bans the member and deletes the role.\n> Deletion - Bans the member and restores the role.\n> Update - Bans the member and resets the role.')
  .addField('Bots', '> Add Bot - Bans the member and bot that was added.\n> Bans Bot(s) - Bans the member and unbans the bots.')
  .addField('Members', '> Ban Member - Bans the executor and unbans member.\n> Unban Member - Bans the executor and bans member.')
  .setImage('https://media.discordapp.net/attachments/788472030315413524/802374801779458099/image2.gif')
  .setColor(000000)
  guild.systemChannel.send(guildmsg1)
  });
  
  antinuke.on('guildCreate', guild => {
  
  
  const guildmsg = new Discord.MessageEmbed()
  .setDescription('Thanks for adding Misery Anti-Nuke! This is a new anti-wizz Discord source code to be used for protecting servers!')
  .addField('Useful Commands', '`m!help`\n`m!info`\n`m!antinukeon`\n`m!support`')
  .addField('Links', '[Donate](https://www.paypal.com/paypalme/misspoken69)・[Source](https://github.com/misspoken69/MiseryAntiNuke)・[Developer](https://github.com/misspoken69)')
  .setFooter('If you ping the bot or just do m!, it will respond.')
  .setTimestamp()
  .setColor(000000)
  guild.systemChannel.send(guildmsg)
  });

// Prefix Callback
antinuke.on('message', async msg => {
  if (msg.content === 'm!'){


  const prefixbed = new Discord.MessageEmbed()
  .setDescription('Need help? Do `m!help` for commands.')
  .setTimestamp()
  .setColor(000000)
  .setImage('https://media.discordapp.net/attachments/790266937808257074/813239849708027944/image2.gif')
  .setFooter('Follow my GitHub! @Misspoken69')
  msg.channel.send(prefixbed)
  .then(sentMessage => sentMessage.react('822307172229840926'))
  .catch(console.error)
  }

// Ping Callback
  if (msg.mentions.has(antinuke.user, { ignoreRoles: true, ignoreEveryone: true }) && !msg.content.startsWith(prefix)) {
    


    const mbed = new Discord.MessageEmbed()
    .setDescription('Need help? Do `m!help` for commands.')
    .setTimestamp()
    .setColor(000000)
    .setImage('https://media.discordapp.net/attachments/790266937808257074/813239849708027944/image2.gif')
    .setFooter('Follow my GitHub! @Misspoken69')
    msg.channel.send(mbed)
    .then(sentMessage => sentMessage.react('822307172229840926'))
    .catch(console.error)
  }

// Source Command | RECODED!
  if (msg.content === prefix + 'invite'){


  const invbed = new Discord.MessageEmbed()
  .setDescription('Use the Misery anti-nuke by clicking [here](https://github.com/misspoken69/MiseryAntiNuke) and leave a follow! <a:xVerified:830116875740250113>')
  .setImage('https://cdn.discordapp.com/attachments/818542759555104818/830116144480256030/image0_1.gif')
  .setColor(000000)
  msg.channel.send(invbed).then(res => msg.delete())
  }

// Info Command | RECODED!
if (msg.content === prefix + 'info'){


  const infoembed = new Discord.MessageEmbed()
  .setTitle('⌗     ：𝘔𝘐𝘚𝘌𝘙𝘠 𝘈𝘕𝘛𝘐-𝘕𝘜𝘒𝘌 𝘐𝘕𝘍𝘖')
  .setTimestamp()
  .setColor(000000)
  .addField('Discord.JS Version', '12.5.2', true)
  .addField('Developer', 'Made by [Misspoken#1122](https://github.com/misspoken69)', true)
  .addField('Commands', '`m!info`\n`m!help`\n`m!ping`\n`m!uptime`\n`m!support`\n`m!releases`\n`m!antinukeon`\n`m!antinukeoff`')
  .setImage('https://cdn.discordapp.com/attachments/817447136585056307/829479480858116116/image0.gif')
  .setDescription('Misery Anti-Nuke is an all new configurable server protecting bot! Published on April 5th, 2021, and still an ongoing project with new commands and tests everyday.\n\nIf you want to use the source code of this bot, click [here](https://github.com/misspoken69/MiseryAntiNuke).')
  .setFooter('Follow me on GitHub: @Misspoken69', 'https://cdn.discordapp.com/avatars/822878967027073105/ba2e9f916f6765f1b7ae922a7b7f2fe1.png?size=1024')
  msg.channel.send(infoembed)
  }

// Help Command | RECODED!
  if (msg.content === prefix + 'help'){
    

  const helpembed = new Discord.MessageEmbed()
  .setTitle('⌗     ：𝘔𝘐𝘚𝘌𝘙𝘠 𝘏𝘌𝘓𝘗 𝘗𝘈𝘕𝘌𝘓')
  .setTimestamp()
  .setColor(000000)
  .setImage('https://cdn.discordapp.com/attachments/790266937808257074/826516543453265920/image0.gif')
  .setFooter('𝘔𝘐𝘚𝘌𝘙𝘠 𝘎𝘓𝘖𝘉𝘈𝘓', 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png')
  .addField('Anti-Nuke <:xFire:829501427697188894>', '`antinukeon` `antinukeoff`')
  .addField('Utility <:xTools:829500424537112608>', '`info` `help` `support` `ping` `uptime` `releases` `features` `membercount` `nuke`')
  msg.channel.send(helpembed)
  }

// Anti-Nuke On | RECODED!
  if (msg.content === prefix + 'antinukeon'){


  const antiembed = new Discord.MessageEmbed()
  .setTitle('⌗     ：𝘔𝘐𝘚𝘌𝘙𝘠 𝘈𝘕𝘛𝘐-𝘕𝘜𝘒𝘌')
  .setTimestamp()
  .setColor(000000)
  .setFooter('Misery Anti-Nuke | By Misspoken | Prefix: ' + prefix, 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png',)
  .addField('GitHub', '[Click here!](https://github.com/misspoken69)', true)
  .addField('YouTube', '[Click here!](https://tinyurl.com/sarcasticbeats)', true)
  .setImage('https://cdn.discordapp.com/attachments/820160962946007040/828707550396022784/c2d0a5f07c427205f78986d4affb7681.gif')
  .setDescription('Thanks for adding Misery Anti-Nuke by Misspoken!\nIf any suspected nuking is detected, it will be console logged to the owner and the suspected nuker will be banned.\n\n**We see all signs of any nuke attempts, so you will be banned if:**\n - You ban a member while not being the owner of the server or while not being whitelisted or not obtaining the bypass role.\n - You add an unwhitelisted bot while not being whitelisted or not being the owner of the server or not obtaining the bypass role.')
  msg.channel.send(antiembed)
  .then(sentMessage => sentMessage.react('822307172229840926'))
  .catch(console.error)
  console.log(clc.red(`Turned on Anti-Nuke in ${msg.guild.name}`))
  }

// Anti-Nuke Off | RECODED!
  if (msg.content === prefix + 'antinukeoff'){
    msg.channel.send('Turning off Misery Anti-Nuke and leaving the server...');
    console.log(clc.green(`Left ${msg.guild.name}!`));
    msg.guild.leave();
  }

// Support Command
  if (msg.content === prefix + 'support'){


  const disbed = new Discord.MessageEmbed()
  .setDescription('・https://dis.gd/report Reports and Appeals\n・https://dis.gd/support Anything Discord Related\n・https://dis.gd/billing Payments & Nitro\n・https://dis.gd/feedback Features & Requests\n・https://dis.gd/terms Discord Terms of Service')
  .setColor(000000)
  .setImage('https://media.discordapp.net/attachments/788472030315413524/803287636034060398/image0.gif')
  msg.channel.send(disbed).then(res => msg.delete())
  }

// Ping Command
  if (msg.content === prefix + 'ping') {


  const pingbed = new Discord.MessageEmbed()
  .setDescription('Pong! 🏓')
  .addField('Bot Latency', `${Date.now() - msg.createdTimestamp} ms`, true)
  .addField('API Latency', `${Math.round(antinuke.ws.ping)} ms`, true)
  .setColor(000000)
  msg.channel.send(pingbed)
  }
  
// Uptime Command
  if (msg.content === prefix + 'uptime') {
  

  const upbed = new Discord.MessageEmbed()
  .setDescription(`Misery's Uptime: ${pretty(antinuke.uptime)} <:Online:832000685649952789>`)
  .setColor(000000)
  msg.channel.send(upbed)
  }

// Releases Command
  if (msg.content === prefix + 'releases') {


  const relbed = new Discord.MessageEmbed()
  .setDescription('```  ┏━┓┏━┳━━┳━━━┳━━━┳━━━┳┓╋╋┏┓\n  ┃┃┗┛┃┣┫┣┫┏━┓┃┏━━┫┏━┓┃┗┓┏┛┃\n  ┃┏┓┏┓┃┃┃┃┗━━┫┗━━┫┗━┛┣┓┗┛┏┛\n  ┃┃┃┃┃┃┃┃┗━━┓┃┏━━┫┏┓┏┛┗┓┏┛\n  ┃┃┃┃┃┣┫┣┫┗━┛┃┗━━┫┃┃┗┓╋┃┃\n  ┗┛┗┛┗┻━━┻━━━┻━━━┻┛┗━┛╋┗┛```')
  .addField('Releases', 'No new releases yet.', true)
  .addField('Version', 'Current version is `1.0.2`.', true)
  .setImage('https://cdn.discordapp.com/attachments/817447136585056307/832032899640983612/polo.gif')
  .setColor(000000)
  msg.channel.send(relbed)
  }

// Features Command
  if (msg.content === prefix + 'features') {
  
  const febed = new Discord.MessageEmbed()
  .setTitle('⌗     ：𝘔𝘐𝘚𝘌𝘙𝘠 𝘈𝘕𝘛𝘐-𝘕𝘜𝘒𝘌 𝘍𝘌𝘈𝘛𝘜𝘙𝘌𝘚')
  .setDescription('People that are not whitelisted in `config.json` will be against if they do any of the following.')
  .addField('Channels', '> Creation - Bans the member and deletes the channel.\n> Deletion - Bans the member and restores the channel.')
  .addField('Roles', '> Creation - Bans the member and deletes the role.\n> Deletion - Bans the member and restores the role.\n> Update - Bans the member and resets the role.')
  .addField('Bots', '> Add Bot - Bans the member and bot that was added.\n> Bans Bot(s) - Bans the member and unbans the bots.')
  .addField('Members', '> Ban Member - Bans the executor and unbans member.\n> Unban Member - Bans the executor and bans member.')
  .setImage('https://media.discordapp.net/attachments/788472030315413524/802374801779458099/image2.gif')
  .setColor(000000)
  msg.channel.send(febed)
  }

// MemberCount Command
  if (msg.content === prefix + 'membercount') {


  const membed = new Discord.MessageEmbed()
  .setTitle(`Members`)
  .setDescription(`${msg.guild.memberCount}`)
  .setColor(000000)
  .setTimestamp()
  msg.channel.send(membed)
  }

// Nuke Command
  if (msg.content === prefix + "nuke") {
  
  
  const position = msg.channel.position
  const channel = await msg.channel.clone();
  msg.channel.delete();
  channel.setPosition(position)
  }

// BELOW ARE ALL THE CATEGORIES FOR HELP COMMAND!
// ----------------------------------------------
// Help Utility | RECODED!
  if (msg.content === prefix + 'help util') {


  const uembed = new Discord.MessageEmbed()
  .setDescription('**m!info** Useful information to know when using this bot.\n**m!help** Displays the aliases for the category help embeds.\n**m!support** Get useful Discord links that may be needed when using this bot.\n**m!ping** Displays bot and API latency in ping ms.\n**m!uptime** Shows the current uptime of Misery Anti-Nuke.\n**m!releases** When a new release is published, it will show name and info of it.\n**m!features** Displays the anti-nuke features built into the bot.\n**m!membercount** Replies back with the amount of members in the server.\n**m!nuke** Nuke or purge a channel. Useful for clearing up the whole chat.')
  .setColor(000000)
  .setTimestamp()
  .setFooter('@Misspoken69')
  msg.channel.send(uembed)
  }

// Help Anti-Nuke | RECODED!
  if (msg.content === prefix + 'help anti'){


  const nukebed = new Discord.MessageEmbed()
  .setDescription('**m!antinukeon** - Turn on anti-nuke to protect your server.\n**m!antinukeoff** - Turns off anti-nuke by leaving your server.')
  .setColor(000000)
  .setTimestamp()
  .setFooter('@Misspoken69')
  msg.channel.send(nukebed)
  }
})

// BELOW ARE ALL THE ANTI-NUKE FEATURES!
// ----------------------------------------------
// Suspicions For Adding Bots
antinuke.on('guildMemberAdd', async member => {
    const executor = audit.entries.first().executor;
    if (executor.id === antinuke.user.id) return;
    if (executor.id === channel.guild.ownerID) return;
    if (member.user.bot && config.blacklist) {
        (member.ban("Suspicious bot was added to the server! Was not whitelisted or was blacklisted."));
        const embed = new Discord.MessageEmbed()
        .setTitle('𝘉𝘖𝘛 𝘈𝘋𝘋𝘌𝘋')
                .setColor(000000)
                .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe.', antinuke.user.avatarURL)
                .setDescription(`**Bot Added:** ${member.displayName}#${member.discriminator}\n**Action Taken:** Banned Bot\n**Protocol:** Re-invite the Bot`)
                antinuke.users.get(member.guild.ownerID).send(embed)
        (console.log(clc.red(`Unwhitelisted bot has been banned, ${member.user.tag}!`))), function (err, res) {
            if (err)
            console.log(err)
            const errembed = new Discord.MessageEmbed()
            .setTitle('⚠️')
            .setColor(000000)
            .setAuthor('Error Log:', antinuke.user.avatarURL)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setDescription('An error has occured while trying to protect your server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
            antinuke.users.get(member.guild.ownerID).send(errembed)
        }
    } 
});


// Suspicions Of Banning Members
antinuke.on('guildBanAdd', async guild => {
    guild.fetchAuditLogs({type:22}).then(audit => {
        const executor = audit.entries.first().executor;
        let member = guild.members.get(executor.id);
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.ban({reason:"Manually banned people. Banning is a big part of nuking."});
            const embed = new Discord.MessageEmbed()
            .setTitle('𝘈𝘛𝘛𝘌𝘔𝘗𝘛𝘌𝘋 𝘕𝘜𝘒𝘌 🤡')
                .setURL('https://github.com/misspoken')
                .setColor(000000)
                .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription(`**Suspected Wizzer:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Banned user and removed admin.\n**Protocol:** Restore admin and unban user.`);
                antinuke.users.get(guild.ownerID).send(embed);
            const exembedd = new Discord.MessageEmbed()
            .setTitle('𝘠𝘖𝘜 𝘞𝘌𝘙𝘌 𝘉𝘈𝘕𝘕𝘌𝘋')
            .setURL('https://github.com/misspoken69/')
            .setColor(000000)
            .setAuthor('Misery banned you!', antinuke.user.avatarURL)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setDescription(`**Your admin was removed in ${guild.name}~\n__Reason:__ Manually banning users\nThis message was sent to you because you were the one who banned a user.**`);
            antinuke.users.get(executor.id).send(exembedd);
            console.log(clc.red(`Banned ${member.user.tag}, user was banning people!`)), function (err, res) {
                if (err)
                console.log(err);
                const errembed = new Discord.MessageEmbed()
                .setTitle('️⚠️')
                .setURL('https://github.com/misspoken69/')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestion: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }
        }
    })
});

// Suspicions Of Channel Deletion
antinuke.on('channelDelete', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (adminRole.name === antinuke.user.username) return;
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        let member = channel.guild.members.get(executor.id)
        member.removeRole(adminRole.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            const embed = new Discord.MessageEmbed()
            .setTitle('𝘊𝘏𝘈𝘕𝘕𝘌𝘓 𝘋𝘌𝘓𝘌𝘛𝘌𝘋')
            .setURL('https://github.com/misspoken')
            .setColor(000000)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
            .setDescription(`**Channel Deleter:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Removed admin\n**Protocol:** Restore admin`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('𝘓𝘐𝘔𝘐𝘛 𝘞𝘈𝘚 𝘙𝘌𝘈𝘊𝘏𝘌𝘋')
            .setColor(000000)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery took away your admin.', antinuke.user.avatarURL)
            .setDescription(`**Your admin was removed in ${channel.guild.name}!\n__Reason:__ Channel deletion\nThis message was sent to you because you were the one who deleted a channel.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, deleted channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('⚠️')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }
        }
    })
});

// Suspicions Of Channel Creation
antinuke.on('channelCreate', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        if (adminRole.name === antinuke.user.username) return;
        let member = channel.guild.members.get(executor.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            const cretbed = new Discord.MessageEmbed()
            .setTitle('𝘊𝘏𝘈𝘕𝘕𝘌𝘓 𝘊𝘙𝘌𝘈𝘛𝘌𝘋')
            .setColor(000000)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
            .setDescription(`**Channel Creater:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Removed admin.\n**Protocol:** Restore admin`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('𝘓𝘐𝘔𝘐𝘛 𝘞𝘈𝘚 𝘙𝘌𝘈𝘊𝘏𝘌𝘋')
            .setColor(0xFF00F7)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
            .setDescription(`**Your admin was removed in ${channel.guild.name}!\n__Reason:__ Channel creation\nThis message was sent to you because you were the one who deleted a channel.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, created channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('⚠️')
                .setColor(0xFF00F7)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }
        }
    })
})

// Bot Configuration
keepAlive();
antinuke.login(config.token);
