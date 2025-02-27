import './App.css';
import web3 from './web3';

function App() {
  web3.eth.getAccounts()
    .then(console.log)
  return (
    <h1>Lottery App</h1>
  );
}

export default App;
