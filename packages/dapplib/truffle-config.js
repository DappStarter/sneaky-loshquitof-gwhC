require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name renew saddle home imitate prize fringe tattoo'; 
let testAccounts = [
"0x11165b6302966de2148bb4d13e93d70ed5b5074926c6a9a87d1eeea63573421d",
"0x2b83d0a846aadb01b37978be0193a3357ee1d94ae67b434b79f989b91f4efa14",
"0x3c4fd9070be2959c6c7c774b13ad7d2368efb1a860f9626559eacc1fcfa8057e",
"0x75fc87294c7605cf4ae649576a44ce475d2adbce75c8b03f7744c4927e2ff47d",
"0x0885e65a004cb45bbd3a69777f65eab1c98ede3be2ec108cbc092573bd041ae7",
"0x53d94c1c9227ac6d03ad80597874e416e94e3e0e86c0763d9ae093131009922f",
"0xd2c711b69d53cbb51d53e903629a1d10bcb6b6fbcf49fbaa494b7bc6c7c2ea47",
"0x4a57129d2724d3d407bad0cc10ddd2f53e778562977f2c754dab2892c547ab66",
"0xb652f079be8da2bc00e91b54f1b387057e2f1fe387ae1cffe0d28461accaf2c7",
"0xa673a31429b77584ede0078324f20d88147bedbfd46e8308051f6638535e07a0"
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


