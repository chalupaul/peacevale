import React from 'react';
import Pluralize from 'react-pluralize';
import { Box } from '@material-ui/core';
import { Header, Footer } from './components/PageBasics';
import { useStyles } from './components/Styler';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { getTraits, getRelics, getRandom } from './data/Items';

export const Chargen = () => {
    const classes = useStyles();

    const [traits, setTraits] = React.useState();
    const [relics, setRelics] = React.useState();
    const numTraits = 3;
    const numRelics = 2;

    React.useEffect(() => {
        (async () => {
            const [fetchedTraits, fetchedRelics] = await Promise.all([getTraits(), getRelics()]);
            const randomTraits = getRandom(fetchedTraits.traits, numTraits);
            setTraits(randomTraits);
            const randomRelics = getRandom(fetchedRelics.relics, numRelics);
            setRelics(randomRelics);
        })();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Character Generator
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Quickly generate a character.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Typography variant="h6">
                        Choose <Pluralize singular={'Trait'} plural={'Traits'} count={2} /> from the following:
                    </Typography>
                    <List className={classes.CharGen}>
                        {traits && traits.map((trait) => {
                            return (
                                <ListItem>
                                    <ListItemText>
                                        <Box fontWeight="fontWeightBold">
                                            {trait.name}
                                        </Box>
                                        {trait.desc}
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Typography variant="h6">
                        Choose <Pluralize singular={'Relic'} plural={'Relics'} count={1} /> from the following:
                    </Typography>
                    <List className={classes.CharGen}>
                        {relics && relics.map((relic) => {
                            return (
                                <ListItem>
                                    <ListItemText>
                                        <Box fontWeight="fontWeightBold">
                                            {relic.name}
                                        </Box>
                                        {relic.desc}
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment >
    );
};