module.exports= {
  name: "avatar",
  description: "returns mentioned users avatar",
  execute(message){

    if (!message.mentions.users.size) {
      return message.channel.send(message.author.displayAvatarURL({ format: "png", dynamic: true }));
    } else {
      const user = message.mentions.users.first();
      return message.channel.send(user.displayAvatarURL({ format: "png", dynamic: true}));
    }

  }

};
