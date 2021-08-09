module.exports= {
  name: "kick",
  description: "kicks mentioned user",
  execute(message, args){

    if (!args.length) return message.channel.send("Mention a user");
    const user = message.mentions.users.first();
    if(user){
      const target = message.guild.members.cache.get(user.id);
      target.kick();
      return message.channel.send("User successfully kicked");
    } else {
      return message.channel.send("User couldn't be kicked");
    }

  }

};
