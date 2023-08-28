//component is an abstract/generalized thing, we don't want one instance of a component
//used to establish interface so everything extends
//needs to have a render function
//we're using inheritance and polyorphism to define interface
//child classes need to have their own render functions
//each component needs to know how to render its own innerHTML

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
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}
class Triangle extends Shapes {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}
class Square extends Shapes {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`;
    }
}
module.exports = { Circle, Triangle, Square };