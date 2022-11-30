const ganache = require("ganache-cli");
const dotenv = require("dotenv");
dotenv.config();

const server = ganache.server({
  mnemonic: process.env.MNEMONIC,
  db_path: process.env.DB_PATH,
  default_balance_ether: process.env.DEFAULT_BALANCE,
});

server.listen(process.env.PORT, (err, blockchain) => {
  console.log(`Ganache running in port: ${process.env.PORT}`);
  console.log(
    `Default Account: ${Object.keys(blockchain.personal_accounts)[0]}`
  );
});
