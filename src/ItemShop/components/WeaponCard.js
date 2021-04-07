import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccordionSummary, List, ListItem, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';
import { nbsp, toUpperCaseSentence } from '../../data/Items';


export const WeaponCard = ({ weapon }) => {
    const classes = useStyles();
    return (
        <Grid item key={weapon.name} xs={12} sm={6} md={4}>
            <Card className={classes.weapon}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {weapon.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {weapon.cost} mk
                    </Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        {(weapon.keywords) ? weapon.keywords.map((kw) => {
                            const splits = kw.split('-');
                            return toUpperCaseSentence(splits).join('-');
                        }).join(', ') : nbsp}
                    </Typography>
                    <Typography align="left" paragraph={false}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={weapon.name + "_abl"}
                            >
                                <Typography className={classes.heading} paragraph={false}>Abilities</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {weapon.abilities.map((ability) => {
                                        return (
                                            <ListItem>
                                                <ListItemText >
                                                    <Grid container>
                                                        <Grid item md={3} className={classes.itemRoll}>
                                                            {`${ability.roll}:`}
                                                        </Grid>
                                                        <Grid item xs={1}></Grid>
                                                        <Grid item md={8} className={classes.itemDesc}>
                                                            {ability.detail}
                                                        </Grid>
                                                    </Grid>
                                                </ListItemText>
                                            </ListItem>);
                                    })}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
