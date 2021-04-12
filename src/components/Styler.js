import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    itemRoll: {
        alignItems: "flex-end",
        textAlign: "right",
    },
    itemDesc: {
        alignItems: "flex-start",
        textAlign: "left"
    },
    itemCost: {
        display: "flex",
        alignItems: "flex-end",
    },
    mechSuitAttribs: {
        paddingBottom: "1em",
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navLinkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
        whiteSpace: 'nowrap',
    },
    CharGen: {
        paddingBottom: theme.spacing(6),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));