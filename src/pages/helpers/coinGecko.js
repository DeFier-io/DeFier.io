const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const token = [ 'BAT', 'MKR', 'XCHF', 'SNX', 'WBTC', 'CDAI' ]

const prices = async () => {

    let coinList = await CoinGeckoClient.coins.list();

    return Promise.all(token.map(async el => {

        const { id, name } = coinList.data.find(x => x.symbol === el.toLocaleLowerCase())

        const result = await CoinGeckoClient.coins.fetchMarketChart(id, { vs_currency: 'eth' });

        let price = await CoinGeckoClient.coins.fetchTickers(id);

        price = price.data.tickers.filter(el => el.target === 'EUR' || el.target === 'USD' || el.target === 'ETH')

        return {
            name,
            ticker: el,
            chart: result.data.prices,
            USDlast: price[0] != undefined ? price[0].converted_last.usd : null
        }
    }))

}

export default prices();




