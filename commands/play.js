const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

module.exports = {
  name: "play",
  description: "bot joins vc and plays music",
    async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send("You must be in a voice channel to execute this command");
    if(!args.length) return message.channel.send("No arguments provided");

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
    }

    const video = await videoFinder(args.join(" "));

    if (video) {
      const stream = ytdl(video.url, {filter: "audioonly"});
      connection.play(stream, {seek: 0, volume: 1});

      await message.reply(`:thumbsup: Now Playing ***${video.title}***`);
    }
    else {
      return message.channel.send("No results matched the search query");
    };
  }
};
