//module.exports= {
//    name: 'when',
//    description: 'when',
//    execute(message, args, Discord){
//      const newEmbed = new Discord.MessageEmbed()
//        .setTitle('when');
//        .setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/948/851/b69.png'),
//        .setFooter('when the'),
//      message.channel.send(newEmbed),
//
//    }
//
//};

module.exports= {
  name: "when",
  description: "when",
  execute(message, args, Discord){

    const newEmbed = new Discord.MessageEmbed()
      .setTitle("when")
      .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/948/851/b69.png")
      .setFooter("when the");
    message.channel.send(newEmbed);

  }

};
