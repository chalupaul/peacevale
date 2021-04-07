import Grid from '@material-ui/core/Grid'
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './Styler';
import { config } from '../data/config';

const isSelected = (search, button) => {
    return (search === button) ? "contained" : "outlined"
}


const ButtonMaker = ({ input, fieldName }) => {
    const history = useHistory();
    return (
        <Grid item>
            <Button
                variant={isSelected(input, fieldName)}
                color="primary"
                onClick={() => history.push(`/items/${fieldName}`)}
            >
                {fieldName}
            </Button>
        </Grid>
    )
};

export const ButtonSelector = ({ selected }) => {
    const classes = useStyles();
    const buttonTypes = ["weapons", "armor", "shields", "mechsuits", "sundries"];
    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {config.shopName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {config.shopDesc}
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    {buttonTypes.map((btn) => { return <ButtonMaker input={selected} fieldName={btn} /> })}
                </Grid>
            </div>
        </Container>
    )
}