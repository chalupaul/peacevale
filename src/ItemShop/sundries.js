import React from 'react';
import { getSundries, sortItemsByName } from '../data/Items';
import { usePoller } from '../data/poller';
import { SundryCard } from './components/SundryCard';
import { useStyles } from '../components/Styler';
import { ButtonSelector } from '../components/ButtonSelector';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Header, Footer } from '../components/PageBasics';


export default function ShieldShop() {
    const classes = useStyles();

    const [sundries, setSundries] = React.useState();

    usePoller(() => {
        (async () => {
            try {
                const sundries = await getSundries();;
                setSundries(sundries);
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
                    <ButtonSelector selected="sundries" />
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {sundries && sundries.sundries.sort(sortItemsByName).map((sundry) => (
                            <SundryCard sundry={sundry} />
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