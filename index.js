require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const v1 = require('./commands');

const v2 = new Client({ intents: [GatewayIntentBits.Guilds] });
const v3 = [
    { name: 'coinflip', description: 'Bet on heads or tails', options: [{ name: 'choice', type: 3, description: 'Heads or Tails', required: true, choices: [{ name: 'Heads', value: 'heads' }, { name: 'Tails', value: 'tails' }] }], integration_types: 0, context: [0, 1, 2] },
    { name: 'roll', description: 'Roll a dice and guess the number', options: [{ name: 'sides', type: 4, description: 'Number of sides on the dice', required: true }, { name: 'guess', type: 4, description: 'Your guessed number', required: true }], integration_types: 0, context: [0, 1, 2] },
    { name: 'higherlower', description: 'Guess if the next number is higher or lower', options: [{ name: 'guess', type: 3, description: 'Higher or Lower', required: true, choices: [{ name: 'Higher', value: 'higher' }, { name: 'Lower', value: 'lower' }] }], integration_types: 0, context: [0, 1, 2] },
    { name: 'rps', description: 'Play Rock, Paper, Scissors', options: [{ name: 'choice', type: 3, description: 'Rock, Paper, or Scissors', required: true, choices: [{ name: 'Rock', value: 'rock' }, { name: 'Paper', value: 'paper' }, { name: 'Scissors', value: 'scissors' }] }], integration_types: 0, context: [0, 1, 2] },
    { name: 'evenodd', description: 'Guess if a number is even or odd', options: [{ name: 'guess', type: 3, description: 'Even or Odd', required: true, choices: [{ name: 'Even', value: 'even' }, { name: 'Odd', value: 'odd' }] }], integration_types: 0, context: [0, 1, 2] },
    { name: 'carddraw', description: 'Pick a number from 1-13 and see if you match', options: [{ name: 'number', type: 4, description: 'Pick a number from 1-13', required: true }], integration_types: 0, context: [0, 1, 2] }
];

v2.once('ready', async () => {
    console.log(`Logged in as ${v2.user.tag}!`);
    await new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN).put(Routes.applicationCommands(v2.user.id), { body: v3 });
});

v2.on('interactionCreate', async v4 => {
    if (!v4.isCommand()) return;
    if (v4.commandName === 'coinflip') await v1.v1(v4);
    if (v4.commandName === 'roll') await v1.v5(v4);
    if (v4.commandName === 'higherlower') await v1.v7(v4);
    if (v4.commandName === 'rps') await v1.v8(v4);
    if (v4.commandName === 'evenodd') await v1.v9(v4);
    if (v4.commandName === 'carddraw') await v1.v10(v4);
});

v2.login(process.env.DISCORD_TOKEN);
