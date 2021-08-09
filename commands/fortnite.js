module.exports= {
  name: "fortnite",
  description: "fortnite",
  execute(message, args, Discord){

    const newEmbed = new Discord.MessageEmbed()
      .setTitle("fortnite")
      .setImage("https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
      .setFooter("fortnite");
    message.channel.send(newEmbed);

  }

};
