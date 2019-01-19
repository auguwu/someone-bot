const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
    console.log('Now I am ready for some good, good, @SoMeOnE');
    client.user.setActivity('@?someone for some good, good, SOMEONE')
})

client.on('message', msg => {
    if (msg.content.toLowerCase() == '@?someone') {
        try {
            const can_manage_chans = msg.channel.permissionsFor(msg.member).has("MANAGE_MESSAGES", false);
            if(can_manage_chans) {
                const someone = msg.guild.members.random();
                msg.channel.send(`<@${someone.id}>`)
            } else {
                msg.reply('You need the manage channel permissions for this, wack')
            }
        } catch {
            msg.reply('oof, there was an error')
        }
    }
})

client.login( config.token )