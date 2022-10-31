const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'MTAzNjQxNjcxNjAwOTM3MzcyNg.GXXl_N.A7QQX1ZUl8VFjbD8bHENbbi-egnlgAPr1lmSrc'
const hiCommand = 'hi'
const botChannel = 'discord-bot-test'

client.login(TOKEN)


client.on('message', async message => {

	// Make sure bot doesn't reply to itself
	if (message.author.bot) return; 

	// Make sure right channel
	if (message.channel.name != botChannel) return

	const lastMessage = message.content

	switch (lastMessage) {
		case hiCommand:
			message.channel.send('hey there')
			break
		default:
			message.reply('lmao')
			break
	}
});
