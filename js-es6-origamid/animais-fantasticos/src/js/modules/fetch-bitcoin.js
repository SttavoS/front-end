export default function fetchBitcoin(url, target) {
    // https://blockchain.info/ticker

    fetch(url)
        .then(response => response.json())
        .then((bitcoin) => {
            const btcPrice = document.querySelector(target);
            btcPrice.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch(error => { console.log(Error(error)); });
}