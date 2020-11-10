const { Tezos, TezosToolkit } = require('@taquito/taquito');
const { InMemorySigner, importKey } = require('@taquito/signer');
const config = require('config.json');

Tezos.setProvider({ rpc: 'https://carthagenet.smartpy.io' });
const FAUCET_KEY = config;

importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(' '),
    FAUCET_KEY.secret
);

const address = 'tz1NgZXFbrP4zpjkRU4iLZUyWddXHfkLxmde';
const amount = 100;
/*
// Transfer tz
Tezos.contract.transfer({ to: address, amount: amount })
    .then(op => {
      console.log(`Waiting for ${op.hash} to be confirmed...`);
      return op.confirmation(1).then(() => op.hash);
    })
    .then(hash => console.log(`Operation injected: https://carthagenet.tzstats.com/${hash}`))
    .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));*/

  
// Use contract simple storage
Tezos.contract.at('KT1TGS9DpNRoXa3nfjcw7Yv5ssAp1XL8WU2N')
  .then(contract => {
    const str = "testingbis"
    return contract.methods.main(str).send();
  })
  .then(op => {
    console.log(`Awaiting for ${op.hash} to be confirmed...`);
    return op.confirmation(3).then(() => op.hash);
  })
  .then(hash => console.log(`Operation injected: https://carthagenet.tzstats.com/${hash}`))
  .catch(error => console.log(`Error: ${JSON.stringify(error, null, 2)}`));