const { Client, Partials} = require("discord.js")
const ms = require("ms")
require("dotenv").config()
const { Channel, GuildMember, Message, ThreadMember, User, GuildScheduledEvent} = Partials

const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "roles", "users"] },
    rest: { timeout: ms("1m")}
})

module.exports = client

client.login(process.env.TOKEN)