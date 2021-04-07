import { List, ListItem, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';
import { nbsp, toUpperCaseSentence } from '../../data/Items';


export const MechsuitCard = ({ suit }) => {
    const classes = useStyles();
    return (
        <Grid item key={suit.name} xs={12} sm={6} md={4}>
            <Card className={classes.mechSuit}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {suit.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {suit.cost} mk
                    </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.mechSuitAttribs}>
                        <Grid item md={4}>
                            Action Points: {suit.actionPoints}
                        </Grid>
                        <Grid item md={4}>
                            Defense: {suit.defense}
                        </Grid>
                        <Grid item md={4}>
                            Armor Plates: {suit.armorPlates}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography>
                                {(suit.keywords) ? suit.keywords.map((kw) => {
                                    const splits = kw.split('-');
                                    return toUpperCaseSentence(splits).join('-');
                                }).join(', ') : nbsp}
                            </Typography>
                        </Grid>
                    </Grid>
                    {suit.abilities &&
                        <List>
                            {suit.abilities.map((ability) => {
                                return (
                                    <ListItem>
                                        <ListItemText >
                                            {ability}
                                        </ListItemText>
                                    </ListItem>);
                            })}
                        </List>
                    }
                </CardContent>
            </Card>
        </Grid>);
}
