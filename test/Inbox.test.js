const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');

const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // get a list of all accounts
  web3.eth.getAccounts()
    .then(fetchAccounts => {
      console.log(fetchAccounts);
    });
  // use one of those accounts to deploy the contract
  // use one of those accounts to make calls to the contract
})

describe('Inbox', () => {
  it('deploys a contract', () => { })
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

