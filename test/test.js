var add = require("../src/add");
    expect = require("chai").expect;
describe("Test add function", function(){
    it("1+1 = 2 check", function() {
            expect(add(1,1)).to.be.equal(2);
        });
    it("-1+1=0 check", function(){
            expect(add(-1,1)).to.be.equal(0);
        })
});

