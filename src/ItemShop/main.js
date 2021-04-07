import React from 'react';
import loadable from "@loadable/component";
import { Loader } from '../components/Loading';


const WeaponShop = loadable(() => import('./weapons'), {
    fallback: <Loader />
});

const ArmorShop = loadable(() => import('./armor'), {
    fallback: <Loader />
});

const ShieldShop = loadable(() => import('./shields'), {
    fallback: <Loader />
});

const MechSuitShop = loadable(() => import('./mechsuits'), {
    fallback: <Loader />
});


export const ItemShop = (props) => {
    switch (props.match.params.itemType) {
        case "weapons":
            return <WeaponShop />;
        case "armor":
            return <ArmorShop />;
        case "shields":
            return <ShieldShop />;
        case "mechsuits":
            return <MechSuitShop />;
        default:
            return <WeaponShop />;
    };
}