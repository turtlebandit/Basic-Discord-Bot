module.exports = {
	name: "purge",
	description: "clears defined number of messages",
	async execute(message, args) {

		if(!args.length) return message.channel.send("Enter a number to clear");
		if(isNaN(args[0])) return message.channel.send(`${args[0]} is not a number`);
		if(args[0] < 1) return message.channel.send("Enter a number greater than 0");
		if(args[0] > 100) return message.channel.send("You can only clear 100 messages at a time");

		await message.channel.messages.fetch({ limit: args[0] }).then(messages =>{
			message.channel.bulkDelete(messages);
		});

	},

};
