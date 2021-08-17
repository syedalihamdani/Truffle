const Helloworld = artifacts.require("Helloworld");

contract("Helloworld",accounts=>{
    it ("Constructor should set the message correctly",async ()=>{
        let test1=await Helloworld.deployed();
        let message=await test1.message();
        assert.equal(message,"Hello world constructor")
    })
    it("accounts should be [0]",async()=>{
        let test2=await Helloworld.deployed();
        let message=await test2.owner();
        assert.equal(message,accounts[0]);
    })
    it("hello",async()=>{
        let test3=await Helloworld.deployed();
        let message1=await test3.Hello();
        assert.equal(message1,"Hello world constructor")
    })
})