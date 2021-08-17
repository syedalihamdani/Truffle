pragma solidity 0.8.0;

contract Helloworld{
    address public owner;
    string public message;
    constructor(string memory _message){
        message=_message;
        owner=msg.sender;
    }
    function Hello() public view returns(string memory){
        return message;
    }
    function setMessage(string memory _message) public payable returns(uint) {
        require(msg.sender!=owner);
        return msg.value;
        }
}