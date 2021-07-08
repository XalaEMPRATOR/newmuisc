
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 10,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/798087155347226625/817669570587787294/2ad6ce1bd5a55dc9848cf81838c8d6a6.gif `)
    .setTitle(`PREFIX [/]
List of all commands`)
    .setDescription(`**
<a:emoji_7:843515052438323240>User Commands<a:emoji_7:843515052438323240>
> \`invite\` - \`about\`
> \`ping\` - \`prefix\` - \`uptime\`
<a:emoji_2:842511069180198972>Music Commands<a:emoji_2:842511069180198972>
> \`play\` - \`skip\` - \`skipto\`
> \`stop\` - \`volume\` - \`nowplaying\`
> \`shuffle\` - \`search\` - \`resume\`
> \`remove\` - \`queue\` - \`filter\`
> \`loop\` - \`lyrics\` - \`radio\`
<a:emoji_5:842511173101813760>Fun Command<a:emoji_5:842511173101813760>
> lock - unlock - kick
> server - emoji - id
> avatar - unban - ban
<a:emoji_4:842511148645482559>About Bot<a:emoji_4:842511148645482559>
[Support](https://discord.gg/rD2eeyQAaT) - [Invite](https://discord.com/api/oauth2/authorize?client_id=842355185912512582&permissions=8&scope=bot)**`)


   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
