const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : moshaks');
client.user.setPresence({
  status: 'dnd',
  game: {
     type: 0,
     name: 'Da7oom ,',
     details: `fuck U`,
     url: 'http://twitch.tv/moshaks-Dev',
     state: `number 1`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'تعرف دحووم',
        large_image: `377480353259978752`,
        large_text: `IMrz ّζ͜͡MOSHADev` }

  }
    });
});





client.login(process.env.BOT_TOKEN);
