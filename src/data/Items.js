import YAML from 'yaml';
import itemsData from './items.yaml';
import traitsData from './traits.yaml';
import relicsData from './relics.yaml';

const getYamls = (data) => {
    return (async () => {
        const response = await fetch(data);
        const resultsRaw = await response.text();
        const results = await YAML.parse(resultsRaw);
        return results;
    })();
};

export const getItems = () => {
    return getYamls(itemsData);
};

export const getTraits = () => {
    return getYamls(traitsData);
};

export const getRelics = () => {
    return getYamls(relicsData);
};

export const sortItemsByName = (a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
};

export const toUpperCaseSentence = (words) => {
    return words.map((w) => { return w[0].toUpperCase() + w.substr(1); })
};

export const getRandom = (data, numElements) => {
    const result = [];
    for (let i = 0; i < numElements; i++) {
        const entry = data[Math.floor((Math.random() * data.length))];
        result.push(entry);
    }
    return result;
};

export const nbsp = '\u00A0';