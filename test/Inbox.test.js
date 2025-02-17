const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts()
  // use one of those accounts to deploy the contract
  // use one of those accounts to make calls to the contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts)
  })
})








// This is a dummy javascript example for the mocha test 
// class Car {
//   park() {
//     return 'stopped';
//   }

//   drive() {
//     return 'vroom';
//   }
// }

// let car;
// beforeEach(() => {
//   car = new Car();
// });

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped')
//   })

//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom')
//   })
// })

