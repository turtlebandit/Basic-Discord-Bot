const ms = require("ms");
module.exports= {
  name: "mute",
  description: "gives user muted role",
  execute(message, args){

    //758491904110362675 = Muted
    if (!args.length) return message.channel.send("Mention a user");
    const user = message.mentions.users.first();
    if (user){
      const target = message.guild.members.cache.get(user.id);
      if (!target.roles.cache.has("758491904110362675")){
        if (!args[1]){
          target.roles.add("758491904110362675");
          return message.channel.send("User successfully muted");
        }

        target.roles.add("758491904110362675");
        message.channel.send(`User has been muted for ${ms(ms(args[1]))}`);

        setTimeout(function(){
          target.roles.remove("758491904110362675");
          message.channel.send(`${target}'s mute has expired`);
        }, ms(args[1]));
      } else return message.channel.send("User already muted");

    }

  }
};
