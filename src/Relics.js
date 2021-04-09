import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Header, Footer } from './components/PageBasics';
import { useStyles } from './components/Styler';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getRelics, sortItemsByName } from './data/Items';


export const RelicCard = ({ relic }) => {
    const classes = useStyles();
    return (
        <Grid item key={relic.name} xs={12} sm={6} md={4}>
            <Card className={classes.relic}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {relic.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    {relic.desc}
                </CardContent>
            </Card>
        </Grid>);
}


export const Relics = () => {
    const classes = useStyles();

    const [relics, setRelics] = React.useState();

    React.useEffect(() => {
        (async () => {
            const fetched = await getRelics();
            setRelics(fetched.relics);
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
                            Relics
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Relics are powerful and rare items
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {relics && relics.sort(sortItemsByName).map((relic) => (
                            <RelicCard relic={relic} />
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