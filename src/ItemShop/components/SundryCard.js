import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../components/Styler';


export const SundryCard = ({ sundry }) => {
    const classes = useStyles();
    return (
        <Grid item key={sundry.name} xs={12} sm={6} md={4}>
            <Card className={classes.sundries}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {sundry.name}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography className={classes.itemCost}>
                                Cost: {sundry.cost} mk
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        {sundry.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>);
}
