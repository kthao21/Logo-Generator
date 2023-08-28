const Component = require('../lib/component.js');

describe("Component", () => {
    describe("render", () => {
        it("should throw an error when called", () => {
            //arrange
            const comp = new Component();
            const err = "Child class must implement render() method."
            
            //assert
            expect(comp.render).toThrow(err);
        })
    })
});