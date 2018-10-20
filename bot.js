
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`DàHooM.`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Crazy Bot Is Online')
  console.log('---------------')
});




    const devs = ['487727064192122880' , '' , '' , ''];
    const control = "//";
    client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!devs.includes(message.author.id)) return;

      if (message.content.startsWith(control + 'ply')) {
        client.user.setGame(argresult);
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'wt')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'ls')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
          message.channel.sendMessage(`**✅   ${argresult}**`)
      }
      });



client.login(process.env.BOT_TOKEN);
