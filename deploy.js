const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const dotenv = require('dotenv');
dotenv.config();

const provider = new HDWalletProvider(
  process.env.ACCOUNT_MNENONIC,
  process.env.INFURA_URL
);

const web3 = new Web3(provider);