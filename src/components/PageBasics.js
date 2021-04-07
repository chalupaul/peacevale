import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../components/Styler';
import { config } from '../data/config';
import { Copyright } from '../components/Copyright';


export const Header = () => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <AppBar position="relative">
            <Toolbar>
                <Container maxWidth="ms" className={classes.navDisplayFlex}>
                    <IconButton edge="start" aria-label="home">
                        <HomeIcon fontSize="large" style={{ color: "white " }} onClick={() => history.push(`/`)} />
                    </IconButton>
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        <ListItem
                            button
                            component="a"
                            href={config.rulesUrl}
                            className={classes.navLinkText}
                        >
                            <ListItemText primary="Rules" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => history.push("/items")}
                            className={classes.navLinkText}
                        >
                            <ListItemText primary="Item Shop" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => history.push("/traits")}
                            className={classes.navLinkText}
                        >
                            <ListItemText primary="Traits" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => history.push("/relics")}
                            className={classes.navLinkText}
                        >
                            <ListItemText primary="Relics" />
                        </ListItem>
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                {config.footerTitle}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p" paragraph={true}>
                <Box fontStyle="italic">
                    {config.footerBody}
                </Box>
            </Typography>
            <Copyright />
        </footer>
    );
}