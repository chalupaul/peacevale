import React from 'react';
import { sortItemsByName } from '../data/Items';
import { WeaponCard } from './components/WeaponCard';
import { useStyles } from '../components/Styler';
import { ButtonSelector } from './components/ButtonSelector';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Header, Footer } from '../components/PageBasics';


export default function WeaponShop({ items }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <ButtonSelector selected="weapons" />
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {items.weapons && items.weapons.sort(sortItemsByName).map((weapon) => (
                            <WeaponCard weapon={weapon} />
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