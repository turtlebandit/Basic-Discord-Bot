module.exports= {
  name: "apps",
  description: "returns dev app portal",
  execute(message){

    return message.member.send("https://discord.com/developers/applications/");

  }

};
