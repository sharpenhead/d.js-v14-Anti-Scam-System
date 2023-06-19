const {
    Client,
    EmbedBuilder,
} = require("discord.js");
const antiscamSchema = require("../../Models/antiscam");
const antiscamLogSchema = require("../../Models/antiscamLogChannel");

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     */
    async execute(message, client) {
        if (!message.guild) return;
        if (message.author.bot) return;

        const guild = message.guild;

        let requireDB = await antiscamSchema.findOne({ _id: guild.id });
        const logSchema = await antiscamLogSchema.findOne({ Guild: guild.id });
        if (!logSchema) return;
        if (!requireDB) return;

        if (requireDB.logs === false) return;

        if (requireDB.logs === true) {

            const scamLinks = require('../../scamLinks.json');
            const scamlinks = scamLinks.known_links;

            const embed = new EmbedBuilder()
                .setColor(warningColor)
                .setDescription(`:warning: | <@${message.author.id}> has sent a harmful link.`)

            // https://github.com/nateethegreat/Discord-Scam-Links

            const content = message.content.toLowerCase();
            const words = content.split(' ');

            for (const word of words) {
                if (scamlinks.includes(word)) {
                    await message.delete();

                    // Put log channel ID in here.
                    const logChannel = client.channels.cache.get(logSchema.logChannel);

                    // For sending message into original channel.
                    message.channel.send({ embeds: [embed] });

                    if (!logChannel) return;
                    else {
                        // For sending message to log channel.
                        logChannel.send({
                            embeds: [
                                new EmbedBuilder()
                                    .setColor(mainColor)
                                    .setDescription(`<@${message.author.id}> has sent a harmful link.\n\`\`\`${message.content}\`\`\``)
                                    .setFooter({ text: `User ID: ${message.author.id}` })
                                    .setTimestamp()
                            ],
                        });
                    }
                }
            }
        };
    }
}
