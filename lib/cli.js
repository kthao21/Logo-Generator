const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Type in 3 letter text.',
                name: 'logo'
            },
            {
                type: 'input',
                message: 'What color text would you like? Enter the color or hexadecimal number.',
                name: 'color'
            },
            {
                type: 'list',
                message: 'Choose from the list of shapes.',
                name: 'shape',
                choices: [
                    'circle',
                    'triangle',
                    'square',
                ]
            },
            {
                type: 'input',
                message: 'What color background would you like? Enter the color or hexadecimal number.',
                name: 'background'
            }
        ])
            .then((response) => {
                console.log(response);

                const logoGenerator =
                    ``

                fs.writeFile("logo.svg", logoGenerator,
                    (err) => {
                        err ? console.error(err) : console.log('success');
                    })
            });
    }
}
module.exports = CLI;