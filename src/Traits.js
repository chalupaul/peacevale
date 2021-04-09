import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Header, Footer } from './components/PageBasics';
import { useStyles } from './components/Styler';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { usePoller } from './data/poller';
import { getTraits, sortItemsByName } from './data/Items';


export const TraitCard = ({ trait }) => {
    const classes = useStyles();
    return (
        <Grid item key={trait.name} xs={12} sm={6} md={4}>
            <Card className={classes.trait}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {trait.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    {trait.desc}
                </CardContent>
            </Card>
        </Grid>);
}


export const Traits = () => {
    const classes = useStyles();

    const [traits, setTraits] = React.useState();

    React.useEffect(() => {
        (async () => {
            const fetched = await getTraits();
            setTraits(fetched.traits);
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
                            Traits
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Traits make your character unique.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {traits && traits.sort(sortItemsByName).map((trait) => (
                            <TraitCard trait={trait} />
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment >
    );
};