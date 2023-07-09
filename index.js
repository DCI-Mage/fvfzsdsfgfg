const { Client, IntentsBitField } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [IntentsBitField.Flags.Guilds]
})

client.on('ready', () => {
    console.log('PS C:\Discord-Server-Bot\bot\index.js> Logged in!')
})

client.login(process.env.TOKEN);