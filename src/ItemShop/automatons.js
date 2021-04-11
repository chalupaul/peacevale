import React from 'react';
import { sortItemsByName } from '../data/Items';
import { AutomatonCard } from './components/AutomatonCard';
import { useStyles } from '../components/Styler';
import { ButtonSelector } from './components/ButtonSelector';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Header, Footer } from '../components/PageBasics';


export default function AutomatonsShop({ items }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <ButtonSelector selected="automatons" />
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {items.automatons && items.automatons.sort(sortItemsByName).map((automaton) => (
                            <AutomatonCard automaton={automaton} />
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