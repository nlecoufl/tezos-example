const NFT = artifacts.require("NFT");
const { MichelsonMap } = require("@taquito/taquito");

const makeTokenMetadata = (
    name,
    price,
    market,

  ) => ({
    owner:"tz1NgZXFbrP4zpjkRU4iLZUyWddXHfkLxmde",
    symbol: "TESTNFT",
    name,
    decimals: 0,
    price,
    market,
  });

const initialStorage = {
    nfts: MichelsonMap.fromLiteral({
      1:
        makeTokenMetadata(
            "Chupa",
            500000,
            true
        ),
      2:
        makeTokenMetadata(
            "Chups",
            333333,
            true
        ),
    }),
    contractOwner:"tz1NgZXFbrP4zpjkRU4iLZUyWddXHfkLxmde"
  };

module.exports = deployer => {
  deployer.deploy(NFT,initialStorage);
};
