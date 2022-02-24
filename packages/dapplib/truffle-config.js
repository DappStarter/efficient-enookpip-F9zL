require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn protect hover kiwi suspect thumb'; 
let testAccounts = [
"0x6310e8c9ae18a5b8f7d96c1eb0734451d3f2acb1ff1cac8880e0e743563967b6",
"0xd1f062194d2eb7e646878b7b373f47e9f17c741d9da090cab1496c0c0bb55a27",
"0x2415ee3eb5a8e897b59de60c08ee8df7d21475fffb98e5ff6f84599977da5b30",
"0xe74042c699f42f4ef19096fcc06634a9ea7f54934bfa1b252cbf430fa2a3c746",
"0x0efadc312a59179bc485122276bcbb77451c47aae3d394f87d7f7130c879c453",
"0xfd8413efd2ba90d5f9216f33e76c88832498483fc890510ce7205fcc0bec9dd6",
"0x2cbf8f061770df70233d8895c7388e96c2bdb3c825d0612d305d6d255feeab49",
"0x5b9da010811f79e572f80e8b8026025a357ec96c42c4b3b49661c6f29b1111e7",
"0x474ba50543d271fe5d68a1ff2d6432fb8f84530eb56906067b93c7a60375477c",
"0xbef252fe28127a57825e541f94b57bf3dd1768dbaac46ad9bedd86f67fde6b79"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


