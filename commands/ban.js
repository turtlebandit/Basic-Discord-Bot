module.exports= {
  name: "ban",
  description: "bans mentioned user",
  execute(message, args){

    if (!args.length) return message.channel.send("Mention a user");
    const user = message.mentions.users.first();
    if(user){
      const target = message.guild.members.cache.get(user.id);
      target.ban();
      return message.channel.send("User successfully banned");
    } else {
      return message.channel.send("User couldn't be banned");
    }

  }

};
