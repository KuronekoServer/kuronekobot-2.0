const Discord = require('discord.js')

module.exports = async(interaction, client) => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === "help_menu") {

        let msg = await interaction.channel.messages.fetch(interaction.message.id)

        if (interaction.values[0] === "settings") {
            await interaction.deferUpdate()

            const settingsEmbed = new Discord.MessageEmbed()
        .setTitle("Config Commands")
        .setDescription(
          "`autorole`, `antilink`, `joinchannel`, `joinmessage`, `leavechannel`, `leavemessage` `prefix`"
        )
        .setColor("RANDOM");

      await msg.edit({ embeds: [settingsEmbed] });

        } else if (interaction.values[0] === "fun") {
            await interaction.deferUpdate()

            const funEmbed = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .setDescription(
          "`8ball`, `ascii`, `clap`, `clyde`, `cowsay`, `dab`, `emojify`, `fliptext`, `greentext`, `hack`, `howgay`, `hug`, `joke`, `kill`, `orangetext`, `pokeimg`, `pp`, `respect`, `reverse`, `roast`, `slap`, `trivia`, `urban`, `vaportext`, `yomama`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [funEmbed] });

        } else if (interaction.values[0] === "image") {

            await interaction.deferUpdate()

            const imageEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Image Commands")
            .setDescription(
              "`afraid`, `alert`, `amazeme`, `biden`,`changemymind`, `clyde`, `cryingfloor`, `disastergirl`, `dockofshame`, `doge`, `drake`, `facepalm`, `feelsgood`, `illegal`, `keanu`, `trigger`, `trumptweet`, `wasted`, `wideavatar`"
            )

            await msg.edit({ embeds: [imageEmbed]})

            } else if (interaction.values[0] === "music") {
 
         await interaction.deferUpdate();
 
         const musicEmbed = new Discord.MessageEmbed()
         .setTitle(`音楽コマンド一覧`)
         .setDescription("`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n\n```スラッシュコマンド限定です！```")
         .setColor("BLUE")
 
         await msg.edit({ embeds: [musicEmbed] })

        } else if (interaction.values[0] === "info") {

            await interaction.deferUpdate()

            const infoEmbed = new Discord.MessageEmbed()
        .setTitle("ボット情報コマンド")
        .setDescription(
          "`help`,`ping`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [infoEmbed] })

        } else if (interaction.values[0] === "moderation") {
            await interaction.deferUpdate()

            const modEmbed = new Discord.MessageEmbed()
            .setTitle("Moderation Commands")
            .setDescription(
              "`kick`, `ban`, `softban`, `mute`, `unmute`, `tempmute`"
            )
            .setColor("RANDOM");

            await msg.edit({ embeds: [modEmbed] })

        } else if (interaction.values[0] === "nsfw") {
            await interaction.deferUpdate()

            if (!interaction.channel.nsfw) {
              const denyEmbed = new Discord.MessageEmbed()
              .setDescription("You can view NSFW commands only in a NSFW channel!")
              .setColor("RED")

              return msg.edit({ embeds: [denyEmbed] })
            }

              const nsfwEmbed = new Discord.MessageEmbed()
              .setTitle("NSFW Commands")
              .setDescription(
                  "`4k`, `anal`,`asian`, `ass`, `blowjob`, `boobs`, `cumsluts`, `erokemo`, `danbooru`, `kitsune`, `hentai`, `hentaiass`, `hentaithigh`, `gonewild`, `milf`, `feetgif`, `pussy`, `porngif`, `urban`, `thigh`, `lewd`"
              )
              .setColor("RANDOM");

              await msg.edit({ embeds: [nsfwEmbed] })

        } else if (interaction.values[0] === "utility") {
            await interaction.deferUpdate()

            const utilityEmbed = new Discord.MessageEmbed()
        .setTitle("便利機能コマンド")
        .setDescription(
          "`purge`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [utilityEmbed] })

      } else if (interaction.values[0] === "game") {
            await interaction.deferUpdate()

          const gameEmbed = new Discord.MessageEmbed()
        .setTitle("Game Commands")
        .setDescription(
          "`connect4`, `catchthefish`, `chaoswords`, `fasttype`, `fight`, `football`, `gunfight`, `guessthenumber`, `guessthepokemon`, `lieswatter`, `neverhaveiever`, `quickclick`, `rps`, `shuffleguess`, `snake`, `trivia`, `ttt`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [gameEmbed] })
      } else if (interaction.values[0] === "activities") {
            await interaction.deferUpdate()
            
        const activityEmbed = new Discord.MessageEmbed()
        .setTitle("アクティビティーコマンド一覧")
        .setDescription(
          "`awkword`, `betrayal`, `chess`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`"
        )
        .setColor("RANDOM")

        await msg.edit({ embeds: [activityEmbed]})
      }
    }
}
