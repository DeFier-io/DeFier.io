const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const token = [ 'BAT', 'MKR', 'XCHF', 'SNX', 'WBTC', 'CDAI', 'DAI' ]

const prices = async () => {

    const coinList = await CoinGeckoClient.coins.list();

    return Promise.all(token.map(async ticker => {

        const { id, name } = coinList.data.find(x => x.symbol === ticker.toLocaleLowerCase())

        let price = await CoinGeckoClient.coins.fetchTickers(id);

        price = price.data.tickers.filter(el => el.target === 'USD' || el.target === 'ETH')

        return {
            name,
            ticker,
            USDlast: price !== undefined ? price[0].converted_last.usd : 0
        }
    }))

}

export default prices();




