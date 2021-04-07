import { List, ListItem, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';
import { nbsp, toUpperCaseSentence } from '../../data/Items';



export const ArmorCard = ({ armor }) => {
    const classes = useStyles();
    return (
        <Grid item key={armor.name} xs={12} sm={6} md={4}>
            <Card className={classes.armor}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {armor.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {armor.cost} mk
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        Defense: {armor.defense}
                    </Typography>
                    <Typography>
                        {(armor.keywords) ? armor.keywords.map((kw) => {
                            const splits = kw.split('-');
                            return toUpperCaseSentence(splits).join('-');
                        }).join(', ') : nbsp}
                    </Typography>
                    {armor.abilities &&
                        <List>
                            {armor.abilities.map((ability) => {
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
