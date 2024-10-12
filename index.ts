#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { pastel} from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import terminalImage from "terminal-image";

let playerName: string;

const sleep = () => new Promise((r) => setTimeout(r, 2000));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        `Who wants to be a JavaScript Millionaire? \n`
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I'm a process on your computer 💻.
        If you get any question wrong I'll be ${chalk.bgRed('killed')} 🔪
        So get all the questions ${chalk.bgGreen('right')}... ✅\n\n\n`
    );
}

async function askname() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: `What's your name?`,
        default() {
            return 'Peter Griffin';
        }
    });
    playerName = answers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'JavaScript was created in 10 days then released on _____?\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17th, 1996'
        ]
    });
    return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What is the output of `typeof null` in JavaScript?\n',
        choices: [
            'object',
            'null',
            'undefined',
            'error'
        ]
    });
    return handleAnswer(answers.question_2 === 'object');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which method is used to parse a JSON string?\n',
        choices: [
            'JSON.parse()',
            'JSON.stringify()',
            'JSON.toObject()',
            'JSON.decode()'
        ]
    });
    return handleAnswer(answers.question_3 === 'JSON.parse()');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Which of the following is a primitive data type in JavaScript?\n',
        choices: [
            'Array',
            'Object',
            'Function',
            'String'
        ]
    });
    return handleAnswer(answers.question_4 === 'String');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'What does the `bind` method do in JavaScript?\n',
        choices: [
            'Creates a new function with a specific `this` context',
            'Executes a function immediately',
            'Binds an object to a variable',
            'Merges two functions'
        ]
    });
    return handleAnswer(answers.question_5 === 'Creates a new function with a specific `this` context');
}

async function handleAnswer(isCorrect: boolean) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if (isCorrect) {
        spinner.success({text: `Nice work ${playerName}. That's the correct answer.`});
    } else {
        spinner.error({text: `💀💀💀 Game over, you lose ${playerName} 👎`});
        process.exit(1);
    }
}

async function winner() {
    console.clear();
    const msg = `Congrats, ${playerName}!\n ₹ 1 , 0 0 0 , 0 0 0`;
    figlet(msg, (err, data) => {
        if (typeof data === 'undefined') {
            console.log(pastel.multiline(`Congrats, player!\n ₹ 1 , 0 0 0 , 0 0 0`))
        } else {
            console.log(pastel.multiline(data));
        }
    });
}

await welcome();
await askname();
await question1();
await question2();
await question3();
await question4();
await question5();
await winner();