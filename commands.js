const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

const v1 = async v2 => {
    let v3 = v2.options.getString('choice'), v4 = Math.random() < 0.5 ? 'heads' : 'tails';
    v2.reply(`The coin landed on **${v4}**! You ${v3 === v4 ? 'win' : 'lose'}!`);
};

const v5 = async v2 => {
    let v3 = v2.options.getInteger('sides'), v4 = v2.options.getInteger('guess'), v6 = Math.floor(Math.random() * v3) + 1;
    v2.reply(`You rolled a **${v6}**! You ${v6 === v4 ? 'win' : 'lose'}!`);
};

const v7 = async v2 => {
    let v3 = Math.floor(Math.random() * 10) + 1;
    const v4 = new EmbedBuilder().setTitle('Higher or Lower?').setDescription(`First number: **${v3}**\nChoose if the next number is higher or lower.`).setColor(0x00AE86);
    const v5 = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`higher_${v3}`).setLabel('Higher').setStyle(ButtonStyle.Primary),
        new ButtonBuilder().setCustomId(`lower_${v3}`).setLabel('Lower').setStyle(ButtonStyle.Danger)
    );
    v2.reply({ embeds: [v4], components: [v5] });
};

const v7b = async v2 => {
    let v3 = v2.customId.split('_'), v4 = parseInt(v3[1]), v5 = Math.floor(Math.random() * 10) + 1, v6 = (v3[0] === 'higher' && v5 > v4) || (v3[0] === 'lower' && v5 < v4);
    const v7 = new EmbedBuilder().setTitle('Result').setDescription(`First number: **${v4}**\nSecond number: **${v5}**\nYou **${v6 ? 'win' : 'lose'}**!`).setColor(v6 ? 0x00FF00 : 0xFF0000);
    v2.update({ embeds: [v7], components: [] });
};

const v8 = async v2 => {
    let v3 = v2.options.getString('choice'), v4 = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    v2.reply(`You chose **${v3}**, bot chose **${v4}**. ${v3 === v4 ? "It's a tie!" : (v3 === 'rock' && v4 === 'scissors') || (v3 === 'paper' && v4 === 'rock') || (v3 === 'scissors' && v4 === 'paper') ? 'You win!' : 'You lose!'}!`);
};

const v9 = async v2 => {
    const v3 = new EmbedBuilder().setTitle('Even or Odd?').setDescription(`Number: **[----]**`).setColor(0x00AE86);
    const v4 = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId('even').setLabel('Even').setStyle(ButtonStyle.Primary),
        new ButtonBuilder().setCustomId('odd').setLabel('Odd').setStyle(ButtonStyle.Danger)
    );
    v2.reply({ embeds: [v3], components: [v4] });
};

const v9b = async v2 => {
    let v3 = Math.floor(Math.random() * 100) + 1, v4 = (v2.customId === 'even' && v3 % 2 === 0) || (v2.customId === 'odd' && v3 % 2 !== 0);
    const v5 = new EmbedBuilder().setTitle('Result').setDescription(`The number is **${v3}**.\nYou **${v4 ? 'win' : 'lose'}**!`).setColor(v4 ? 0x00FF00 : 0xFF0000);
    v2.update({ embeds: [v5], components: [] });
};

const v10 = async v2 => {
    let v3 = v2.options.getInteger('number'), v4 = Math.floor(Math.random() * 13) + 1;
    v2.reply(`You picked **${v3}**, the drawn card was **${v4}**. You ${v3 === v4 ? 'win' : 'lose'}!`);
};

module.exports = { v1, v5, v7, v7b, v8, v9, v9b, v10 };
