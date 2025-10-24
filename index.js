import 'dotenv/config';
import { Client, Events, IntentsBitField } from 'discord.js';


const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.on('messageCreate', (message) => {
    if (message.content.includes("fries in the bag")){
        message.reply('https://tenor.com/view/fries-put-the-fries-in-the-bag-auec-shing-rar2024-gif-14587807542241918100');
    }
    if (message.content.includes("our house")){
        message.reply('https://cdn.discordapp.com/attachments/886856324615376959/1421852479871647896/OurHouse.gif?ex=68fc290f&is=68fad78f&hm=7832070aeb19a09ab615f354315fdcb47426b9980cf86cb31ee46a61bcb04966&');
    }
})

client.login(process.env.DISCORD_TOKEN);
