require('dotenv').config();
const { Client, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js');

const v1 = new Client({ intents: [GatewayIntentBits.Guilds] });
v1.commands = new Collection();

const v2 = [
    new SlashCommandBuilder().setName('coinflip').setDescription('Bet on heads or tails').addStringOption(v3 => v3.setName('choice').setDescription('Heads or Tails').setRequired(true).addChoices({ name: 'Heads', value: 'heads' }, { name: 'Tails', value: 'tails' })),
    new SlashCommandBuilder().setName('roll').setDescription('Roll a dice and guess the number').addIntegerOption(v3 => v3.setName('sides').setDescription('Number of sides on the dice').setRequired(true)).addIntegerOption(v3 => v3.setName('guess').setDescription('Your guessed number').setRequired(true)),
    new SlashCommandBuilder().setName('higherlower').setDescription('Guess if the next number is higher or lower').addStringOption(v3 => v3.setName('guess').setDescription('Higher or Lower').setRequired(true).addChoices({ name: 'Higher', value: 'higher' }, { name: 'Lower', value: 'lower' })),
    new SlashCommandBuilder().setName('rps').setDescription('Play Rock, Paper, Scissors').addStringOption(v3 => v3.setName('choice').setDescription('Rock, Paper, or Scissors').setRequired(true).addChoices({ name: 'Rock', value: 'rock' }, { name: 'Paper', value: 'paper' }, { name: 'Scissors', value: 'scissors' })),
    new SlashCommandBuilder().setName('evenodd').setDescription('Guess if a number is even or odd').addStringOption(v3 => v3.setName('guess').setDescription('Even or Odd').setRequired(true).addChoices({ name: 'Even', value: 'even' }, { name: 'Odd', value: 'odd' })),
    new SlashCommandBuilder().setName('carddraw').setDescription('Pick a number from 1-13 and see if you match').addIntegerOption(v3 => v3.setName('number').setDescription('Pick a number from 1-13').setRequired(true))
];

v1.once('ready', async () => {
    console.log(`Logged in as ${v1.user.tag}!`);
    await v1.application.commands.set(v2.map(v3 => v3.toJSON()));
});

v1.on('interactionCreate', async v3 => {
    if (!v3.isCommand()) return;
    if (v3.commandName === 'coinflip') {
        let v4 = v3.options.getString('choice'), v5 = Math.random() < 0.5 ? 'heads' : 'tails';
        v3.reply(`The coin landed on **${v5}**! You ${v4 === v5 ? 'win' : 'lose'}!`);
    }
    if (v3.commandName === 'roll') {
        let v4 = v3.options.getInteger('sides'), v5 = v3.options.getInteger('guess'), v6 = Math.floor(Math.random() * v4) + 1;
        v3.reply(`You rolled a **${v6}**! You ${v6 === v5 ? 'win' : 'lose'}!`);
    }
    if (v3.commandName === 'higherlower') {
        let v4 = v3.options.getString('guess'), v5 = Math.floor(Math.random() * 10) + 1, v6 = Math.floor(Math.random() * 10) + 1;
        v3.reply(`First number: **${v5}**, second number: **${v6}**. You ${(v4 === 'higher' && v6 > v5) || (v4 === 'lower' && v6 < v5) ? 'win' : 'lose'}!`);
    }
    if (v3.commandName === 'rps') {
        let v4 = v3.options.getString('choice'), v5 = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        v3.reply(`You chose **${v4}**, bot chose **${v5}**. ${v4 === v5 ? "It's a tie!" : (v4 === 'rock' && v5 === 'scissors') || (v4 === 'paper' && v5 === 'rock') || (v4 === 'scissors' && v5 === 'paper') ? 'You win!' : 'You lose!'}!`);
    }
    if (v3.commandName === 'evenodd') {
        let v4 = v3.options.getString('guess'), v5 = Math.floor(Math.random() * 100) + 1;
        v3.reply(`The number is **${v5}**. You ${(v4 === 'even' && v5 % 2 === 0) || (v4 === 'odd' && v5 % 2 !== 0) ? 'win' : 'lose'}!`);
    }
    if (v3.commandName === 'carddraw') {
        let v4 = v3.options.getInteger('number'), v5 = Math.floor(Math.random() * 13) + 1;
        v3.reply(`You picked **${v4}**, the drawn card was **${v5}**. You ${v4 === v5 ? 'win' : 'lose'}!`);
    }
});

v1.login(process.env.DISCORD_TOKEN);
  
