(() => {
    const calcTotal = (prices: number[]): number => {
        let total = 0;
        prices.forEach(item => {
            total += item;
        });
        return total;
    }

    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`el total es ${rta}`);
    }

    const rta = calcTotal([1, 2, 1, 1]);
    console.log(rta);

})()
