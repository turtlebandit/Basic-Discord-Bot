module.exports= {
  name: "notpoers",
  description: "notpoers",
  execute(message, args){

    if (!args.length) return message.channel.send("They");
    const user = message.mentions.users.first();
    if(user){
      const target = message.guild.members.cache.get(user.id);
      target.send("https://i.redd.it/6bjy3w1x11261.jpg");
      return message.channel.send("lol");
    } else {
      return message.channel.send("they aren't");
    }

  }

};
