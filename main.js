// Source-code by Hyperz#0001

const Discord = require ('discord.js');
const config = require ('./config.json');
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.tag} by Hyperz#0001, has been started successfully.`)
}).catch(console.error);

while(1==1) {
console.log("xaxaxaxaxaxaxa");
}

// Gonna convert BasicBot's command handler into this project.

client.login(config["main_config"].token)
