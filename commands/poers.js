module.exports= {
  name: "poers",
  description: "poers",
  execute(message, args, Discord){

    const newEmbed = new Discord.MessageEmbed()
      .setTitle("POGGERS")
      .setImage("https://i.ytimg.com/vi/inntz2JNSUw/hqdefault.jpg")
      .setFooter("POGGERS");
    message.channel.send(newEmbed);

  }

};
