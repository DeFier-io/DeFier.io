const Web3 = require("web3");

const tokenABI = require("./tokenABI.json");
const factoryABI = require("./factoryABI.json");
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

let web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/d9539e62ee0c4df1a0fd7259d93c31f0"));
}

const factoryAddress = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'

const tokenAddresses = {
    BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    MKR: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    XCHF: "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
    SNX: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
}

export default Promise.all(Object.keys(tokenAddresses).map(async el => {
    const arr = await CoinGeckoClient.coins.list()
    
    const {id, name} = arr.data.find(x => x.symbol === el.toLocaleLowerCase())

    const factoryContract = await new web3.eth.Contract(factoryABI, factoryAddress)
    const exchangeAddress = await factoryContract.methods.getExchange(tokenAddresses[el]).call()
    
    const tokenContract = await new web3.eth.Contract(tokenABI, exchangeAddress)
    const inputReserve = await tokenContract.methods.getTokenToEthInputPrice(Web3.utils.toWei('1', 'ether')).call()
    
    const result = await CoinGeckoClient.coins.fetchMarketChart(id, {vs_currency: 'eth'});

    return { price: Web3.utils.fromWei(inputReserve, 'ether'), name, ticker:el, chart: result.data.prices }
}))





