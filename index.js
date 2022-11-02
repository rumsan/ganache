const ganache = require("ganache-cli");
const {
  mnemonic,
  db_path,
  default_balance_ether,
  port,
} = require("./config.json");

const server = ganache.server({
  mnemonic,
  db_path,
  default_balance_ether,
});

server.listen(port, (err, blockchain) => {
  console.log(`Ganache running in port: ${port}`);
  console.log(
    `Default Account: ${Object.keys(blockchain.personal_accounts)[0]}`
  );
});


