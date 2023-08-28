const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes');
const SVG = require('./svg');

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
            .then(({logo, color, shape, background}) => {
                let shapeType;
                switch (shape) {
                    case 'circle':
                        shapeType = new Circle();
                        break;
                    case 'triangle':
                            shapeType = new Triangle();
                            break;
                    default:
                    shapeType = new Square();
                    break;
                } 
                shapeType.setColor(background);
                    const svg = new SVG();
                    svg.setText(logo, color);
                    svg.setShape(shapeType);
                    return writeFile('logo.svg', svg.render());
                // console.log(response);

                // const logoGenerator =
                    //``

                // fs.writeFile("logo.svg", logoGenerator,
                //     (err) => {
                //         err ? console.error(err) : console.log('success');
                //     })
            });
    }
}
module.exports = CLI;