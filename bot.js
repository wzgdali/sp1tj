const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591940578967683106")
setInterval(function() {
channel.send(`معاكم leo dali`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
