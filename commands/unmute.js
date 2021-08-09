module.exports= {
  name: "unmute",
  description: "removes user's muted role",
  execute(message, args){

    if (!args.length) return message.channel.send("Mention a user");
    const user = message.mentions.users.first();
    if (user){
      const target = message.guild.members.cache.get(user.id);
      if (target.roles.cache.has("758491904110362675")){
        target.roles.remove("758491904110362675");
        return message.channel.send("User successfully unmuted");
      } else {
        return message.channel.send("User isn't muted");
      }
    } else {
      return message.channel.send("User couldn't be found");
    }

  }

};
