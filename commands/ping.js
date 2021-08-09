module.exports= {
  name: "ping",
  description: "prompts response from bot",
  execute(message){

    return message.channel.send("pong!");

  }

};
