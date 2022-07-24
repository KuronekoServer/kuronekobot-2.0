const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "help",
  description: "ヘルプメニューを表示する",
  options: null,
  run: async (client, interaction, args) => {
    let commandInfo = await interaction.options.getString("command")

    if (commandInfo) {
      let cmd = client.commands.get(commandInfo);

      if (!cmd) {
        return interaction.reply("Couldn't find that command!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "No description available.";
        let aliases = cmd.aliases ? cmd.aliases.join(", ") : "No aliases available.";
        let botPerms = cmd.botPerms ? cmd.botPerms.join(", ") : "No permissions required.";
        let userPerms = cmd.userPerms ? cmd.userPerms.join(", ") : "No permissions required.";
        let ownerOnly = cmd.ownerOnly ? "Yes" : "No";
        let nsfwOnly = cmd.nsfwOnly ? "Yes" : "No";
        let cooldown = cmd.cooldown ? cmd.cooldown : "No cooldown.";
        let isDisabled = cmd.isDisabled ? "Yes" : "No";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help for **${cmd.name}**`)
        .addField("Name", `${cmd.name}`, true)
        .addField("Description", `${description}`, true)
        .addField("Aliases", `${aliases}`, true)
        .addField("Owner Only", `${ownerOnly}`, true)
        .addField("NSFW Only", `${nsfwOnly}`, true)
        .addField("Cooldown", `${cooldown}`, true)
        .addField("Disabled", `${isDisabled}`, true)
        .addField("Required Bot Permissions", `${botPerms}`, true)
        .addField("Required User Permissions", `${userPerms}`, true)
        .setColor("GREEN")

        return interaction.reply({ embeds: [helpEmbed], ephemeral: true });
      }
    } else {

    let helpMenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("help_menu")
      .setPlaceholder('ヘルプメニュー')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        
        {
          label: "アクティビティー",
          description: "Discordアクティビティーを利用する",
          value: "activities",
          emoji: "🎮"
        },
        {
          label: "ボット情報",
          description: "ボット情報を表示する",
          value: "info",
          emoji: "📢"
        },
        {
          label: "音楽",
          description: "サーバーのVCで音楽を再生する",
          value: "music",
          emoji: "🎵"
        },
        {
          label: "便利機能",
          description: "便利機能コマンドを表示する",
          value: "utility",
          emoji: "🔧"
        },
      ])
    )

    let helpEmbed = new MessageEmbed()
    .setTitle('黒猫ちゃんbot | ヘルプメニュー')
    .setDescription('こちらから選択してください！')
    .setColor("GREEN")

    interaction.reply({ embeds: [helpEmbed], components: [helpMenu]})
    }
  }
};
