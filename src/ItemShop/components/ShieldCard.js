import { List, ListItem, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';
import { toUpperCaseSentence, nbsp } from '../../data/Items';


export const ShieldCard = ({ shield }) => {
    const classes = useStyles();
    return (
        <Grid item key={shield.name} xs={12} sm={6} md={4}>
            <Card className={classes.shield}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {shield.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {shield.cost} mk
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        Defense: {shield.defense}
                    </Typography>
                    <Typography>
                        {(shield.keywords) ? shield.keywords.map((kw) => {
                            const splits = kw.split('-');
                            return toUpperCaseSentence(splits).join('-');
                        }).join(', ') : nbsp}
                    </Typography>
                    {shield.abilities &&
                        <List>
                            {shield.abilities.map((ability) => {
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
