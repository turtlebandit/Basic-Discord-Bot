module.exports= {
  name: "edp",
  description: "edp",
  execute(message, args){

    if (!args.length) return message.channel.send("They");
    const user = message.mentions.users.first();
    if(user){
      const target = message.guild.members.cache.get(user.id);
      target.send("https://cdn.discordapp.com/attachments/757782996009877555/841169597209903104/EDP445.mp4");
      return message.channel.send("lol");
    } else {
      return message.channel.send("they aren't");
    }

  }

};
