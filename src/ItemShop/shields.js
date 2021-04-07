import React from 'react';
import { getItems, sortItemsByName } from '../data/Items';
import { usePoller } from '../data/poller';
import { ShieldCard } from './components/ShieldCard';
import { useStyles } from '../components/Styler';
import { ButtonSelector } from '../components/ButtonSelector';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Header, Footer } from '../components/PageBasics';


export default function ShieldShop() {
    const classes = useStyles();

    const [items, setItems] = React.useState();

    usePoller(() => {
        (async () => {
            try {
                const items = await getItems();;
                setItems(items);
            } catch (err) {
                console.log(err);
            }
        })();
    }, 30000);

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <ButtonSelector selected="shields" />
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {items && items.shields.sort(sortItemsByName).map((shield) => (
                            <ShieldCard shield={shield} />
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment >
    );
}