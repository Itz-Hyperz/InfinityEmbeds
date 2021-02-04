// Source-code by Hyperz#0001

const Discord = require ('discord.js');
const config = require ('./config.json');
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.tag} by Hyperz#0001, has been started successfully.`)
}).catch(console.error);


// I just used the default discord.js command handler on the docs for this...
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong!');
	} else if (command === 'embed') {
    const embedmessage = new Discord.MessageEmbed()
    .setColor('#1e1e1e')
	  .setTitle(`New Message From ${message.author.username}`)
	  .setAuthor('Infinity Embeds', 'https://hyperz.dev/images/uploads/wvdsnsz4.png', 'https://hyperz.dev/')
	  .setDescription(`${args.join(" ")}`)
	  .setThumbnail('https://hyperz.dev/images/uploads/wvdsnsz4.png')
	  .setTimestamp()
    
		message.channel.send(embedmessage).catch(console.error);
	} else message.channel.send("That is not a command.").then(msg => msg.delete({ timeout: 10000 }));
        message.delete().catch(err => console.log(err));
});

client.login(config["main_config"].token)
