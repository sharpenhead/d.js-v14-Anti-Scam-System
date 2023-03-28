const { PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const antiscamSchema = require("../../Models/antiscam");

module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        if (!message.guild) return;
        if (message.author.bot) return;

        const guild = message.guild;

        let requireDB = await antiscamSchema.findOne({ _id: guild.id });
        if (!requireDB) return;

        if (requireDB.logs === false) return;

        if (requireDB.logs === true) {

            const scamLinks = require('../../scamLinks.json');
            const scamlinks = scamLinks.known_links;

            const embed = new EmbedBuilder()
                .setColor("0x2f3136")
                .setDescription(`:warning: | <@${message.author.id}> has sent a harmful link.`)

            // https://github.com/nateethegreat/Discord-Scam-Links

            for (let i in scamlinks) {
                if (message.content.toLowerCase().includes(scamlinks[i].toLowerCase())) {

                    await message.delete();

                    // Put log channel ID in here.
                    const logChannel = client.channels.cache.get("LOG-CHANNEL-ID");

                    // For sending message into original channel.
                    message.channel.send({ embeds: [embed] });

                    // For sending message to log channel.
                    logChannel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("0x2f3136")
                                .setDescription(`<@${message.author.id}> has sent a harmful link.\n\`\`\`${message.content}\`\`\``)
                        ]
                    });
                }
            }
        }
    },
};
