import YAML from 'yaml';
import itemsData from './items.yaml';
import traitsData from './traits.yaml';
import relicsData from './relics.yaml';
import sundriesData from './sundries.yaml';

const getYamls = async (data) => {
    const response = await fetch(data);
    const resultsRaw = await response.text();
    const results = await YAML.parse(resultsRaw);
    return results;
};

export const getItems = async () => {
    return await getYamls(itemsData);
};

export const getTraits = async () => {
    return await getYamls(traitsData);
};

export const getRelics = async () => {
    return await getYamls(relicsData);
};

export const getSundries = async () => {
    const response = await fetch(sundriesData);
    const relicsRaw = await response.text();
    const relics = await YAML.parse(relicsRaw);
    return relics;
};

export const sortItemsByName = (a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
};

export const toUpperCaseSentence = (words) => {
    return words.map((w) => { return w[0].toUpperCase() + w.substr(1); })
};

export const nbsp = '\u00A0';