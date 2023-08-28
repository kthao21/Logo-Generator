class Shapes {
    constructor () {
        this.color = '';
    }
    //method to be called
    setColor (color) {
        //set property to argument
        this.color = color;
    }
}

class Circle extends Shapes {
    render () {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`;
    }
}
class Triangle extends Shapes {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Square extends Shapes {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>
        `;
    }
}
module.exports = { Circle, Triangle, Square };