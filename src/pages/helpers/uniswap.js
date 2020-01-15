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

const token = {
    BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    MKR: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    XCHF: "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
    SNX: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
}


const prices = async () => {

    const arr = await CoinGeckoClient.coins.list()
    let exchangeRate = await CoinGeckoClient.coins.fetchTickers('ethereum', { exchange_ids: 'Kraken' });
    exchangeRate = exchangeRate.data.tickers.filter(el => el.target === 'EUR' || el.target === 'USD');

    let coinList = await CoinGeckoClient.coins.list();

    return Promise.all(Object.keys(token).map(async el => {

        const { id, name } = arr.data.find(x => x.symbol === el.toLocaleLowerCase())

        const result = await CoinGeckoClient.coins.fetchMarketChart(id, { vs_currency: 'eth' });

        const factoryContract = await new web3.eth.Contract(factoryABI, factoryAddress)
        const exchangeAddress = await factoryContract.methods.getExchange(token[el]).call()

        const tokenContract = await new web3.eth.Contract(tokenABI, exchangeAddress)
        
        const coin = coinList.data.filter(data => data.symbol === el.toLowerCase());
        let price = await CoinGeckoClient.coins.fetchTickers(coin[0].id);

        price = price.data.tickers.filter(el => el.target === 'EUR' || el.target === 'USD')

        let BID;
        let ASK;

        if (el === 'WBTC') {
            BID = await tokenContract.methods.getTokenToEthInputPrice('100000000').call()
            ASK = await tokenContract.methods.getEthToTokenOutputPrice('100000000').call()
        } else {
            BID = await tokenContract.methods.getTokenToEthInputPrice(Web3.utils.toWei('1', 'ether')).call()
            ASK = await tokenContract.methods.getEthToTokenOutputPrice(Web3.utils.toWei('1', 'ether')).call()
        }

        console.log(price)
        return {
            uniswap: {
                ETHbid: Web3.utils.fromWei(BID, 'ether'),
                ETHask: Web3.utils.fromWei(ASK, 'ether'),
                EURbid: Web3.utils.fromWei(BID, 'ether') * exchangeRate[0].last,
                EURask: Web3.utils.fromWei(ASK, 'ether') * exchangeRate[0].last,
                USDbid: Web3.utils.fromWei(BID, 'ether') * exchangeRate[1].last,
                USDask: Web3.utils.fromWei(ASK, 'ether') * exchangeRate[1].last
            },
            name,
            ticker: el,
            chart: result.data.prices,
            USDlast: price[0].converted_last.usd
        }
    }))

}

export default prices();




