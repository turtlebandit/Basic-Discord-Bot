module.exports= {
  name: "reactionrole",
  description: "reaction roles",
  async execute(message, args, Discord, client) {

    const channel = "874116923909107722";
    const apexDrops = message.guild.roles.cache.get("829743479034871849");
    const r6Drops = message.guild.roles.cache.get("841647770645168151");
    const rlDrops = message.guild.roles.cache.get("829685906163892255");
    const apexEmoji = message.guild.emojis.cache.get("874118298579652648");
    const r6Emoji = message.guild.emojis.cache.get("874118280602857592");
    const rlEmoji = message.guild.emojis.cache.get("874118256078770257");

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Choose which drops to be notified for")
      .setDescription("Get pinged when someone goes live on twitch with drops enabled\n\n"
        + `${apexEmoji} for Apex Legends drops\n`
        + `${r6Emoji} for R6 Siege drops\n`
        + `${rlEmoji} for Rocket League drops`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(apexEmoji);
    messageEmbed.react(r6Emoji);
    messageEmbed.react(rlEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id == apexEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(apexDrops);
        }
        else if (reaction.emoji.id == r6Emoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(r6Drops);
        }
        else if (reaction.emoji.id == rlEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(rlDrops);
        }
        else {
          return;
        }
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id == apexEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(apexDrops);
        }
        else if (reaction.emoji.id == r6Emoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(r6Drops);
        }
        else if (reaction.emoji.id == rlEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(rlDrops);
        }
        else {
          return;
        }
      }
    });

  }

};
