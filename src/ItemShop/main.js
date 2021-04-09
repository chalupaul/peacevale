import React from 'react';
import loadable from "@loadable/component";
import { Loader } from '../components/Loading';
import { getItems } from '../data/Items';


export const ItemShop = props => {
    const [items, setItems] = React.useState(getItems());

    React.useEffect(() => {
        (async () => {
            const fetched = await getItems();
            setItems(fetched);
        })();
    }, []);

    const WeaponShop = loadable(() => import('./weapons'), {
        fallback: <Loader />,
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

    const SundriesShop = loadable(() => import('./sundries'), {
        fallback: <Loader />
    });

    switch (props.match.params.itemType) {
        case "weapons":
            return <WeaponShop items={items} />;
        case "armor":
            return <ArmorShop items={items} />;
        case "shields":
            return <ShieldShop items={items} />;
        case "mechsuits":
            return <MechSuitShop items={items} />;
        case "sundries":
            return <SundriesShop items={items} />;
        default:
            return <WeaponShop />;
    };
}