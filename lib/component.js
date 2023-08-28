//component is an abstract/generalized thing, we don't want one instance of a component
//used to establish interface so everything extends
//needs to have a render function
//we're using inheritance and polyorphism to define interface
//child classes need to have their own render functions
//each component needs to know how to render its own innerHTML
class Component {
    constructor(children = []) {
        this.children = children;
    }
    render () {
        throw Error('Child class must implement render method.');
    }

    renderInnerHtml() {

    };
}

module.exports = Component;