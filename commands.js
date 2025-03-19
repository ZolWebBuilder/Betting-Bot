const v1 = async v2 => {
    let v3 = v2.options.getString('choice'), v4 = Math.random() < 0.5 ? 'heads' : 'tails';
    v2.reply(`The coin landed on **${v4}**! You ${v3 === v4 ? 'win' : 'lose'}!`);
};

const v5 = async v2 => {
    let v3 = v2.options.getInteger('sides'), v4 = v2.options.getInteger('guess'), v6 = Math.floor(Math.random() * v3) + 1;
    v2.reply(`You rolled a **${v6}**! You ${v6 === v4 ? 'win' : 'lose'}!`);
};

const v7 = async v2 => {
    let v3 = v2.options.getString('guess'), v4 = Math.floor(Math.random() * 10) + 1, v5 = Math.floor(Math.random() * 10) + 1;
    v2.reply(`First number: **${v4}**, second number: **${v5}**. You ${(v3 === 'higher' && v5 > v4) || (v3 === 'lower' && v5 < v4) ? 'win' : 'lose'}!`);
};

const v8 = async v2 => {
    let v3 = v2.options.getString('choice'), v4 = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    v2.reply(`You chose **${v3}**, bot chose **${v4}**. ${v3 === v4 ? "It's a tie!" : (v3 === 'rock' && v4 === 'scissors') || (v3 === 'paper' && v4 === 'rock') || (v3 === 'scissors' && v4 === 'paper') ? 'You win!' : 'You lose!'}!`);
};

const v9 = async v2 => {
    let v3 = v2.options.getString('guess'), v4 = Math.floor(Math.random() * 100) + 1;
    v2.reply(`The number is **${v4}**. You ${(v3 === 'even' && v4 % 2 === 0) || (v3 === 'odd' && v4 % 2 !== 0) ? 'win' : 'lose'}!`);
};

const v10 = async v2 => {
    let v3 = v2.options.getInteger('number'), v4 = Math.floor(Math.random() * 13) + 1;
    v2.reply(`You picked **${v3}**, the drawn card was **${v4}**. You ${v3 === v4 ? 'win' : 'lose'}!`);
};

module.exports = { v1, v5, v7, v8, v9, v10 };
