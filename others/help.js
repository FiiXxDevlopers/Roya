const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Roya Bot ✨**`)
    .setDescription(`
<a:Mode:811659503837249546>**|** **User Commands**
> \`invite\` - \`support\` - \`about\`
> \`ping\` - \`prefix\` - \`uptime\`
> \`tinvites\` - \`sug\` - \`roleuser\`
> \`report\`


<a:emoji_8:806266140699525120>**|** **Music Commands**
> \`play\` . \`skip\` . \`skipto\`
> \`stop\` . \`volume\` . \`nowplaying\`
> \`shuffle\` . \`search\` . \`resume\`
> \`remove\` . \`queue\` . \`loop\`
> \`lyrics\` . \`radio\`

<a:emoji_106:806516295221772299>**|** **Moderation Commands**
> \`ban\` . \`unban\` . \`setnick\`
> \`roleadd\` . \`roleremove\` . \`vkick\`
> \`setprefix\` . \`clear\` . \`close\`
> \`open\` . \`senddm\` . \`createchannel\`
> \`deletechannel\`

<a:0E9D31D2C3B4402EA3DE50734F2357DD:820936976051863582>**|** **Gif Commands**
> \`boy\` . \`girl\` . \`couple\`
> \`sad\` . \`cartoon\` . \`anime\`
> \`neon\

<a:Mode:811659464431370281>**|** **Game Commands**
> \`kiss\` . \`slap\` . \`hug\`

<a:emoji_49:869466093952045087> <a:emoji_48:869466069721575434>**|** **Links**
[SUPPORT](https://discord.gg/3VvvreDEwH)

[INVITE](https://discord.com/api/oauth2/authorize?client_id=868927255219417129&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
