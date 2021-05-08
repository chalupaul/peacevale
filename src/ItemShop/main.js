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

    const WeaponShop = loadable(() => import(/* webpackPrefetch: true */ './weapons'), {
        fallback: <Loader />,
    });

    const ArmorShop = loadable(() => import(/* webpackPrefetch: true */ './armor'), {
        fallback: <Loader />
    });

    const ShieldShop = loadable(() => import(/* webpackPrefetch: true */ './shields'), {
        fallback: <Loader />
    });

    const MechSuitShop = loadable(() => import(/* webpackPrefetch: true */ './mechsuits'), {
        fallback: <Loader />
    });

    const AutomatonShop = loadable(() => import(/* webpackPrefetch: true */ './automatons'), {
        fallback: <Loader />
    });

    const SundriesShop = loadable(() => import(/* webpackPrefetch: true */ './sundries'), {
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
        case "automatons":
            return <AutomatonShop items={items} />;
        case "sundries":
            return <SundriesShop items={items} />;
        default:
            return <WeaponShop />;
    };
}