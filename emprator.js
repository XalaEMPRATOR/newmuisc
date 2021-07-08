const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { keep_alive } = require("./keep_alive");
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("ODQyMzU1MTg1OTEyNTEyNTgy.YJ0GZg.Z2AC7ncpL7DUhABvy-xgf61BQsA");
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH
client.on(`ready`, () => {	

   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      

      client.user.setActivity(`${PREFIX}help | ${client.guilds.cache.size} Server`, { type: "STREAMING",
      url: "https://www.twitch.tv/nocopyrightsounds"});
   
  
      }, (5000));
      ////////////////////////////////
client.on('message', habdo => {
    if (habdo.content.startsWith("/kick")) {
    if (!habdo.guild) return;
    if (!habdo.member.hasPermission('KICK_MEMBERS')) return habdo.reply('**لا يــــــوجد لديـــــــــك برمشــــــن**');
   let user = habdo.mentions.users.first();
    if (!user) return habdo.reply('**Kick A Member User**');
      habdo.guild.member(user).kick();
      habdo.channel.send(`**✈ \`${user}\` Kicked from the server.**`);
}
}); 
//////////////////
client.on("message", russi => {
  if (russi.content === "/server") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${russi.guild.name}`)///Russi
    .setThumbnail(client.user.avatarURL())
    .setColor('#3a6bff')///Russi
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
    .addField('> 🆔 ID Server :', `${russi.guild.id}`)
    .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
    .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
    .setTimestamp()///Russi
    russi.channel.send(embed);
  }
});
//////////
client.on("guildCreate", guild => { let channel = client.channels.cache.get("842093016156209182"); let embed = new MessageEmbed().setColor("#FF0000") .setAuthor(client.user.username, client.user.avatarURL()) .setTitle( `✅ Join Server`) .addField(" **Server Name**", `${guild.name}`) .addField(" **Server Owner**", `${guild.owner}`) .addField(" **Server Id**", `${guild.id}`) .addField(" **Member Count**", `${guild.memberCount}`) .setFooter(`${client.user.tag}`); channel.send(embed);}); client.on("guildDelete", guild => { let channel = client.channels.cache.get("842092942616559656"); let embed = new MessageEmbed() .setColor("#FF0000") .setAuthor(client.user.username, client.user.avatarURL()) .setTitle( `❌ Left Server`) .addField(" **Server Name**", `${guild.name}`) .addField(" **Server Owner**", `${guild.owner}`) .addField(" **Server Id**", `${guild.id}`) .addField(" **Member Count**", `${guild.memberCount}`) .setFooter(`${client.user.tag}`); channel.send(embed);});
///////////
client.on("message", emprator => {
if (emprator.content === "slaw") {
emprator.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**"); 
  }
});
client.on("message", SAEWAN => {
  if (SAEWAN.content === "hello") {
    SAEWAN.channel.send("**🌸 | Hello, welcome you too**");
  }
});
client.on("message", SAEWAN => {
  if (SAEWAN.content === "مرحبا") {
    SAEWAN.channel.send("**🌸 | مرحبا، مرحبا بك أيضا**");
  }
});
client.on("message", SAEWAN => {
  if (SAEWAN.content === "ڕیکلام") {
    SAEWAN.channel.send("**🌸 | دڵم چاوەڕێکە تا یەکێ جوابت دەداتەوە**");
  }
});
client.on("message", SAEWAN => {
  if (SAEWAN.content === "partner") {
    SAEWAN.channel.send("**🌸 | Don't rush my heart until someone gives you a job**");
  }
});
client.on("message", emprator => { 
   if (emprator.content === "سڵاو") {
      emprator.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**"); 
   }
});
client.on("message", emprator => {
   if (emprator.content === "الاعلان") {
      emprator.channel.send("**🌸 |لا تستعجل قلبي حتى يعطيك شخص ما وظيفة **"); 
   }
}); 
client.on("message", SAEWAN => {
  if (SAEWAN.content === "reklam") {
    SAEWAN.channel.send("**🌸 | دڵم چاوەڕێکە تا یەکێ جوابت دەداتەوە**");
  }
});

///////////
client.on("message", habdo => {
    if (habdo.content.startsWith("/avatar")) {
  var embed = new Discord.MessageEmbed()
         .setAuthor(`${habdo.author.username}`, habdo.author.avatarURL({dynamic: true}))
         .setColor('#2E2E30')
         .setDescription(`**[Avatar Link](${habdo.author.avatarURL({dynamic: true, format: 'png', size: 1024})})**`)
         .setImage(habdo.author.avatarURL({dynamic: true, format: 'png', size: 1024}))
         .setFooter(`Requsted by ${habdo.author.tag}`, habdo.author.avatarURL({dynamic: true}))
    habdo.channel.send(embed);
}
});

//////////////////
client.on('message', async message => {
    if (message.content.startsWith("/id")) {
    let user = message.mentions.users.first();
    if (!user) return message.channel.send('**id A member User**');
      message.channel.send(`**🎉 [ ${user.username} ] 🎉 Id :**`);
      message.channel.send(`${user.id}`);
}
}); 
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
client.on(`warn`, (info) => console.log(info));
//DO NOT TOUCH
client.on(`error`, console.error);
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("#F0EAD6").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 
  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#F0EAD6")
    .setDescription(saymsg)
    .setFooter("Harmony", client.user.displayAvatarURL())
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }

if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("")
    .setThumbnail(`https://cdn.discordapp.com/emojis/806266140699525120.gif`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`
> **<a:emoji_5:842511191175200808>Name Bot<a:emoji_5:842511191175200808>**
<@842355185912512582>
> **<a:emoji_7:843515052438323240>Server<a:emoji_7:843515052438323240>**
${client.guilds.cache.size}
> **<a:emoji_7:843515052438323240>User<a:emoji_7:843515052438323240>**
${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
> **<a:emoji_3:842511100393947136>Owner Bot<a:emoji_3:842511100393947136>**
<@708493122753003550>
> **<a:emoji_3:842511100393947136>Admin<a:emoji_3:842511100393947136>**
<@695973287657734148>
> **<a:emoji_5:842511173101813760>Prefix Bot<a:emoji_5:842511173101813760>** :
     /
`)

    //send the Message
    message.channel.send(embed)
    message.react("<a:emoji_2:816354428859973643>")
  } 
//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("#F0EAD6")
      .setTitle(`:x: Please wait \`${timeLeft.toFixed(1)} seconds\` before reusing the \`${prefix}${command.name}\`!`)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("#F0EAD6")
   .setTitle(`:x: There was an error executing that command.`)).catch(console.error);
 }


});
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}
