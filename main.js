const Discord = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const config = require("./config.json");

const prefix = config.prefix;

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("tb is Online!");
});

// Add role on join
client.on("guildMemberAdd", guildMember =>{
  const welcomeRole = guildMember.guild.roles.cache.get("711388668236922911");
  guildMember.roles.add(welcomeRole);
});

// Command handler
client.on("message", message =>{
  if (!message.content.startsWith(prefix)) {
    return;
  }
  else if (message.author.bot) {
    return console.log("Bot cannot initiate commands");
  }
  else if (!message.guild) {
    return;
  }

  // 711351370430677012 = Admin
  // 759111321379274773 = Owner
  // 711357223539834930 = *

  // const args = message.content.slice(prefix.length).split(/ +/);
  // const args = message.content.slice(prefix.length).trim().split(' ');

  // Slices prefix from command
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  // Filters commands
  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
  else if (command === "apps") {
    client.commands.get("apps").execute(message, args);
  }
  else if (command === "say") {
    message.channel.send(args.join(" "));
  }
  else if (command === "kick") {
    if (!message.member.hasPermission(["KICK_MEMBERS"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("kick").execute(message, args);
    }
  }
  else if (command === "ban") {
    if (!message.member.hasPermission(["BAN_MEMBERS"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("ban").execute(message, args);
    }
  }
  else if (command === "av" || command === "avatar") {
    client.commands.get("avatar").execute(message, args);
  }
  else if (command === "fortnite") {
    client.commands.get("fortnite").execute(message, args, Discord);
  }
  else if (command === "purge") {
    if (!message.member.hasPermission(["MANAGE_MESSAGES"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("purge").execute(message, args);
    }
  }
  else if (command === "mute") {
    if (!message.member.hasPermission(["MUTE_MEMBERS"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("mute").execute(message, args);
    }
  }
  else if (command === "unmute") {
    if (!message.member.hasPermission(["MUTE_MEMBERS"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("unmute").execute(message, args);
    }
  }
  else if (command === "poers") {
    client.commands.get("poers").execute(message, args, Discord);
  }
  else if (command === "when") {
    client.commands.get("when").execute(message, args, Discord);
  }
  else if (command === "notpoers") {
    client.commands.get("notpoers").execute(message, args, Discord);
  }
  else if (command === "edp") {
    client.commands.get("edp").execute(message, args, Discord);
  }
  else if (command === "reactionrole") {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) {
      return message.channel.send("Insufficient Permissions");
    }
    else {
      client.commands.get("reactionrole").execute(message, args, Discord, client);
    }
  }
  else if (command === "play" || command === "p") {
    client.commands.get("play").execute(message, args);
  }
  else if (command === "die" || command === "leave") {
    client.commands.get("die").execute(message, args);
  }
});
// Login to bot
client.login(config.token);
