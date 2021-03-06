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


<a:emoji_181:860644268900220938>**|** **Music Commands**
> \`play\` . \`skip\` . \`skipto\`
> \`stop\` . \`volume\` . \`nowplaying\`
> \`shuffle\` . \`search\` . \`resume\`
> \`remove\` . \`queue\` . \`loop\`
> \`lyrics\` . \`radio\`

<a:80A9654AA7D141ADB0E058F9C3DB44EC:853287593131245608>**|** **Moderation Commands**
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

<:emoji_95:870360734440259624>**|** **Links**
[SUPPORT](https://discord.gg/3VvvreDEwH)

[INVITE](https://discord.com/api/oauth2/authorize?client_id=868927255219417129&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
