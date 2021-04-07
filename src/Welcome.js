import React from 'react';
import { Header, Footer } from './components/PageBasics';
import { useStyles } from './components/Styler';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import cityPic from './data/city1.png'


export const WelcomePage = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Welcome to Peacevale
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Enjoy your stay!
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container justify="center">
                        <Grid item>
                            <img src={cityPic} width="100%" height="auto" alt="Crazy weather we're having isn't it?" />
                        </Grid>
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment >
    );
};