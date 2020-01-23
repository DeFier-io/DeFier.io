const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const token = [ 'BAT', 'MKR', 'XCHF', 'SNX', 'WBTC', 'CDAI', 'DAI' ]

const prices = async () => {

    let coinList = await CoinGeckoClient.coins.list();

    return Promise.all(token.map(async el => {

        const { id, name } = coinList.data.find(x => x.symbol === el.toLocaleLowerCase())

        let price = await CoinGeckoClient.coins.fetchTickers(id);

        price = price.data.tickers.filter(el => el.target === 'EUR' || el.target === 'USD' || el.target === 'ETH')

        return {
            name,
            ticker: el,
            USDlast: price[0] !== undefined ? price[0].converted_last.usd : 0
        }
    }))

}

export default prices();




