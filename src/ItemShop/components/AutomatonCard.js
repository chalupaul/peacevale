import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';



export const AutomatonCard = ({ automaton }) => {
    const classes = useStyles();
    return (
        <Grid item key={automaton.name} xs={12} sm={6} md={4}>
            <Card className={classes.automaton}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {automaton.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {automaton.cost} mk
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        {automaton.ability}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>);
}
