import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { Header, Footer } from './components/PageBasics';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './components/Styler';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const Rules = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Rules
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            For the game of Peacevale.
                        </Typography>
                        <Typography variant="h7" align="center" color="textSecondary" paragraph>
                            <Link href="https://docs.google.com/document/d/e/2PACX-1vQBNUujm0QSXCyZxCfl8okqkYxTS9Fa5jCqLg-gcdDE2oaHcEiZ2k8Pkc_ywzXYuZx47dsk4u0hbGsm/pub">
                                Click here for a printable link.
                            </Link>
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* Hero unit */}
                    <CardMedia className={classes.Rules} component="iframe" src="https://docs.google.com/document/d/e/2PACX-1vQBNUujm0QSXCyZxCfl8okqkYxTS9Fa5jCqLg-gcdDE2oaHcEiZ2k8Pkc_ywzXYuZx47dsk4u0hbGsm/pub?embedded=true" />
                </Container>
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment >
    );
};

