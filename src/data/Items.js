import YAML from 'yaml';
import itemsData from './items.yaml';
import traitsData from './traits.yaml';
import relicsData from './relics.yaml';

export const getItems = async () => {
    const response = await fetch(itemsData);
    const itemsRaw = await response.text();
    const items = await YAML.parse(itemsRaw);
    return items;
};

export const getTraits = async () => {
    const response = await fetch(traitsData);
    const traitsRaw = await response.text();
    const traits = await YAML.parse(traitsRaw);
    return traits;
};

export const getRelics = async () => {
    const response = await fetch(relicsData);
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