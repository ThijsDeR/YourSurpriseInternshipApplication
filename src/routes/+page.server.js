
export const load = async () => {
    const getData = async () => {
        const res = await fetch('https://api.anwb.nl/v2/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true');
        const data = await res.json();
        return data
    }

    return {
        traffic: getData(),
    }
}